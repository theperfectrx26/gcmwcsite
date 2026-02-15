
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShieldCheck, Award, Scale, Users, School, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/registry?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-beige constellation-motif overflow-hidden border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-navy mb-6 tracking-tight"
          >
            Global Commission for Mental Wellness Coaching (GCMWC)
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-navy/80 mb-4 font-medium max-w-4xl mx-auto leading-tight"
          >
            We set the standards for non-clinical mental wellness coaching, and we enforce them.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-navy/60 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            GCMWC is an independent international standards-setting and credentialing body.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link to="/credentials" className="px-10 py-5 bg-navy text-white font-bold uppercase tracking-widest hover:bg-forest transition-all shadow-xl">
              View Credentials
            </Link>
            <Link to="/registry" className="px-10 py-5 border-2 border-navy text-navy font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all">
              Verify a Credential
            </Link>
          </div>
          
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-navy/40">
            Professional standards. Ethical enforcement. Credentials you can verify.
          </p>
        </div>
      </section>

      {/* Instant Verification Strip */}
      <section className="bg-white border-b border-beige py-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="w-full lg:w-1/3">
              <h3 className="text-navy font-bold text-lg mb-3 uppercase tracking-wider">Instant Verification</h3>
              <form onSubmit={handleSearch} className="relative">
                <input 
                  type="text" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Name or Credential ID"
                  className="w-full pl-12 pr-4 py-4 border-2 border-beige bg-beige/20 focus:outline-none focus:border-teal transition-all text-sm font-medium"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-navy/30" />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-teal text-navy p-2 hover:bg-navy hover:text-white transition-colors">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>

            <div className="flex flex-wrap justify-center gap-3 lg:w-1/3">
              <div className="flex items-center space-x-2 px-4 py-2 bg-sage/40 border border-teal/20 rounded-sm text-[10px] font-bold uppercase tracking-widest text-forest">
                <div className="w-2 h-2 bg-teal rounded-full"></div>
                <span>Active</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-beige text-navy/40 border border-navy/5 rounded-sm text-[10px] font-bold uppercase tracking-widest">
                <div className="w-2 h-2 bg-navy/20 rounded-full"></div>
                <span>Lapsed</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-navy/10 text-navy rounded-sm text-[10px] font-bold uppercase tracking-widest">
                <div className="w-2 h-2 bg-navy rounded-full"></div>
                <span>Suspended</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-700 border border-red-100 rounded-sm text-[10px] font-bold uppercase tracking-widest">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span>Revoked</span>
              </div>
            </div>

            <div className="hidden lg:flex flex-col text-[10px] font-bold text-navy/40 gap-2 uppercase tracking-[0.2em]">
              <div className="flex items-center space-x-3"><CheckCircle className="h-4 w-4 text-teal" /> <span>Search</span></div>
              <div className="flex items-center space-x-3"><CheckCircle className="h-4 w-4 text-teal" /> <span>Confirm status</span></div>
              <div className="flex items-center space-x-3"><CheckCircle className="h-4 w-4 text-teal" /> <span>Verify scope</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 1) Three pillars cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 border-l-4 border-navy bg-beige/10 h-full">
              <ShieldCheck className="h-10 w-10 text-navy mb-6" />
              <h3 className="text-xl font-bold text-navy mb-4 uppercase tracking-wider">Standards</h3>
              <p className="text-navy/70 leading-relaxed text-sm italic">
                We publish and maintain the official standards for non-clinical mental wellness coaching. 
                These define training requirements and ethical practice boundaries. 
                We protect the public by ensuring these standards are rigorous.
              </p>
            </div>
            <div className="p-8 border-l-4 border-navy bg-beige/10 h-full">
              <Award className="h-10 w-10 text-navy mb-6" />
              <h3 className="text-xl font-bold text-navy mb-4 uppercase tracking-wider">Credentialing</h3>
              <p className="text-navy/70 leading-relaxed text-sm italic">
                We issue credentials that distinguish foundational training from independent professional readiness. 
                Our tiered framework ensures coaches progress through validated milestones. 
                Verification is available via our public registry.
              </p>
            </div>
            <div className="p-8 border-l-4 border-navy bg-beige/10 h-full">
              <Scale className="h-10 w-10 text-navy mb-6" />
              <h3 className="text-xl font-bold text-navy mb-4 uppercase tracking-wider">Accountability</h3>
              <p className="text-navy/70 leading-relaxed text-sm italic">
                We operate a transparent disciplinary process for all credential holders. 
                The Commission investigates formal complaints and enforces the Code of Ethics. 
                Sanctions range from mandatory remediation to permanent revocation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2) Credential pathway */}
      <section className="py-24 bg-beige constellation-motif border-y border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy text-center mb-16 uppercase tracking-widest italic">Credential Pathway</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-12 shadow-sm border border-navy/5 relative group hover:shadow-xl transition-all h-full">
              <span className="absolute top-0 right-0 mt-6 mr-6 px-4 py-1 bg-amber text-navy text-[10px] font-bold uppercase tracking-[0.2em]">Training designation</span>
              <h3 className="text-2xl font-bold text-navy mb-6 italic">MWC-T</h3>
              <p className="text-navy/80 mb-8 text-base leading-relaxed italic">
                Foundational preparation for coaching in supervised, educational, or volunteer contexts.
              </p>
              <ul className="space-y-4 mb-10 text-sm italic text-navy/60 font-medium">
                <li className="flex items-center space-x-3"><CheckCircle className="h-4 w-4 text-amber" /> <span>60-hour accredited core curriculum.</span></li>
                <li className="flex items-center space-x-3"><CheckCircle className="h-4 w-4 text-amber" /> <span>Successful completion of module assessments.</span></li>
                <li className="flex items-center space-x-3"><CheckCircle className="h-4 w-4 text-amber" /> <span>Signed Code of Ethics and Scope Agreement.</span></li>
              </ul>
              <Link to="/credentials/mwc-t" className="inline-flex items-center px-8 py-4 bg-navy text-white font-bold uppercase tracking-widest hover:bg-teal transition-all">
                View MWC-T Requirements <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-12 shadow-sm border border-navy/5 relative group hover:shadow-xl transition-all h-full">
              <span className="absolute top-0 right-0 mt-6 mr-6 px-4 py-1 bg-teal text-navy text-[10px] font-bold uppercase tracking-[0.2em]">Professional credential</span>
              <h3 className="text-2xl font-bold text-navy mb-6 italic">MWC-C</h3>
              <p className="text-navy/80 mb-8 text-base leading-relaxed italic">
                Applied competence verification for independent non-clinical professional practice.
              </p>
              <ul className="space-y-4 mb-10 text-sm italic text-navy/60 font-medium">
                <li className="flex items-center space-x-3"><CheckCircle className="h-4 w-4 text-teal" /> <span>40 hours of verified applied experience.</span></li>
                <li className="flex items-center space-x-3"><CheckCircle className="h-4 w-4 text-teal" /> <span>Board-approved performance preceptorship.</span></li>
                <li className="flex items-center space-x-3"><CheckCircle className="h-4 w-4 text-teal" /> <span>Successful capstone evaluation passing.</span></li>
              </ul>
              <Link to="/credentials/mwc-c" className="inline-flex items-center px-8 py-4 bg-teal text-navy font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all">
                View MWC-C Requirements <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3, 4, 5, 6 blocks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Verify Callout */}
          <div className="p-12 bg-navy text-white flex flex-col md:flex-row items-center justify-between gap-8 border-l-[12px] border-teal">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold uppercase tracking-widest italic mb-3">Verify a Credential</h3>
              <p className="opacity-70 italic text-sm leading-relaxed">Confirm active status and disciplinary history for any GCMWC credential holder via our daily-updated registry.</p>
            </div>
            <Link to="/registry" className="px-10 py-4 bg-teal text-navy font-bold uppercase tracking-widest hover:bg-white transition-all whitespace-nowrap">Verify Now</Link>
          </div>

          {/* Accreditation Callout */}
          <div className="p-12 bg-beige border border-navy/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-left">
              <h3 className="text-2xl font-bold text-navy uppercase tracking-widest italic mb-3">Accredit Your Training Program</h3>
              <p className="text-navy/60 italic text-sm leading-relaxed">Institutions may seek accreditation to qualify graduates for the MWC-T pathway. Alignment ensures professional consistency.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/program-accreditation" className="px-8 py-4 bg-navy text-white font-bold uppercase tracking-widest hover:bg-teal transition-all whitespace-nowrap text-sm">Overview</Link>
              <Link to="/contact?type=accreditation" className="px-8 py-4 border-2 border-navy text-navy font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all whitespace-nowrap text-sm">Request Packet</Link>
            </div>
          </div>

          {/* Directory Teaser */}
          <div className="p-12 bg-sage/20 border border-teal/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold text-navy uppercase tracking-widest italic mb-3">Referral Directory</h3>
              <p className="text-navy/60 italic text-sm leading-relaxed">Connect with Active MWC-C holders. Filter by location, language, and focus area for professional support.</p>
            </div>
            <Link to="/directory" className="px-10 py-4 bg-navy text-white font-bold uppercase tracking-widest hover:bg-teal transition-all whitespace-nowrap">Search Directory</Link>
          </div>

          {/* Schools Teaser */}
          <div className="p-12 bg-white border-2 border-beige flex flex-col md:flex-row items-center justify-between gap-8 border-r-[12px] border-amber">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold text-navy uppercase tracking-widest italic mb-3">Implement in Schools</h3>
              <p className="text-navy/60 italic text-sm leading-relaxed">A turnkey student wellness framework for institutions. Reduce risk through standards-aligned coaching pathways.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/schools" className="px-8 py-4 bg-navy text-white font-bold uppercase tracking-widest hover:bg-teal transition-all text-sm">Schools Hub</Link>
              <Link to="/schools/kit" className="px-8 py-4 border-2 border-navy text-navy font-bold uppercase tracking-widest hover:bg-teal hover:border-teal transition-all text-sm">Download Kit</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7) Why GCMWC exists */}
      <section className="py-24 bg-beige constellation-motif">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-8 italic uppercase tracking-widest">Why GCMWC Exists</h2>
          <p className="text-xl text-navy/80 italic leading-relaxed mb-6">
            Mental wellness coaching is a rapidly expanding field. GCMWC provides the regulatory framework to ensure public safety and professional integrity.
          </p>
          <p className="text-lg text-navy/60 italic leading-relaxed">
            We provide a clear distinction between clinical treatment and non-clinical support. This transparency protects the public and the profession.
          </p>
          <div className="w-24 h-1 bg-navy mx-auto mt-12"></div>
        </div>
      </section>

      {/* 8) Two CTA tiles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div className="bg-navy p-12 text-white">
            <Users className="h-12 w-12 text-teal mb-6" />
            <h4 className="text-2xl font-bold uppercase tracking-widest italic mb-4">For Individuals</h4>
            <p className="opacity-70 italic mb-8 leading-relaxed">Earn validated credentials that demonstrate your commitment to professional standards and ethical non-clinical practice.</p>
            <Link to="/credentials" className="inline-flex items-center text-teal font-bold uppercase tracking-widest border-b-2 border-teal pb-1 hover:text-white hover:border-white transition-all">Apply for Credential <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </div>
          <div className="bg-forest p-12 text-white">
            <School className="h-12 w-12 text-amber mb-6" />
            <h4 className="text-2xl font-bold uppercase tracking-widest italic mb-4">For Institutions</h4>
            <p className="opacity-70 italic mb-8 leading-relaxed">Adopt a standards-aligned framework for wellness support. Our accreditation process ensures institutional consistency and safety.</p>
            <Link to="/schools" className="inline-flex items-center text-amber font-bold uppercase tracking-widest border-b-2 border-amber pb-1 hover:text-white hover:border-white transition-all">Partner with GCMWC <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
