
import React from 'react';
import { Link } from 'react-router-dom';
import { FileDown, ShieldCheck, AlertCircle, Scale, RefreshCw, CheckCircle2, XCircle } from 'lucide-react';
import ConstellationBg from '../components/ConstellationBg';

const Standards: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header className="relative py-20 bg-beige overflow-hidden">
        <ConstellationBg />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 italic uppercase tracking-tight">
            Standards Manual
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-navy/80 font-medium italic mb-8">
            The GCMWC Accreditation Standards Manual defines the professional requirements for non-clinical mental wellness coaching. 
            This summary covers scope boundaries, enforcement, and renewal protocols.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="/downloads/gcmwc-standards-manual.pdf" 
              className="flex items-center px-6 py-4 bg-teal text-navy font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all shadow-md"
            >
              <FileDown className="mr-3 h-5 w-5" /> Download Full Manual
            </a>
            <Link 
              to="/ethics" 
              className="flex items-center px-6 py-4 border-2 border-navy text-navy font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all"
            >
              Code of Ethics
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Purpose and Authority */}
        <div className="bg-white border border-beige p-8 md:p-12 shadow-sm rounded-sm">
          <div className="flex items-center space-x-4 mb-6">
            <ShieldCheck className="h-8 w-8 text-navy" />
            <h2 className="text-2xl font-bold text-navy uppercase tracking-widest">Purpose and Authority</h2>
          </div>
          <div className="space-y-4 text-navy/70 leading-relaxed italic">
            <p>
              GCMWC functions as an independent credentialing and accreditation body. 
              Its mandate is to define, regulate, and uphold professional standards in the education, training, and practice of Mental Wellness Coaches.
            </p>
            <p>
              The Commission retains authority to establish benchmarks and accredit programs. 
              We issue and revoke credentials, enforce ethics, and investigate formal complaints.
            </p>
          </div>
        </div>

        {/* Scope of Practice */}
        <div id="scope" className="bg-white border border-beige p-8 md:p-12 shadow-sm rounded-sm">
          <div className="flex items-center space-x-4 mb-6">
            <Scale className="h-8 w-8 text-navy" />
            <h2 className="text-2xl font-bold text-navy uppercase tracking-widest">Scope of Practice</h2>
          </div>
          <p className="text-navy/70 leading-relaxed italic mb-10">
            Mental Wellness Coaching is non-clinical and non-diagnostic. 
            Credential holders may not diagnose, treat, or manage mental health conditions.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Green Zone */}
            <div className="border border-green/20 bg-green/5 p-8 rounded-sm">
              <h3 className="flex items-center text-green font-bold text-lg uppercase tracking-widest mb-6">
                <CheckCircle2 className="mr-3 h-6 w-6" /> Green Zone
              </h3>
              <ul className="space-y-4 text-sm text-navy/80 italic font-medium">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-green rounded-full mt-2 mr-3 shrink-0"></span>
                  Educate on stress, resilience, and wellness principles.
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-green rounded-full mt-2 mr-3 shrink-0"></span>
                  Facilitate insight through powerful inquiry and listening.
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-green rounded-full mt-2 mr-3 shrink-0"></span>
                  Plan behavioral goals and provide structured accountability.
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-green rounded-full mt-2 mr-3 shrink-0"></span>
                  Teach non-clinical regulation tools like breathing and grounding.
                </li>
              </ul>
            </div>

            {/* Red Zone */}
            <div className="border border-amber/20 bg-amber/5 p-8 rounded-sm">
              <h3 className="flex items-center text-amber font-bold text-lg uppercase tracking-widest mb-6">
                <XCircle className="mr-3 h-6 w-6" /> Red Zone
              </h3>
              <ul className="space-y-4 text-sm text-navy/80 italic font-medium">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-amber rounded-full mt-2 mr-3 shrink-0"></span>
                  Diagnose mental health disorders using DSM or ICD criteria.
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-amber rounded-full mt-2 mr-3 shrink-0"></span>
                  Treat mental illness or prescribe clinical plans of care.
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-amber rounded-full mt-2 mr-3 shrink-0"></span>
                  Psychotherapy, including trauma analysis or clinical processing.
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-amber rounded-full mt-2 mr-3 shrink-0"></span>
                  Crisis intervention for suicide or domestic violence.
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-amber/20">
                <p className="text-xs font-bold text-amber uppercase tracking-widest mb-2 flex items-center">
                  <AlertCircle className="mr-2 h-4 w-4" /> Referral Triggers
                </p>
                <p className="text-xs text-navy/60 italic leading-relaxed">
                  Triggers include suicidal ideation, homicidal ideation, psychosis, or active addiction preventing engagement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enforcement and Discipline */}
        <div className="bg-white border border-beige p-8 md:p-12 shadow-sm rounded-sm">
          <div className="flex items-center space-x-4 mb-6">
            <Scale className="h-8 w-8 text-navy" />
            <h2 className="text-2xl font-bold text-navy uppercase tracking-widest">Enforcement and Discipline</h2>
          </div>
          <div className="space-y-4 text-navy/70 leading-relaxed italic">
            <p>
              Complaints may be submitted by clients, peers, or the general public. 
              The Commission may dismiss, request additional information, or initiate a formal investigation.
            </p>
            <p>
              Sanctions range from written reprimand and remediation to suspension or full revocation. 
              Interim suspension may be imposed if there is an immediate risk to public safety.
            </p>
          </div>
        </div>

        {/* Renewal and Grandparenting */}
        <div className="bg-white border border-beige p-8 md:p-12 shadow-sm rounded-sm">
          <div className="flex items-center space-x-4 mb-6">
            <RefreshCw className="h-8 w-8 text-navy" />
            <h2 className="text-2xl font-bold text-navy uppercase tracking-widest">Renewal and Grandparenting</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 text-navy/70 leading-relaxed italic">
            <div>
              <h4 className="text-navy font-bold text-sm uppercase tracking-widest mb-4">Credential Renewal</h4>
              <p className="text-sm mb-4">
                The MWC-C credential is valid for two years. 
                Renewal requires documented continuing education and a practice attestation.
              </p>
              <p className="text-sm">
                Candidates must remain in good standing and pay all applicable renewal fees to maintain their status.
              </p>
            </div>
            <div>
              <h4 className="text-navy font-bold text-sm uppercase tracking-widest mb-4">The Legacy Route</h4>
              <p className="text-sm mb-4">
                Grandparenting is a time-limited route for experienced practitioners. 
                It requires documented hours and equivalent training subject to review.
              </p>
              <p className="text-sm">
                Applicants must provide professional endorsements and pass the official Standards and Ethics exam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Disclaimer Block */}
      <section className="py-20 bg-beige/30 border-t border-beige">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white p-8 border-l-4 border-navy shadow-sm inline-block text-left">
            <p className="text-sm text-navy/80 italic leading-relaxed">
              GCMWC credentials do not constitute licensure, psychotherapy certification, or authorization to diagnose or treat mental health conditions. 
              Mental Wellness Coaching is a non-clinical discipline. Credential holders must comply with all applicable local laws governing professional practice.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Standards;
