
import React, { useState } from 'react';
import { FileDown, CheckCircle2, ShieldCheck, ClipboardList, Users } from 'lucide-react';
import ConstellationBg from '../components/ConstellationBg';

const SchoolKit: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <header className="relative py-20 bg-navy text-white overflow-hidden">
        <ConstellationBg />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 italic uppercase tracking-tight">School Implementation Kit</h1>
          <p className="text-xl text-teal/80 font-medium italic max-w-2xl leading-relaxed">
            Everything your board requires to evaluate and approve a GCMWC-aligned student support framework.
          </p>
        </div>
      </header>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Kit Contents */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-8 uppercase tracking-widest italic border-b border-navy/10 pb-4">Inside the Kit</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: 'Administrator FAQ', icon: ShieldCheck, text: 'Answers for board concerns regarding liability and scope.' },
                  { title: 'Sample Syllabus', icon: ClipboardList, text: 'A detailed map of the 15-week student wellness module.' },
                  { title: 'Educator Pathway', icon: Users, text: 'The steps to qualify your faculty for the MWC-T designation.' },
                  { title: 'Case Study', icon: CheckCircle2, text: 'Measured outcomes from an active GCMWC pilot school.' }
                ].map((item, i) => (
                  <div key={i} className="bg-beige/20 p-6 border-l-2 border-navy">
                    <item.icon className="h-6 w-6 text-teal mb-3" />
                    <h5 className="font-bold text-navy uppercase tracking-widest text-xs mb-2">{item.title}</h5>
                    <p className="text-[11px] text-navy/60 italic leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-navy/50 italic leading-relaxed">
              This kit is designed for decision-makers in public and private schools, colleges, and university administrators. 
              It provides high-trust documentation for institutional rollout.
            </p>
          </div>

          {/* Gated Form */}
          <div className="bg-white border border-beige p-8 md:p-12 shadow-sm rounded-sm">
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle2 className="h-16 w-16 text-teal mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-navy uppercase tracking-widest italic mb-6">Access Granted</h3>
                <a 
                  href="/downloads/gcmwc-school-kit.pdf" 
                  className="inline-flex items-center px-10 py-4 bg-navy text-white font-bold uppercase tracking-widest hover:bg-teal transition-all shadow-md"
                  download
                >
                  Download School Kit <FileDown className="ml-3 h-5 w-5" />
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-navy uppercase tracking-widest mb-6 italic">Request Official Kit</h3>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Full Name</label>
                    <input required type="text" className="w-full px-4 py-3 bg-beige/10 border border-beige focus:outline-none focus:border-navy text-sm italic" placeholder="Your Name" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Official Email</label>
                    <input required type="email" className="w-full px-4 py-3 bg-beige/10 border border-beige focus:outline-none focus:border-navy text-sm italic" placeholder="admin@school.edu" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Institution Name</label>
                    <input required type="text" className="w-full px-4 py-3 bg-beige/10 border border-beige focus:outline-none focus:border-navy text-sm italic" placeholder="School Name" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Administrative Role</label>
                    <input required type="text" className="w-full px-4 py-3 bg-beige/10 border border-beige focus:outline-none focus:border-navy text-sm italic" placeholder="Principal, Superintendent, etc." />
                  </div>
                </div>
                <button type="submit" className="w-full py-4 bg-navy text-white font-bold uppercase tracking-widest hover:bg-teal transition-all shadow-md mt-4">
                  Request Download
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolKit;
