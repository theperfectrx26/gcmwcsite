
import React from 'react';
import { ShieldCheck, Info, AlertTriangle, Users, BookOpen, Clock, Wallet, CheckCircle } from 'lucide-react';

const MWFR: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-navy text-white py-20 constellation-motif">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6 italic tracking-tight uppercase">MWFR Training</h1>
          <p className="text-xl text-teal/80 font-medium max-w-4xl leading-relaxed italic">
            Mental Wellness First Response (MWFR) is a structured training that equips non-clinicians to recognize early warning signs, respond appropriately in the moment, and connect individuals to support while staying within a clear scope.
          </p>
        </div>
      </section>

      {/* Core Details */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-8 uppercase tracking-widest italic border-b border-navy/10 pb-4">What You Learn</h2>
            <p className="text-navy/70 leading-relaxed mb-10 italic">
              MWFR focuses on practical conversation skills, stabilization tools, escalation pathways, warm handoffs, and ethical boundaries. 
              It is early intervention and supported referral. It is not therapy, diagnosis, or crisis negotiation.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="bg-beige/40 p-6 border border-navy/5">
                <Clock className="h-8 w-8 text-teal mb-4" />
                <p className="text-[10px] font-bold text-navy/40 uppercase tracking-widest italic mb-1">Duration</p>
                <p className="text-lg font-bold text-navy italic">8 Hours</p>
              </div>
              <div className="bg-beige/40 p-6 border border-navy/5">
                <Wallet className="h-8 w-8 text-teal mb-4" />
                <p className="text-[10px] font-bold text-navy/40 uppercase tracking-widest italic mb-1">Tuition Fee</p>
                <p className="text-lg font-bold text-navy italic">$50 per attendee</p>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-navy mb-6 uppercase tracking-widest flex items-center italic">
              <BookOpen className="h-5 w-5 mr-3 text-teal" /> Core Curriculum
            </h3>
            <ul className="space-y-4 text-sm text-navy/70 mb-10 italic">
              <li className="flex items-start"><CheckCircle className="h-4 w-4 text-teal mr-3 mt-0.5" /> Recognize early behavioral and emotional warning signs.</li>
              <li className="flex items-start"><CheckCircle className="h-4 w-4 text-teal mr-3 mt-0.5" /> Practical non-clinical stabilization tools for immediate use.</li>
              <li className="flex items-start"><CheckCircle className="h-4 w-4 text-teal mr-3 mt-0.5" /> Mastering the referral process and warm handoff protocols.</li>
              <li className="flex items-start"><CheckCircle className="h-4 w-4 text-teal mr-3 mt-0.5" /> Enforcing ethical boundaries and non-clinical scope.</li>
              <li className="flex items-start"><CheckCircle className="h-4 w-4 text-teal mr-3 mt-0.5" /> Escalation pathways for complex or high-risk cases.</li>
            </ul>
          </div>

          <div className="space-y-10">
            <div className="bg-amber/5 border-l-8 border-amber p-10 shadow-sm">
              <h3 className="text-lg font-bold text-navy mb-6 uppercase tracking-widest flex items-center italic">
                <AlertTriangle className="h-6 w-6 mr-3 text-amber" /> What it is not
              </h3>
              <ul className="space-y-4 text-sm text-navy/70 italic leading-relaxed">
                <li className="flex items-start">It is not therapy or psychological counseling.</li>
                <li className="flex items-start">It is not diagnostic assessment for mental health.</li>
                <li className="flex items-start">It is not crisis negotiation or emergency intervention.</li>
                <li className="flex items-start">It is not a substitute for clinical care.</li>
              </ul>
            </div>

            <div className="bg-navy p-10 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-lg font-bold uppercase tracking-widest flex items-center italic mb-6">
                  <ShieldCheck className="h-6 w-6 mr-3 text-teal" /> Target Audience
                </h3>
                <p className="text-white/60 text-sm mb-8 leading-relaxed italic">
                  Ideal for leaders in businesses, faith-based organizations, community volunteers, and organizational staff.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 text-[10px] font-bold uppercase tracking-widest text-white/40">Business Leaders</div>
                  <div className="bg-white/5 p-4 text-[10px] font-bold uppercase tracking-widest text-white/40">Faith Leaders</div>
                  <div className="bg-white/5 p-4 text-[10px] font-bold uppercase tracking-widest text-white/40">Volunteers</div>
                  <div className="bg-white/5 p-4 text-[10px] font-bold uppercase tracking-widest text-white/40">Community Orgs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-24 bg-beige/30 border-t border-beige">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-6 uppercase tracking-widest italic">Register for MWFR</h2>
          <p className="text-navy/50 text-center mb-16 text-base italic max-w-2xl mx-auto">Standard training sessions are held monthly. Please complete the registration intake below.</p>
          
          <form className="bg-white p-12 border border-beige shadow-xl space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-navy/40 mb-1">Full Name</label>
                <input type="text" required className="w-full px-5 py-4 bg-beige/10 border border-beige focus:outline-none focus:border-navy italic text-sm" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-navy/40 mb-1">Email Address</label>
                <input type="email" required className="w-full px-5 py-4 bg-beige/10 border border-beige focus:outline-none focus:border-navy italic text-sm" placeholder="email@organization.com" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-navy/40 mb-1">Organization</label>
                <input type="text" required className="w-full px-5 py-4 bg-beige/10 border border-beige focus:outline-none focus:border-navy italic text-sm" placeholder="Organization Name" />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-navy/40 mb-1">Administrative Role</label>
                <input type="text" required className="w-full px-5 py-4 bg-beige/10 border border-beige focus:outline-none focus:border-navy italic text-sm" placeholder="Title" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-navy/40 mb-1">Attendees Count</label>
                <input type="number" min="1" required className="w-full px-5 py-4 bg-beige/10 border border-beige focus:outline-none focus:border-navy italic text-sm" placeholder="1" />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-navy/40 mb-1">Location</label>
                <input type="text" required className="w-full px-5 py-4 bg-beige/10 border border-beige focus:outline-none focus:border-navy italic text-sm" placeholder="City, Country" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-navy/40 mb-1">Preferred Training Date</label>
              <select className="w-full px-5 py-4 bg-beige/10 border border-beige focus:outline-none focus:border-navy italic text-sm">
                <option>Next Available Open Session</option>
                <option>Inquire about Private Institutional Training</option>
              </select>
            </div>
            <button type="submit" className="w-full py-5 bg-navy text-white font-bold uppercase tracking-[0.2em] hover:bg-teal hover:text-navy transition-all shadow-lg">
              Submit Registration Intake
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default MWFR;
