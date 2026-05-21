
import React from 'react';
import { motion, Variants } from 'motion/react';
import { ShieldCheck, BookOpen, Award, Scale, AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react';
import ConstellationBg from '../components/ConstellationBg';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <header className="relative py-32 bg-[#F9F6F2] overflow-hidden">
        <ConstellationBg />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#6BC9C9]/10 text-[#6BC9C9] text-[10px] font-bold tracking-[0.3em] uppercase mb-8 rounded-full">
              Established Standards
            </span>
            <h1 className="text-4xl md:text-7xl font-bold text-navy mb-8 italic uppercase tracking-tighter leading-[0.9] max-w-5xl mx-auto">
              Global Commission for Mental Wellness Coaching
            </h1>
            <p className="max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed text-navy/60 font-medium italic">
              A program-based training and certification pathway for non-clinical mental wellness coaching.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#6BC9C9]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      </header>

      {/* Our Mandate */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.h2 variants={itemVariants} className="text-sm font-bold text-[#6BC9C9] uppercase tracking-[0.4em]">
                Our Mandate
              </motion.h2>
              <motion.p variants={itemVariants} className="text-2xl md:text-3xl text-navy leading-tight font-bold italic">
                We provide structured training pathways that equip practitioners to offer support through coaching, education, and skills practice.
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg text-navy/60 leading-relaxed italic">
                Our mandate focuses on maintaining the integrity of these pathways and fostering collaboration between coaching practitioners and clinical professionals. We believe that non-clinical support is a vital component of a comprehensive mental health ecosystem.
              </motion.p>
              
              <motion.div variants={itemVariants} className="space-y-4 pt-4">
                {[
                  "Establish clear internal program standards for coaching excellence.",
                  "Provide competency-based evaluations for professional certification.",
                  "Support institutions and universities in implementing ethical wellness models."
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 group">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#6BC9C9] rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="text-[11px] font-bold text-navy/40 uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-navy p-1 shadow-2xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6BC9C9]/20 to-transparent z-10"></div>
              <div className="relative z-20 h-full w-full border border-white/10 flex flex-col items-center justify-center text-white p-12 text-center group-hover:scale-105 transition-transform duration-700">
                <ShieldCheck className="w-20 h-20 mb-8 opacity-50" />
                <h3 className="text-4xl font-bold italic uppercase tracking-tighter mb-4">Ethical Integrity</h3>
                <p className="text-white/40 italic text-sm">Ensuring every certificate represents a standard of safety and professional boundary management.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Pillars Cards */}
      <section className="py-32 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-12"
          >
            {[
              { 
                icon: BookOpen, 
                title: "Standards", 
                desc: "Internal program standards for non-clinical practice ensure that all training aligns with ethical boundaries and professional communication skills.",
                color: "bg-white/5"
              },
              { 
                icon: Award, 
                title: "Certification", 
                desc: "Program-based credentials for training completion signify foundational preparation in ethics, scope boundaries, and supported referral.",
                color: "bg-[#6BC9C9]/10"
              },
              { 
                icon: Scale, 
                title: "Collaboration", 
                desc: "Partnering with institutions to bridge support gaps, allowing organizations to implement clinical and non-clinical support in a unified framework.",
                color: "bg-white/5"
              }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className={`${pillar.color} border border-white/10 p-10 flex flex-col h-full hover:border-[#6BC9C9]/50 transition-colors group`}
              >
                <pillar.icon className="h-10 w-10 text-[#6BC9C9] mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest italic group-hover:text-[#6BC9C9] transition-colors">{pillar.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed italic flex-grow">
                  {pillar.desc}
                </p>
                <div className="mt-8 flex items-center text-[#6BC9C9] text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight className="ml-2 w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Do / Who This Is For */}
      <section className="py-32 bg-[#F9F9F9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-4xl font-bold text-navy mb-8 uppercase tracking-tighter italic">
                  What We Do
                </h2>
                <p className="text-navy/60 text-lg leading-relaxed italic">
                  GCMWC develops and administers the global curriculum for non-clinical mental wellness coaching. We provide a rigorous educational experience that balances theory with practical application.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  'Deliver a 10-week, self-paced core training program with structured weekly deadlines.',
                  'Conduct comprehensive competency-based evaluations to ensure readiness for practice.',
                  'Train practitioners in ethical supported referral protocols to clinical care.',
                  'Collaborate with university partners to integrate wellness coaching into campus life.'
                ].map((item, i) => (
                  <div key={i} className="flex p-6 bg-white border border-navy/5 shadow-sm hover:shadow-md transition-shadow group">
                    <CheckCircle2 className="h-5 w-5 text-[#6BC9C9] mr-4 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-navy/70 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-4xl font-bold text-navy mb-8 uppercase tracking-tighter italic">
                  Who This Is For
                </h2>
                <p className="text-navy/60 text-lg leading-relaxed italic">
                  Our program is designed for individuals and organizations committed to providing high-quality, non-clinical mental wellness support.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: 'Aspiring Coaches', desc: 'Individuals seeking a professional pathway into the mental wellness field.' },
                  { title: 'Helping Professionals', desc: 'Nurses, teachers, and human resource leaders enhancing their support skills.' },
                  { title: 'Faith & Community Leaders', desc: 'Leaders who wish to provide structured wellness support within their communities.' },
                  { title: 'Institutions & Universities', desc: 'Schools looking to implement verified, non-clinical support systems.' }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-navy/5 border-l-4 border-navy hover:bg-navy/10 transition-colors">
                    <h4 className="text-xs font-bold text-navy uppercase tracking-widest mb-2 italic">{item.title}</h4>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-navy/40 leading-relaxed italic">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scope Restrictions & Crisis Warning */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-20">
            <div className="py-12 px-10 bg-navy text-white flex flex-col justify-between">
              <div>
                <AlertTriangle className="h-12 w-12 text-[#FFD166] mb-12" />
                <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-8 leading-tight">Scope & Safety</h3>
                <p className="text-white/40 italic text-sm leading-relaxed mb-12">
                  It is essential to understand the limitations of non-clinical coaching to maintain safety and professional integrity.
                </p>
              </div>
              <div className="p-6 border border-white/10 bg-white/5 italic">
                <h4 className="text-[10px] font-bold text-[#FFD166] uppercase tracking-[0.3em] mb-4">Crisis Warning</h4>
                <p className="text-[10px] text-white/50 font-medium leading-relaxed uppercase tracking-widest">
                  If you are in crisis, contact your local emergency services immediately. Wellness Coaching is not a crisis intervention service.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <h2 className="text-4xl font-bold text-navy uppercase tracking-tighter italic">
                What we do not do
              </h2>
              <div className="grid md:grid-cols-1 gap-4">
                {[
                  'We do not provide psychotherapy or clinical counseling services.',
                  'We do not authorize the diagnosis of mental health conditions.',
                  'We do not offer medical advice or medication management.',
                  'We do not provide crisis intervention as a service.',
                  'We do not provide legal advice or representation.'
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center p-6 border-b border-navy/5 group hover:bg-beige/10 transition-colors"
                  >
                    <div className="h-0.5 w-8 bg-navy/10 mr-8 group-hover:w-16 group-hover:bg-[#6BC9C9] transition-all"></div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-navy/60 italic group-hover:text-navy transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values-Led Integration */}
      <section className="py-32 bg-[#F9F6F2] relative overflow-hidden border-y border-navy/5">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-sm font-bold text-[#6BC9C9] uppercase tracking-[0.4em]">Cultural Context</h2>
            <p className="text-3xl md:text-4xl font-bold text-navy italic leading-[1.1] uppercase tracking-tighter">
              Values-Led Integration
            </p>
            <p className="text-navy/60 text-xl leading-relaxed italic">
              We recognize that for many individuals, mental wellness is deeply connected to personal values and cultural perspectives. Our program supports the integration of faith or spirituality when it is led by the client and occurs with their explicit consent.
            </p>
            <div className="pt-8 flex flex-col items-center">
              <div className="h-16 w-[1px] bg-navy/10 mb-8"></div>
              <p className="text-[11px] font-bold text-navy/40 uppercase tracking-[0.3em] max-w-sm italic">
                Optional client-led integration designed to honor holistic well-being without religious requirements.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer / Disclaimer */}
      <footer className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-12">
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="w-12 h-12 border-2 border-navy/5 flex items-center justify-center rounded-full">
              <ShieldCheck className="w-6 h-6 text-navy/20" />
            </div>
            <p className="text-[11px] text-navy/40 font-bold uppercase tracking-[0.2em] leading-relaxed max-w-2xl mx-auto italic">
              “GCMWC credentials are program-based and do not confer clinical licensure or authority to diagnose or treat mental health conditions.”
            </p>
          </div>
          
          <div className="pt-12 border-t border-navy/5">
            <p className="text-[10px] text-navy/30 italic max-w-4xl mx-auto text-center leading-relaxed font-medium uppercase tracking-wider">
              This service is mental wellness coaching and education. It is not psychotherapy, counseling treatment, diagnosis, crisis intervention, or medical care. If you are experiencing an emergency or are at risk of harm to yourself or others, call local emergency services immediately.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;

