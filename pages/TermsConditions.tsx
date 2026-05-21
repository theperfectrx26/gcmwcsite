import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { motion } from 'motion/react';

const TermsConditions: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'acceptance', title: '1. Acceptance of Terms' },
    { id: 'credentials', title: '2. Credentialing Standards' },
    { id: 'non-clinical', title: '3. Non-Clinical Scope' },
    { id: 'intellectual-property', title: '4. Intellectual Property' },
    { id: 'disclaimer', title: '5. Liability Disclaimer' },
    { id: 'governing-law', title: '6. Governing Law' },
  ];

  return (
    <div className="bg-[#F4ECE7] min-h-screen">
      <SEO 
        title="Terms and Conditions" 
        description="Official Terms and Conditions for interacting with the Global Commission for Mental Wellness Coaching (GCMWC)." 
        path="/terms-and-conditions" 
      />

      {/* Hero Section */}
      <section className="bg-[#042829] py-24 border-b border-[#C49A45]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[10px] font-bold text-[#C49A45] uppercase tracking-[0.5em] mb-4">
              Legal Framework
            </h1>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 italic tracking-tight">
              Terms and Conditions
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto font-light leading-relaxed italic">
              These Terms and Conditions govern your use of the GCMWC website, resources, programs, applications, credentialing materials, and related services.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar */}
          <aside className="lg:w-1/4 hidden lg:block sticky top-32 h-fit">
            <h3 className="text-[10px] font-bold text-[#04606D] uppercase tracking-[0.3em] mb-8 border-b border-[#04606D]/20 pb-4">
              Navigation
            </h3>
            <nav className="space-y-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block text-xs font-medium text-[#252525]/60 hover:text-[#04606D] transition-colors italic border-l-2 border-transparent hover:border-[#C49A45] pl-4"
                >
                  {section.title}
                </a>
              ))}
            </nav>
            <div className="mt-12 p-6 bg-white shadow-sm border-l-4 border-[#C49A45]">
              <p className="text-[10px] text-[#252525]/50 uppercase tracking-widest font-bold mb-2">Last Updated</p>
              <p className="text-sm italic font-medium text-[#042829]">May 2026</p>
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:w-3/4 bg-white p-8 md:p-16 shadow-sm border border-[#042829]/5">
            <div className="prose prose-slate max-w-none">
              <div className="mb-12 space-y-6">
                <p className="text-lg leading-relaxed text-[#252525]/80 italic border-l-4 border-[#04606D] pl-6 py-2">
                  By accessing or using this website, submitting forms, enrolling in a program, downloading materials, applying for a credential, or using GCMWC resources, you agree to these Terms and Conditions.
                </p>
                <p className="text-[#252525]/60 font-medium italic">
                  If you do not agree with these Terms, do not use this website or GCMWC services.
                </p>
              </div>

              <div className="space-y-16">
                <section id="acceptance">
                  <h3 className="text-2xl font-serif text-[#042829] italic mb-6">1. Acceptance of Terms</h3>
                  <div className="space-y-4 text-[#252525]/80 leading-relaxed font-light">
                    <p>The Global Commission for Mental Wellness Coaching ("GCMWC," "we," "us," or "our") provides this website and its services subject to your compliance with these Terms and Conditions. These terms constitute a legally binding agreement between you and GCMWC.</p>
                  </div>
                </section>

                <section id="credentials">
                  <h3 className="text-2xl font-serif text-[#042829] italic mb-6">2. Credentialing Standards</h3>
                  <div className="space-y-4 text-[#252525]/80 leading-relaxed font-light">
                    <p>GCMWC provides the MWC-T (Training) and MWC-C (Professional) certification tracks based on board-approved standards. All applicants must provide accurate historical records and verification of completion for all prerequisites. GCMWC reserves the exclusive right to revoke credentials if fraudulent information is identified at any stage of the application or post-certification process.</p>
                  </div>
                </section>

                <section id="non-clinical">
                  <h3 className="text-2xl font-serif text-[#042829] italic mb-6">3. Non-Clinical Scope</h3>
                  <div className="space-y-4 text-[#252525]/80 leading-relaxed font-light">
                    <p>Mental Wellness Coaching is strictly a non-clinical professional discipline. GCMWC credentials do not authorize holders to practice clinical psychotherapy, diagnose mental disorders, or treat pathological conditions. Any credential holder found practicing outside this scope is subject to immediate registry revocation and formal board review.</p>
                  </div>
                </section>

                <section id="intellectual-property">
                  <h3 className="text-2xl font-serif text-[#042829] italic mb-6">4. Intellectual Property</h3>
                  <div className="space-y-4 text-[#252525]/80 leading-relaxed font-light">
                    <p>All training materials, the GCMWC Standards Manual, curriculum frameworks, and the Public Registry database are the exclusive intellectual property of GCMWC. Unauthorized distribution, duplication, or commercial exploitation of these materials is strictly prohibited and may result in legal action.</p>
                  </div>
                </section>

                <section id="disclaimer">
                  <h3 className="text-2xl font-serif text-[#042829] italic mb-6">5. Liability Disclaimer</h3>
                  <div className="space-y-4 text-[#252525]/80 leading-relaxed font-light">
                    <p>GCMWC facilitates professional standards but is not liable for the individual actions, omissions, or professional conduct of credential holders. The Public Registry is provided as an "as-is" verification tool for consumer safety. Users should perform their own due diligence when selecting a wellness professional.</p>
                  </div>
                </section>

                <section id="governing-law">
                  <h3 className="text-2xl font-serif text-[#042829] italic mb-6">6. Governing Law</h3>
                  <div className="space-y-4 text-[#252525]/80 leading-relaxed font-light">
                    <p>These terms are governed by the laws of the jurisdiction in which GCMWC is incorporated. Any disputes arising from the use of this website or GCMWC services shall be resolved through board-mediated ethics review or formal legal proceedings in the designated jurisdiction.</p>
                  </div>
                </section>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
