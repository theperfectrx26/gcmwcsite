
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, BookOpen, Users, ClipboardCheck, ArrowRight, ChevronDown, ChevronUp, GraduationCap, Map, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Schools: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [openWeek, setOpenWeek] = useState<number | null>(null);

  const steps = [
    { title: 'Discovery Call', desc: 'Identify institutional goals and regulatory requirements for rollout.' },
    { title: 'Pilot Setup', desc: 'Select staff sponsors and define baseline student wellness metrics.' },
    { title: 'Staff Training', desc: 'Accelerated MWC-T pathway for selected school faculty and staff.' },
    { title: 'Program Delivery', desc: '15-week student support module implementation within existing schedules.' },
    { title: 'Audit + Renewal', desc: 'Final evaluation of standards compliance and certification of staff.' }
  ];

  const schedule = [
    { week: '1-3', title: 'Foundations of Non-Clinical Support', desc: 'Establishing boundaries, introduction to mental wellness frameworks, and building safe rapport with students.' },
    { week: '4-6', title: 'Emotional Regulation & Self-Awareness', desc: 'Practical tools for stress management and developing student insight through inquiry-based coaching.' },
    { week: '7-9', title: 'Resilience & Goal Planning', desc: 'Setting student behavioral objectives and establishing structured accountability loops for academic success.' },
    { week: '10-12', title: 'Applied Practice & Group Dynamics', desc: 'Peer coaching under supervision and managing classroom-based wellness sessions with diverse cohorts.' },
    { week: '13-15', title: 'Final Assessments & Capstone', desc: 'Verification of skill acquisition and preparation for the MWC-T evaluation process.' }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Admin Hero */}
      <section className="relative py-24 bg-navy text-white overflow-hidden constellation-motif">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 italic tracking-tight uppercase">Turnkey Student Support</h1>
            <p className="text-xl text-teal/80 mb-8 font-medium italic leading-relaxed">
              Equip your staff to deliver validated student wellness support within a safe, non-clinical framework. 
              GCMWC provides the standards administrators require for risk reduction and measurable outcomes.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/schools/university" className="px-10 py-5 bg-teal text-navy font-bold uppercase tracking-widest hover:bg-white transition-all shadow-xl">
                University Hub
              </Link>
              <Link to="/schools/kit" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-navy transition-all">
                Download School Kit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Deliverables */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-navy/30 mb-4">What Schools Get</h2>
          <p className="text-navy font-bold text-3xl italic uppercase tracking-widest">A Premium Institutional Standard</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          {[
            { title: 'Standards-Aligned Curriculum', icon: BookOpen, desc: '60-hour core curriculum mapped to developmental milestones and academic schedules.' },
            { title: 'Staff Pathway', icon: Users, desc: 'Professional development credits and MWC-T credentials for faculty and support staff.' },
            { title: 'Student Support Framework', icon: ShieldCheck, desc: 'Non-clinical boundary management for student wellness initiatives and peer groups.' },
            { title: 'Accountability & Documentation', icon: ClipboardCheck, desc: 'Standardized coaching logs and accountability documentation for institutional compliance.' }
          ].map((item, i) => (
            <div key={i} className="bg-beige/20 p-10 border-t-8 border-navy hover:shadow-2xl transition-all h-full">
              <item.icon className="h-10 w-10 text-teal mb-6" />
              <h4 className="text-navy font-bold text-lg mb-4 uppercase tracking-wide leading-tight">{item.title}</h4>
              <p className="text-navy/60 text-sm leading-relaxed italic">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-24 bg-beige constellation-motif border-y border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy text-center mb-16 italic uppercase tracking-widest">Implementation Timeline</h2>
          <div className="relative">
            <div className="absolute top-[22px] left-0 w-full h-1 bg-navy/5 hidden lg:block"></div>
            <div className="grid lg:grid-cols-5 gap-10 relative z-10">
              {steps.map((step, i) => (
                <div 
                  key={i} 
                  className={`cursor-pointer transition-all duration-300 ${activeStep === i ? 'scale-105' : 'opacity-50 hover:opacity-100'}`}
                  onClick={() => setActiveStep(i)}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-sm font-bold transition-all shadow-md ${
                    activeStep === i ? 'bg-navy text-white ring-4 ring-teal' : 'bg-white text-navy'
                  }`}>
                    {i + 1}
                  </div>
                  <div className="text-center">
                    <h5 className="font-bold text-navy mb-3 uppercase tracking-widest text-[11px]">{step.title}</h5>
                    <p className="text-navy/70 text-[11px] leading-relaxed italic max-w-[200px] mx-auto">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Risk Management Panel */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-forest p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-12">
                <ShieldCheck className="h-12 w-12 text-amber" />
                <h2 className="text-3xl md:text-4xl font-bold italic tracking-wider uppercase">Risk Management Panel</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-16">
                <div className="space-y-4">
                  <h5 className="text-amber font-bold text-xs uppercase tracking-[0.25em]">Scope Boundaries</h5>
                  <p className="text-white/70 text-sm italic leading-relaxed">Clearly defined non-clinical activities that prohibit diagnosis or clinical treatment. Faculty are trained to maintain these boundaries strictly.</p>
                </div>
                <div className="space-y-4">
                  <h5 className="text-amber font-bold text-xs uppercase tracking-[0.25em]">Referral Triggers</h5>
                  <p className="text-white/70 text-sm italic leading-relaxed">Mandatory escalation pathways for clinical concerns. Every implementation includes validated protocols for warm handoffs to medical staff.</p>
                </div>
                <div className="space-y-4">
                  <h5 className="text-amber font-bold text-xs uppercase tracking-[0.25em]">Documentation</h5>
                  <p className="text-white/70 text-sm italic leading-relaxed">Standardized transparency protocols ensure parents and administrators remain informed. All sessions are logged per GCMWC standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Semester Schedule Accordion */}
      <section className="py-24 bg-beige/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy uppercase tracking-widest italic mb-4">A Semester in Mental Wellness</h2>
            <p className="text-navy/50 text-sm italic">High-level 15-week student module overview.</p>
          </div>
          <div className="space-y-4">
            {schedule.map((item, i) => (
              <div key={i} className="bg-white border-2 border-beige overflow-hidden">
                <button 
                  className="w-full px-10 py-7 flex items-center justify-between text-left focus:outline-none hover:bg-beige/10 transition-colors"
                  onClick={() => setOpenWeek(openWeek === i ? null : i)}
                >
                  <div className="flex items-center space-x-8">
                    <span className="text-[10px] font-bold text-navy/30 uppercase tracking-[0.2em]">Weeks {item.week}</span>
                    <span className="font-bold text-navy text-sm uppercase tracking-widest italic">{item.title}</span>
                  </div>
                  {openWeek === i ? <ChevronUp className="h-5 w-5 text-navy/40" /> : <ChevronDown className="h-5 w-5 text-navy/40" />}
                </button>
                <AnimatePresence>
                  {openWeek === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-24 pb-10 text-sm text-navy/70 leading-relaxed italic"
                    >
                      {item.desc}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educator Delivery Model */}
      <section className="py-24 bg-white border-y border-beige">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-6 bg-sage/30 mb-8">
            <GraduationCap className="h-12 w-12 text-navy" />
          </div>
          <h2 className="text-3xl font-bold text-navy mb-8 uppercase tracking-widest italic">Train-the-Trainer Delivery Model</h2>
          <p className="text-navy/70 text-xl italic leading-relaxed mb-12 max-w-3xl mx-auto">
            We empower your existing faculty. Through our educator pathway, selected staff complete MWC-T training 
            and are certified to deliver the curriculum directly to your students. This ensures long-term program sustainability.
          </p>
          <div className="inline-flex items-center text-teal font-bold text-xs uppercase tracking-widest border-b-2 border-teal pb-2 hover:text-navy hover:border-navy transition-all cursor-pointer">
            Review Educator Certification Pathway <Map className="ml-3 h-5 w-5" />
          </div>
        </div>
      </section>

      {/* Admin FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-16 uppercase tracking-widest italic">Administrative FAQ</h2>
          <div className="space-y-10">
            {[
              { q: 'What is the liability exposure?', a: 'GCMWC standards are designed to reduce liability by creating strict non-clinical boundaries. Clear referral triggers ensure complex cases are handled by medical professionals.' },
              { q: 'What staff can deliver the program?', a: 'Any faculty member or support staff with a bachelor level degree is eligible for the MWC-T educator pathway.' },
              { q: 'How long is the rollout?', a: 'Implementation typically takes one full academic semester from pilot initiation to program delivery.' },
              { q: 'Is there a cost for student certification?', a: 'Student evaluation fees are typically included in the institutional licensing agreement.' }
            ].map((faq, i) => (
              <div key={i} className="border-l-4 border-teal pl-8">
                <h5 className="font-bold text-navy uppercase tracking-widest text-sm mb-3 italic">{faq.q}</h5>
                <p className="text-navy/60 text-sm italic leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTAs */}
      <section className="py-24 bg-navy text-white text-center constellation-motif">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 uppercase tracking-widest italic">Launch a Standards-Aligned Program</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/schools/kit" className="px-12 py-5 bg-teal text-navy font-bold uppercase tracking-widest hover:bg-white transition-all shadow-xl">
              Download School Kit
            </Link>
            <Link to="/schools/pilot" className="px-12 py-5 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-teal hover:border-teal hover:text-navy transition-all">
              Apply for Pilot Program
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schools;
