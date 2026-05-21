
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Scale, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  FileText, 
  Gavel, 
  UserCheck, 
  RotateCcw, 
  Archive,
  ArrowRight,
  ShieldAlert,
  Search,
  BookOpen,
  Users,
  Lock,
  Globe,
  AlertCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import ConstellationBg from '../components/ConstellationBg';
import ComplaintForm from '../components/ComplaintForm';
import SEO from '../components/SEO';

const Ethics: React.FC = () => {
  const ethicsPrinciples = [
    {
      title: "Honest Representation",
      description: "Represent qualifications, training, credential status, and scope of practice truthfully at all times.",
      icon: <UserCheck className="h-6 w-6" />
    },
    {
      title: "Scope Compliance",
      description: "Practice only within the defined non-clinical scope. Do not diagnose, treat, or provide psychotherapy.",
      icon: <Scale className="h-6 w-6" />
    },
    {
      title: "Client Welfare",
      description: "Act in ways that protect the dignity, autonomy, and well-being of clients. Avoid harm or coercion.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Confidentiality",
      description: "Maintain confidentiality within legal, ethical, and public safety limits. Explain limits clearly.",
      icon: <Lock className="h-6 w-6" />
    },
    {
      title: "Professional Boundaries",
      description: "Avoid dual relationships, conflicts of interest, and conduct that impairs objectivity or safety.",
      icon: <ShieldCheck className="h-6 w-6" />
    },
    {
      title: "Informed Consent",
      description: "Use clear agreements regarding services, fees, cancellation, confidentiality, and scope.",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Referral Responsibility",
      description: "Recognize when needs exceed coaching scope and refer promptly to appropriate licensed resources.",
      icon: <RotateCcw className="h-6 w-6" />
    },
    {
      title: "Documentation",
      description: "Maintain accurate records where required and cooperate with GCMWC reviews and investigations.",
      icon: <Archive className="h-6 w-6" />
    },
    {
      title: "Non-Exploitation",
      description: "Do not exploit clients financially, emotionally, spiritually, sexually, or professionally.",
      icon: <AlertTriangle className="h-6 w-6" />
    },
    {
      title: "Professional Integrity",
      description: "Uphold respectful conduct in all communication, advertising, and credential-related activity.",
      icon: <Globe className="h-6 w-6" />
    }
  ];

  const reportableIssues = [
    "Misrepresenting credentials, certification, or professional authority",
    "Providing clinical services including diagnosis or medical advice",
    "Failure to refer when client risk or clinical needs are present",
    "Misleading advertising or false claims about services",
    "Breach of confidentiality without legal or ethical mandate",
    "Exploitation, harassment, or inappropriate boundary crossing",
    "Conflict of interest, retaliation, or abuse of authority",
    "Falsification of training or documentation records",
    "Misuse of GCMWC name, credential titles, or logos",
    "Failure to cooperate with an ethics review or audit"
  ];

  const processSteps = [
    {
      step: 1,
      title: "Complaint Submission",
      description: "A complaint is submitted via the official form with a summary and supporting information."
    },
    {
      step: 2,
      title: "Initial Screening",
      description: "GCMWC reviews jurisdiction and whether the allegations represent a standards issue."
    },
    {
      step: 3,
      title: "Information Gathering",
      description: "The Commission may request documents, witness statements, and records relevant to the concern."
    },
    {
      step: 4,
      title: "Notice to Respondent",
      description: "The respondent is notified and given an opportunity to provide clarification and response."
    },
    {
      step: 5,
      title: "Review & Determination",
      description: "The Commission evaluates all information against Program Standards and Code of Ethics."
    },
    {
      step: 6,
      title: "Action or Dismissal",
      description: "The complaint is resolved with corrective action, discipline, or formal dismissal."
    },
    {
      step: 7,
      title: "Recordkeeping",
      description: "GCMWC maintains records and monitors remediation or future compliance where applicable."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-16">
      <SEO 
        title="Ethics, Professional Conduct & Public Protection" 
        description="Official ethical standards and formal complaint process for GCMWC mental wellness coaching credentials."
        path="/ethics"
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-cream overflow-hidden border-b border-beige">
        <ConstellationBg />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-navy mb-8 tracking-tight">
              Ethics, Professional Conduct, <br className="hidden md:block" /> and Public Protection
            </h1>
            <p className="text-xl md:text-2xl text-navy/80 mb-6 font-medium max-w-4xl mx-auto leading-tight italic">
              GCMWC maintains ethical standards, scope boundaries, and a formal complaint review process to protect the public and uphold the integrity of Mental Wellness Coaching.
            </p>
            <div className="w-24 h-1 bg-gold mx-auto mb-10"></div>
            
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-navy/70 leading-relaxed italic mb-12">
              <p>
                The Global Commission for Mental Wellness Coaching exists to define and uphold standards for non-clinical mental wellness coaching. Credential holders are expected to practice with honesty, professionalism, clear scope boundaries, and respect for client welfare.
              </p>
              <p>
                When concerns arise, GCMWC provides a formal ethics and complaints process. This process is designed to review allegations involving professional conduct, scope violations, credential misuse, misleading representation, or other actions that may compromise public trust or client safety.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link to="/ethics/code" className="px-10 py-5 bg-navy text-white font-bold uppercase tracking-widest hover:bg-forest transition-all shadow-xl text-center">
                View Code of Ethics
              </Link>
              <Link to="/ethics/complaint" className="px-10 py-5 border-2 border-navy text-navy font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all text-center">
                Submit a Complaint
              </Link>
              <a 
                href="/downloads/gcmwc-standards-manual.pdf"
                download="gcmwc-standards-manual.pdf"
                className="px-10 py-5 bg-gold text-white font-bold uppercase tracking-widest hover:bg-[#a67d35] transition-all shadow-xl flex items-center justify-center text-center"
              >
                Download Policy
              </a>
            </div>

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-navy/40 max-w-2xl mx-auto border-t border-navy/10 pt-8 italic leading-loose">
              GCMWC is a standards-setting and credentialing body for non-clinical Mental Wellness Coaching. It is not an emergency service and does not replace law enforcement, emergency response, medical care, or licensed mental health oversight.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Why Ethics Matter */}
      <section className="py-24 bg-white border-b border-beige">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-8 uppercase tracking-widest italic border-l-8 border-gold pl-6"> Why Ethics Matter</h2>
          <div className="space-y-6 text-lg text-navy/80 leading-relaxed italic">
            <p>
              Mental Wellness Coaching involves trust. Clients often seek support during periods of stress, burnout, emotional instability, grief, identity transition, relational difficulty, spiritual struggle, or major life change. That means the profession must be governed by clear boundaries and real accountability.
            </p>
            <p>
              GCMWC ethical standards exist to protect the client, guide the coach, and preserve the integrity of the profession.
            </p>
            <p className="font-bold text-navy">
              Ethics are not optional. They are the foundation of safe, credible, and professional practice.
            </p>
          </div>
          
          <div className="mt-12 p-8 bg-cream border-2 border-gold/20 shadow-inner relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldCheck className="h-24 w-24 text-gold" />
            </div>
            <p className="text-xl font-bold text-navy uppercase tracking-widest italic relative z-10 leading-tight">
              Public trust depends on truthful representation, appropriate boundaries, and timely referral when a client’s needs exceed coaching scope.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Code of Ethics */}
      <section id="code-of-ethics" className="py-24 bg-beige/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy uppercase tracking-widest italic mb-4">Code of Ethics</h2>
            <p className="text-navy/60 italic font-medium">All GCMWC credential holders, applicants, faculty, and approved training partners are expected to uphold the following ethical principles.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ethicsPrinciples.map((principle, idx) => (
              <div key={idx} className="bg-white p-8 border border-beige shadow-sm hover:shadow-xl transition-all border-t-4 border-gold h-full">
                <div className="bg-cream w-12 h-12 flex items-center justify-center mb-6 text-gold">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-4 uppercase tracking-wider italic">{principle.title}</h3>
                <p className="text-navy/70 text-sm leading-relaxed italic">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: What Can Be Reported */}
      <section className="py-24 bg-white border-y border-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-navy mb-6 uppercase tracking-widest italic border-b-4 border-gold pb-4 inline-block">What Can Be Reported</h2>
              <p className="text-navy/60 italic text-sm leading-relaxed mb-8">
                A complaint may be submitted when a GCMWC credential holder, applicant, faculty member, evaluator, or approved institutional partner appears to have violated GCMWC standards, scope rules, ethics requirements, or credential use policies.
              </p>
              <div className="p-8 bg-navy text-white shadow-2xl relative overflow-hidden">
                <ShieldAlert className="h-16 w-16 text-gold opacity-10 absolute -bottom-4 -right-4" />
                <h4 className="text-lg font-bold uppercase tracking-widest italic mb-4 text-gold">Notice to Public</h4>
                <p className="text-sm opacity-70 italic leading-relaxed">
                  Protecting the public starts with professional accountability. Reporting concerns allows GCMWC to maintain the safety and integrity of the mental wellness coaching field.
                </p>
              </div>
            </div>
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4">
              {reportableIssues.map((issue, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-4 bg-cream/30 border border-beige hover:border-gold transition-colors">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-sm text-navy font-medium italic leading-snug">{issue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Matters Outside GCMWC Jurisdiction */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-12 uppercase tracking-widest italic text-center">Matters Outside GCMWC Jurisdiction</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-navy/60 italic text-sm mb-12 leading-relaxed">
              GCMWC reviews matters connected to its credential holders, applicants, approved faculty, and institutional partners. Some concerns fall outside Commission authority.
            </p>
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <ul className="space-y-4">
                <li className="flex items-start text-sm italic py-2 border-b border-beige">
                  <div className="w-1.5 h-1.5 bg-navy/20 rounded-full mt-2 mr-3 shrink-0"></div>
                  General customer service dissatisfaction without an ethics or scope issue
                </li>
                <li className="flex items-start text-sm italic py-2 border-b border-beige">
                  <div className="w-1.5 h-1.5 bg-navy/20 rounded-full mt-2 mr-3 shrink-0"></div>
                  Fee disputes alone, unless connected to fraud, deception, or ethical misconduct
                </li>
                <li className="flex items-start text-sm italic py-2 border-b border-beige">
                  <div className="w-1.5 h-1.5 bg-navy/20 rounded-full mt-2 mr-3 shrink-0"></div>
                  Employment disputes unrelated to credential conduct
                </li>
                <li className="flex items-start text-sm italic py-2 border-b border-beige">
                  <div className="w-1.5 h-1.5 bg-navy/20 rounded-full mt-2 mr-3 shrink-0"></div>
                  Criminal matters better handled by law enforcement
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start text-sm italic py-2 border-b border-beige">
                  <div className="w-1.5 h-1.5 bg-navy/20 rounded-full mt-2 mr-3 shrink-0"></div>
                  Medical negligence or malpractice claims against licensed medical professionals
                </li>
                <li className="flex items-start text-sm italic py-2 border-b border-beige">
                  <div className="w-1.5 h-1.5 bg-navy/20 rounded-full mt-2 mr-3 shrink-0"></div>
                  Emergency mental health situations requiring immediate intervention
                </li>
                <li className="flex items-start text-sm italic py-2 border-b border-beige">
                  <div className="w-1.5 h-1.5 bg-navy/20 rounded-full mt-2 mr-3 shrink-0"></div>
                  Anonymous complaints that contain no identifiable facts, evidence, or parties
                </li>
              </ul>
            </div>

            <div className="p-8 bg-red-50 border-2 border-red-200 flex flex-col md:flex-row items-center gap-8 shadow-sm">
              <div className="bg-red-100 p-4 rounded-full">
                <AlertTriangle className="h-10 w-10 text-red-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-red-800 uppercase tracking-widest italic mb-2">Emergency Protocol</h4>
                <p className="text-sm text-red-700 italic leading-relaxed">
                  If someone may be at immediate risk of harm, do not use this form. Contact local emergency services, a crisis line, or the appropriate emergency response system immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: How the Complaint Process Works */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <ConstellationBg />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold uppercase tracking-widest italic mb-6">How the Complaint Process Works</h2>
            <p className="max-w-3xl mx-auto opacity-70 italic font-medium leading-relaxed">
              The Commission follows a structured review process. Submitting a complaint does not automatically mean a violation occurred. All complaints are reviewed for jurisdiction, relevance, and supporting information.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gold opacity-30"></div>
            
            <div className="grid lg:grid-cols-7 gap-8">
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative group">
                  <div className="mb-6 lg:mb-12 relative flex items-center justify-center">
                    <div className="w-12 h-12 bg-gold flex items-center justify-center text-navy font-bold text-xl rounded-none relative z-10 group-hover:scale-110 transition-transform shadow-xl">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-widest italic mb-3 text-gold lg:text-center h-auto lg:h-12 flex items-center lg:justify-center leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs opacity-60 italic leading-relaxed lg:text-center pb-8 lg:pb-0 border-l-2 lg:border-l-0 lg:border-t lg:pt-6 border-gold/30 pl-4 lg:pl-0">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Possible Outcomes and Sanctions */}
      <section className="py-24 bg-white border-b border-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-6 uppercase tracking-widest italic">Possible Outcomes and Sanctions</h2>
          <p className="text-navy/60 italic font-medium mb-16 max-w-2xl mx-auto">Outcomes depend on the nature, severity, pattern, and evidence of the concern.</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { title: "Dismissal", text: "Complaint does not meet jurisdiction or evidence requirements.", type: "neutral" },
              { title: "Warning", text: "Official advisory or written educational notice for minor issues.", type: "neutral" },
              { title: "Remediation", text: "Required additional education or supervised practice monitoring.", type: "neutral" },
              { title: "Probation", text: "Credential status remains active but under formal monitoring.", type: "warning" },
              { title: "Restriction", text: "Limitations placed on how the credential or title may be used.", type: "warning" },
              { title: "Suspension", text: "Temporary removal of credential status pending corrective action.", type: "danger" },
              { title: "Revocation", text: "Permanent removal of board credential status and authority.", type: "danger" },
              { title: "Partner Removal", text: "Loss of approved status for schools, programs, or faculty.", type: "danger" },
              { title: "Referral", text: "Notification to law enforcement or clinical boards if appropriate.", type: "danger" }
            ].map((sanction, idx) => (
              <div key={idx} className={`p-6 border text-left flex flex-col justify-between h-full bg-cream/10 border-beige hover:border-gold transition-colors`}>
                <div>
                  <h4 className="text-lg font-bold text-navy uppercase tracking-widest italic mb-2">{sanction.title}</h4>
                  <p className="text-xs text-navy/60 italic leading-relaxed">{sanction.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto p-6 border-2 border-gold/40 border-dashed bg-gold/5 flex items-start gap-4 text-left">
            <Info className="h-6 w-6 text-gold shrink-0" />
            <p className="text-sm text-navy/80 italic font-bold leading-relaxed">
              Note: Where there is an immediate or significant public safety concern, GCMWC may impose interim protective action while review is ongoing.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Fair Process and Professional Review */}
      <section className="py-24 bg-cream/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-8 uppercase tracking-widest italic border-l-8 border-navy pl-6">Fair Process and Professional Review</h2>
          <div className="grid gap-8 text-navy/80 italic leading-relaxed text-lg">
            <p>
              GCMWC is committed to a complaint process that is serious, fair, and professional. Complaints are reviewed based on available facts, documentation, relevance to Commission standards, and public protection considerations.
            </p>
            <p>
              The Commission may decline to proceed when information is insufficient, unverifiable, clearly outside jurisdiction, or submitted in bad faith.
            </p>
            <p className="text-base text-navy/60 border-t border-navy/10 pt-8">
              Complaint materials are handled with professional discretion, but confidentiality cannot be guaranteed in every situation. Information may be shared as necessary for review, response, legal compliance, or public protection.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Academic and Credential Integrity */}
      <section className="py-24 bg-white border-y border-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-8 uppercase tracking-widest italic underline decoration-gold decoration-4 underline-offset-8">Academic and Credential Integrity</h2>
              <p className="text-lg text-navy/70 leading-relaxed italic mb-8">
                GCMWC maintains strict standards for academic honesty, competency evaluation, and credential integrity. Students, trainees, applicants, faculty, and credential holders must submit original work and truthful records.
              </p>
              <div className="p-8 bg-gold text-navy shadow-inner">
                <Gavel className="h-10 w-10 mb-4 opacity-50" />
                <p className="text-xl font-bold uppercase tracking-widest italic leading-tight">
                  Credential integrity matters because the public must be able to trust what a GCMWC credential actually means.
                </p>
              </div>
            </div>
            <div className="bg-cream/20 p-12 border border-beige space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-navy/40 mb-6 italic">Violations Include:</h4>
              {[
                "Submitting false documents or fabricated experience",
                "Cheating on assessments or competency reviews",
                "Misrepresenting training completion or CE credits",
                "Using unauthorized assistance where prohibited",
                "Falsifying case logs, evaluations, or practice records",
                "Misusing credential initials, seals, or board language"
              ].map((v, i) => (
                <div key={i} className="flex items-center space-x-4 py-2 border-b border-beige/50 text-sm font-medium italic text-navy/80">
                  <AlertTriangle className="h-4 w-4 text-gold shrink-0" />
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Submit a Complaint (Form) */}
      <section className="py-24 bg-white" id="complaint-form-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ComplaintForm />
        </div>
      </section>

      {/* Section 10: Emergency and Safety Notice */}
      <section className="py-24 bg-cream border-t border-beige">
        <div className="max-w-4xl mx-auto px-4 px-4 text-center">
          <div className="mb-10 inline-block bg-white p-4 rounded-full shadow-md">
            <ShieldAlert className="h-12 w-12 text-navy" />
          </div>
          <h2 className="text-3xl font-bold text-navy mb-8 uppercase tracking-widest italic">Emergency and Safety Notice</h2>
          <div className="max-w-2xl mx-auto space-y-6 text-lg text-navy/80 italic leading-relaxed font-medium">
            <p>
              Do not use the complaint form for emergencies. If a person is at imminent risk of harming themselves or others, contact emergency services immediately.
            </p>
            <p>
              If the concern involves suspected abuse, criminal conduct, or urgent danger, contact the appropriate authorities first.
            </p>
          </div>
          <div className="mt-16 pt-10 border-t border-navy/10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-navy/40 leading-relaxed max-w-lg mx-auto">
              GCMWC is a non-clinical standards-setting and credentialing body. Its complaint process addresses ethics, scope, credential integrity, and professional conduct within its jurisdiction.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ethics;
