
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ClipboardList, GraduationCap, ArrowRight, BookOpen, CheckCircle } from 'lucide-react';
import ConstellationBg from '../components/ConstellationBg';

const ProgramAccreditation: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header className="relative py-20 bg-beige overflow-hidden">
        <ConstellationBg />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 italic uppercase tracking-tight">
            Program Accreditation
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-navy/80 font-medium italic mb-8">
            Institutions and training providers can seek accreditation to qualify graduates for GCMWC credential pathways. 
            Accreditation is designed to strengthen quality, consistency, and public protection.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Definition Section */}
        <div className="bg-white border border-beige p-8 md:p-12 shadow-sm rounded-sm">
          <div className="flex items-center space-x-4 mb-6">
            <ShieldCheck className="h-8 w-8 text-navy" />
            <h2 className="text-2xl font-bold text-navy uppercase tracking-widest">What Accreditation Means</h2>
          </div>
          <p className="text-navy/70 leading-relaxed italic max-w-4xl">
            Accredited programs align curriculum, assessment, and delivery to GCMWC published standards. 
            Institutions must demonstrate a commitment to maintaining non-clinical scope boundaries and clear referral triggers in all student training environments.
          </p>
        </div>

        {/* Submission List Section */}
        <div className="bg-white border border-beige p-8 md:p-12 shadow-sm rounded-sm">
          <div className="flex items-center space-x-4 mb-8">
            <ClipboardList className="h-8 w-8 text-navy" />
            <h2 className="text-2xl font-bold text-navy uppercase tracking-widest">Submission Requirements</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <ul className="space-y-4">
                {[
                  "Course outline and module map aligned to the core curriculum.",
                  "Assessment plan and verified passing standards.",
                  "Faculty qualifications and performance evaluation process.",
                  "Scope of practice policy and referral workflow.",
                  "Recordkeeping and complaints escalation process."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal mr-3 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-navy/80 italic leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-beige/30 p-8 border-l-4 border-navy">
              <h4 className="text-navy font-bold text-sm uppercase tracking-widest mb-4">Academic Institutions</h4>
              <p className="text-sm text-navy/70 leading-relaxed italic">
                Programs delivered inside universities or colleges must demonstrate clear governance ownership and robust student support guardrails consistent with institutional compliance frameworks.
              </p>
            </div>
          </div>
        </div>

        {/* Next Steps CTA */}
        <div className="bg-navy text-white p-10 md:p-16 rounded-sm relative overflow-hidden">
          <ConstellationBg />
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <GraduationCap className="h-12 w-12 text-teal mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6 italic uppercase tracking-widest">Next Steps</h2>
            <p className="text-white/70 mb-10 leading-relaxed italic">
              Start with a short intake process. We will route you to the appropriate track: university course, 
              continuing education program, or professional workforce training program.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                to="/contact?type=accreditation" 
                className="px-10 py-4 bg-teal text-navy font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg"
              >
                Request Accreditation Packet
              </Link>
              <Link 
                to="/schools" 
                className="px-10 py-4 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-navy transition-all"
              >
                Schools & Colleges Hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Summary Link */}
      <section className="py-16 bg-white border-t border-beige text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-sm text-navy/40 font-bold uppercase tracking-[0.2em] mb-4">Resources</p>
          <Link to="/standards" className="inline-flex items-center text-navy font-bold uppercase tracking-widest border-b-2 border-teal pb-1 hover:text-teal transition-all">
            Review Core Curriculum Standards <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProgramAccreditation;
