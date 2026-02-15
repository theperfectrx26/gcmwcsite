
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Search, MapPin, Globe, ExternalLink, AlertCircle, ToggleLeft, ToggleRight, CheckCircle } from 'lucide-react';
import { getDirectory } from '../lib/wordpress';
import { DirectoryEntry } from '../types';

const Directory: React.FC = () => {
  const [includeMWCT, setIncludeMWCT] = useState(false);
  const [locationFilter, setLocationFilter] = useState('');
  const [focusFilter, setFocusFilter] = useState('');
  const [results, setResults] = useState<DirectoryEntry[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadData() {
      const data = await getDirectory();
      setResults(data);
      setLoading(false);
    }
    loadData();
  }, []);

  const filtered = results.filter(entry => {
    const statusMatch = entry.status === 'Active';
    const typeMatch = includeMWCT ? true : entry.type === 'MWC-C';
    const locMatch = entry.location.toLowerCase().includes(locationFilter.toLowerCase());
    const focusMatch = focusFilter === '' || entry.focusAreas.some(f => f.toLowerCase().includes(focusFilter.toLowerCase()));
    return statusMatch && typeMatch && locMatch && focusMatch;
  });

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-navy text-white py-16 constellation-motif">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4 italic tracking-tight uppercase">Referral Directory</h1>
          <p className="text-teal/80 max-w-2xl font-medium italic">Find professional support from Active GCMWC Certified Coaches.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="w-full lg:w-1/4 space-y-10">
            <div className="bg-beige/40 p-8 border border-navy/5">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-navy mb-8 border-b border-navy/10 pb-3 flex items-center">
                <Filter className="h-3 w-3 mr-2" /> Filter Results
              </h3>
              
              <div className="space-y-8">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-navy/40 mb-3 italic">Include Training Status</label>
                  <button 
                    onClick={() => setIncludeMWCT(!includeMWCT)}
                    className="flex items-center space-x-3 text-navy group transition-colors"
                  >
                    {includeMWCT ? <ToggleRight className="h-7 w-7 text-teal" /> : <ToggleLeft className="h-7 w-7 text-navy/20" />}
                    <span className="text-xs font-bold uppercase tracking-wider">Show MWC-T</span>
                  </button>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-navy/40 mb-3 italic">Location</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      value={locationFilter}
                      onChange={(e) => setLocationFilter(e.target.value)}
                      placeholder="City or Region"
                      className="w-full pl-10 pr-4 py-3 text-sm border-2 border-beige bg-white focus:outline-none focus:border-navy italic"
                    />
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-navy/30" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-navy/40 mb-3 italic">Focus Area</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      value={focusFilter}
                      onChange={(e) => setFocusFilter(e.target.value)}
                      placeholder="e.g. Stress"
                      className="w-full pl-10 pr-4 py-3 text-sm border-2 border-beige bg-white focus:outline-none focus:border-navy italic"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-navy/30" />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <main className="w-full lg:w-3/4">
            {loading ? (
              <div className="flex justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy"></div>
              </div>
            ) : (
              <>
                <div className="mb-8 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.25em] text-navy/40 border-b border-beige pb-4">
                  <span>{filtered.length} Active Result{filtered.length !== 1 ? 's' : ''} Found</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  {filtered.map((entry) => (
                    <div key={entry.id} className="bg-white border-2 border-beige p-8 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full relative">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h4 className="text-xl font-bold text-navy mb-2 italic tracking-tight">{entry.name}</h4>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-0.5 rounded-sm text-[9px] font-bold uppercase tracking-widest ${
                              entry.type === 'MWC-C' ? 'bg-teal/10 text-teal-800 border border-teal/20' : 'bg-amber/10 text-amber-800 border border-amber/20'
                            }`}>
                              {entry.type}
                            </span>
                            <div className="flex items-center text-[9px] text-teal font-bold uppercase tracking-widest">
                              <CheckCircle className="h-3 w-3 mr-1" /> Active
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 mb-8 flex-grow">
                        <div className="flex items-center text-xs text-navy/60 font-semibold uppercase tracking-widest">
                          <MapPin className="h-4 w-4 mr-3 text-navy/30" /> {entry.location}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {entry.focusAreas.map(area => (
                            <span key={area} className="text-[10px] bg-beige/50 px-3 py-1 text-navy/70 font-bold uppercase tracking-widest italic">{area}</span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-beige flex justify-between items-center">
                        <Link 
                          to={`/contact?coach=${entry.id}`}
                          className="px-4 py-2 bg-navy text-white text-[10px] font-bold uppercase tracking-widest hover:bg-teal hover:text-navy transition-all"
                        >
                          Inquire
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Directory;
