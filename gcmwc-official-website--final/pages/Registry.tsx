
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, ShieldAlert, CheckCircle2, XCircle, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';
import { getRegistry } from '../lib/wordpress';
import { RegistryEntry } from '../types';

const Registry: React.FC = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<RegistryEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const data = await getRegistry();
      setResults(data);
      
      const params = new URLSearchParams(location.search);
      const q = params.get('q');
      if (q) {
        setSearchTerm(q);
        const filtered = data.filter(entry => 
          entry.name.toLowerCase().includes(q.toLowerCase()) || 
          entry.id.toLowerCase().includes(q.toLowerCase())
        );
        setResults(filtered);
      }
      setLoading(false);
    }
    loadData();
  }, [location.search]);

  const handleFilter = async (term: string) => {
    const allData = await getRegistry();
    const filtered = allData.filter(entry => 
      entry.name.toLowerCase().includes(term.toLowerCase()) || 
      entry.id.toLowerCase().includes(term.toLowerCase())
    );
    setResults(filtered);
  };

  const getStatusStyle = (status: string) => {
    switch(status) {
      case 'Active': return 'bg-teal/10 text-forest border-teal/30';
      case 'Lapsed': return 'bg-beige text-navy/40 border-navy/5';
      case 'Suspended': return 'bg-navy/10 text-navy border-navy/20';
      case 'Revoked': return 'bg-red-50 text-red-700 border-red-100';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'Active': return <CheckCircle2 className="h-4 w-4" />;
      case 'Lapsed': return <Clock className="h-4 w-4" />;
      case 'Suspended': return <ShieldAlert className="h-4 w-4" />;
      case 'Revoked': return <XCircle className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-navy mb-4 italic tracking-tight uppercase">Public Credential Registry</h1>
          <p className="text-navy/50 max-w-2xl mx-auto italic">Verify the status, standing, and history of all GCMWC credential holders.</p>
        </div>

        <div className="bg-beige/40 p-10 border border-navy/5 shadow-inner mb-16 constellation-motif">
          <div className="relative max-w-2xl mx-auto">
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                handleFilter(e.target.value);
              }}
              placeholder="Search Name or Credential ID (e.g. C-1001)"
              className="w-full pl-14 pr-6 py-5 border-2 border-beige bg-white focus:border-navy focus:outline-none shadow-sm transition-all italic text-sm font-medium"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-navy/20" />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy"></div>
          </div>
        ) : (
          <div className="space-y-8">
            {results.length > 0 ? (
              results.map((entry) => (
                <div key={entry.id} className="border-2 border-beige p-10 shadow-sm hover:shadow-lg transition-all bg-white relative overflow-hidden group">
                  <div className={`absolute left-0 top-0 bottom-0 w-2 ${
                    entry.status === 'Active' ? 'bg-teal' : entry.status === 'Revoked' ? 'bg-red-600' : entry.status === 'Suspended' ? 'bg-navy' : 'bg-beige'
                  }`}></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-2xl font-bold text-navy italic">{entry.name}</h3>
                        <span className={`flex items-center space-x-2 px-4 py-1.5 border rounded-sm text-[10px] font-bold uppercase tracking-widest ${getStatusStyle(entry.status)}`}>
                          {getStatusIcon(entry.status)}
                          <span>{entry.status}</span>
                        </span>
                      </div>
                      <p className="text-navy/50 text-xs font-bold uppercase tracking-[0.2em]">{entry.id} | {entry.type === 'MWC-C' ? 'Certified Mental Wellness Coach' : 'Trained Mental Wellness Coach'}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-12 text-[10px] font-bold uppercase tracking-[0.25em] text-navy/30">
                      <div>
                        <p className="mb-2">Issue Date</p>
                        <p className="text-navy/80 italic">{new Date(entry.issueDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="mb-2">Renewal Date</p>
                        <p className="text-navy/80 italic">{entry.renewalDate ? new Date(entry.renewalDate).toLocaleDateString() : 'N/A'}</p>
                      </div>
                    </div>
                  </div>

                  {entry.disciplinaryNote && (
                    <div className="mt-10 p-6 bg-amber/5 border border-amber/20 flex items-start space-x-5">
                      <AlertTriangle className="h-6 w-6 text-amber shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] font-bold uppercase text-amber tracking-[0.25em] mb-2">Public Disciplinary Note</p>
                        <p className="text-sm text-navy/70 italic leading-relaxed">{entry.disciplinaryNote}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-24 bg-beige/10 border-4 border-dashed border-beige">
                <ShieldAlert className="h-10 w-10 text-navy/20 mx-auto mb-6" />
                <p className="text-navy/40 font-bold uppercase tracking-[0.3em]">No matching records found in registry.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Registry;
