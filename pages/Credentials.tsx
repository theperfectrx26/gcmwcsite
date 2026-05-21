import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  BookOpen, 
  CheckCircle, 
  ShieldCheck, 
  Search, 
  ArrowRight, 
  Scale, 
  FileText, 
  ClipboardCheck, 
  UserPlus, 
  GraduationCap, 
  SearchCheck, 
  History, 
  AlertTriangle, 
  ShieldAlert,
  Building2,
  Lock,
  Clock,
  RotateCcw,
  Ban,
  FileDown
} from 'lucide-react';
import { motion } from 'motion/react';
import ConstellationBg from '../components/ConstellationBg';
import SEO from '../components/SEO';

const Credentials: React.FC = () => {
  const pathwaySteps = [
    {
      step: 1,
      title: "Training Enrollment",
      description: "The student begins GCMWC-approved education in non-clinical mental wellness coaching.",
      icon: <UserPlus className="h-5 w-5" />
    },
    {
      step: 2,
      title: "Core Training Completion",
      description: "The student completes required coursework, module assessments, ethics training, and scope education.",
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      step: 3,
      title: "MWC-T Designation",
      description: "Awarded after successful completion of core training and required coursework.",
      icon: <Award className="h-5 w-5" />
    },
    {
      step: 4,
      title: "Documented Coaching Practice",
      description: "Completion of required documented coaching practice as defined by GCMWC.",
      icon: <ClipboardCheck className="h-5 w-5" />
    },
    {
      step: 5,
      title: "Competency Evaluation",
      description: "Rubric-based performance evaluation, including the Live Practical Final Exam.",
      icon: <SearchCheck className="h-5 w-5" />
    },
    {
      step: 6,
      title: "MWC-C Credential",
      description: "Awarded after meeting all program requirements and demonstrating competency for professional non-clinical practice.",
      icon: <GraduationCap className="h-5 w-5" />
    }
  ];

  const comparisonData = [
    {
      credential: "MWC-T™",
      purpose: "Training designation",
      training: "GCMWC core training",
      practice: "No full certification practice req.",
      evaluation: "Module assessments and scope acknowledgment",
      meaning: "Indicates foundational preparation in non-clinical mental wellness coaching"
    },
    {
      credential: "MWC-C™",
      purpose: "Professional credential",
      training: "Full GCMWC program completion",
      practice: "40 documented coaching practice hours",
      evaluation: "Rubric-based evaluation and Live Practical Final Exam",
      meaning: "Indicates readiness to provide structured ethical mental wellness coaching within scope"
    }
  ];

  const statusCards = [
    {
      title: "Active",
      description: "Credential holder is current and in good standing.",
      color: "border-teal text-teal",
      bg: "bg-teal/5"
    },
    {
      title: "Inactive",
      description: "Credential has lapsed, expired, or is not currently maintained.",
      color: "border-navy/20 text-navy/40",
      bg: "bg-navy/5"
    },
    {
      title: "Suspended",
      description: "Credential use has been temporarily restricted due to investigation or non-compliance.",
      color: "border-gold text-gold",
      bg: "bg-gold/5"
    },
    {
      title: "Revoked",
      description: "Credential has been removed due to serious or unresolved standards violations.",
      color: "border-red-600 text-red-600",
      bg: "bg-red-50"
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-16">
      <SEO 
        title="Mental Wellness Coaching Credentials" 
        description="Official GCMWC tiered credentialing framework, including Trained (MWC-T) and Certified (MWC-C) designations."
        path="/credentials"
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
            <h1 className="text-4xl md:text-6xl font-bold text-navy mb-8 tracking-tight uppercase italic">
              Mental Wellness Coaching <br /> Credentials
            </h1>
            <p className="text-xl md:text-2xl text-navy/80 mb-6 font-medium max-w-4xl mx-auto leading-tight italic">
              GCMWC uses a tiered credentialing framework to distinguish training completion, supervised practice, demonstrated competence, ethical standing, and professional readiness.
            </p>
            <div className="w-24 h-1 bg-gold mx-auto mb-10"></div>
            
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-navy/70 leading-relaxed italic mb-12">
              <p>
                The Global Commission for Mental Wellness Coaching credentials individuals who have completed approved education and demonstrated readiness to practice within the non-clinical scope of Mental Wellness Coaching.
              </p>
              <p>
                Our credentialing framework exists to protect the public, support professional clarity, and help students, institutions, churches, wellness organizations, and clients understand what each designation means.
              </p>
              <p>
                GCMWC credentials do not authorize diagnosis, psychotherapy, crisis intervention, medication management, or clinical treatment. They identify structured preparation in coaching ethics, scope boundaries, mental wellness support, referral awareness, and practical coaching application.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <button 
                onClick={() => {
                  const el = document.getElementById('gcmwc-credential-pathway');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="px-10 py-5 bg-navy text-white font-bold uppercase tracking-widest hover:bg-forest transition-all shadow-xl cursor-pointer"
              >
                View Credential Pathways
              </button>
              <Link to="/registry" className="px-10 py-5 border-2 border-navy text-navy font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all">
                Verify a Certificate
              </Link>
            </div>

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-navy/40 max-w-2xl mx-auto border-t border-navy/10 pt-8 italic leading-loose">
              GCMWC credentials are not licenses and do not replace state-regulated clinical, counseling, medical, or behavioral health credentials.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Why Credentialing Matters */}
      <section className="py-24 bg-white border-b border-beige">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-8 uppercase tracking-widest italic border-l-8 border-gold pl-6 whitespace-pre-wrap">Why Credentialing Matters</h2>
          <div className="space-y-6 text-lg text-navy/80 leading-relaxed italic">
            <p>
              Mental wellness support is expanding quickly. People are looking for help with stress, burnout, emotional regulation, identity, relationships, grief, purpose, spiritual wellness, and life transitions. That growth creates a responsibility.
            </p>
            <p>
              The public needs to know who has been trained. Students need to know what their credential means. Organizations need to know who is prepared to serve within clear boundaries.
            </p>
            <p className="font-bold text-navy">
              Credentialing creates that structure. It defines the difference between training completion, demonstrated competence, and ongoing ethical standing.
            </p>
          </div>
          
          <div className="mt-12 p-8 bg-cream border-2 border-gold/20 shadow-inner relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldCheck className="h-24 w-24 text-gold" />
            </div>
            <p className="text-xl font-bold text-navy uppercase tracking-widest italic relative z-10 leading-tight">
              A credential is not just a title. It is a public signal of training, scope awareness, ethical obligation, and accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Credential Pathway */}
      <section id="gcmwc-credential-pathway" className="py-24 bg-beige/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-navy uppercase tracking-widest italic mb-6">The GCMWC Credential Pathway</h2>
            <p className="max-w-3xl mx-auto opacity-70 italic font-medium leading-relaxed">
              Our structured progression ensures that every credential holder moves from foundational knowledge to demonstrated professional readiness.
              <br /><br />
              <span className="text-navy font-bold">40 hours of documented coaching practice is required to receive the MWC-C credential.</span>
            </p>
          </div>

          <div className="relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gold opacity-20"></div>
            
            <div className="grid lg:grid-cols-6 gap-8 relative z-10">
              {pathwaySteps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center lg:items-center text-center group"
                >
                  <div className="w-12 h-12 bg-white border-2 border-gold flex items-center justify-center text-gold font-bold text-xl mb-6 relative z-10 shadow-lg group-hover:bg-gold group-hover:text-white transition-all">
                    {step.step}
                  </div>
                  <div className="bg-white p-6 border border-beige shadow-sm flex flex-col h-full w-full">
                    <div className="text-navy/30 mb-4 flex justify-center">
                      {step.icon}
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-widest italic mb-3 text-navy leading-tight h-10 flex items-center justify-center">
                      {step.title}
                    </h3>
                    <p className="text-xs opacity-60 italic leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Credential Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Card 1: MWC-T */}
            <div className="bg-white border border-beige p-10 md:p-12 shadow-xl flex flex-col h-full border-t-[12px] border-gold relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Award className="h-32 w-32 text-gold" />
              </div>
              <div className="mb-10 relative z-10">
                <span className="text-[10px] font-bold text-gold uppercase tracking-[0.3em] border-b border-gold pb-2 inline-block mb-4">Training Designation</span>
                <h2 className="text-3xl font-bold text-navy italic uppercase mb-2 leading-tight">Trained Mental Wellness Coach™</h2>
                <h3 className="text-xl font-bold text-navy/40 italic">MWC-T™</h3>
              </div>
              
              <div className="space-y-8 mb-12 flex-grow relative z-10">
                <div>
                  <h4 className="text-[10px] font-bold text-navy uppercase tracking-widest mb-3 text-navy/50">Definition</h4>
                  <p className="text-navy/70 text-sm leading-relaxed italic">
                    A Trained Mental Wellness Coach™ has completed the GCMWC core training in non-clinical mental wellness coaching. This designation indicates foundational preparation in coaching ethics, scope boundaries, communication skills, and supported referral. 
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold text-navy uppercase tracking-widest mb-3 text-navy/50">Best For</h4>
                  <ul className="text-xs text-navy/70 italic space-y-2">
                    <li>• Students completing foundational training</li>
                    <li>• Aspiring coaches beginning supervised practice</li>
                    <li>• Church, wellness, or community leaders</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold text-navy uppercase tracking-widest mb-3 text-navy/50">Requirements</h4>
                  <ul className="space-y-3">
                    {[
                      "Complete GCMWC core training curriculum",
                      "Pass module assessments",
                      "Ethics and scope-of-practice training",
                      "Sign GCMWC Code of Ethics"
                    ].map((req, i) => (
                      <li key={i} className="flex items-start text-xs italic font-medium text-navy/80">
                        <CheckCircle className="h-4 w-4 text-gold mr-3 shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-10 pt-8 border-t border-beige">
                <div className="space-y-2">
                    <span className="text-[9px] font-bold text-teal uppercase tracking-widest block">MWC-T Indicates</span>
                    <p className="text-[10px] italic text-navy/60 leading-tight">Foundational education & non-clinical scope awareness.</p>
                </div>
                <div className="space-y-2">
                    <span className="text-[9px] font-bold text-red-600 uppercase tracking-widest block">Does Not Indicate</span>
                    <p className="text-[10px] italic text-navy/60 leading-tight">Clinical authority or diagnosis authorization.</p>
                </div>
              </div>

              <Link 
                to="/standards" 
                className="inline-flex items-center justify-center px-8 py-5 bg-navy text-white font-bold uppercase tracking-widest hover:bg-forest transition-all shadow-xl"
              >
                View MWC-T Standards
              </Link>
            </div>

            {/* Card 2: MWC-C */}
            <div className="bg-white border border-beige p-10 md:p-12 shadow-xl flex flex-col h-full border-t-[12px] border-navy relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                <Award className="h-32 w-32 text-navy" />
              </div>
              <div className="mb-10 relative z-10">
                <span className="text-[10px] font-bold text-gold uppercase tracking-[0.3em] border-b border-gold pb-2 inline-block mb-4">Professional Credential</span>
                <h2 className="text-3xl font-bold text-navy italic uppercase mb-2 leading-tight">Certified Mental Wellness Coach™</h2>
                <h3 className="text-xl font-bold text-navy/40 italic">MWC-C™</h3>
              </div>
              
              <div className="space-y-8 mb-12 flex-grow relative z-10">
                <div>
                  <h4 className="text-[10px] font-bold text-navy uppercase tracking-widest mb-3 text-navy/50">Definition</h4>
                  <p className="text-navy/70 text-sm leading-relaxed italic">
                    A Certified Mental Wellness Coach™ has completed all GCMWC program requirements, including 40 hours of documented coaching practice, and has demonstrated coaching competence through rubric-based performance evaluation.
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold text-navy uppercase tracking-widest mb-3 text-navy/50">Best For</h4>
                  <ul className="text-xs text-navy/70 italic space-y-2">
                    <li>• Graduates ready for structured coaching roles</li>
                    <li>• Coaches seeking a professional credential</li>
                    <li>• Institutions needing verified standards</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold text-navy uppercase tracking-widest mb-3 text-navy/50">Requirements</h4>
                  <ul className="space-y-3">
                    {[
                      "MWC-T™ foundation status",
                      "40 hours of documented practice",
                      "Pass Live Practical Final Exam",
                      "Commitment to ethical accountability"
                    ].map((req, i) => (
                      <li key={i} className="flex items-start text-xs italic font-medium text-navy/80">
                        <CheckCircle className="h-4 w-4 text-gold mr-3 shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

               <div className="grid grid-cols-2 gap-4 mb-10 pt-8 border-t border-beige">
                <div className="space-y-2">
                    <span className="text-[9px] font-bold text-teal uppercase tracking-widest block">MWC-C Indicates</span>
                    <p className="text-[10px] italic text-navy/60 leading-tight">Mastery of competencies & documented practice experience.</p>
                </div>
                <div className="space-y-2">
                    <span className="text-[9px] font-bold text-red-600 uppercase tracking-widest block">Does Not Indicate</span>
                    <p className="text-[10px] italic text-navy/60 leading-tight">State licensure or clinical certification.</p>
                </div>
              </div>

              <Link 
                to="/standards" 
                className="inline-flex items-center justify-center px-8 py-5 bg-gold text-navy font-bold uppercase tracking-widest hover:bg-forest hover:text-white transition-all shadow-xl"
              >
                View MWC-C Standards
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Section 4: Comparison Table */}
      <section className="py-24 bg-beige/10 border-y border-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy uppercase tracking-widest italic mb-12 text-center">Credential Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-navy text-white text-[10px] font-bold uppercase tracking-widest">
                  <th className="p-6 text-left border border-navy/10">Credential</th>
                  <th className="p-6 text-left border border-navy/10">Purpose</th>
                  <th className="p-6 text-left border border-navy/10">Training</th>
                  <th className="p-6 text-left border border-navy/10">Practice</th>
                  <th className="p-6 text-left border border-navy/10">Evaluation</th>
                  <th className="p-6 text-left border border-navy/10">Professional Meaning</th>
                </tr>
              </thead>
              <tbody className="text-xs text-navy/70 italic">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-cream/30 transition-colors">
                    <td className="p-6 border border-beige font-bold text-navy">{row.credential}</td>
                    <td className="p-6 border border-beige">{row.purpose}</td>
                    <td className="p-6 border border-beige">{row.training}</td>
                    <td className="p-6 border border-beige">{row.practice}</td>
                    <td className="p-6 border border-beige">{row.evaluation}</td>
                    <td className="p-6 border border-beige leading-relaxed">{row.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 5: Scope and Boundaries */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-navy uppercase tracking-widest italic mb-6 leading-tight">Credential Scope and Boundaries</h2>
            <p className="text-navy/60 italic leading-relaxed">
              All GCMWC credential holders must practice within the non-clinical scope of Mental Wellness Coaching. Credential holders may educate, support, guide, reflect, help clients set goals, build accountability, identify patterns, and develop wellness plans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Green Zone */}
            <div className="bg-white border border-beige p-10 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 border-b border-l border-beige text-teal font-bold text-[10px] uppercase tracking-widest italic bg-teal/5">
                Green Zone
              </div>
              <h3 className="text-xl font-bold text-navy mb-8 uppercase tracking-widest italic border-b-2 border-teal pb-4 inline-block">Credential holders may:</h3>
              <ul className="space-y-4 font-medium italic text-sm text-navy/70">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-4 shrink-0 mt-0.5" />
                  Support stress management and resilience.
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-4 shrink-0 mt-0.5" />
                  Help clients identify goals and behavior patterns.
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-4 shrink-0 mt-0.5" />
                  Use coaching tools, reflective questions, and accountability structures.
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-4 shrink-0 mt-0.5" />
                  Support mental, emotional, physical, and spiritual wellness planning.
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-4 shrink-0 mt-0.5" />
                  Provide non-clinical education and growth support.
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-4 shrink-0 mt-0.5" />
                  Refer clients when needs exceed coaching.
                </li>
              </ul>
            </div>

            {/* Red Zone */}
            <div className="bg-white border border-beige p-10 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 border-b border-l border-beige text-red-600 font-bold text-[10px] uppercase tracking-widest italic bg-red-50">
                Red Zone
              </div>
              <h3 className="text-xl font-bold text-navy mb-8 uppercase tracking-widest italic border-b-2 border-red-600 pb-4 inline-block">Credential holders may not:</h3>
              <ul className="space-y-4 font-medium italic text-sm text-navy/70">
                <li className="flex items-start">
                  <Ban className="h-5 w-5 text-red-600 mr-4 shrink-0 mt-0.5" />
                  Diagnose mental health disorders.
                </li>
                <li className="flex items-start">
                  <Ban className="h-5 w-5 text-red-600 mr-4 shrink-0 mt-0.5" />
                  Treat depression, anxiety, trauma, psychosis, or addiction.
                </li>
                <li className="flex items-start">
                  <Ban className="h-5 w-5 text-red-600 mr-4 shrink-0 mt-0.5" />
                  Provide psychotherapy, counseling, trauma processing, or crisis care.
                </li>
                <li className="flex items-start">
                  <Ban className="h-5 w-5 text-red-600 mr-4 shrink-0 mt-0.5" />
                  Manage medication, supplements, or medical treatment.
                </li>
                <li className="flex items-start">
                  <Ban className="h-5 w-5 text-red-600 mr-4 shrink-0 mt-0.5" />
                  Act as a replacement for a licensed therapist or physician.
                </li>
                <li className="flex items-start">
                  <Ban className="h-5 w-5 text-red-600 mr-4 shrink-0 mt-0.5" />
                  Use the credential to imply clinical authority.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Certificate Verification */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
           <ConstellationBg />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold uppercase tracking-widest italic mb-8 underline decoration-gold decoration-4 underline-offset-8">Certificate Verification</h2>
              <div className="space-y-6 text-lg opacity-70 italic leading-relaxed">
                <p>GCMWC provides certificate verification to confirm whether an individual has completed approved training, holds an active credential, and remains in good standing.</p>
                <p>Verification protects the public and supports transparency for employers, institutions, churches, clients, and partner organizations.</p>
              </div>
            </div>
            
            <div className="bg-white p-10 border-l-[12px] border-gold shadow-2xl">
              <h3 className="text-xl font-bold text-navy uppercase tracking-widest italic mb-8">Verification May Confirm:</h3>
              <ul className="space-y-4 mb-10">
                {[
                  "Credential holder name & designation",
                  "Credential status (Active / Inactive / Suspended)",
                  "Issue date & Expiration/renewal status",
                  "Good standing status",
                  "Public disciplinary restrictions (if any)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-navy/70 text-sm font-bold italic">
                    <ShieldCheck className="h-5 w-5 text-gold mr-4 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                to="/registry" 
                className="w-full flex items-center justify-center px-8 py-5 bg-navy text-white font-bold uppercase tracking-widest hover:bg-forest transition-all shadow-xl"
              >
                <Search className="mr-3 h-5 w-5" /> Verify Certificate
              </Link>
              <p className="mt-6 text-[10px] text-navy/40 italic text-center">
                Verification does not disclose private student records, coaching notes, or confidential details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Good Standing and Renewal */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-navy mb-8 uppercase tracking-widest italic border-b-4 border-gold pb-4 inline-block">Good Standing and Renewal</h2>
              <p className="text-navy/70 italic text-sm leading-relaxed mb-10">
                GCMWC credentials are not passive titles. Credential holders must remain in good standing by following the Code of Ethics, practicing within scope, maintaining their professional development, and cooperating with standards review.
              </p>
              
              <div className="bg-cream/30 p-8 border border-beige space-y-4">
                <h4 className="text-[10px] font-bold text-navy uppercase tracking-widest mb-4">Good Standing Requires:</h4>
                <ul className="space-y-3">
                  {[
                    "Ethical conduct",
                    "Accurate credential use",
                    "Compliance with scope boundaries",
                    "Referral when appropriate",
                    "Completion of renewal requirements",
                    "No unresolved disciplinary restrictions"
                  ].map((req, i) => (
                    <li key={i} className="flex items-center text-[11px] font-bold italic text-navy/70">
                      <CheckCircle className="h-3 w-3 text-gold mr-3 shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 h-full">
              {statusCards.map((status, idx) => (
                <div key={idx} className={`p-8 border-l-4 ${status.color} ${status.bg} border-y border-r border-beige flex flex-col justify-center`}>
                  <h4 className="text-xl font-bold uppercase tracking-[0.2em] italic mb-4">{status.title}</h4>
                  <p className="text-xs italic text-navy opacity-70 leading-relaxed">{status.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Credential Misuse */}
      <section className="py-24 bg-red-50 border-y border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <ShieldAlert className="h-10 w-10 text-red-600" />
              <h2 className="text-3xl font-bold text-red-900 uppercase tracking-widest italic">Credential Misuse</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 text-sm text-red-800/70 italic leading-relaxed">
              <p>
                GCMWC credentials must be used accurately. Misuse of credential titles, logos, seals, certificate language, or professional designations may result in corrective action, suspension, or revocation.
              </p>
              <div className="space-y-4">
                <h4 className="font-bold uppercase tracking-widest text-[10px] text-red-900">Examples of Misuse:</h4>
                <ul className="space-y-2">
                  <li>• Claiming credentialing without approval.</li>
                  <li>• Presenting MWC masters as a clinical license.</li>
                  <li>• Advertising diagnosis or medication guidance.</li>
                  <li>• Misrepresenting the credential as state licensure.</li>
                  <li>• Altering certificates or verification documents.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Institutional Partners */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Building2 className="h-16 w-16 text-navy/20 mx-auto mb-8" />
          <h2 className="text-3xl font-bold text-navy mb-8 uppercase tracking-widest italic">For Institutions and Organizations</h2>
          <div className="space-y-6 text-lg text-navy/80 leading-relaxed italic mb-12">
            <p>
              GCMWC credentials help organizations understand a coach’s level of preparation. Institutions use GCMWC designations to verify training completion, evaluate readiness, and support internal standards.
            </p>
            <p>
              Organizations should not treat GCMWC credentials as clinical licenses. They are for roles involving coaching, lifestyle support, ministry support, and peer guidance.
            </p>
          </div>
          <Link to="/schools" className="inline-flex items-center text-gold font-bold uppercase tracking-[0.2em] text-xs hover:text-navy transition-colors">
            Learn About Institutional Partnership <ArrowRight className="ml-3 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Section 10: Final CTA */}
      <section className="py-24 bg-navy text-white relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold uppercase tracking-widest italic mb-8 leading-tight">Need to Verify, Apply, or Understand a Credential?</h2>
          <p className="text-xl opacity-60 italic mb-12 leading-relaxed font-medium">
            Use the credential pathway, standards manual, and verification system to understand what each GCMWC designation means and how credential holders are expected to practice.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <Link to="/registry" className="px-10 py-5 border-2 border-gold text-gold font-bold uppercase tracking-widest hover:bg-gold hover:text-navy transition-all">
              Verify a Certificate
            </Link>
            <a 
              href="/downloads/gcmwc-standards-manual.pdf" 
              download="gcmwc-standards-manual.pdf"
              className="px-10 py-5 border-2 border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-navy transition-all flex items-center justify-center"
            >
              <FileDown className="mr-3 h-5 w-5" /> Download Program Manual
            </a>
          </div>
          
          <div className="pt-12 border-t border-white/10">
            <p className="text-[10px] opacity-40 uppercase tracking-[0.2em] italic leading-relaxed max-w-4xl mx-auto">
              GCMWC credentials do not constitute licensure, psychotherapy certification, medical authorization, or permission to diagnose, treat, or manage mental health conditions. Mental Wellness Coaching is a non-clinical discipline. Credential holders must comply with all applicable laws and professional requirements in the jurisdictions where they practice.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Credentials;
