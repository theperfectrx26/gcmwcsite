
import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import ConstellationBg from '../components/ConstellationBg';

const Contact: React.FC = () => {
  return (
    <main className="mx-auto w-full min-h-screen bg-white">
      <header className="relative py-20 bg-beige constellation-motif overflow-hidden border-b border-navy/5">
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold tracking-tight text-navy uppercase italic mb-6">
            Contact
          </h1>
          <p className="mt-3 max-w-3xl text-xl leading-relaxed text-navy/70 font-medium italic mb-8">
            Use this form for general inquiries, partnership requests, and university implementation
            discussions. For credential verification, use the Registry.
          </p>
          <div className="mt-5">
            <Link
              className="inline-flex items-center rounded-sm border-2 border-navy bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-navy transition hover:bg-navy hover:text-white shadow-md"
              to="/registry"
            >
              <Search className="mr-2 h-4 w-4" /> Open Registry
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-20">
        <ContactForm />
      </div>

      <section className="bg-beige/20 py-20 border-t border-beige">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-navy/40 mb-4">Official Channels</h3>
            <p className="text-sm text-navy/70 italic leading-relaxed">
              Registrar: registrar@gcmwc.org<br />
              Media: press@gcmwc.org
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-navy/40 mb-4">Global Headquarters</h3>
            <p className="text-sm text-navy/70 italic leading-relaxed">
              1200 Standards Plaza, Suite 400<br />
              London, WC2N 5DU, UK
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
