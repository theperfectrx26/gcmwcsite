
import React from 'react';
import { 
  ArrowLeft, 
  ShieldAlert, 
  AlertTriangle, 
  Scale, 
  Info, 
  Gavel 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ConstellationBg from '../components/ConstellationBg';
import ComplaintForm from '../components/ComplaintForm';
import SEO from '../components/SEO';

const ComplaintSubmission: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-16">
      <SEO 
        title="Submit a Complaint & Professional Review" 
        description="Formal complaint submission portal for ethical concerns, scope violations, or professional misconduct involving GCMWC credentials."
        path="/ethics/complaint"
      />

      <header className="relative py-20 bg-cream overflow-hidden border-b border-beige">
        <ConstellationBg />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/ethics" className="inline-flex items-center text-navy/40 text-xs font-bold uppercase tracking-widest mb-8 hover:text-navy transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Ethics Hub
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4 tracking-tight uppercase italic">Submit a Professional Complaint</h1>
            <p className="text-xl text-navy/70 italic max-w-3xl leading-relaxed">
              Initiate a formal review process for allegations involving professional conduct, scope violations, or ethical breaches by GCMWC credential holders or partners.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-10">
              <div>
                <h2 className="text-xl font-bold text-navy uppercase tracking-widest italic mb-6 flex items-center">
                  <Scale className="mr-3 h-6 w-6 text-gold" /> Filing Requirements
                </h2>
                <div className="space-y-4 text-sm text-navy/70 italic leading-relaxed">
                  <p>A formal complaint must include identifiable facts, supporting information, and clear descriptions of the incident.</p>
                  <p>GCMWC reviews primarily for standards violations, scope misrepresentation, and public safety risks within our jurisdiction.</p>
                </div>
              </div>

              <div className="p-8 bg-red-50 border-l-4 border-red-500 shadow-sm">
                <div className="flex items-center text-red-700 mb-4">
                  <ShieldAlert className="h-6 w-6 mr-3" />
                  <h3 className="font-bold uppercase tracking-widest text-xs italic">Public Safety Notice</h3>
                </div>
                <p className="text-red-800/70 text-xs italic leading-relaxed">
                  If this is an emergency or involves immediate risk of harm, please contact your local emergency services or law enforcement first. GCMWC is a certification body, not an emergency intervention service.
                </p>
              </div>

              <div className="p-8 bg-navy text-white shadow-2xl relative overflow-hidden">
                <Gavel className="h-16 w-16 text-gold opacity-10 absolute -bottom-4 -right-4" />
                <h3 className="text-gold font-bold uppercase tracking-widest mb-4 italic flex items-center text-sm">
                  <Info className="mr-2 h-4 w-4" /> Confidentiality
                </h3>
                <p className="opacity-70 text-xs italic leading-relaxed">
                  GCMWC handles complaint records with professional discretion. However, confidentiality cannot be guaranteed if disclosure is required for fair review, legal compliance, or public protection.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <ComplaintForm />
              
              <div className="mt-12 p-8 border border-beige bg-cream/10 flex items-start gap-6">
                <AlertTriangle className="h-8 w-8 text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-navy uppercase tracking-widest italic mb-2">Review Process Notice</h4>
                  <p className="text-xs text-navy/60 italic leading-relaxed">
                    Once submitted, your complaint enters a structured review process. The respondent may be notified of the allegations and given an opportunity to provide a formal response to the Commission. We appreciate your patience as we conduct a thorough and fair evaluation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComplaintSubmission;
