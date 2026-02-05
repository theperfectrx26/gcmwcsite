
import React from 'react';
import { Scale, ShieldAlert, CheckCircle, AlertCircle } from 'lucide-react';
import ConstellationBg from '../components/ConstellationBg';
import ComplaintForm from '../components/ComplaintForm';

const Ethics: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <header className="relative py-20 bg-beige overflow-hidden border-b border-beige">
        <ConstellationBg />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold tracking-tight text-navy uppercase italic mb-6">
            Ethics and Complaints
          </h1>
          <p className="mt-3 max-w-3xl text-xl leading-relaxed text-navy/70 font-medium italic">
            GCMWC enforces ethical standards and scope boundaries. Complaints may be submitted
            by clients, peers, or the public.
          </p>
        </div>
      </header>

      <section className="py-20 max-w-5xl mx-auto px-4 space-y-12">
        {/* Code of Ethics */}
        <div className="rounded-2xl border border-beige bg-white p-10 shadow-sm border-l-8 border-navy">
          <div className="flex items-center space-x-4 mb-6">
            <Scale className="h-8 w-8 text-navy" />
            <h2 className="text-2xl font-bold text-navy uppercase tracking-widest italic">Code of Ethics</h2>
          </div>
          <ul className="space-y-4 text-sm text-navy/70 italic font-medium">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-teal mr-4 shrink-0 mt-0.5" />
              <span>Represent qualifications honestly and adhere strictly to scope.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-teal mr-4 shrink-0 mt-0.5" />
              <span>Disclose conflicts of interest and avoid dual relationships.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-teal mr-4 shrink-0 mt-0.5" />
              <span>Protect confidentiality unless there is imminent risk of harm or legal mandate.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-teal mr-4 shrink-0 mt-0.5" />
              <span>Use clear agreements on fees, cancellation, and referral when needs exceed scope.</span>
            </li>
          </ul>
        </div>

        {/* Process and Cooperation */}
        <div className="rounded-2xl border border-beige bg-white p-10 shadow-sm border-r-8 border-amber">
          <div className="flex items-center space-x-4 mb-6">
            <ShieldAlert className="h-8 w-8 text-amber" />
            <h2 className="text-2xl font-bold text-navy uppercase tracking-widest italic">What happens after a complaint</h2>
          </div>
          <div className="space-y-6 text-sm leading-7 text-navy/70 italic">
            <p>
              The Commission may dismiss, request additional information, or investigate.
              Credential holders must cooperate with investigations.
            </p>
            <p>
              Sanctions may include reprimand, remediation or probation, suspension, or revocation.
              Interim suspension may be used when there is immediate risk to the public.
            </p>
          </div>
          <div className="mt-10 rounded-sm border border-amber/20 bg-amber/5 p-6 flex items-start space-x-4">
            <AlertCircle className="h-6 w-6 text-amber shrink-0 mt-0.5" />
            <p className="text-xs font-bold text-navy/80 uppercase tracking-widest leading-relaxed">
              If you believe someone is at imminent risk, do not use this form.
              Contact local emergency services immediately.
            </p>
          </div>
        </div>

        {/* Form Integration */}
        <div id="complaint-form" className="pt-10">
          <ComplaintForm />
        </div>
      </section>
    </div>
  );
};

export default Ethics;
