
import React from 'react';
import { ShieldCheck, BookOpen, Award, Scale, AlertTriangle } from 'lucide-react';
import ConstellationBg from '../components/ConstellationBg';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <header className="relative py-20 bg-beige overflow-hidden">
        <ConstellationBg />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 italic uppercase tracking-tight">
            About GCMWC
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-navy/80 font-medium italic">
            The Global Commission for Mental Wellness Coaching (GCMWC) is an independent international standards-setting and credentialing body. 
            We exist to protect the public and uphold professional standards in non-clinical mental wellness coaching.
          </p>
        </div>
      </header>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-navy mb-8 uppercase tracking-widest border-b border-navy/10 pb-4">
            Our Mandate
          </h2>
          <p className="text-lg text-navy/70 leading-relaxed max-w-4xl">
            GCMWC serves as the global authority for the definition and enforcement of mental wellness coaching standards. 
            Our work ensures that non-clinical support remains safe, effective, and ethically grounded.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-beige p-8 border-t-4 border-navy shadow-sm">
            <BookOpen className="h-8 w-8 text-teal mb-6" />
            <h3 className="text-lg font-bold text-navy mb-4 uppercase tracking-wider">Standards</h3>
            <p className="text-sm leading-relaxed text-navy/70">
              We publish official standards for training, evaluation, scope of practice, and professional conduct. 
              These standards provide a unified framework for the entire profession.
            </p>
          </div>
          <div className="bg-sage p-8 border-t-4 border-navy shadow-sm">
            <Award className="h-8 w-8 text-teal mb-6" />
            <h3 className="text-lg font-bold text-navy mb-4 uppercase tracking-wider">Credentialing</h3>
            <p className="text-sm leading-relaxed text-navy/70">
              We issue tiered credentials that distinguish training completion from professional readiness. 
              Each tier represents a validated level of competence and practice authority.
            </p>
          </div>
          <div className="bg-lavender p-8 border-t-4 border-navy shadow-sm">
            <Scale className="h-8 w-8 text-teal mb-6" />
            <h3 className="text-lg font-bold text-navy mb-4 uppercase tracking-wider">Accountability</h3>
            <p className="text-sm leading-relaxed text-navy/70">
              We accept complaints and investigate violations of our code of ethics. 
              The Commission enforces standards through formal disciplinary actions and public disclosures.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-navy mb-8 uppercase tracking-widest italic">
              What we do not do
            </h2>
            <div className="space-y-6 text-navy/70 leading-relaxed italic">
              <p>
                GCMWC credentials do not constitute licensure, psychotherapy certification, or authorization to diagnose or treat mental health conditions. 
                Mental Wellness Coaching is a non-clinical discipline.
              </p>
              <p>
                We do not provide direct clinical services or individual therapy. Our role is strictly limited to standards-setting, 
                accreditation of training programs, and professional credentialing.
              </p>
            </div>

            <div className="mt-12 p-8 border border-amber/30 bg-amber/5 rounded flex items-start space-x-4">
              <AlertTriangle className="h-6 w-6 text-amber shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-navy uppercase tracking-widest mb-2">Crisis Warning</p>
                <p className="text-sm text-navy/70 leading-relaxed">
                  If you are in crisis or experiencing a mental health emergency, contact your local emergency services or a clinical professional immediately. 
                  Mental Wellness Coaching is not a crisis intervention service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
