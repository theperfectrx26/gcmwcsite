import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, GraduationCap, Church, HeartPulse, Users2, Briefcase, 
  BookCheck, ShieldAlert, UserCog, ClipboardList, ShieldCheck, Map, 
  Link2, BarChart3, CheckCircle2, ChevronRight, FileDown,
  AlertCircle, ShieldPlus, TrendingUp
} from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Schools: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white min-h-screen text-navy">
      <SEO 
        title="Schools and Institutional Partners" 
        description="GCMWC helps schools, universities, churches, and workforce programs implement structured, non-clinical mental wellness coaching curriculum." 
        path="/schools" 
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-cream/40 overflow-hidden">
        <div className="absolute inset-0 constellation-motif opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 italic tracking-tight uppercase leading-none">
                Bring Mental Wellness Coaching <br className="hidden md:block" />
                <span className="text-teal">Into Your Institution</span>
              </h1>
              <p className="text-xl text-teal font-medium italic mb-8 max-w-2xl leading-relaxed">
                GCMWC helps schools, universities, churches, training institutes, and workforce programs implement a structured, non-clinical mental wellness coaching curriculum with clear scope boundaries, ethical standards, and practical student outcomes.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-10">
                <Link id="hero-pilot-btn" to="/schools/pilot" className="px-8 py-4 bg-navy text-white font-bold uppercase tracking-widest hover:bg-teal transition-all shadow-lg flex items-center">
                  Start a Pilot Program <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
                <a id="hero-packet-btn" href="/downloads/gcmwc-institutional-partnership-kit.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-navy text-navy font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all">
                  Download Packet
                </a>
                <Link id="hero-demo-btn" to="/contact" className="px-8 py-4 bg-gold text-white font-bold uppercase tracking-widest hover:bg-navy transition-all shadow-md">
                  Book a Call
                </Link>
              </div>

              <p className="mt-8 text-xs font-bold text-navy/40 uppercase tracking-[0.2em] italic border-l-2 border-gold pl-4 leading-relaxed">
                This is coach training and education. It does not authorize students or graduates to diagnose, treat, provide psychotherapy, or manage mental health conditions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 border-8 border-white shadow-2xl overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                  alt="Modern University Classroom" 
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-1000" 
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/10 -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal/10 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Body Copy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <p className="text-xl text-navy/80 italic leading-relaxed font-medium mb-12">
              Students, communities, and professionals are facing rising levels of stress, burnout, emotional instability, identity confusion, loneliness, and life-transition pressure. Most institutions see the need, but they don’t always have a structured training pathway that teaches people how to support others responsibly without crossing into therapy, counseling, or clinical care.
            </p>
            <div className="inline-block px-8 py-3 border-y border-gold/30 mb-12">
              <p className="text-teal font-bold uppercase tracking-[0.4em]">GCMWC gives institutions a clear framework.</p>
            </div>
            <p className="text-navy/70 leading-relaxed italic text-lg">
              Our curriculum helps organizations train students, staff, ministry leaders, peer supporters, healthcare-adjacent professionals, and community leaders in non-clinical mental wellness coaching. The program is designed to be practical, ethical, scalable, and adaptable for academic, nonprofit, faith-based, and professional learning environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: The Gap Is Obvious Now */}
      <section className="py-24 bg-cream/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest italic border-l-4 border-gold pl-6">The Gap Is Obvious Now</h2>
              <div className="space-y-6 text-navy/70 italic leading-relaxed">
                <p>
                  Mental health needs are rising faster than most institutions can respond. Counseling centers are overloaded. Faculty are seeing students in emotional distress. Churches and community organizations are carrying pastoral and emotional burdens they were never formally trained to manage. Healthcare and wellness professionals are being asked to support people beyond traditional service models.
                </p>
                <p>
                  The problem is not that people don’t care. The problem is that many helpers have compassion without a structured framework.
                </p>
                <p className="font-bold text-navy">That creates risk.</p>
                <p>
                  Without training, well-meaning support can become advice-giving, spiritual pressure, unqualified counseling, over-identification, dependency, poor boundaries, or missed referral moments. GCMWC helps institutions create a safer middle lane: trained non-clinical support that knows what it is, knows what it is not, and knows when to refer.
                </p>
              </div>
            </motion.div>
            <motion.div 
              {...fadeInUp}
              className="bg-navy p-10 md:p-16 text-white shadow-2xl relative"
            >
              <ShieldAlert className="h-12 w-12 text-gold mb-6" />
              <p className="text-2xl font-bold italic leading-tight mb-8">
                GCMWC exists to help institutions build support capacity without blurring the line between coaching and clinical care.
              </p>
              <div className="w-12 h-1 bg-gold"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Designed for Multiple Institutional Settings */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold uppercase tracking-widest italic inline-block border-b-2 border-gold pb-4">Designed for Multiple Institutional Settings</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Universities and Colleges', 
                icon: GraduationCap, 
                desc: 'Offer GCMWC as a continuing education course, certificate track, elective, student leadership training, wellness coaching pathway, or professional development program.' 
              },
              { 
                title: 'Community Colleges and Workforce Programs', 
                icon: Briefcase, 
                desc: 'Use the curriculum to prepare students for entry-level wellness coaching, peer support, community health support, lifestyle coaching, and human services-adjacent roles.' 
              },
              { 
                title: 'Churches and Ministry Schools', 
                icon: Church, 
                desc: 'Train ministry leaders, lay counselors, small group leaders, women’s ministry leaders, youth workers, and pastoral care teams in ethical, non-clinical mental wellness support.' 
              },
              { 
                title: 'Healthcare and Wellness Organizations', 
                icon: HeartPulse, 
                desc: 'Equip nurses, fitness professionals, wellness staff, health educators, care coordinators, and support teams with coaching tools that stay within appropriate boundaries.' 
              },
              { 
                title: 'Nonprofits and Community Programs', 
                icon: Users2, 
                desc: 'Use GCMWC to train community-facing leaders serving populations affected by stress, trauma exposure, grief, burnout, family instability, or major life transition.' 
              },
              { 
                title: 'Corporate Learning and Leadership Programs', 
                icon: Building2, 
                desc: 'Add mental wellness coaching principles into employee wellness, leadership development, burnout prevention, team support, and resilience programs.' 
              }
            ].map((card, i) => (
              <motion.div 
                key={i} 
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="group p-10 border border-cream hover:border-teal transition-all bg-cream/5"
              >
                <div className="w-14 h-14 bg-navy flex items-center justify-center mb-8 group-hover:bg-teal transition-colors">
                  <card.icon className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-widest italic">{card.title}</h4>
                <p className="text-navy/60 italic text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: What Your Institution Gets */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 constellation-motif opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold uppercase tracking-widest italic mb-6">What Your Institution Gets</h2>
            <p className="text-teal font-medium italic">GCMWC provides a structured curriculum and implementation model that helps institutions launch responsibly, train consistently, and document outcomes.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { title: 'Course-Ready Curriculum', icon: BookCheck, desc: 'A structured training framework that can be adapted for academic credit, non-credit continuing education, certificate programs, workshops, or cohort-based training.' },
              { title: 'Scope and Ethics Framework', icon: ShieldCheck, desc: 'Clear language defining what Mental Wellness Coaches can and cannot do, including referral triggers, boundary rules, and non-clinical practice standards.' },
              { title: 'Instructor Guidance', icon: UserCog, desc: 'Teaching notes, facilitation guidance, module objectives, suggested assignments, discussion prompts, and practical coaching lab structure.' },
              { title: 'Assessment and Evaluation Tools', icon: ClipboardList, desc: 'Rubrics, case study assignments, coaching practice evaluations, competency checks, completion requirements, and feedback tools.' },
              { title: 'Student Protection Policies', icon: ShieldPlus, desc: 'Support for informed consent, confidentiality boundaries, attendance expectations, grievance procedures, completion standards, and ethical conduct.' },
              { title: 'Implementation Roadmap', icon: Map, desc: 'A pilot-ready launch plan that helps institutions decide cohort size, delivery format, faculty roles, technology needs, assessment flow, and student communication.' },
              { title: 'Credential Pathway Alignment', icon: Link2, desc: 'Students can train toward GCMWC-aligned completion, MWC-T readiness, or MWC-C pathway requirements depending on the institution’s adoption agreement.' },
              { title: 'Marketing and Enrollment Support', icon: BarChart3, desc: 'Institutional copy, program descriptions, enrollment language, compliance wording, and student-facing explanations that avoid misleading claims.' }
            ].map((item, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.05 }} className="flex flex-col">
                <item.icon className="h-8 w-8 text-gold mb-6" />
                <h5 className="font-bold uppercase tracking-[0.2em] text-xs mb-4 text-teal leading-tight">{item.title}</h5>
                <p className="text-white/60 italic text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: What Students Are Trained to Do */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest italic">What Students Are Trained to Do</h2>
              <p className="text-navy/70 italic leading-relaxed mb-10">
                Students are trained to provide structured, ethical, non-clinical support for mental wellness. The goal is not to turn students into therapists. The goal is to equip them with practical coaching skills, referral awareness, and whole-person wellness frameworks they can use responsibly.
              </p>
              <div className="space-y-4">
                {[
                  'Understand the difference between coaching, therapy, counseling, consulting, mentorship, and pastoral care.',
                  'Use active listening, reflective questioning, and goal-setting to support client growth.',
                  'Recognize emotional distress, stress patterns, burnout, avoidance, low self-worth, and relational patterns without diagnosing.',
                  'Apply non-clinical mental wellness tools such as journaling, values clarification, grounding, habit tracking, wellness planning, and accountability.',
                  'Integrate mental, emotional, physical, and spiritual wellness concepts responsibly.',
                  'Discuss faith and spirituality ethically without manipulation, coercion, or overstepping.',
                  'Understand nutrition, lifestyle, sleep, stress, and behavior patterns as part of whole-person wellness education.',
                  'Identify red flags requiring referral to licensed professionals or emergency support.',
                  'Document coaching practice and communicate boundaries clearly.',
                  'Build a coaching practice or support role with ethical marketing and professional standards.'
                ].map((check, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                    <span className="text-navy/80 italic text-sm font-medium">{check}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              {...fadeInUp}
              className="bg-sage/20 p-12 border-2 border-navy relative"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 -z-0"></div>
              <h4 className="text-xl font-bold mb-8 uppercase tracking-widest italic relative z-10">Curriculum Intent</h4>
              <p className="text-navy leading-relaxed italic relative z-10 font-medium">
                "Our objective is to train a new generation of helpers who bridge the gap between 'no support' and 'professional clinical care'. We teach them how to stay in their lane, hold people well, and point them toward higher care when it's needed."
              </p>
              <div className="mt-8 pt-8 border-t border-navy/10 relative z-10">
                <p className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Global Commission for Mental Wellness Coaching</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Curriculum Areas */}
      <section className="py-24 bg-cream/10 border-y border-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold uppercase tracking-widest italic inline-block border-b-2 border-gold pb-4">Curriculum Areas</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { id: 1, title: 'Foundations of Mental Wellness Coaching', desc: 'Coaching roles, agreements, ethical boundaries, active listening, powerful questions, client autonomy, and coaching vs. therapy.' },
              { id: 2, title: 'Mental Wellness Frameworks', desc: 'Stress, emotional regulation, burnout, trauma-informed awareness, red flags, referral protocols, and non-clinical support strategies.' },
              { id: 3, title: 'Faith-Based Integration', desc: 'Ethical integration of faith, prayer, identity, forgiveness, discernment, spiritual support, and non-coercive practice.' },
              { id: 4, title: 'Nutrition and Emotional Health', desc: 'Gut-brain connection, hydration, blood sugar, mood-supportive habits, food patterns, and referral to licensed nutrition or medical professionals when needed.' },
              { id: 5, title: 'Pharmacology Awareness', desc: 'Basic awareness of medications, supplements, safety concerns, contraindications, collaboration, and strict limits of coaching scope.' },
              { id: 6, title: 'Wellness Coaching Strategies', desc: 'Behavior change, motivational interviewing concepts, emotional intelligence, action planning, habit formation, accountability, and client-centered support.' },
              { id: 7, title: 'Practice Development and Professional Application', desc: 'Coaching agreements, documentation, ethical marketing, pricing, client communication, case studies, observed coaching, and capstone application.' }
            ].map((module) => (
              <motion.div key={module.id} {...fadeInUp} className="bg-white p-8 border border-cream shadow-sm hover:shadow-md transition-all">
                <span className="text-[10px] font-bold text-teal uppercase tracking-[0.3em] mb-4 block">Module {module.id}</span>
                <h5 className="font-bold text-navy text-sm uppercase tracking-widest mb-4 italic leading-tight">{module.title}</h5>
                <p className="text-navy/60 text-xs italic leading-relaxed">{module.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Adoption Models */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold uppercase tracking-widest italic mb-6">How Schools Can Bring GCMWC Into Their Programs</h2>
            <p className="text-navy/50 italic text-sm leading-relaxed">GCMWC can be adopted in several ways depending on the institution’s goals, calendar, faculty capacity, student population, and credentialing needs.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                option: 'Option 1', 
                title: 'Pilot Cohort Model', 
                context: 'Best for schools that want to test the curriculum before full adoption.',
                desc: 'A small cohort completes the program over 8 to 12 weeks. The institution evaluates student engagement, assessment outcomes, faculty feedback, and implementation logistics before expanding.',
                audience: 'universities, ministry schools, nonprofit training programs, and continuing education departments.'
              },
              { 
                option: 'Option 2', 
                title: 'Continuing Education Certificate', 
                context: 'Best for professional learners and adult education.',
                desc: 'The institution offers the program as a non-credit certificate for professionals who want coaching skills in mental wellness, faith integration, wellness support, leadership, ministry, or community care.',
                audience: 'extension programs, professional development departments, workforce development, and healthcare-adjacent organizations.'
              },
              { 
                option: 'Option 3', 
                title: 'Academic Course Integration', 
                context: 'Best for colleges and universities.',
                desc: 'GCMWC curriculum can be adapted into an elective, certificate course, practicum, health education course, psychology-adjacent course, leadership course, or wellness studies offering.',
                audience: 'departments of psychology, public health, nursing, social sciences, theology, wellness, human services, and leadership studies.'
              },
              { 
                option: 'Option 4', 
                title: 'Institutional Training Partner', 
                context: 'Best for organizations that want to deliver GCMWC-aligned training consistently.',
                desc: 'The institution enters an adoption agreement and receives curriculum guidance, standards expectations, assessment requirements, and branding/compliance rules for approved use.',
                audience: 'schools, churches, training institutes, nonprofits, and global education partners.'
              }
            ].map((model, i) => (
              <motion.div key={i} {...fadeInUp} className="flex flex-col h-full border-l-4 border-navy bg-cream/5 p-10">
                <span className="text-[10px] font-bold text-gold uppercase tracking-[0.3em] mb-4 block underline decoration-navy underline-offset-4">{model.option}</span>
                <h4 className="text-xl font-bold mb-2 uppercase tracking-widest italic">{model.title}</h4>
                <p className="text-teal font-bold text-xs uppercase tracking-wider mb-6 italic">{model.context}</p>
                <p className="text-navy/70 italic text-sm leading-relaxed mb-6 flex-grow">{model.desc}</p>
                <div className="pt-6 border-t border-navy/10 mt-auto">
                  <p className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Best for: <span className="text-navy/60">{model.audience}</span></p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: What Your Institution Needs to Launch */}
      <section className="py-24 bg-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold uppercase tracking-widest italic mb-6">What Your Institution Needs to Launch</h2>
            <p className="text-navy/50 italic text-sm leading-relaxed">This program is built to be implementable. Institutions do not need to build a coaching curriculum from scratch. They need the right structure, faculty alignment, student support process, and administrative clarity.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Program Lead', desc: 'A designated institutional contact who manages communication, scheduling, student questions, implementation decisions, and compliance coordination with GCMWC.' },
              { title: 'Qualified Instructors', desc: 'Faculty, trainers, or approved facilitators who understand coaching ethics, mental wellness boundaries, referral standards, and the non-clinical scope of the curriculum.' },
              { title: 'Delivery Platform', desc: 'A learning system such as LearnWorlds, Canvas, Moodle, Teachable, Thinkific, Google Classroom, or the institution’s internal LMS.' },
              { title: 'Live Training Capacity', desc: 'Zoom, Google Meet, in-person classroom space, or hybrid meeting structure for coaching labs, discussions, role-play, peer coaching, and observed practice.' },
              { title: 'Assessment Process', desc: 'A system for collecting assignments, scoring rubrics, reviewing coaching demonstrations, tracking completion, and documenting feedback.' },
              { title: 'Student Support', desc: 'Clear onboarding, attendance expectations, technology guidance, grievance procedure, confidentiality rules, and referral language.' },
              { title: 'Compliance Language', desc: 'Public-facing language must clearly state that Mental Wellness Coaching is non-clinical and does not authorize diagnosis, psychotherapy, medical care, or crisis intervention.' }
            ].map((req, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.05 }} className="bg-white p-8 border-b-4 border-teal shadow-lg hover:-translate-y-1 transition-all">
                <h5 className="font-bold text-navy uppercase tracking-widest text-xs mb-4 italic">{req.title}</h5>
                <p className="text-navy/60 text-[11px] italic leading-relaxed">{req.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Sample 10-Week Course Structure */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold uppercase tracking-widest italic inline-block border-b-2 border-gold pb-4">Sample 10-Week Course Structure</h2>
          </div>
          
          <div className="relative">
            <div className="absolute top-[3.25rem] left-0 right-0 h-1 bg-cream/40 hidden lg:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-8">
              {[
                { week: 'Week 1', title: 'Orientation & Foundations', desc: 'Students learn coaching identity, scope, ethics, agreements, confidentiality, and the difference between coaching and clinical care.' },
                { week: 'Weeks 2-3', title: 'Mental Wellness Frameworks', desc: 'Students explore stress, burnout, emotional regulation, trauma-informed awareness, behavior patterns, red flags, and referral standards.' },
                { week: 'Week 4', title: 'Faith & Values Integration', desc: 'Students learn how to support spirituality, values, prayer, purpose, and identity without coercion or theological overreach.' },
                { week: 'Week 5', title: 'Lifestyle & Nutrition', desc: 'Students learn how nutrition, hydration, sleep, movement, and routines affect emotional wellness within a non-clinical model.' },
                { week: 'Week 6', title: 'Pharmacology Awareness', desc: 'Students learn basic medication awareness, safety considerations, and when coaching must pause for medical referral.' },
                { week: 'Weeks 7-8', title: 'Coaching Strategy & Labs', desc: 'Students practice active listening, powerful questions, behavior change tools, goal setting, and accountability.' },
                { week: 'Week 9', title: 'Professional Practice', desc: 'Students learn coaching agreements, documentation, client boundaries, pricing, and role clarity.' },
                { week: 'Week 10', title: 'Capstone & Review', desc: 'Students complete a practical coaching demonstration, case-based reflection, capstone plan, and final evaluation.' }
              ].map((item, i) => (
                <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className={`relative pt-10 ${i >= 5 ? 'lg:mt-16' : ''}`}>
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-navy border-4 border-white shadow-md z-10 hidden lg:block"></div>
                   <div className="bg-cream/10 p-6 rounded-sm border border-cream/30 h-full">
                     <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-3 block">{item.week}</span>
                     <h5 className="font-bold text-navy text-[11px] uppercase tracking-widest mb-3 italic leading-tight">{item.title}</h5>
                     <p className="text-navy/60 text-[11px] leading-relaxed italic">{item.desc}</p>
                   </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Built With Safety in Mind */}
      <section className="py-24 bg-navy text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp} className="relative">
              <ShieldCheck className="h-16 w-16 text-teal mb-8" />
              <h2 className="text-3xl font-bold uppercase tracking-widest italic mb-6">Built With Safety in Mind</h2>
              <p className="text-white/70 italic leading-relaxed mb-6">
                Institutional adoption must protect students, clients, and the public. GCMWC curriculum includes strong boundaries around scope of practice, referral triggers, ethics, confidentiality, and documentation.
              </p>
              <p className="text-white/70 italic leading-relaxed">
                This matters because mental wellness coaching operates near sensitive areas: emotional pain, trauma exposure, grief, stress, identity, faith, relationships, burnout, and personal change. Without clear standards, coaching can become unsafe. With clear standards, students learn how to support without overstepping.
              </p>
            </motion.div>
            <motion.div 
              {...fadeInUp}
              className="bg-white/5 p-10 md:p-14 border-l-2 border-gold grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4"
            >
              {[
                'Clear non-clinical disclaimer.',
                'Referral triggers: suicide, homicide, psychosis, abuse.',
                'Active addiction & medical instability protocols.',
                'Informed consent language & documentation.',
                'Confidentiality boundaries & legal limitations.',
                'No diagnosis, treatment, or psychotherapy.',
                'No medication management or physical prescriptions.',
                'Documentation & record-keeping expectations.',
                'Complaint and grievance pathways for students.',
                'Faculty escalation process & conduct expectations.'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                  <span className="text-white/80 text-[10px] italic font-medium uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 10: Why This Matters for Your School */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold uppercase tracking-widest italic inline-block border-b-2 border-gold pb-4">Why This Matters for Your School</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Strengthens Support Capacity', icon: HeartPulse, desc: 'Trains students and staff to recognize distress, hold structured conversations, and refer appropriately.' },
              { title: 'Career-Relevant Credential', icon: GraduationCap, desc: 'Gives learners a practical certification route in a growing wellness and coaching field.' },
              { title: 'Protects Scope & Reduces Confusion', icon: ShieldCheck, desc: 'Clarifies the line between coaching, therapy, ministry care, peer support, and clinical treatment.' },
              { title: 'Supports Whole-Person Education', icon: Users2, desc: 'Integrates emotional, mental, physical, behavioral, and spiritual wellness into one framework.' },
              { title: 'Expands Community Impact', icon: TrendingUp, desc: 'Equips graduates to serve families, churches, workplaces, nonprofits, and wellness organizations.' },
              { title: 'Institutional Differentiation', icon: Building2, desc: 'Positions the institution as a leader in practical mental wellness education, not just theory.' }
            ].map((benefit, i) => (
              <motion.div 
                key={i} 
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="bg-cream/5 p-10 border border-cream hover:border-gold/30 transition-colors"
              >
                <benefit.icon className="h-10 w-10 text-teal mb-6" />
                <h4 className="text-lg font-bold mb-4 uppercase tracking-widest italic leading-tight">{benefit.title}</h4>
                <p className="text-navy/60 italic text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: How Partnership Works */}
      <section className="py-24 bg-cream/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold uppercase tracking-widest italic inline-block border-b-2 border-gold pb-4">How Partnership Works</h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gold/30 lg:-translate-x-1/2"></div>
            <div className="space-y-16">
              {[
                { step: 'Step 1', title: 'Discovery Call', desc: 'We review your institution’s goals, audience, timeline, delivery model, and desired student outcomes.' },
                { step: 'Step 2', title: 'Curriculum Fit Review', desc: 'GCMWC reviews how the curriculum can fit your academic calendar, continuing education model, or workforce program.' },
                { step: 'Step 3', title: 'Implementation Plan', desc: 'We define cohort size, course length, instructor roles, technology setup, and launch timeline.' },
                { step: 'Step 4', title: 'Compliance Alignment', desc: 'Your team receives guidance on scope language, teaching expectations, and approved use of materials.' },
                { step: 'Step 5', title: 'Pilot Launch', desc: 'The institution launches a controlled pilot cohort with defined reporting and completion tracking.' },
                { step: 'Step 6', title: 'Review and Scale', desc: 'After the pilot, we review outcomes and determine whether to expand the institutional program.' }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  {...fadeInUp}
                  className={`flex flex-col lg:flex-row items-center ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="w-full lg:w-1/2 px-16 text-center lg:text-left">
                    <div className={`p-8 bg-white border border-cream shadow-xl ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <span className="text-[10px] font-bold text-teal uppercase tracking-[0.3em] mb-2 block">{item.step}</span>
                      <h5 className="font-bold text-navy text-lg uppercase tracking-widest mb-4 italic">{item.title}</h5>
                      <p className="text-navy/60 text-sm italic leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-navy text-white text-xs font-bold z-10 border-4 border-white shadow-md">
                    {i + 1}
                  </div>
                  <div className="hidden lg:block w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Adoption Standards */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold uppercase tracking-widest italic mb-6">Adoption Standards</h2>
          </div>
          <motion.div {...fadeInUp} className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white border-b-4 border-gold">
                  <th className="px-8 py-5 text-left text-[10px] font-bold uppercase tracking-[0.3em] italic">Standard Area</th>
                  <th className="px-8 py-5 text-left text-[10px] font-bold uppercase tracking-[0.3em] italic">Requirement</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  { area: 'Curriculum Integrity', req: 'Use authorized GCMWC curriculum or approved partner curriculum without unauthorized changes.' },
                  { area: 'Qualified Instruction', req: 'Faculty must be qualified to teach assigned content and must understand referral protocols.' },
                  { area: 'Student Protection', req: 'Students must receive accurate information about credential meaning, scope, and limitations.' },
                  { area: 'Assessment Standards', req: 'Programs must use rubrics, coaching demonstrations, case studies, and documented completion requirements.' },
                  { area: 'Marketing Accuracy', req: 'Institutions may not represent GCMWC credentials as licensure, therapy certification, or medical training.' },
                  { area: 'Compliance Cooperation', req: 'Institutions must cooperate with GCMWC review, reporting, complaints, audits, and corrective action.' }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-cream hover:bg-cream/10 transition-colors">
                    <td className="px-8 py-7 font-bold text-xs uppercase tracking-widest text-navy bg-cream/5">{row.area}</td>
                    <td className="px-8 py-7 text-[11px] italic text-navy/70 leading-relaxed">{row.req}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-navy text-white relative overflow-hidden text-center border-t-8 border-gold">
        <div className="absolute inset-0 constellation-motif opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest italic mb-6 leading-tight">
              Ready to Bring Mental Wellness Coaching <br className="hidden md:block" />
              to Your Institution?
            </h2>
            <p className="text-teal text-lg mb-12 italic leading-relaxed">
              GCMWC helps institutions launch structured mental wellness coaching education without building a curriculum from scratch. Start with a pilot, train a small cohort, document outcomes, and scale responsibly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
              <a id="cta-packet-btn" href="/downloads/gcmwc-institutional-partnership-kit.pdf" target="_blank" rel="noopener noreferrer" className="px-10 py-5 border-2 border-gold text-gold font-bold uppercase tracking-widest hover:bg-gold hover:text-navy transition-all w-full sm:w-auto">
                Download Partnership Packet
              </a>
              <Link id="cta-pilot-btn" to="/schools/pilot" className="px-10 py-5 bg-teal text-white font-bold uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-xl w-full sm:w-auto">
                Start Pilot Application
              </Link>
              <Link id="cta-demo-btn" to="/contact" className="px-10 py-5 bg-white text-navy font-bold uppercase tracking-widest hover:bg-teal hover:text-white transition-all shadow-md w-full sm:w-auto">
                Book a Demo Call
              </Link>
            </div>
            
            <div className="mt-8">
              <a id="cta-kit-btn" href="/downloads/gcmwc-institutional-partnership-kit.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-teal font-bold text-xs uppercase tracking-widest hover:text-gold transition-colors">
                 Download Institutional Kit
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <section className="py-12 bg-cream/30 text-navy/50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[10px] italic leading-relaxed uppercase tracking-widest">
            This program provides coach training and education. It does not license participants to diagnose, treat, provide psychotherapy, prescribe, manage medication, provide crisis intervention, or replace licensed medical or mental health care. Institutions are responsible for following applicable laws, policies, and professional requirements in their jurisdiction.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Schools;
