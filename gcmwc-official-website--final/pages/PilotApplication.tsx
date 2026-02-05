
import React, { useState } from 'react';
import { Send, CheckCircle2, School, GraduationCap, ClipboardCheck } from 'lucide-react';
import ConstellationBg from '../components/ConstellationBg';

const PilotApplication: React.FC = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => setStep(s => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  return (
    <div className="bg-white min-h-screen">
      <header className="relative py-20 bg-beige overflow-hidden border-b border-beige">
        <ConstellationBg />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4 italic uppercase tracking-tight">Pilot Application</h1>
          <p className="text-xl text-navy/80 font-medium italic max-w-2xl">
            Register your institution for the next GCMWC implementation cohort.
          </p>
        </div>
      </header>

      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] font-bold text-navy uppercase tracking-widest italic">Phase 0{step} of 0{totalSteps}</span>
            <span className="text-[10px] font-bold text-navy/40 uppercase tracking-widest italic">
              {step === 1 ? 'Institutional Identity' : step === 2 ? 'Program Scope' : 'Review & Submit'}
            </span>
          </div>
          <div className="w-full h-1 bg-beige overflow-hidden">
            <div 
              className="h-full bg-teal transition-all duration-500" 
              style={{ width: `${(step / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Steps */}
        <div className="bg-white border border-beige p-8 md:p-12 shadow-sm rounded-sm">
          {step === 1 && (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <School className="h-6 w-6 text-navy" />
                <h3 className="text-xl font-bold text-navy uppercase tracking-widest italic">Institution Profile</h3>
              </div>
              <div className="grid gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">School Type</label>
                  <select className="w-full px-4 py-3 bg-beige/10 border border-beige focus:outline-none focus:border-navy text-sm italic">
                    <option>K-12 Public</option>
                    <option>K-12 Private</option>
                    <option>College / University</option>
                    <option>Alternative Education</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Student Enrollment</label>
                  <input type="text" className="w-full px-4 py-3 bg-beige/10 border border-beige focus:outline-none focus:border-navy text-sm italic" placeholder="e.g. 500-1000" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Location</label>
                  <input type="text" className="w-full px-4 py-3 bg-beige/10 border border-beige focus:outline-none focus:border-navy text-sm italic" placeholder="City, State/Country" />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="h-6 w-6 text-navy" />
                <h3 className="text-xl font-bold text-navy uppercase tracking-widest italic">Pilot Goals</h3>
              </div>
              <div className="grid gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Desired Implementation Date</label>
                  <input type="date" className="w-full px-4 py-3 bg-beige/10 border border-beige focus:outline-none focus:border-navy text-sm italic" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Target Student Grade Levels</label>
                  <input type="text" className="w-full px-4 py-3 bg-beige/10 border border-beige focus:outline-none focus:border-navy text-sm italic" placeholder="e.g. Grade 9-12" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Primary Objective</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-beige/10 border border-beige focus:outline-none focus:border-navy text-sm italic resize-none" placeholder="What are your school's specific wellness goals?"></textarea>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <ClipboardCheck className="h-6 w-6 text-navy" />
                <h3 className="text-xl font-bold text-navy uppercase tracking-widest italic">Administrative Review</h3>
              </div>
              <div className="p-6 bg-beige/30 border border-navy/5 text-sm italic text-navy/70 leading-relaxed">
                <p className="mb-4">
                  By submitting this application, you express your institution's intent to evaluate the GCMWC Pilot Program. 
                  This is not a binding agreement.
                </p>
                <p>
                  A Commission administrator will contact you within 5 business days to schedule a technical discovery call.
                </p>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Decision Maker Contact</label>
                <input type="text" className="w-full px-4 py-3 bg-beige/10 border border-beige focus:outline-none focus:border-navy text-sm italic" placeholder="Full Name & Title" />
              </div>
            </div>
          )}

          {/* Controls */}
          <div className="mt-12 flex justify-between">
            {step > 1 ? (
              <button onClick={prevStep} className="px-8 py-3 text-navy font-bold uppercase tracking-widest text-xs hover:text-teal transition-colors">
                Back
              </button>
            ) : (
              <div></div>
            )}
            
            {step < totalSteps ? (
              <button onClick={nextStep} className="px-10 py-4 bg-navy text-white font-bold uppercase tracking-widest hover:bg-teal transition-all shadow-md">
                Continue
              </button>
            ) : (
              <button onClick={() => setStep(4)} className="px-10 py-4 bg-navy text-white font-bold uppercase tracking-widest hover:bg-teal transition-all shadow-md flex items-center">
                Submit Application <Send className="ml-3 h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {step === 4 && (
          <div className="fixed inset-0 z-[100] bg-navy flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white p-12 text-center rounded-sm">
              <CheckCircle2 className="h-16 w-16 text-teal mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-navy uppercase tracking-widest italic mb-4">Application Sent</h3>
              <p className="text-navy/60 italic mb-10 leading-relaxed">
                Thank you for your interest in the GCMWC Pilot Program. 
                Our team will reach out to you shortly.
              </p>
              <button onClick={() => window.location.href = '#/'} className="w-full py-4 bg-navy text-white font-bold uppercase tracking-widest hover:bg-teal transition-all">
                Return to Hub
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default PilotApplication;
