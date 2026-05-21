
import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2, ArrowRight, CreditCard, ShoppingCart, Info } from 'lucide-react';
import SEO from '../components/SEO';
import ConstellationBg from '../components/ConstellationBg';

const Enroll: React.FC = () => {
  const courseUrls = {
    public: "https://gcmwc.learnworlds.com/home",
    checkout: "https://gcmwc.learnworlds.com/home",
    cart: "https://gcmwc.learnworlds.com/home"
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Mental Wellness Coach Certification Online | GCMWC" 
        description="Become a certified Mental Wellness Coach with GCMWC. Online training in non-clinical mental wellness coaching, ethics, faith-based integration, wellness frameworks, referral boundaries, and practical coaching skills."
        path="/enroll"
      />

      {/* Hero Section */}
      <header className="relative py-24 bg-[#F9F6F2] overflow-hidden">
        <ConstellationBg />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#6BC9C9]/10 text-[#6BC9C9] text-[10px] font-bold tracking-[0.3em] uppercase mb-6 rounded-full">
              Registration Open
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-navy mb-8 italic uppercase tracking-tighter leading-tight">
              Online Mental Wellness <br /> Coach Certification
            </h1>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg text-navy/70 italic leading-relaxed">
                GCMWC provides online Mental Wellness Coach Certification for aspiring coaches, faith-based leaders, healthcare-adjacent professionals, and helping professionals who want to support mental, emotional, physical, and spiritual wellness within a clear non-clinical scope.
              </p>
              <p className="text-sm text-navy/50 italic leading-relaxed">
                Students learn ethical coaching practice, scope boundaries, referral awareness, faith-based integration, wellness frameworks, and practical coaching skills designed for responsible mental wellness support.
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Detailed Content Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4 uppercase tracking-widest italic">What Is Mental Wellness Coaching?</h2>
                <p className="text-sm text-navy/70 leading-relaxed italic">
                  Mental Wellness Coaching is a non-clinical discipline focused on supporting individuals in their journey toward mental, emotional, and spiritual health. Unlike clinical therapy, coaching focuses on wellness frameworks, behavior change, and spiritual integration to help clients navigate life's challenges with resilience and faith.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4 uppercase tracking-widest italic">Become a Certified Mental Wellness Coach</h2>
                <p className="text-sm text-navy/70 leading-relaxed italic">
                  Joining the GCMWC community means committing to a standard of excellence. Our certification provides you with the verified credentials needed to practice responsibly, whether you are starting a private coaching business or integrating wellness support into an existing professional role.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4 uppercase tracking-widest italic">Online Training for Coaches, Leaders, and Helping Professionals</h2>
                <p className="text-sm text-navy/70 leading-relaxed italic">
                  Our curriculum is designed for accessibility. Aspiring coaches, faith leaders, and healthcare-adjacent professionals can complete their training through our structured online platform, balancing professional development with their current responsibilities.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4 uppercase tracking-widest italic">Faith-Based and Whole-Person Wellness Education</h2>
                <p className="text-sm text-navy/70 leading-relaxed italic">
                  We believe in a whole-person approach. Our training honors spiritual wellness as a core component of mental health, providing practical tools for faith-based integration within an ethical, non-clinical framework.
                </p>
              </div>
            </div>
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4 uppercase tracking-widest italic">A Clear Non-Clinical Scope of Practice</h2>
                <p className="text-sm text-navy/70 leading-relaxed italic">
                  Ethics are at the heart of GCMWC. We teach a strict non-clinical scope of practice, ensuring that coaches understand their role in the wellness ecosystem and maintain the professional boundaries necessary for public safety.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4 uppercase tracking-widest italic">Mental Wellness Coaching vs. Therapy</h2>
                <p className="text-sm text-navy/70 leading-relaxed italic">
                  Understanding the difference is critical. While therapy addresses clinical diagnosis and healing from trauma, coaching focuses on wellness optimization and goal attainment. We train our coaches to identify referral triggers and work alongside clinical professionals.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4 uppercase tracking-widest italic">GCMWC Credential Pathways</h2>
                <p className="text-sm text-navy/70 leading-relaxed italic">
                  From foundational training (MWC-T) to the professional application credential (MWC-C), we provide a clear pathway for professional growth. Each stage is validated through rigorous assessment and ethical verification.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4 uppercase tracking-widest italic">Start the Next Online Cohort</h2>
                <p className="text-sm text-navy/70 leading-relaxed italic mb-6">
                  Ready to begin? Enrollment is currently open for our upcoming cohort. Join a community of professionals dedicated to raising the standard of mental wellness support.
                </p>
                <div className="flex flex-col space-y-4">
                  <a href={courseUrls.checkout} className="inline-flex items-center justify-center px-8 py-4 bg-navy text-white text-xs font-bold uppercase tracking-widest hover:bg-teal transition-all shadow-lg">Register Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Options */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-navy/5">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Course Highlights */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6 uppercase tracking-widest italic">Program Overview</h2>
              <p className="text-navy/70 leading-relaxed italic mb-8">
                The GCMWC certification is a comprehensive training path developed to bridge the gap between 
                general life coaching and clinical mental health services. Our program ensures you are 
                equipped with the skills, ethics, and boundaries required for non-clinical professional practice.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { title: '10-Week Core Curriculum', desc: 'Self-paced modules with structured weekly deadlines.' },
                { title: 'Competency-Based Evaluation', desc: 'Rigorous assessments to ensure readiness for professional practice.' },
                { title: 'Ethical Scope of Practice', desc: 'Deep focus on boundary management and supported referral protocols.' },
                { title: 'Professional Directory Listing', desc: 'Eligibility for verified listing in the global GCMWC public directory.' }
              ].map((item, i) => (
                <div key={i} className="flex p-6 bg-navy/5 border-l-4 border-[#6BC9C9] group hover:bg-navy/10 transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-[#6BC9C9] mr-4 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-navy uppercase tracking-widest mb-1 italic">{item.title}</h4>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-navy/40 italic leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Pricing/Checkout Card */}
          <div className="sticky top-24">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-navy/10 shadow-2xl p-10 md:p-16 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6BC9C9]/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10">
                <div className="mb-10">
                  <h3 className="text-sm font-bold text-navy/40 uppercase tracking-[0.4em] mb-2">Certification Enrollment</h3>
                  <div className="flex items-baseline space-x-3">
                    <span className="text-5xl font-bold text-navy tracking-tighter">$700</span>
                    <div className="flex flex-col">
                      <span className="text-navy/30 text-xs line-through">$1,000</span>
                      <span className="text-[#6BC9C9] text-[10px] font-bold uppercase tracking-widest">Save $300</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-12">
                  <a 
                    href={courseUrls.checkout}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center space-x-3 py-5 bg-[#232F3E] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-navy transition-all shadow-xl group"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Instant Checkout</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a 
                    href={courseUrls.cart}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center space-x-3 py-5 border-2 border-navy/10 text-navy text-xs font-bold uppercase tracking-[0.2em] hover:bg-beige/10 transition-all"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </a>

                  <a 
                    href={courseUrls.public}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center space-x-3 py-5 text-teal text-[10px] font-bold uppercase tracking-[0.3em] hover:opacity-70 transition-opacity"
                  >
                    <Info className="w-3 h-3" />
                    <span>View Course Details</span>
                  </a>
                </div>

                <div className="pt-8 border-t border-navy/5">
                  <div className="flex items-center space-x-4 mb-4">
                    <ShieldCheck className="w-5 h-5 text-[#6BC9C9]" />
                    <span className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Secure Payment Processing</span>
                  </div>
                  <p className="text-[9px] text-navy/30 italic leading-relaxed uppercase tracking-widest">
                    Your enrollment will be processed via LearnWorlds. Access to the curriculum will be granted immediately upon successful payment.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 bg-[#F9F6F2] border-y border-navy/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-2xl md:text-3xl text-navy font-bold italic leading-tight uppercase tracking-tighter mb-8">
            "We provide the standard, the training, and the verification required for excellence in non-clinical support."
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-[1px] w-8 bg-navy/10"></div>
            <span className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.4em]">GCMWC Registrar</span>
            <div className="h-[1px] w-8 bg-navy/10"></div>
          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <footer className="py-16 bg-[#F9F6F2] border-t border-navy/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[10px] text-navy/50 font-bold uppercase tracking-[0.2em] mb-12">Program Compliance & Scope</p>
          <div className="max-w-4xl mx-auto">
            <p className="text-[9px] text-navy/40 italic uppercase tracking-widest leading-relaxed mb-8">
              The Global Commission for Mental Wellness Coaching provides online certification training for non-clinical Mental Wellness Coaches. GCMWC prepares students to support mental, emotional, physical, and spiritual wellness through ethical coaching, scope boundaries, referral awareness, faith-based integration, behavior change education, and practical wellness frameworks. GCMWC credentials do not authorize diagnosis, psychotherapy, medical treatment, crisis intervention, medication management, or clinical care.
            </p>
            <p className="text-[9px] text-navy/30 italic uppercase tracking-widest leading-relaxed pt-8 border-t border-navy/10">
              By enrolling, you agree to adhere to the GCMWC Code of Ethics and Scope of Practice. 
              Educational services provided are not clinical in nature and do not constitute professional medical or therapeutic care.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Enroll;
