import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComplaintForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-beige bg-white p-8 md:p-12 shadow-sm text-center animate-in fade-in zoom-in duration-300">
        <div className="mx-auto w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="h-8 w-8 text-teal" />
        </div>
        <h2 className="text-2xl font-bold text-navy uppercase tracking-widest italic mb-4">Complaint submitted</h2>
        <p className="mt-3 text-sm leading-6 text-navy/70 italic max-w-lg mx-auto">
          We received your complaint intake. If more information is required, we will follow up
          using the contact details you provided.
        </p>
        <p className="mt-4 text-sm leading-6 text-navy/70 italic">
          For credential verification, use the public registry.
        </p>
        <div className="mt-10">
          <Link
            to="/registry"
            className="inline-flex items-center rounded-sm border-2 border-navy bg-white px-8 py-3 text-xs font-bold uppercase tracking-widest text-navy transition hover:bg-navy hover:text-white"
          >
            <Search className="mr-2 h-4 w-4" /> Open Registry
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-beige bg-white p-8 md:p-12 shadow-sm">
      <h2 className="text-xl font-bold text-navy uppercase tracking-widest italic mb-3">Submit a complaint</h2>
      <p className="max-w-3xl text-sm leading-6 text-navy/60 italic mb-8">
        This form is for professional conduct and scope concerns related to a GCMWC credential holder.
        It is not an emergency service.
      </p>

      <form
        className="grid gap-6"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Your name</label>
            <input
              required
              className="w-full px-4 py-3 bg-beige/10 border border-beige focus:outline-none focus:border-teal transition-all text-sm italic"
              name="name"
              placeholder="Full Name"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Email</label>
            <input
              required
              type="email"
              className="w-full px-4 py-3 bg-beige/10 border border-beige focus:outline-none focus:border-teal transition-all text-sm italic"
              name="email"
              placeholder="email@address.com"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Credential holder name</label>
            <input
              required
              className="w-full px-4 py-3 bg-beige/10 border border-beige focus:outline-none focus:border-teal transition-all text-sm italic"
              name="holderName"
              placeholder="Coach Name"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Credential ID (if known)</label>
            <input
              className="w-full px-4 py-3 bg-beige/10 border border-beige focus:outline-none focus:border-teal transition-all text-sm italic"
              name="credentialId"
              placeholder="C-XXXX"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Summary</label>
          <textarea
            required
            rows={6}
            className="w-full px-4 py-3 bg-beige/10 border border-beige focus:outline-none focus:border-teal transition-all text-sm italic resize-none"
            name="summary"
            placeholder="What happened, when it happened, and why you believe it violates scope or ethics."
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center w-fit rounded-sm bg-teal px-10 py-4 text-xs font-bold text-navy uppercase tracking-widest shadow-md transition hover:bg-navy hover:text-white"
        >
          Submit complaint <Send className="ml-3 h-4 w-4" />
        </button>
      </form>
    </div>
  );
};

export default ComplaintForm;