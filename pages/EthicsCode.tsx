
import React from 'react';
import { 
  ShieldCheck, 
  UserCheck, 
  Scale, 
  Users, 
  Lock, 
  FileText, 
  RotateCcw, 
  Archive, 
  AlertTriangle, 
  Globe,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ConstellationBg from '../components/ConstellationBg';
import SEO from '../components/SEO';

const EthicsCode: React.FC = () => {
  const ethicsPrinciples = [
    {
      title: "Honest Representation",
      description: "Represent qualifications, training, credential status, and scope of practice truthfully at all times. Do not mislead the public regarding your authority or professional background.",
      icon: <UserCheck className="h-6 w-6" />
    },
    {
      title: "Scope Compliance",
      description: "Practice only within the defined non-clinical scope of Mental Wellness Coaching. Do not diagnose, treat, provide psychotherapy, or manage crisis care.",
      icon: <Scale className="h-6 w-6" />
    },
    {
      title: "Client Welfare",
      description: "Act in ways that protect the dignity, autonomy, and well-being of clients. Avoid harm, coercion, manipulation, or exploitation in all professional interactions.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Confidentiality",
      description: "Maintain confidentiality within legal, ethical, and public safety limits. Explain those limits clearly to clients at the start of the professional relationship.",
      icon: <Lock className="h-6 w-6" />
    },
    {
      title: "Professional Boundaries",
      description: "Avoid dual relationships, conflicts of interest, favoritism, and conduct that impairs objectivity or client safety. Maintain professional distance and decorum.",
      icon: <ShieldCheck className="h-6 w-6" />
    },
    {
      title: "Informed Consent",
      description: "Use clear agreements regarding services, fees, cancellation, confidentiality, scope, and referral expectations. Ensure clients understand the nature of coaching.",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Referral Responsibility",
      description: "Recognize when a client’s needs exceed coaching scope (such as clinical mental health needs) and refer promptly to appropriate licensed or emergency resources.",
      icon: <RotateCcw className="h-6 w-6" />
    },
    {
      title: "Documentation & Accountability",
      description: "Maintain accurate documentation where required and cooperate with GCMWC reviews, audits, and formal complaint investigations with honesty.",
      icon: <Archive className="h-6 w-6" />
    },
    {
      title: "Non-Exploitation",
      description: "Do not exploit clients financially, emotionally, spiritually, sexually, or professionally. Protect vulnerable populations from undue influence or harm.",
      icon: <AlertTriangle className="h-6 w-6" />
    },
    {
      title: "Professional Integrity",
      description: "Uphold respectful conduct in all communication, advertising, instruction, evaluation, and all credential-related activity. Preserve the honor of the profession.",
      icon: <Globe className="h-6 w-6" />
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-16">
      <SEO 
        title="Code of Ethics & Professional Conduct" 
        description="Official Code of Ethics for GCMWC mental wellness coaching credential holders and training partners."
        path="/ethics/code"
      />

      <header className="relative py-20 bg-navy text-white overflow-hidden">
        <ConstellationBg />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/ethics" className="inline-flex items-center text-gold text-xs font-bold uppercase tracking-widest mb-8 hover:text-white transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Ethics Hub
          </Link>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight uppercase italic">Code of Ethics</h1>
            <p className="text-xl opacity-70 italic max-w-3xl leading-relaxed">
              The foundational principles governing the conduct, boundaries, and professional integrity of all GCMWC credential holders and institutional partners.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-2xl font-bold text-navy uppercase tracking-widest italic mb-6 border-b-2 border-gold pb-4 inline-block">Professional Standards</h2>
            <p className="text-navy/70 italic leading-relaxed">
              All GCMWC credential holders, applicants, faculty, and approved training partners are expected to uphold the following ethical principles. Failure to adhere to these standards may result in disciplinary action, including credential revocation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ethicsPrinciples.map((principle, idx) => (
              <div key={idx} className="bg-white p-10 border border-beige shadow-sm hover:shadow-2xl transition-all border-t-8 border-navy flex flex-col items-start h-full">
                <div className="bg-cream w-16 h-16 flex items-center justify-center mb-8 text-navy shadow-inner">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-4 uppercase tracking-wider italic">{principle.title}</h3>
                <p className="text-navy/70 text-sm leading-relaxed italic">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream/30 border-t border-beige">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy uppercase tracking-widest italic mb-8">Maintain Your Credential</h2>
          <p className="text-lg text-navy/70 italic leading-relaxed mb-12">
            Ethics compliance is a continuous requirement for maintaining GCMWC status. Every credential holder is responsible for staying informed of the latest GCMWC standards and ensuring their practice reflects these values.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="px-10 py-5 bg-navy text-white font-bold uppercase tracking-widest hover:bg-forest transition-all shadow-xl">
              Ethical Inquiry
            </Link>
            <Link to="/ethics/complaint" className="px-10 py-5 border-2 border-navy text-navy font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all">
              Report a Violation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EthicsCode;
