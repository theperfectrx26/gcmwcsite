
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle, Clock, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import ConstellationBg from '../components/ConstellationBg';

const MWCC: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <header className="relative py-20 bg-beige overflow-hidden">
        <ConstellationBg />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-teal text-navy text-[10px] font-bold uppercase tracking-widest mb-4">
                Professional Credential
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 italic uppercase tracking-tight">
                MWC-C: Certified Mental Wellness Coach
              </h1>
              <p className="text-xl leading-relaxed text-navy/80 font-medium italic">
                The MWC-C is the professional gold standard for non-clinical mental wellness coaching. 
                It signifies verified competency in independent practice.
              </p>
            </div>
            <div className="shrink-0 pb-2">
              <Link to="/contact?type=mwc-c" className="px-8 py-4 bg-navy text-white font-bold uppercase tracking-widest hover:bg-teal transition-all shadow-md">
                Begin Application
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-8 uppercase tracking-widest italic border-b border-navy/10 pb-4">
              Advanced Requirements
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-teal/20 flex items-center justify-center mr-4 shrink-0 mt-1">
                  <CheckCircle className="h-3 w-3 text-navy" />
                </div>
                <div>
                  <h4 className="font-bold text-navy uppercase tracking-wider text-sm mb-1">Prerequisite Standing</h4>
                  <p className="text-sm text-navy/70 leading-relaxed italic">Candidate must hold an active MWC-T training designation in good standing with no pending disciplinary issues.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-teal/20 flex items-center justify-center mr-4 shrink-0 mt-1">
                  <Clock className="h-3 w-3 text-navy" />
                </div>
                <div>
                  <h4 className="font-bold text-navy uppercase tracking-wider text-sm mb-1">Applied Experience</h4>
                  <p className="text-sm text-navy/70 leading-relaxed italic">Completion of 40 hours of verified, logged applied mental wellness coaching with diverse client profiles.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-teal/20 flex items-center justify-center mr-4 shrink-0 mt-1">
                  <Users className="h-3 w-3 text-navy" />
                </div>
                <div>
                  <h4 className="font-bold text-navy uppercase tracking-wider text-sm mb-1">Preceptorship</h4>
                  <p className="text-sm text-navy/70 leading-relaxed italic">10 hours of documented performance preceptorship under a Commission-approved mentor or supervisor.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-teal/20 flex items-center justify-center mr-4 shrink-0 mt-1">
                  <Award className="h-3 w-3 text-navy" />
                </div>
                <div>
                  <h4 className="font-bold text-navy uppercase tracking-wider text-sm mb-1">Capstone Evaluation</h4>
                  <p className="text-sm text-navy/70 leading-relaxed italic">Pass a live Capstone performance evaluation demonstrated through recorded sessions or live board observation.</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <div className="bg-sage p-10 border-t-8 border-navy shadow-sm mb-10">
              <h3 className="text-lg font-bold text-navy uppercase tracking-widest mb-6 italic">Professional Status</h3>
              <div className="space-y-4 text-sm text-navy/70 leading-relaxed italic">
                <p>
                  Credential holders of the MWC-C status are authorized for independent professional practice 
                  within the published non-clinical scope of practice.
                </p>
                <p>
                  Certified coaches are eligible for listing in the GCMWC Public Referral Directory and 
                  may serve as preceptors for MWC-T candidates after 12 months of active practice.
                </p>
                <p className="text-navy font-bold">
                  Maintenance of this credential requires biennial renewal and adherence to continuing education standards.
                </p>
              </div>
            </div>

            <div className="bg-beige p-8 border border-navy/10 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-navy uppercase tracking-widest text-xs mb-1">Registry Verification</h4>
                <p className="text-xs text-navy/50 italic">Verify active status for any MWC-C holder.</p>
              </div>
              <Link to="/registry" className="p-2 bg-navy text-white hover:bg-teal transition-colors rounded">
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MWCC;
