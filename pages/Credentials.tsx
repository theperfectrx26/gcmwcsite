
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, CheckCircle, ShieldCheck, Search, ArrowRight } from 'lucide-react';
import ConstellationBg from '../components/ConstellationBg';

const Credentials: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header className="relative py-20 bg-beige overflow-hidden">
        <ConstellationBg />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 italic uppercase tracking-tight">
            Credentials
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-navy/80 font-medium italic">
            GCMWC uses a tiered credentialing framework that distinguishes educational preparation from professional practice readiness. 
            Our standards ensure transparency for the public and accountability for the profession.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* MWC-T Card */}
          <div className="bg-white border border-beige p-10 shadow-sm rounded-sm flex flex-col h-full border-t-8 border-amber">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-amber/10 text-amber text-[10px] font-bold uppercase tracking-widest rounded-full border border-amber/20">
                Training Designation
              </span>
              <h2 className="mt-4 text-2xl font-bold text-navy italic">
                Trained Mental Wellness Coach (MWC-T)
              </h2>
            </div>
            
            <p className="text-navy/70 text-sm leading-relaxed mb-8 italic">
              MWC-T indicates foundational training in non-clinical coaching skills, ethics, and scope. 
              It is intended for individuals practicing in supervised, educational, or volunteer contexts.
            </p>

            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-amber mr-3 shrink-0" />
                <span className="text-sm font-medium text-navy/80">Complete the 60-hour Core Curriculum.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-amber mr-3 shrink-0" />
                <span className="text-sm font-medium text-navy/80">Pass module assessments with minimum 80 percent score.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-amber mr-3 shrink-0" />
                <span className="text-sm font-medium text-navy/80">Execute the Code of Ethics and Scope of Practice Agreement.</span>
              </li>
            </ul>

            <Link 
              to="/credentials/mwc-t" 
              className="inline-flex items-center px-6 py-4 bg-navy text-white font-bold uppercase tracking-widest hover:bg-teal transition-all text-center justify-center"
            >
              View MWC-T Requirements <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* MWC-C Card */}
          <div className="bg-white border border-beige p-10 shadow-sm rounded-sm flex flex-col h-full border-t-8 border-teal">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-teal/10 text-teal text-[10px] font-bold uppercase tracking-widest rounded-full border border-teal/20">
                Professional Credential
              </span>
              <h2 className="mt-4 text-2xl font-bold text-navy italic">
                Certified Mental Wellness Coach (MWC-C)
              </h2>
            </div>

            <p className="text-navy/70 text-sm leading-relaxed mb-8 italic">
              MWC-C indicates applied coaching competence under preceptorship and formal evaluation. 
              It requires verified practice hours, formal assessment, and ongoing compliance.
            </p>

            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-teal mr-3 shrink-0" />
                <span className="text-sm font-medium text-navy/80">Hold an active MWC-T designation in good standing.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-teal mr-3 shrink-0" />
                <span className="text-sm font-medium text-navy/80">Complete 40 hours of verified applied coaching experience.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-teal mr-3 shrink-0" />
                <span className="text-sm font-medium text-navy/80">Complete board-approved preceptorship and pass capstone evaluation.</span>
              </li>
            </ul>

            <Link 
              to="/credentials/mwc-c" 
              className="inline-flex items-center px-6 py-4 bg-navy text-white font-bold uppercase tracking-widest hover:bg-teal transition-all text-center justify-center"
            >
              View MWC-C Requirements <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

        </div>

        {/* Verification Callout */}
        <div className="mt-16 bg-beige p-10 md:p-12 rounded-sm border border-navy/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="flex items-center space-x-3 mb-4">
              <ShieldCheck className="h-6 w-6 text-navy" />
              <h2 className="text-xl font-bold text-navy uppercase tracking-widest">Verify a Credential</h2>
            </div>
            <p className="text-navy/70 text-sm leading-relaxed italic">
              Use the public registry to confirm credential type, status, and standing. 
              Status is displayed as Active, Lapsed, Suspended, or Revoked.
            </p>
          </div>
          <Link 
            to="/registry" 
            className="w-full md:w-auto flex items-center justify-center px-8 py-4 border-2 border-navy text-navy font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all whitespace-nowrap"
          >
            <Search className="mr-3 h-5 w-5" /> Open Registry
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Credentials;
