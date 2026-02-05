
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle, BookOpen, ShieldCheck, ArrowRight } from 'lucide-react';
import ConstellationBg from '../components/ConstellationBg';

const MWCT: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <header className="relative py-20 bg-beige overflow-hidden">
        <ConstellationBg />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-amber text-navy text-[10px] font-bold uppercase tracking-widest mb-4">
                Training Designation
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 italic uppercase tracking-tight">
                MWC-T: Trained Mental Wellness Coach
              </h1>
              <p className="text-xl leading-relaxed text-navy/80 font-medium italic">
                The MWC-T designation identifies individuals who have completed formal accredited training 
                and are qualified for supervised, educational, or volunteer roles.
              </p>
            </div>
            <div className="shrink-0 pb-2">
              <Link to="/contact?type=mwc-t" className="px-8 py-4 bg-navy text-white font-bold uppercase tracking-widest hover:bg-teal transition-all shadow-md">
                Register Intent
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-8 uppercase tracking-widest italic border-b border-navy/10 pb-4">
              Core Requirements
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-amber/20 flex items-center justify-center mr-4 shrink-0 mt-1">
                  <BookOpen className="h-3 w-3 text-navy" />
                </div>
                <div>
                  <h4 className="font-bold text-navy uppercase tracking-wider text-sm mb-1">60-Hour Core Curriculum</h4>
                  <p className="text-sm text-navy/70 leading-relaxed italic">Successful completion of a GCMWC-accredited training program covering the required module map.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-amber/20 flex items-center justify-center mr-4 shrink-0 mt-1">
                  <CheckCircle className="h-3 w-3 text-navy" />
                </div>
                <div>
                  <h4 className="font-bold text-navy uppercase tracking-wider text-sm mb-1">Module Assessments</h4>
                  <p className="text-sm text-navy/70 leading-relaxed italic">Minimum score of 80 percent on all formal training evaluations and end-of-course assessments.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-amber/20 flex items-center justify-center mr-4 shrink-0 mt-1">
                  <ShieldCheck className="h-3 w-3 text-navy" />
                </div>
                <div>
                  <h4 className="font-bold text-navy uppercase tracking-wider text-sm mb-1">Ethics & Scope Agreement</h4>
                  <p className="text-sm text-navy/70 leading-relaxed italic">Documented attestation to the GCMWC Code of Ethics and non-clinical Scope of Practice guidelines.</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <div className="bg-beige/40 p-10 border-l-4 border-amber mb-10">
              <h3 className="text-lg font-bold text-navy uppercase tracking-widest mb-6 italic">Authorization & Limitations</h3>
              <div className="space-y-4 text-sm text-navy/70 leading-relaxed italic">
                <p>
                  The MWC-T is a training status designation. It indicates the holder has been prepared with the 
                  necessary foundational knowledge to assist under supervision.
                </p>
                <p>
                  MWC-T holders are authorized for practice within educational settings, supervised institutional programs, 
                  or community-based volunteer contexts.
                </p>
                <p className="text-navy font-bold">
                  Holders of the MWC-T designation are not yet authorized for independent professional practice.
                </p>
              </div>
            </div>
            
            <div className="bg-navy text-white p-8">
              <h4 className="font-bold text-sm uppercase tracking-widest mb-4">Path to MWC-C</h4>
              <p className="text-xs text-white/70 mb-6 italic leading-relaxed">
                MWC-T is the mandatory prerequisite for professional certification. 
                Trained coaches may proceed to MWC-C after completing applied practice hours.
              </p>
              <Link to="/credentials/mwc-c" className="inline-flex items-center text-teal font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">
                View MWC-C Pathway <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MWCT;
