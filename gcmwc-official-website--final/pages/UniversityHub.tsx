
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ShieldCheck, GraduationCap, ClipboardCheck, ArrowRight, Map, AlertTriangle } from 'lucide-react';
import ConstellationBg from '../components/ConstellationBg';

const UniversityHub: React.FC = () => {
  return (
    <main className="bg-white min-h-screen">
      <header className="relative py-20 bg-beige constellation-motif overflow-hidden border-b border-navy/5">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-navy uppercase italic mb-6">
            Implement Mental Wellness Coaching as a University Course
          </h1>
          <p className="mt-3 max-w-4xl text-xl leading-relaxed text-navy/70 font-medium italic mb-8">
            GCMWC supports universities and colleges that want to offer Mental Wellness Coaching
            as a structured, non-clinical course with clear scope boundaries and accountability.
          </p>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-navy/50 italic mb-10">
            This is not therapist training. It is skill-based coaching education with guardrails,
            referral triggers, and standardized evaluation.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/schools/kit"
              className="px-8 py-4 bg-teal text-navy text-xs font-bold uppercase tracking-widest shadow-md transition hover:bg-navy hover:text-white"
            >
              University Implementation Kit
            </Link>
            <Link
              to="/schools/pilot"
              className="px-8 py-4 border-2 border-navy bg-white text-xs font-bold uppercase tracking-widest text-navy transition hover:bg-navy hover:text-white"
            >
              Start a Pilot Application
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-navy bg-white text-xs font-bold uppercase tracking-widest text-navy transition hover:bg-navy hover:text-white"
            >
              Book a Demo Call
            </Link>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-20 space-y-16">
        <div className="rounded-sm border border-beige bg-white p-10 shadow-sm border-l-8 border-navy">
          <h2 className="text-2xl font-bold text-navy uppercase tracking-widest italic mb-8">What universities get</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-8 bg-beige/30 border-t-2 border-navy">
              <h3 className="font-bold text-navy uppercase tracking-wider text-sm mb-4">Course-ready framework</h3>
              <p className="text-sm leading-7 text-navy/70 italic">
                A modular structure that fits typical academic pacing and can be delivered as an
                elective, certificate track, or co-curricular program.
              </p>
            </div>
            <div className="p-8 bg-sage/30 border-t-2 border-teal">
              <h3 className="font-bold text-navy uppercase tracking-wider text-sm mb-4">Assessment and evaluation</h3>
              <p className="text-sm leading-7 text-navy/70 italic">
                Standardized evaluation language, competency rubric alignment, and clear passing
                standards for progression.
              </p>
            </div>
            <div className="p-8 bg-lavender/30 border-t-2 border-navy">
              <h3 className="font-bold text-navy uppercase tracking-wider text-sm mb-4">Risk management guardrails</h3>
              <p className="text-sm leading-7 text-navy/70 italic">
                Scope boundaries, referral triggers, and escalation pathways that protect students,
                faculty, and the institution.
              </p>
            </div>
            <div className="p-8 bg-beige/30 border-t-2 border-amber">
              <h3 className="font-bold text-navy uppercase tracking-wider text-sm mb-4">Accountability infrastructure</h3>
              <p className="text-sm leading-7 text-navy/70 italic">
                Documentation expectations, complaint pathways, and credential verification that
                supports institutional oversight.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-sm border border-beige bg-white p-10 shadow-sm">
          <h2 className="text-2xl font-bold text-navy uppercase tracking-widest italic mb-8">Implementation pathway</h2>
          <div className="grid gap-4 md:grid-cols-5">
            {[
              ["1", "Discovery", "Align on course model, scope, and institutional owner."],
              ["2", "Pilot setup", "Select term, faculty sponsor, and enrollment approach."],
              ["3", "Faculty readiness", "Train instructor and align evaluation approach."],
              ["4", "Course delivery", "Run the term with documentation and guardrails."],
              ["5", "Audit and renewal", "Review outcomes and update for next cohort."],
            ].map(([step, title, desc]) => (
              <div key={step} className="p-6 bg-beige/10 border-t-4 border-navy">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal text-xs font-bold text-navy">
                    {step}
                  </div>
                  <div className="text-[10px] font-bold text-navy uppercase tracking-[0.2em]">{title}</div>
                </div>
                <p className="text-[11px] leading-relaxed text-navy/60 italic">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-sm border border-beige bg-white p-10 shadow-sm border-r-8 border-amber">
          <h2 className="text-2xl font-bold text-navy uppercase tracking-widest italic mb-6">Scope and safety</h2>
          <p className="text-sm leading-7 text-navy/70 italic max-w-4xl">
            Mental Wellness Coaching is non-clinical. It does not authorize diagnosis, psychotherapy,
            crisis intervention, or medical care. Institutions should align this course with campus
            counseling and emergency protocols.
          </p>
          <div className="mt-8 p-6 bg-amber/5 border border-amber/20 flex items-start space-x-4">
            <AlertTriangle className="h-6 w-6 text-amber shrink-0 mt-0.5" />
            <p className="text-xs font-bold text-navy/80 uppercase tracking-widest leading-relaxed">
              Referral triggers include suicidal or homicidal ideation, psychosis, or active addiction
              preventing engagement. These concerns require immediate referral to appropriate services.
            </p>
          </div>
        </div>

        <div className="rounded-sm border border-beige bg-white p-10 shadow-sm">
          <h2 className="text-2xl font-bold text-navy uppercase tracking-widest italic mb-4">What it looks like in a semester</h2>
          <p className="text-sm leading-7 text-navy/50 italic mb-8">
            Universities can map the framework into a standard term structure. The implementation kit includes
            a semester map and instructor guidance you can adapt to your institution.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Weeks 1–3", "Foundations and scope", "Non-clinical boundaries, ethics, coaching relationship."],
              ["Weeks 4–6", "Core coaching skills", "Presence, listening, inquiry, goal-setting."],
              ["Weeks 7–10", "Applied practice", "Structured practice labs with documentation and feedback."],
              ["Weeks 11–13", "Evaluation readiness", "Competency alignment and remediation pathways."],
              ["Weeks 14–15", "Capstone and review", "Demonstration, review, and next-step advising."],
            ].map(([range, title, desc]) => (
              <div key={range} className="p-6 bg-beige/20 border-l-4 border-teal">
                <div className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.2em] mb-2">{range}</div>
                <div className="text-sm font-bold text-navy uppercase tracking-widest italic mb-3">{title}</div>
                <p className="text-[11px] leading-relaxed text-navy/60 italic">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-sm border border-beige bg-white p-10 shadow-sm border-l-8 border-teal">
          <h2 className="text-2xl font-bold text-navy uppercase tracking-widest italic mb-6">Who teaches it</h2>
          <div className="space-y-4 text-sm leading-7 text-navy/70 italic max-w-4xl">
            <p>
              The default model is train-the-trainer: a designated instructor delivers the course and maintains
              scope guardrails. Evaluation and documentation must follow published standards.
            </p>
            <p>
              If your institution uses external evaluators, keep independence and conflict-of-interest boundaries.
              The kit includes recommended role separation.
            </p>
          </div>
        </div>

        <div className="rounded-sm border-2 border-navy bg-navy p-12 text-white text-center relative overflow-hidden shadow-2xl">
          <ConstellationBg />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold uppercase tracking-widest italic mb-8">Move fast without getting sloppy</h2>
            <p className="text-white/70 text-lg leading-relaxed italic max-w-3xl mx-auto mb-12">
              Start with a pilot term. Keep enrollment controlled, document coaching practice, and run audits
              early so course delivery never drifts into therapy behavior.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/schools/kit"
                className="px-10 py-5 bg-teal text-navy text-xs font-bold uppercase tracking-widest shadow-xl transition hover:bg-white"
              >
                Download the Kit
              </Link>
              <Link
                to="/schools/pilot"
                className="px-10 py-5 border-2 border-white text-white text-xs font-bold uppercase tracking-widest transition hover:bg-white hover:text-navy"
              >
                Apply for a Pilot
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-4 pb-20">
        <div className="rounded-sm bg-beige/40 p-10 border-l-8 border-amber">
          <p className="text-sm font-medium leading-relaxed text-navy/80 italic">
            GCMWC credentials do not constitute licensure, psychotherapy certification, or authorization to diagnose
            or treat mental health conditions. Mental Wellness Coaching is a non-clinical discipline. Credential holders
            must comply with all applicable local laws governing professional practice.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default UniversityHub;
