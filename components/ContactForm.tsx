import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xdajaloy", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-beige bg-white p-8 md:p-12 shadow-sm text-center animate-in fade-in zoom-in duration-300">
        <div className="mx-auto w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="h-8 w-8 text-teal" />
        </div>
        <h2 className="text-2xl font-bold text-navy uppercase tracking-widest italic mb-4">Thanks, your message has been sent.</h2>
        <p className="max-w-md mx-auto text-sm leading-7 text-navy/70 italic">
          We received your message and have forwarded it to support@theperfectrx.com. If your request is time-sensitive, include dates and decision-maker
          contact details so we can route it correctly.
        </p>
        <div className="mt-10">
          <button 
            onClick={() => setStatus('idle')}
            className="rounded-sm border-2 border-navy bg-white px-8 py-3 text-xs font-bold uppercase tracking-widest text-navy transition hover:bg-navy hover:text-white"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-beige bg-white p-8 md:p-12 shadow-sm">
      <h2 className="text-xl font-bold text-navy uppercase tracking-widest italic mb-8 border-b border-beige pb-4">Send a message</h2>

      {status === 'error' && (
        <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 text-sm italic flex items-center">
          <AlertCircle className="h-5 w-5 mr-3 shrink-0" />
          Message not sent. Please email support@theperfectrx.com.
        </div>
      )}

      <form
        className="grid gap-6"
        action="https://formspree.io/f/xdajaloy"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="_subject" value="GCMWC Website Inquiry" />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Name</label>
            <input
              required
              className="w-full px-4 py-3 bg-beige/10 border border-beige focus:outline-none focus:border-teal transition-all text-sm italic"
              name="name"
              placeholder="Your Name"
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

        <div className="space-y-1">
          <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Topic</label>
          <select
            name="topic"
            className="w-full px-4 py-3 bg-beige/10 border border-beige focus:outline-none focus:border-teal transition-all text-sm italic appearance-none"
            defaultValue="general"
          >
            <option value="general">General inquiry</option>
            <option value="institutional">Institutional inquiry</option>
            <option value="university">University implementation</option>
            <option value="accreditation">Program accreditation</option>
            <option value="mwfr">MWFR training</option>
            <option value="media">Media request</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Message</label>
          <textarea
            required
            rows={7}
            className="w-full px-4 py-3 bg-beige/10 border border-beige focus:outline-none focus:border-teal transition-all text-sm italic resize-none"
            name="message"
            placeholder="Please provide details of your inquiry..."
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center w-fit rounded-sm bg-teal px-10 py-4 text-xs font-bold text-navy uppercase tracking-widest shadow-md transition hover:bg-navy hover:text-white"
        >
          Send message <Send className="ml-3 h-4 w-4" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;