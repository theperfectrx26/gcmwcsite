
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Institutional Disclaimer */}
        <div className="mb-20 border-l-8 border-amber bg-white/5 p-10 shadow-2xl">
          <p className="text-sm font-medium leading-relaxed opacity-90 italic max-w-5xl">
            GCMWC credentials do not constitute licensure, psychotherapy certification, or authorization to diagnose or treat mental health conditions. 
            Mental Wellness Coaching is a non-clinical discipline. Credential holders must comply with all applicable local laws governing professional practice.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="space-y-6">
            <h4 className="font-bold text-teal text-[10px] uppercase tracking-[0.3em]">Governance</h4>
            <ul className="space-y-4 text-xs italic opacity-70">
              <li><Link to="/standards" className="hover:text-teal transition-colors">Standards Manual</Link></li>
              <li><Link to="/ethics" className="hover:text-teal transition-colors">Code of Ethics</Link></li>
              <li><Link to="/standards#scope" className="hover:text-teal transition-colors">Scope of Practice</Link></li>
              <li><Link to="/ethics#complaints" className="hover:text-teal transition-colors">Submit a Complaint</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-teal text-[10px] uppercase tracking-[0.3em]">Credentials</h4>
            <ul className="space-y-4 text-xs italic opacity-70">
              <li><Link to="/credentials/mwc-t" className="hover:text-teal transition-colors">MWC-T (Training)</Link></li>
              <li><Link to="/credentials/mwc-c" className="hover:text-teal transition-colors">MWC-C (Professional)</Link></li>
              <li><Link to="/program-accreditation" className="hover:text-teal transition-colors">Accredit Your Program</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-teal text-[10px] uppercase tracking-[0.3em]">Tools</h4>
            <ul className="space-y-4 text-xs italic opacity-70">
              <li><Link to="/registry" className="hover:text-teal transition-colors">Verify a Credential</Link></li>
              <li><Link to="/directory" className="hover:text-teal transition-colors">Referral Directory</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-teal text-[10px] uppercase tracking-[0.3em]">Partnerships</h4>
            <ul className="space-y-4 text-xs italic opacity-70">
              <li><Link to="/schools" className="hover:text-teal transition-colors">Schools Hub</Link></li>
              <li><Link to="/mwfr" className="hover:text-teal transition-colors">MWFR Training</Link></li>
              <li><Link to="/contact" className="hover:text-teal transition-colors">Institutional Inquiries</Link></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1 space-y-6">
            <h4 className="font-bold text-teal text-[10px] uppercase tracking-[0.3em]">Contact</h4>
            <p className="text-xs opacity-60 leading-relaxed italic">The Registrar aims to respond to all formal inquiries within 3 business days.</p>
            <Link to="/contact" className="inline-block px-8 py-3 border-2 border-teal text-teal text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-teal hover:text-navy transition-all">
              Inquire
            </Link>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.25em] opacity-40">
          <p>© 2026 Global Commission for Mental Wellness Coaching. All rights reserved.</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
            <Link to="/privacy" className="hover:text-teal">Privacy</Link>
            <Link to="/terms" className="hover:text-teal">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
