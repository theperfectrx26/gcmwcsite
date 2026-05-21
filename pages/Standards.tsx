
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  ShieldCheck, 
  Scale, 
  CheckCircle2, 
  AlertCircle, 
  Users, 
  RefreshCw, 
  ArrowRight,
  Shield,
  FileSearch,
  Lock,
  Gavel,
  History,
  Info
} from 'lucide-react';
import { motion } from 'motion/react';
import ConstellationBg from '../components/ConstellationBg';
import SEO from '../components/SEO';

const Standards: React.FC = () => {
  return (
    <div id="top" className="bg-white min-h-screen font-sans selection:bg-teal selection:text-white">
      <SEO 
        title="Program Standards Manual | GCMWC" 
        description="The GCMWC Program Standards Manual defines the professional requirements, ethical boundaries, and scope of practice for non-clinical mental wellness coaching."
        path="/standards"
      />

      {/* Hero Section */}
      <header className="relative py-32 bg-[#F4ECE7] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ConstellationBg />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-[#042829] mb-8 uppercase tracking-tighter leading-tight italic">
              Program Standards <br /> Manual
            </h1>
            <p className="max-w-4xl mx-auto text-xl md:text-2xl text-[#252525]/70 italic leading-relaxed mb-12">
              The GCMWC Program Standards Manual defines the professional requirements, ethical boundaries, credentialing expectations, and scope of practice for non-clinical mental wellness coaching.
            </p>
            
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-lg text-[#252525]/80 leading-relaxed font-medium">
                The Global Commission for Mental Wellness Coaching exists to bring structure, clarity, and accountability to the field of mental wellness coaching. Coaching has expanded quickly, but the public still needs a clear way to understand who is trained, what coaches are prepared to do, and where the boundary sits between coaching and clinical treatment.
              </p>
              <p className="mt-4 text-lg text-[#252525]/80 font-bold uppercase tracking-widest">This manual provides that framework.</p>
              <p className="mt-4 text-[#252525]/60 italic">
                It outlines the standards GCMWC uses to train, evaluate, credential, renew, and regulate Mental Wellness Coaches. It also protects the public by defining what credential holders may do, what they must not do, and when referral to a licensed professional is required.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="/downloads/gcmwc-standards-manual.pdf"
                download="gcmwc-standards-manual.pdf"
                className="px-10 py-5 bg-[#04606D] text-white font-bold uppercase tracking-widest hover:bg-[#042829] transition-all shadow-xl flex items-center"
              >
                <FileText className="mr-3 h-5 w-5" /> Download Full Manual
              </a>
              <Link 
                to="/ethics"
                className="px-10 py-5 border-2 border-[#042829] text-[#042829] font-bold uppercase tracking-widest hover:bg-[#042829] hover:text-white transition-all shadow-md"
              >
                View Code of Ethics
              </Link>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Section 1: Purpose and Authority */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start mb-20">
            <div>
              <h2 className="text-xs font-bold text-[#66B9BF] uppercase tracking-[0.4em] mb-6">Section 01</h2>
              <h3 className="text-4xl font-bold text-[#042829] uppercase tracking-tighter italic border-l-4 border-[#C49A45] pl-6">
                Purpose and <br /> Authority
              </h3>
            </div>
            <div className="space-y-8">
              <p className="text-xl text-[#252525]/70 leading-relaxed italic">
                GCMWC functions as an independent standards-setting and credentialing body for non-clinical mental wellness coaching. Its role is to define professional expectations, establish training benchmarks, uphold ethical conduct, and create a clear regulatory framework for credential holders.
              </p>
              <p className="text-lg text-[#252525]/70 leading-relaxed italic">
                The Commission’s authority includes establishing program standards, reviewing credential eligibility, issuing and revoking credentials, investigating complaints, enforcing ethics requirements, and maintaining public trust in the coaching profession.
              </p>
              <div className="p-8 bg-[#F4ECE7] border-l-8 border-[#04606D]">
                <p className="text-lg text-[#042829] font-bold italic leading-relaxed">
                  GCMWC does not position Mental Wellness Coaching as therapy, counseling, psychiatry, or medical treatment. The purpose of the standards is to make that distinction clear, enforceable, and visible to the public.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Professional Standards", desc: "GCMWC defines the training, ethics, scope, and credentialing requirements for Mental Wellness Coaches." },
              { title: "Public Safety", desc: "The standards protect clients by clarifying when coaching is appropriate and when referral is required." },
              { title: "Credential Integrity", desc: "Credential holders must meet training requirements, follow ethical guidelines, and remain in good standing." },
              { title: "Non-Clinical Practice", desc: "Mental Wellness Coaching supports personal growth and wellness but does not diagnose, treat, or manage mental illness." }
            ].map((card, i) => (
              <div key={i} className="p-10 border border-[#042829]/10 bg-white hover:shadow-2xl transition-all group h-full">
                <Shield className="h-8 w-8 text-[#04606D] mb-8 group-hover:scale-110 transition-transform" />
                <h4 className="text-[#042829] font-bold text-lg mb-4 uppercase tracking-widest leading-tight">{card.title}</h4>
                <p className="text-[#252525]/60 text-[11px] leading-relaxed italic uppercase font-bold tracking-widest">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Scope of Practice */}
      <section className="py-32 bg-[#F9F9F9] border-y border-[#042829]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-20 max-w-4xl mx-auto">
              <h2 className="text-xs font-bold text-[#66B9BF] uppercase tracking-[0.4em] mb-6">Section 02</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-[#042829] uppercase tracking-tighter italic mb-8">
                Scope of Practice
              </h3>
              <p className="text-xl text-[#252525]/60 italic leading-relaxed">
                Mental Wellness Coaching is a non-clinical, non-diagnostic discipline. Coaches support clients through education, reflection, goal-setting, accountability, emotional awareness, and wellness planning. Coaches do not diagnose mental health disorders, provide psychotherapy, manage crisis care, or replace licensed medical or behavioral health providers.
              </p>
           </div>

           <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Green Zone */}
              <div className="bg-white p-12 border-t-8 border-[#66B9BF] shadow-sm">
                <h4 className="flex items-center text-[#04606D] font-bold text-2xl uppercase tracking-widest mb-10 italic">
                  <CheckCircle2 className="mr-4 h-8 w-8" /> Green Zone: Within Scope
                </h4>
                <ul className="space-y-6">
                  {[
                    "Educate clients on stress, resilience, emotional regulation, and wellness principles.",
                    "Facilitate structured conversations that support self-awareness, growth, and behavior change.",
                    "Help clients identify goals, patterns, obstacles, and practical action steps.",
                    "Provide accountability around wellness routines, boundaries, habits, and personal development.",
                    "Use non-clinical tools such as reflective questions, journaling prompts, values clarification, grounding skills, and goal-setting frameworks.",
                    "Support clients in developing mental, emotional, physical, and spiritual wellness plans.",
                    "Encourage appropriate referrals when a client’s needs exceed the coaching scope."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="h-1.5 w-1.5 bg-[#66B9BF] rounded-full mt-2.5 mr-4 shrink-0"></div>
                      <span className="text-sm text-[#252525]/80 italic leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Red Zone */}
              <div className="bg-white p-12 border-t-8 border-[#C49A45] shadow-sm">
                <h4 className="flex items-center text-[#C49A45] font-bold text-2xl uppercase tracking-widest mb-10 italic">
                  <AlertCircle className="mr-4 h-8 w-8" /> Red Zone: Outside Scope
                </h4>
                <ul className="space-y-6">
                  {[
                    "Diagnose mental health disorders using DSM, ICD, or clinical criteria.",
                    "Treat depression, anxiety disorders, trauma, bipolar disorder, psychosis, substance use disorder, or other clinical conditions.",
                    "Provide psychotherapy, trauma processing, crisis intervention, or clinical counseling.",
                    "Create or manage medication, supplement, or treatment plans.",
                    "Replace a licensed therapist, psychiatrist, nurse practitioner, physician, or other medical provider.",
                    "Manage active suicidal ideation, homicidal ideation, psychosis, abuse, domestic violence, severe addiction, or acute psychiatric instability.",
                    "Present themselves as licensed clinicians unless they separately hold an active professional license and are practicing within that license."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="h-1.5 w-1.5 bg-[#C49A45] rounded-full mt-2.5 mr-4 shrink-0"></div>
                      <span className="text-sm text-[#252525]/80 italic leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
           </div>

           {/* Referral Trigger Callout */}
           <div className="bg-[#042829] p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C49A45]/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10">
                <h4 className="text-xl font-bold uppercase tracking-[0.3em] mb-10 flex items-center italic">
                  <FileSearch className="mr-4 h-8 w-8 text-[#C49A45]" /> Referral Is Required When a Client Presents With:
                </h4>
                <div className="flex flex-wrap gap-4">
                  {[
                    "Suicidal ideation", "Homicidal ideation", "Psychosis or hallucinations", 
                    "Active addiction preventing engagement", "Severe depression or functional decline", 
                    "Domestic violence or abuse", "Eating disorder symptoms", "Unmanaged trauma responses",
                    "Medical instability", "Need for diagnosis, treatment, or medication management"
                  ].map((badge) => (
                    <span key={badge} className="px-6 py-3 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest italic hover:bg-white/10 transition-colors">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Section 3: Ethical Practice */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div>
                <h2 className="text-xs font-bold text-[#66B9BF] uppercase tracking-[0.4em] mb-6">Section 03</h2>
                <h3 className="text-4xl font-bold text-[#042829] uppercase tracking-tighter italic mb-8">
                  Ethical Practice and <br /> Professional Conduct
                </h3>
                <p className="text-xl text-[#252525]/70 leading-relaxed italic mb-8">
                  GCMWC credential holders are expected to practice with integrity, humility, confidentiality, and clear professional boundaries. Ethical coaching requires honesty about scope, credentials, outcomes, fees, confidentiality limits, and referral obligations.
                </p>
                <div className="p-8 bg-[#C49A45]/5 border border-[#C49A45]/20 italic">
                  <p className="text-lg text-[#042829] font-bold">
                    A coach must never use emotional vulnerability, spiritual authority, professional status, or personal influence to manipulate, pressure, or exploit a client.
                  </p>
                </div>
              </div>

              <div className="bg-[#F9F9F9] p-12 border border-[#042829]/5">
                <h4 className="text-xs font-bold text-[#252525]/40 uppercase tracking-[0.3em] mb-10">Credential holders must:</h4>
                <div className="space-y-6">
                  {[
                    "Represent training and credentials accurately.",
                    "Maintain confidentiality within legal and ethical limits.",
                    "Avoid dual relationships that create conflicts of interest.",
                    "Use transparent fees, contracts, and coaching agreements.",
                    "Obtain informed consent before beginning coaching.",
                    "Stay within non-clinical scope.",
                    "Refer clients when needs exceed coaching.",
                    "Avoid coercive spiritual, emotional, or financial influence.",
                    "Document services according to GCMWC expectations.",
                    "Cooperate with any ethics review or complaint investigation."
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-6 pb-6 border-b border-[#042829]/5 last:border-0 last:pb-0">
                      <Lock className="h-4 w-4 text-[#C49A45] shrink-0" />
                      <span className="text-xs font-bold text-[#042829] uppercase tracking-widest italic">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Section 4: Enforcement and Discipline */}
      <section className="py-32 bg-[#042829] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-4xl mb-24">
              <h2 className="text-xs font-bold text-[#66B9BF] uppercase tracking-[0.4em] mb-6">Section 04</h2>
              <h3 className="text-4xl font-bold uppercase tracking-tighter italic mb-8">
                Enforcement and Discipline
              </h3>
              <p className="text-xl text-white/70 italic leading-relaxed">
                GCMWC maintains an ethics and disciplinary process to protect the public and uphold the credibility of the credential. Complaints may be submitted by clients, peers, institutions, faculty, or members of the general public.
              </p>
              <p className="mt-6 text-lg text-[#C49A45] font-bold italic">
                The Commission may dismiss a complaint, request additional information, issue a written warning, require remediation, suspend a credential, or revoke a credential depending on the severity of the violation.
              </p>
           </div>

           <div className="relative">
              {/* Process Timeline Line */}
              <div className="absolute top-[28px] left-8 right-8 h-[1px] bg-white/10 hidden lg:block"></div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
                {[
                  { step: "01", title: "Complaint Received", desc: "A formal complaint is submitted to GCMWC for review." },
                  { step: "02", title: "Initial Review", desc: "The Commission determines whether the complaint falls within GCMWC authority." },
                  { step: "03", title: "Information Gathering", desc: "The credential holder may be asked to provide documentation, explanation, or corrective response." },
                  { step: "04", title: "Decision", desc: "The Commission may dismiss the complaint, issue corrective action, require remediation, suspend, or revoke the credential." },
                  { step: "05", title: "Public Safety Action", desc: "Immediate suspension may be imposed if there is risk of harm to clients or the public." }
                ].map((item, i) => (
                  <div key={i} className="relative z-10 transition-all duration-500 group">
                    <div className="w-14 h-14 bg-[#04606D] border border-white/20 flex items-center justify-center font-bold text-[#C49A45] mb-8 group-hover:bg-[#C49A45] group-hover:text-[#042829] transition-colors">{item.step}</div>
                    <h5 className="font-bold text-lg mb-4 uppercase tracking-widest italic">{item.title}</h5>
                    <p className="text-xs text-white/40 leading-relaxed italic">{item.desc}</p>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Section 5: Renewal and Grandparenting */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-4xl mb-24">
              <h2 className="text-xs font-bold text-[#66B9BF] uppercase tracking-[0.4em] mb-6">Section 05</h2>
              <h3 className="text-4xl font-bold text-[#042829] uppercase tracking-tighter italic mb-8">
                Renewal and <br /> Grandparenting
              </h3>
              <p className="text-xl text-[#252525]/70 italic leading-relaxed">
                GCMWC credentials are not lifetime credentials. Credential holders must remain in good standing, complete continuing education, follow ethical standards, and renew within the required credential cycle.
              </p>
              <p className="mt-4 text-[#252525]/40 text-sm font-bold uppercase tracking-widest">
                Renewal exists to protect the value of the credential and ensure that coaches continue growing in competence, ethics, and professional practice.
              </p>
           </div>

           <div className="grid lg:grid-cols-2 gap-12">
              <div className="p-12 bg-[#F4ECE7] border-l-8 border-[#042829] h-full flex flex-col">
                <RefreshCw className="h-10 w-10 text-[#04606D] mb-10" />
                <h4 className="text-2xl font-bold text-[#042829] uppercase tracking-widest mb-6 italic">Credential Renewal</h4>
                <p className="text-lg text-[#252525]/70 italic leading-relaxed flex-grow">
                  GCMWC credentials are valid for two years. Renewal requires documented continuing education, practice attestation, compliance with the Code of Ethics, and payment of applicable renewal fees.
                </p>
                <p className="mt-8 text-sm text-[#04606D] font-bold uppercase tracking-widest">
                  Credential holders who fail to renew on time may lose active credential status until renewal requirements are satisfied.
                </p>
              </div>

              <div className="p-12 bg-white border border-[#042829]/10 shadow-xl h-full flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C49A45]/5 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                <History className="h-10 w-10 text-[#C49A45] mb-10" />
                <h4 className="text-2xl font-bold text-[#042829] uppercase tracking-widest mb-6 italic">The Legacy Route</h4>
                <p className="text-lg text-[#252525]/70 italic leading-relaxed mb-6">
                  The Legacy Route, also called grandparenting, is a time-limited pathway for experienced practitioners who were already practicing coaching, wellness support, ministry care, peer support, or related helping work before the full credentialing system was finalized.
                </p>
                <div className="space-y-4 flex-grow">
                  <p className="text-sm text-[#252525]/70 italic leading-relaxed">
                    Applicants must provide documentation of experience, training, professional references, and must pass the official Standards and Ethics Exam.
                  </p>
                  <p className="pt-6 border-t border-[#042829]/5 text-[10px] font-bold text-[#C49A45] uppercase tracking-[0.2em] italic">
                    The Legacy Route is not automatic approval. It is a structured review pathway.
                  </p>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Section 6: Why Standards Matter */}
      <section className="py-40 bg-[#042829] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-XS font-bold text-[#66B9BF] uppercase tracking-[0.4em]">Section 06</h2>
              <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter italic leading-[0.95]">
                Why <br /> Standards <br /> Matter
              </h3>
              <p className="text-xl text-white/50 italic leading-relaxed max-w-lg">
                Mental wellness coaching sits in a sensitive space. Clients often come with stress, emotional pain, relational patterns, spiritual questions, burnout, grief, low self-worth, or major life transitions. That means coaches need more than passion. They need structure.
              </p>
            </div>
            
            <div className="space-y-12">
               {[
                 "Standards protect the client.",
                 "Standards protect the coach.",
                 "Standards protect the profession."
               ].map((statement, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, x: 50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.2 }}
                   className="p-10 border-l-8 border-[#C49A45] bg-white/5 shadow-2xl backdrop-blur-sm"
                 >
                   <p className="text-3xl md:text-4xl font-bold uppercase tracking-tighter italic">
                     {statement}
                   </p>
                 </motion.div>
               ))}
               <p className="text-lg text-white/40 italic leading-relaxed pt-8 max-w-xl">
                 Without clear boundaries, coaching can become confusing, unsafe, or misleading. With clear standards, Mental Wellness Coaches can serve confidently while knowing when to support, when to pause, and when to refer.
               </p>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-[#66B9BF]/5 rounded-full blur-[150px]"></div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-[#F4ECE7]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xs font-bold text-[#04606D] uppercase tracking-[0.4em] mb-8">Take Action</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-[#042829] uppercase tracking-tighter italic leading-tight mb-10">
            Ready to Understand the <br /> Full GCMWC Standards?
          </h3>
          <p className="text-xl text-[#252525]/70 italic leading-relaxed mb-16">
            Review the full Program Standards Manual to understand credential requirements, ethical obligations, renewal expectations, complaint procedures, and professional scope of practice.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="/downloads/gcmwc-standards-manual.pdf"
              download="gcmwc-standards-manual.pdf"
              className="px-12 py-5 bg-[#04606D] text-white font-bold uppercase tracking-widest hover:bg-[#042829] transition-all shadow-2xl flex items-center justify-center"
            >
              <FileText className="mr-3 h-5 w-5" /> Download Full Manual
            </a>
            <Link 
              to="/ethics"
              className="px-12 py-5 border-2 border-[#042829] text-[#042829] font-bold uppercase tracking-widest hover:bg-[#042829] hover:text-white transition-all"
            >
              View Code of Ethics
            </Link>
            <a 
              href="https://gcmwc.learnworlds.com/home"
              className="px-12 py-5 bg-[#C49A45] text-white font-bold uppercase tracking-widest hover:bg-[#a67d35] transition-all shadow-2xl border-2 border-[#C49A45]"
            >
              Apply for Credential
            </a>
          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <footer className="py-24 bg-white border-t border-[#042829]/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-12">
            <ShieldCheck className="h-10 w-10 text-[#66B9BF]/40" />
          </div>
          <p className="text-[10px] text-[#252525]/30 italic max-w-4xl mx-auto uppercase tracking-widest leading-relaxed font-bold">
            GCMWC credentials do not constitute licensure, psychotherapy certification, or authorization to diagnose, treat, or manage mental health conditions. Mental Wellness Coaching is a non-clinical discipline. Credential holders must comply with all applicable local laws governing professional practice.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Standards;

