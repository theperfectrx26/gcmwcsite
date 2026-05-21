
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle, BookOpen, ShieldCheck, ArrowRight, AlertCircle } from 'lucide-react';
import ConstellationBg from '../components/ConstellationBg';

const MWCT: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <header className="relative py-20 bg-beige overflow-hidden">
        <ConstellationBg />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-amber text-navy text-[10px] font-bold uppercase tracking-widest mb-4">
                Training Designation
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 italic uppercase tracking-tight">
                MWC-T: Trained Mental Wellness Coach
              </h1>
              <p className="text-xl leading-relaxed text-navy/80 font-medium italic">
                The MWC-T Trained Mental Wellness Coach designation is the foundational standard for professional wellness coaching. 
                This 10-week program follows a structured, self-paced path with weekly milestones and rigorous assessments.
              </p>
            </div>
            <div className="shrink-0 pb-2">
              <a href="https://gcmwc.learnworlds.com/home" className="px-8 py-4 bg-navy text-white font-bold uppercase tracking-widest hover:bg-teal transition-all shadow-md">
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-8 uppercase tracking-widest italic border-b border-navy/10 pb-4">
              10-Week Curriculum
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-amber/20 flex items-center justify-center mr-4 shrink-0 mt-1">
                  <BookOpen className="h-3 w-3 text-navy" />
                </div>
                <div>
                  <h4 className="font-bold text-navy uppercase tracking-wider text-sm mb-1">Weekly Instructional Plan</h4>
                  <p className="text-[10px] text-navy/70 leading-relaxed italic uppercase tracking-wider mb-2">Weeks 1–8: Instruction & Submissions | Weeks 9–10: Completion</p>
                  <ul className="text-xs text-navy/60 italic space-y-1">
                    <li>• Week 1: Orientation & Mandatory Intro Discussion</li>
                    <li>• Week 2: Module 1A–E; Case Study & Peer Discussion</li>
                    <li>• Week 3: Module 2A–G; Peer Lab Video 1 & Exam</li>
                    <li>• Week 4: Module 3A–F; Midterm Integrated Video</li>
                    <li>• Week 5: Module 4A–D; Case Study & Peer Discussion</li>
                    <li>• Week 6: Module 5A–B; Peer Lab Video 2 & Exam</li>
                    <li>• Week 7: Module 6A–D; Case Study & Peer Discussion</li>
                    <li>• Week 8: Module 7A–F; Final Prep & scheduling</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-amber/20 flex items-center justify-center mr-4 shrink-0 mt-1">
                  <CheckCircle className="h-3 w-3 text-navy" />
                </div>
                <div>
                  <h4 className="font-bold text-navy uppercase tracking-wider text-sm mb-1">Assessment Standards</h4>
                  <p className="text-xs text-navy/70 leading-relaxed italic">
                    All coursework—discussions (reply to 2 peers), case studies, and exams—is pass/fail. Exams are restricted to two attempts maximum. 
                    Peer labs and the midterm are rubric-evaluated.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-4 shrink-0 mt-1">
                  <AlertCircle className="h-3 w-3 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-red-800 uppercase tracking-wider text-sm mb-1">Academic Integrity</h4>
                  <p className="text-xs text-red-800/70 leading-relaxed italic">The use of AI tools is strictly prohibited for all coursework, including discussions, scripts, and video submissions.</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <div className="bg-beige/40 p-10 border-l-4 border-amber mb-10">
              <h3 className="text-lg font-bold text-navy uppercase tracking-widest mb-6 italic">Format & Schedule</h3>
              <div className="space-y-4 text-sm text-navy/70 leading-relaxed italic">
                <p>
                  The program is 100% online and self-paced with weekly deadlines. There are no mandatory weekly live attendance requirements.
                </p>
                <p>
                  Learners have 8 weeks of active coursework followed by a 2-week completion window. Week 10 serves as the absolute cutoff for all program requirements.
                </p>
                <p className="text-navy font-bold">
                  Spiritual or faith integration is client-led and entirely optional by user consent.
                </p>
              </div>
            </div>
            
            <div className="bg-navy text-white p-8">
              <h4 className="font-bold text-sm uppercase tracking-widest mb-4">Path to MWC-C</h4>
              <p className="text-xs text-white/70 mb-6 italic leading-relaxed">
                MWC-T is the mandatory prerequisite for professional certification. 
                Trained coaches may proceed to MWC-C after completing the required professional competency assessments.
              </p>
              <Link to="/credentials/mwc-c" className="inline-flex items-center text-teal font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">
                View MWC-C Pathway <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MWCT;
