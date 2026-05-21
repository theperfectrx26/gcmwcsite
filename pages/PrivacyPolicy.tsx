import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { motion } from 'motion/react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'collection', title: '2. Information We Collect' },
    { id: 'use', title: '3. How We Use Information' },
    { id: 'storage', title: '4. Storage and Security' },
    { id: 'sharing', title: '5. Information Sharing' },
    { id: 'cookies', title: '6. Cookies and Tracking' },
    { id: 'rights', title: '7. Your Rights' },
    { id: 'updates', title: '8. Updates' },
  ];

  return (
    <div className="bg-[#F4ECE7] min-h-screen">
      <SEO 
        title="Privacy Policy" 
        description="Official Privacy Policy for the Global Commission for Mental Wellness Coaching (GCMWC)." 
        path="/privacy-policy" 
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
              Institutional Framework
            </h1>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 italic tracking-tight">
              Privacy Policy
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto font-light leading-relaxed italic">
              The Global Commission for Mental Wellness Coaching values your privacy and is committed to protecting the personal information you share with us.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Table of Contents Sidebar */}
          <aside className="lg:w-1/4 hidden lg:block sticky top-32 h-fit">
            <h3 className="text-[10px] font-bold text-[#04606D] uppercase tracking-[0.3em] mb-8 border-b border-[#04606D]/20 pb-4">
              Contents
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
              <p className="text-lg leading-relaxed text-[#252525]/80 mb-12 italic border-l-4 border-[#04606D] pl-6 py-2">
                This Privacy Policy explains how GCMWC collects, uses, stores, and protects information when you visit our website, apply for a program, enroll in training, request information, verify credentials, submit forms, or communicate with us. By using this website, you agree to the practices described in this Privacy Policy.
              </p>

              <div className="space-y-16">
                <section id="introduction">
                  <h3 className="text-2xl font-serif text-[#042829] italic mb-6">1. Introduction</h3>
                  <div className="space-y-4 text-[#252525]/80 leading-relaxed font-light">
                    <p>The Global Commission for Mental Wellness Coaching ("GCMWC," "we," "us," or "our") serves as an international standards-setting and credentialing body for non-clinical mental wellness coaching. We are committed to maintaining the highest standards of data integrity and protection.</p>
                  </div>
                </section>

                <section id="collection">
                  <h3 className="text-2xl font-serif text-[#042829] italic mb-6">2. Information We Collect</h3>
                  <div className="space-y-4 text-[#252525]/80 leading-relaxed font-light">
                    <p>We collect information that you provide directly to us during interactions such as:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Credentialing applications and professional verification requests</li>
                      <li>Inquiry forms, newsletter subscriptions, and contact requests</li>
                      <li>Course enrollment and training board preceptorship materials</li>
                      <li>Submission of formal complaints or ethics review documents</li>
                    </ul>
                    <p>This information may include names, contact details, professional history, academic transcripts, and official identification for verification purposes.</p>
                  </div>
                </section>

                <section id="use">
                  <h3 className="text-2xl font-serif text-[#042829] italic mb-6">3. How We Use Information</h3>
                  <div className="space-y-4 text-[#252525]/80 leading-relaxed font-light">
                    <p>Personal information is utilized exclusively for the advancement of GCMWC's mission, including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Facilitating the MWC-T and MWC-C credentialing pathways</li>
                      <li>Maintaining the Public Credential Registry for consumer safety</li>
                      <li>Reviewing program accreditation applications for academic institutions</li>
                      <li>Processing ethics complaints and enforcement actions</li>
                      <li>Communicating critical updates regarding standards and certifications</li>
                    </ul>
                  </div>
                </section>

                <section id="storage">
                  <h3 className="text-2xl font-serif text-[#042829] italic mb-6">4. Storage and Security</h3>
                  <div className="space-y-4 text-[#252525]/80 leading-relaxed font-light">
                    <p>GCMWC employs industry-standard encryption and security protocols to safeguard all digital assets. Professional documentation and credentialing data are stored in secure environments with restricted administrative access.</p>
                  </div>
                </section>

                <section id="sharing">
                  <h3 className="text-2xl font-serif text-[#042829] italic mb-6">5. Information Sharing</h3>
                  <div className="space-y-4 text-[#252525]/80 leading-relaxed font-light">
                    <p>GCMWC does not sell, lease, or trade personal data to third parties. We may disclose information only in the following circumstances:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Public verification of credential status via the Registry</li>
                      <li>Collaboration with accredited educational partners for verify completion</li>
                      <li>Compliance with legal mandates or regulatory requirements</li>
                    </ul>
                  </div>
                </section>

                <section id="cookies">
                  <h3 className="text-2xl font-serif text-[#042829] italic mb-6">6. Cookies and Tracking</h3>
                  <div className="space-y-4 text-[#252525]/80 leading-relaxed font-light">
                    <p>Our website utilizes necessary cookies to enhance user experience and analyze traffic patterns. These tools do not harvest sensitive personal data from your device.</p>
                  </div>
                </section>

                <section id="rights">
                  <h3 className="text-2xl font-serif text-[#042829] italic mb-6">7. Your Rights</h3>
                  <div className="space-y-4 text-[#252525]/80 leading-relaxed font-light">
                    <p>Individuals may request access to their professional records or formal correction of Registry data by contacting the GCMWC Registrar.</p>
                  </div>
                </section>

                <section id="updates">
                  <h3 className="text-2xl font-serif text-[#042829] italic mb-6">8. Updates</h3>
                  <div className="space-y-4 text-[#252525]/80 leading-relaxed font-light">
                    <p>GCMWC reserves the right to modify this Privacy Policy as regulatory landscapes evolve. Significant updates will be noted by the "Last Updated" date at the top of the policy.</p>
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

export default PrivacyPolicy;
