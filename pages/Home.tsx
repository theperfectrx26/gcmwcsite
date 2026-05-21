import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShieldCheck, Award, Scale, Users, School, ArrowRight, CheckCircle, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const testimonials = [
    {
      name: "Ashley Cooper",
      credential: "MWC-C™",
      text: "The MWC-C credential provided the exact framework I needed to bridge the gap between high-level management and mental wellness. I now lead corporate resilience programs with the confidence that my practice is globally validated and ethically sound.",
      role: "Corporate Wellness Lead"
    },
    {
      name: "Jean Rhea",
      credential: "MWC-C™",
      text: "Establishing a private practice in mental wellness requires clear boundaries. GCMWC’s standards gave me and my clients the peace of mind that comes with professional accountability and a non-clinical scope that actually works.",
      role: "Private Practitioner"
    },
    {
      name: "Ashley Nava",
      credential: "MWC-C™",
      text: "Transitioning from the MWC-T to the MWC-C credential was a transformative milestone. GCMWC’s rigorous capstone evaluation ensured that my practice is rooted in proven non-clinical methodologies, providing my organization with the highest standard of wellness advocacy.",
      role: "Professional Wellness Advocate"
    },
    {
      name: "Jennifer W. Barnabas",
      credential: "MWC-C™",
      text: "Being part of the GCMWC registry has opened doors internationally. The global recognition of these standards means that regardless of where I am practicing, my peers and clients know I am committed to the highest level of professional integrity.",
      role: "Global Health Consultant"
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/registry?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="flex flex-col">
      <SEO 
        title="GCMWC | Online Mental Wellness Coach Certification"
        description="Become a certified Mental Wellness Coach with GCMWC. Online training in non-clinical mental wellness coaching, ethics, faith-based integration, wellness frameworks, and practical coaching skills."
        path="/"
      />
      {/* Hero Section */}
      <header className="relative pt-24 pb-16 bg-beige constellation-motif overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-[5.5rem] font-bold text-[#232F3E] mb-8 tracking-tighter leading-[0.95]"
          >
            Global Commission for Mental Wellness <br className="hidden md:block" /> Coaching (GCMWC)
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl mx-auto text-xl md:text-2xl text-navy/80 mb-6 font-medium leading-tight"
          >
            We set the standards for non-clinical mental wellness coaching, and we <br className="hidden md:block" /> 
            <span className="bg-[#E2F0F9] px-2">support their implementation.</span>
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-sm text-navy/50 mb-12 leading-relaxed"
          >
            GCMWC is an independent international standards-setting and credentialing body.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <Link to="/credentials" className="px-10 py-5 bg-[#232F3E] text-white font-bold uppercase tracking-widest hover:bg-forest transition-all shadow-xl text-xs">
              View Credentials
            </Link>
            <Link to="/registry" className="px-10 py-5 border-2 border-[#232F3E] text-[#232F3E] font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all text-xs">
              Verify a Certificate
            </Link>
          </motion.div>

          <p className="text-[10px] font-bold text-navy/30 uppercase tracking-[0.4em]">
            Professional standards. Ethical guidance. Certificates you can verify.
          </p>
        </div>
      </header>

      {/* Instant Verification */}
      <section className="bg-white border-y border-navy/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-12 items-center">
            {/* Left: Title & Search */}
            <div className="space-y-6">
              <h2 className="text-xs font-bold text-navy uppercase tracking-widest">Instant Verification</h2>
              <form onSubmit={handleSearch} className="relative flex">
                <input 
                  type="text" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Name or Credential ID"
                  className="w-full bg-[#F9F9F9] border border-navy/10 px-6 py-4 text-xs italic focus:outline-none focus:border-teal transition-all"
                />
                <button type="submit" className="bg-[#6BC9C9] px-4 text-white hover:bg-teal transition-colors">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Middle: Certificate Search Note */}
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <span className="text-[8px] font-bold tracking-widest text-navy/40 uppercase">Search our global directory for verified training completions.</span>
            </div>

            {/* Right: Checklist */}
            <div className="flex flex-col space-y-2 md:items-end">
              {[
                'SEARCH',
                'CONFIRM STATUS',
                'VERIFY SCOPE'
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3 text-[8px] font-bold text-navy/40 tracking-[0.2em]">
                  <CheckCircle className="h-3 w-3 text-teal" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Three Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-16">
          {[
            { 
              icon: ShieldCheck, 
              title: "STANDARDS", 
              text: "We publish and maintain the official standards for non-clinical mental wellness coaching. These define training requirements and ethical practice boundaries. We protect the public by ensuring these standards are rigorous." 
            },
            { 
              icon: Award, 
              title: "CERTIFICATION", 
              text: "We provide program-based certificates that distinguish foundational training from independent professional readiness. Our tiered framework ensures coaches progress through validated milestones. Verification is available via our public directory." 
            },
            { 
              icon: Scale, 
              title: "COLLABORATION", 
              text: "We work closely with university partners and institutions to bridge the gap between wellness support and clinical care. Our model emphasizes ethical consistency and clear referral protocols for the safety of all participants." 
            }
          ].map((pillar, idx) => (
            <div key={idx} className="border-l border-navy/20 pl-8 py-4 flex flex-col items-start text-left">
              <pillar.icon className="h-8 w-8 text-navy mb-8" />
              <h3 className="text-lg font-bold text-navy mb-6 tracking-widest">
                {pillar.title}
              </h3>
              <p className="text-navy/60 leading-relaxed text-xs italic">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Credential Pathway */}
      <section className="py-32 bg-[#F9F9F9] constellation-motif">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 italic">
            <h2 className="text-3xl font-bold text-[#232F3E] tracking-[0.3em] uppercase">CREDENTIAL PATHWAY</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* MWC-T Card */}
            <div className="bg-white p-12 shadow-sm border border-navy/5 relative flex flex-col group">
              <div className="absolute top-8 right-8 px-4 py-1.5 bg-[#FFD166] text-navy font-bold text-[8px] uppercase tracking-widest rounded-sm">
                TRAINING DESIGNATION
              </div>
              <h3 className="text-4xl font-bold text-navy mb-8 italic tracking-tighter">MWC-T</h3>
              <p className="text-navy/70 text-sm italic leading-relaxed mb-10 max-w-sm">
                Foundational preparation for coaching in supervised, educational, or volunteer contexts.
              </p>
              <ul className="space-y-4 mb-12 flex-grow">
                {[
                  '10-week core training program curriculum.',
                  'Successful completion of module assessments.',
                  'Signed Code of Ethics and Scope Agreement.'
                ].map((point, i) => (
                  <li key={i} className="flex items-start text-[10px] text-navy/60 italic font-medium">
                    <CheckCircle className="h-3 w-3 text-amber mr-3 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link to="/credentials/mwc-t" className="w-full py-5 bg-[#232F3E] text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center hover:bg-forest transition-all">
                VIEW MWC-T REQUIREMENTS <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* MWC-C Card */}
            <div className="bg-white p-12 shadow-sm border border-navy/5 relative flex flex-col group">
              <div className="absolute top-8 right-8 px-4 py-1.5 bg-[#6BC9C9] text-white font-bold text-[8px] uppercase tracking-widest rounded-sm">
                PROFESSIONAL CREDENTIAL
              </div>
              <h3 className="text-4xl font-bold text-navy mb-8 italic tracking-tighter">MWC-C</h3>
              <p className="text-navy/70 text-sm italic leading-relaxed mb-10 max-w-sm">
                Applied competence verification for independent non-clinical professional practice.
              </p>
              <ul className="space-y-4 mb-12 flex-grow">
                {[
                  '40 hours of documented coaching practice.',
                  'Live practical performance final exam.',
                  'Successful capstone evaluation passing.'
                ].map((point, i) => (
                  <li key={i} className="flex items-start text-[10px] text-navy/60 italic font-medium">
                    <CheckCircle className="h-3 w-3 text-teal mr-3 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link to="/credentials/mwc-c" className="w-full py-5 bg-[#96DED1] text-[#232F3E] text-xs font-bold uppercase tracking-widest flex items-center justify-center hover:bg-teal transition-all">
                VIEW MWC-C REQUIREMENTS <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Verify Section Bar */}
      <section className="bg-[#232F3E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1C2531] border-l-8 border-[#3D4C5E] p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h2 className="text-2xl font-bold text-white italic uppercase tracking-[0.2em] mb-4">VERIFY A CERTIFICATE</h2>
              <p className="text-white/40 italic text-xs max-w-md leading-relaxed">
                Confirm training completion and current certification status for any GCMWC participant via our public directory.
              </p>
            </div>
            <Link to="/registry" className="px-12 py-5 bg-[#96DED1] text-navy font-bold uppercase tracking-widest hover:bg-white transition-all text-xs">
              VERIFY NOW
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-sm font-bold text-teal uppercase tracking-[0.4em] mb-4">Professional Impact</h2>
            <h3 className="text-4xl font-bold text-navy italic uppercase tracking-widest">Voices from the Field</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 border border-navy/10 bg-white hover:bg-beige/5 hover:shadow-2xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="text-teal mb-6">
                    <Quote className="h-8 w-8 opacity-20" />
                  </div>
                  <p className="text-navy/70 text-[10px] italic leading-relaxed mb-8 font-medium">
                    "{testimonial.text}"
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-navy text-base">{testimonial.name}</h4>
                  <div className="flex flex-col mt-2">
                    <span className="text-[9px] font-bold text-teal uppercase tracking-widest mb-1">{testimonial.credential}</span>
                    <span className="text-[9px] font-bold text-navy/30 uppercase tracking-widest">{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Context */}
      <section className="py-32 bg-beige constellation-motif border-y border-navy/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.4em] mb-12">Governance Context</h2>
            <p className="text-3xl font-bold text-navy italic leading-relaxed mb-8 italic">
              GCMWC exists to safeguard the public interest by defining and supporting professional standards for Mental Wellness Coaching globally. 
            </p>
            <p className="text-navy/50 italic leading-relaxed text-sm">
              Through independent oversight, we ensure a clear distinction between professional wellness support and clinical psychological treatment.
            </p>
        </div>
      </section>


      {/* CTA Tiles */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div className="bg-navy p-16 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
              <Users className="h-40 w-40" />
            </div>
            <h4 className="text-3xl font-bold uppercase tracking-widest italic mb-6">For Individuals</h4>
            <p className="opacity-70 italic mb-10 leading-relaxed text-lg max-w-sm">Elevate your career with a globally recognized, standards-aligned credential.</p>
            <Link to="/credentials" className="inline-flex items-center text-teal font-bold uppercase tracking-widest border-b-2 border-teal pb-1 hover:text-white hover:border-white transition-all">Get Credentialed <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </div>
          <div className="bg-forest p-16 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
              <School className="h-40 w-40" />
            </div>
            <h4 className="text-3xl font-bold uppercase tracking-widest italic mb-6">For Institutions</h4>
            <p className="opacity-70 italic mb-10 leading-relaxed text-lg max-w-sm">Integrate professional mental wellness standards into your school or university.</p>
            <Link to="/schools" className="inline-flex items-center text-amber font-bold uppercase tracking-widest border-b-2 border-amber pb-1 hover:text-white hover:border-white transition-all">Institutional Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;