import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, FileUp, Info } from 'lucide-react';

const ComplaintForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-none border border-beige bg-white p-8 md:p-16 shadow-xl text-center animate-in fade-in zoom-in duration-500">
        <div className="mx-auto w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mb-8">
          <CheckCircle2 className="h-10 w-10 text-teal" />
        </div>
        <h2 className="text-3xl font-bold text-navy uppercase tracking-widest italic mb-6">Complaint Received</h2>
        <div className="w-16 h-1 bg-gold mx-auto mb-8"></div>
        <p className="max-w-xl mx-auto text-base leading-relaxed text-navy/70 italic mb-8">
          Your formal complaint intake has been submitted to the Commission. We prioritize public protection and will review your submission for jurisdiction and merit. If additional information is required, a GCMWC representative will contact you at the email provided.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="px-10 py-4 bg-navy text-white font-bold uppercase tracking-widest hover:bg-teal transition-all shadow-lg"
        >
          Submit Another Report
        </button>
      </div>
    );
  }

  return (
    <div id="complaint-form" className="bg-white border border-beige shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-full bg-gold"></div>
      <div className="p-8 md:p-12 lg:p-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-navy uppercase tracking-widest italic mb-4">Submit a Complaint</h2>
          <p className="text-navy/60 italic text-sm leading-relaxed max-w-2xl">
            Use this form to report concerns related to GCMWC credential holders, applicants, faculty, evaluators, or approved institutional partners. This form is for ethics, scope, or professional conduct concerns. It is not an emergency service.
          </p>
        </div>

        <form
          className="space-y-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          {/* Complainant Info */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-gold uppercase tracking-[0.3em] border-b border-beige pb-2">Complainant Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Your Full Name</label>
                <input
                  required
                  className="w-full px-4 py-4 bg-cream/30 border border-beige focus:outline-none focus:border-teal transition-all text-sm font-medium"
                  name="fullName"
                  placeholder="Legal Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Email Address</label>
                <input
                  required
                  type="email"
                  className="w-full px-4 py-4 bg-cream/30 border border-beige focus:outline-none focus:border-teal transition-all text-sm font-medium"
                  name="email"
                  placeholder="name@official.com"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Phone Number</label>
                <input
                  className="w-full px-4 py-4 bg-cream/30 border border-beige focus:outline-none focus:border-teal transition-all text-sm font-medium"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Organization (if applicable)</label>
                <input
                  className="w-full px-4 py-4 bg-cream/30 border border-beige focus:outline-none focus:border-teal transition-all text-sm font-medium"
                  name="organization"
                  placeholder="Educational Institution / Employer"
                />
              </div>
            </div>
          </div>

          {/* Respondent Info */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-gold uppercase tracking-[0.3em] border-b border-beige pb-2">Respondent Details</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Name of Credential Holder or Respondent</label>
                <input
                  required
                  className="w-full px-4 py-4 bg-cream/30 border border-beige focus:outline-none focus:border-teal transition-all text-sm font-medium"
                  name="respondentName"
                  placeholder="Full Name of Individual"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Credential ID (if known)</label>
                <input
                  className="w-full px-4 py-4 bg-cream/30 border border-beige focus:outline-none focus:border-teal transition-all text-sm font-medium"
                  name="credentialId"
                  placeholder="MWC-X-000000"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Institution or Program (if applicable)</label>
              <input
                className="w-full px-4 py-4 bg-cream/30 border border-beige focus:outline-none focus:border-teal transition-all text-sm font-medium"
                name="program"
                placeholder="Training Provider / School Name"
              />
            </div>
          </div>

          {/* Concern Details */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-gold uppercase tracking-[0.3em] border-b border-beige pb-2">Incident Details</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Type of Concern</label>
                <select
                  required
                  className="w-full px-4 py-4 bg-cream/30 border border-beige focus:outline-none focus:border-teal transition-all text-sm font-medium appearance-none"
                  name="concernType"
                >
                  <option value="">Select Category</option>
                  <option value="Scope Violation">Scope Violation</option>
                  <option value="Ethics Violation">Ethics Violation</option>
                  <option value="Credential Misrepresentation">Credential Misrepresentation</option>
                  <option value="Confidentiality Concern">Confidentiality Concern</option>
                  <option value="Boundary Concern">Boundary Concern</option>
                  <option value="Academic Integrity">Academic Integrity</option>
                  <option value="Institutional Conduct">Institutional Conduct</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Date of Incident</label>
                  <input
                    type="date"
                    className="w-full px-4 py-4 bg-cream/30 border border-beige focus:outline-none focus:border-teal transition-all text-sm font-medium"
                    name="incidentDate"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Location</label>
                  <input
                    className="w-full px-4 py-4 bg-cream/30 border border-beige focus:outline-none focus:border-teal transition-all text-sm font-medium"
                    name="location"
                    placeholder="City, State, or Web"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Summary of Concern</label>
                <span className="text-[9px] text-navy/40 italic flex items-center"><Info className="h-3 w-3 mr-1" /> Board Review Only</span>
              </div>
              <textarea
                required
                rows={8}
                className="w-full px-4 py-4 bg-cream/30 border border-beige focus:outline-none focus:border-teal transition-all text-sm font-medium resize-none"
                name="summary"
                placeholder="Describe what happened, when it happened, who was involved, and why you believe it may violate GCMWC standards."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Witness or Additional Contacts</label>
                <input
                  className="w-full px-4 py-4 bg-cream/30 border border-beige focus:outline-none focus:border-teal transition-all text-sm font-medium"
                  name="witnesses"
                  placeholder="Names and contact info (if any)"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Supporting Documentation</label>
                <div className="relative group">
                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    name="docs"
                    multiple
                  />
                  <div className="w-full px-4 py-4 bg-cream/30 border-2 border-dashed border-beige group-hover:border-teal flex items-center justify-center text-navy/40 text-xs font-bold uppercase transition-colors">
                    <FileUp className="h-4 w-4 mr-2" /> Upload Files
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <label className="flex items-start space-x-3 cursor-pointer group">
              <input
                required
                type="checkbox"
                className="mt-1 h-4 w-4 border-2 border-beige text-teal focus:ring-teal"
              />
              <span className="text-xs text-navy/70 italic font-medium group-hover:text-navy transition-colors">
                I certify that the information provided is accurate to the best of my knowledge and understand that false reporting may be subject to review or disciplinary measure.
              </span>
            </label>
          </div>

          <div className="bg-navy p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] max-w-md">
              By submitting this form, you initiate a formal board review process. All information is managed under GCMWC ethics and public protection protocols.
            </p>
            <button
              type="submit"
              className="px-12 py-5 bg-gold text-navy font-bold uppercase tracking-widest shadow-xl hover:bg-white transition-all whitespace-nowrap"
            >
              Submit Complaint <Send className="ml-3 h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComplaintForm;