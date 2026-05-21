import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  ShieldCheck, 
  Award, 
  Building2, 
  BookOpen, 
  Download, 
  Scale, 
  CheckCircle, 
  Search, 
  ArrowRight, 
  GraduationCap, 
  Users, 
  Info, 
  Lock, 
  ShieldAlert,
  ArrowUpRight,
  Book,
  ClipboardCheck,
  Zap,
  Globe,
  Plus
} from 'lucide-react';
import { motion } from 'motion/react';
import ConstellationBg from '../components/ConstellationBg';
import SEO from '../components/SEO';

const Resources: React.FC = () => {
  const featuredResources = [
    {
      title: "Program Standards Manual",
      description: "The official public standards document for GCMWC credentialing, scope of practice, ethics, referral expectations, and renewal.",
      buttonText: "Download Manual",
      link: "/downloads/gcmwc-standards-manual.pdf",
      isDownload: true,
      icon: <Book className="h-6 w-6" />
    },
    {
      title: "University Implementation Kit",
      description: "A practical guide for schools, universities, churches, and workforce programs that want to adopt or pilot the GCMWC curriculum.",
      buttonText: "Download Kit",
      link: "/downloads/gcmwc-institutional-partnership-kit.pdf",
      isDownload: true,
      icon: <Building2 className="h-6 w-6" />
    },
    {
      title: "Credential Pathway Guide",
      description: "A clear breakdown of MWC-T™ and MWC-C™ designations, training requirements, practice standards, and evaluation expectations.",
      buttonText: "View Credentials",
      link: "/credentials",
      isDownload: false,
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "Ethics and Complaints Guide",
      description: "Guidance on GCMWC ethical expectations, professional conduct, complaint review, public safety concerns, and scope violations.",
      buttonText: "View Ethics Page",
      link: "/ethics",
      isDownload: false,
      icon: <Lock className="h-6 w-6" />
    }
  ];

  const categories = [
    {
      title: "For Students",
      description: "Resources for people considering or currently completing GCMWC training.",
      items: ["How to become a coach", "Program expectations", "Scope of practice", "Credential requirements", "Study tools", "Practice guidance"],
      icon: <GraduationCap className="h-8 w-8" />
    },
    {
      title: "For Credential Holders",
      description: "Resources for trained and certified coaches practicing under GCMWC standards.",
      items: ["Code of Ethics", "Renewal expectations", "Good standing", "Referral standards", "Professional conduct", "Credential use rules"],
      icon: <Award className="h-8 w-8" />
    },
    {
      title: "For Institutions",
      description: "Resources for schools, churches, universities, and training organizations.",
      items: ["Adoption standards", "Pilot program guide", "Implementation kit", "Faculty requirements", "Curriculum expectations", "Student protection"],
      icon: <Building2 className="h-8 w-8" />
    },
    {
      title: "For the Public",
      description: "Resources for clients, employers, and organizations to understand GCMWC.",
      items: ["Verify a certificate", "Coaching boundaries", "Submit a complaint", "When to seek clinical care", "Public safety", "Transparency"],
      icon: <Users className="h-8 w-8" />
    }
  ];

  const articles = [
    {
      title: "How to Become a Certified Mental Wellness Coach",
      description: "A guide to the educational pathway, training expectations, credential requirements, and final evaluation process.",
      category: "Education",
      slug: "how-to-become-a-mental-wellness-coach"
    },
    {
      title: "Non-Clinical vs. Clinical Support: Understanding the Difference",
      description: "Why the distinction between coaching and therapy matters for public safety and professional accountability.",
      category: "Standards",
      slug: "clinical-vs-non-clinical-support"
    },
    {
      title: "What Mental Wellness Coaches Can and Cannot Do",
      description: "A plain-language guide to scope of practice, green-zone coaching activities, and red-zone clinical activities.",
      category: "Scope",
      slug: "scope-of-practice" // Note: This might need a real article or just placeholder link
    },
    {
      title: "When a Coach Should Refer a Client",
      description: "How coaches recognize red flags such as suicidal ideation, psychosis, abuse, or medical instability.",
      category: "Referral",
      slug: "referral-standards"
    },
    {
      title: "Why Credentialing Matters in Mental Wellness Coaching",
      description: "How standards, verification, ethics, and renewal protect clients, coaches, and the public.",
      category: "Credentialing",
      slug: "why-credentialing-matters"
    },
    {
      title: "How Schools Can Bring Mental Wellness Coaching to Campus",
      description: "A guide for universities and colleges that want to pilot GCMWC-aligned training.",
      category: "Schools",
      slug: "institutional-adoption"
    },
    {
      title: "Faith-Based Coaching Without Overstepping",
      description: "How coaches can integrate faith and values ethically without clinical misrepresentation.",
      category: "Faith Integration",
      slug: "faith-integration"
    },
    {
      title: "Mental Wellness Coaching and Public Safety",
      description: "Why coaching programs need scope boundaries, complaint processes, and ethical standards.",
      category: "Public Safety",
      slug: "public-safety-impact"
    }
  ];

  const downloadLibrary = [
    { title: "GCMWC Program Standards Manual", type: "PDF", link: "/downloads/gcmwc-standards-manual.pdf" },
    { title: "University Implementation Kit", type: "PDF", link: "/downloads/gcmwc-institutional-partnership-kit.pdf" },
    { title: "Credential Overview Guide", type: "PDF", link: "/contact" },
    { title: "Scope of Practice Summary", type: "PDF", link: "/contact" },
    { title: "Referral Standards Checklist", type: "PDF", link: "/contact" },
    { title: "Code of Ethics Summary", type: "PDF", link: "/contact" }
  ];

  const updates = [
    {
      title: "July Cohort Enrollment",
      description: "The next GCMWC online training cohort begins in July. Enrollment is limited to 15 students.",
      buttonText: "Enroll Now",
      link: "https://gcmwc.learnworlds.com/home",
      isExternal: true
    },
    {
      title: "Institutional Pilot Applications",
      description: "GCMWC is accepting partners for institutional curriculum adoption and pilot programs.",
      buttonText: "Start Application",
      link: "/contact"
    },
    {
      title: "Credential Verification",
      description: "Public certificate verification is available for employers and institutions.",
      buttonText: "Verify Certificate",
      link: "/registry"
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-16">
      <SEO 
        title="Professional Resource Center" 
        description="Official guides, manuals, and articles on mental wellness coaching standards, ethics, and credentialing."
        path="/resources"
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
            <h1 className="text-4xl md:text-6xl font-bold text-navy mb-8 tracking-tight uppercase italic underline decoration-gold decoration-4 underline-offset-8">
              Resources for Standards
            </h1>
            <p className="text-xl md:text-2xl text-navy/80 mb-6 font-medium max-w-4xl mx-auto leading-tight italic">
              Guides, manuals, articles, and public education tools designed to help students, coaches, institutions, and the public understand ethical non-clinical Mental Wellness Coaching.
            </p>
            
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-navy/70 leading-relaxed italic mb-12">
              <p>
                The GCMWC Resource Center provides practical education on credentialing, scope of practice, ethical coaching, referral standards, institutional adoption, and professional development.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/downloads/gcmwc-standards-manual.pdf" download className="px-10 py-5 bg-navy text-white font-bold uppercase tracking-widest hover:bg-forest transition-all shadow-xl flex items-center justify-center">
                <Download className="mr-3 h-5 w-5 text-gold" /> Standards Manual
              </a>
              <Link to="/credentials" className="px-10 py-5 border-2 border-navy text-navy font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all flex items-center justify-center">
                View Pathways
              </Link>
              <Link to="/schools" className="px-10 py-5 bg-gold text-white font-bold uppercase tracking-widest hover:bg-[#a67d35] transition-all shadow-xl flex items-center justify-center">
                Institutional Resources
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Featured Resources */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy uppercase tracking-widest italic mb-16 text-center">Featured Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredResources.map((res, idx) => (
              <div key={idx} className="bg-white p-10 border border-beige shadow-sm hover:shadow-2xl transition-all border-t-8 border-navy flex flex-col items-start">
                <div className="bg-cream w-12 h-12 flex items-center justify-center mb-8 text-navy shadow-inner">
                  {res.icon}
                </div>
                <h3 className="text-sm font-bold text-navy mb-4 uppercase tracking-wider italic h-10 flex items-center">{res.title}</h3>
                <p className="text-navy/60 text-xs leading-relaxed italic mb-8 flex-grow">{res.description}</p>
                {res.isDownload ? (
                  <a href={res.link} download className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] flex items-center group">
                    {res.buttonText} <Download className="ml-2 h-3 w-3 group-hover:translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <Link to={res.link} className="text-[10px] font-bold text-navy uppercase tracking-[0.2em] flex items-center group">
                    {res.buttonText} <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Find What You Need */}
      <section className="py-24 bg-beige/20 border-y border-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy uppercase tracking-widest italic mb-16 text-center">Find What You Need</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-white p-10 border border-beige shadow-sm flex flex-col h-full">
                <div className="text-gold mb-6">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-4 uppercase tracking-widest italic">{cat.title}</h3>
                <p className="text-navy/60 text-xs italic mb-6 leading-relaxed">{cat.description}</p>
                <ul className="space-y-3 mt-auto pt-6 border-t border-beige">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center text-[10px] font-bold uppercase tracking-widest text-navy/40">
                      <Plus className="h-3 w-3 mr-2 text-gold" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Essential Articles and Guides */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy uppercase tracking-widest italic mb-6">Essential Articles and Guides</h2>
            <p className="max-w-3xl mx-auto text-navy/60 italic leading-relaxed">
              These articles explain the core ideas behind ethical Mental Wellness Coaching and help the public understand how GCMWC defines professional standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article, idx) => (
              <div key={idx} className="group bg-white p-8 border border-beige shadow-sm hover:shadow-xl transition-all flex flex-col border-b-4 border-transparent hover:border-gold">
                <div className="mb-6">
                  <span className="text-[9px] font-bold text-gold uppercase tracking-[0.2em] border border-gold/30 px-3 py-1 bg-gold/5">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-navy mb-4 italic leading-tight group-hover:text-teal transition-colors flex-grow">
                  {article.title}
                </h3>
                <p className="text-xs text-navy/60 italic leading-relaxed mb-8">
                  {article.description}
                </p>
                <Link to={`/resources/${article.slug}`} className="text-[10px] font-bold uppercase tracking-widest text-navy mt-auto flex items-center group-hover:text-gold transition-colors">
                  Read More <ArrowUpRight className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Download Library */}
      <section className="py-24 bg-cream/30 border-y border-beige">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy uppercase tracking-widest italic mb-6">Download Library</h2>
            <p className="text-navy/60 italic leading-relaxed">
              Download official GCMWC documents and implementation resources.
            </p>
          </div>

          <div className="bg-white border border-beige shadow-2xl divide-y divide-beige">
            {downloadLibrary.map((item, idx) => (
              <div key={idx} className="p-8 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-beige/5 transition-colors group">
                <div className="flex items-center gap-6 mb-4 sm:mb-0">
                  <div className="bg-cream p-3 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy uppercase tracking-widest italic mb-1 leading-tight">{item.title}</h3>
                    <span className="text-[10px] font-bold text-navy/30 uppercase tracking-[0.2em]">{item.type} DOCUMENT</span>
                  </div>
                </div>
                <a 
                  href={item.link} 
                  download 
                  className="px-6 py-3 border-2 border-navy text-navy font-bold text-[10px] uppercase tracking-widest hover:bg-navy hover:text-white transition-all text-center flex items-center justify-center whitespace-nowrap"
                >
                  Download <Download className="ml-2 h-3 w-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Public Safety Callout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy p-12 md:p-20 relative overflow-hidden text-center text-white border-b-8 border-gold shadow-2xl">
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <ShieldAlert className="h-64 w-64" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest italic mb-8 leading-tight">Need Help Understanding the Boundary?</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl opacity-70 italic leading-relaxed mb-12">
                <p>
                  Mental Wellness Coaching is not therapy, counseling, psychiatry, medical treatment, or crisis intervention. Coaching can support growth, self-awareness, accountability, values, behavior change, and wellness planning. It must not replace licensed clinical care.
                </p>
                <p className="text-gold font-bold">
                  If a person is experiencing suicidal ideation, homicidal ideation, psychosis, abuse, active addiction, severe depression, medical instability, or an immediate safety concern, coaching is not the appropriate first response.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/standards" className="px-10 py-5 bg-gold text-navy font-bold uppercase tracking-widest hover:bg-white transition-all shadow-xl">
                  View Scope of Practice
                </Link>
                <Link to="/ethics/complaint" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-navy transition-all">
                  Submit a Complaint
                </Link>
                <Link to="/registry" className="px-10 py-5 bg-white text-navy font-bold uppercase tracking-widest hover:bg-teal hover:text-white transition-all shadow-xl">
                  Verify a Certificate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Latest Updates */}
      <section className="py-24 bg-beige/10 border-t border-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy uppercase tracking-widest italic mb-16 text-center">Latest Updates</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {updates.map((update, idx) => (
              <div key={idx} className="bg-white p-10 border border-beige shadow-sm flex flex-col h-full hover:shadow-xl transition-all group">
                <div className="mb-8 flex justify-between items-start">
                  <Zap className="h-8 w-8 text-gold" />
                  <span className="text-[9px] font-bold text-navy/30 uppercase tracking-widest">Update 0{idx+1}</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-6 uppercase tracking-widest italic leading-tight">{update.title}</h3>
                <p className="text-sm text-navy/60 italic leading-relaxed mb-8 flex-grow">{update.description}</p>
                {('isExternal' in update && update.isExternal) ? (
                  <a 
                    href={update.link} 
                    className="px-6 py-4 bg-navy text-white font-bold text-[10px] uppercase tracking-widest hover:bg-gold hover:text-navy transition-all text-center"
                  >
                    {update.buttonText}
                  </a>
                ) : (
                  <Link 
                    to={update.link} 
                    className="px-6 py-4 bg-navy text-white font-bold text-[10px] uppercase tracking-widest hover:bg-gold hover:text-navy transition-all text-center"
                  >
                    {update.buttonText}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Final CTA */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="w-16 h-1 bg-gold mx-auto mb-12"></div>
          <h2 className="text-4xl font-bold text-navy uppercase tracking-widest italic mb-8 leading-tight">Looking for a Specific Resource?</h2>
          <p className="text-xl text-navy/60 italic mb-12 leading-relaxed">
            If you are a student, institution, employer, church, or organization and need a specific policy, verification document, adoption packet, or standards clarification, contact GCMWC for support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="px-10 py-5 bg-navy text-white font-bold uppercase tracking-widest hover:bg-forest transition-all shadow-xl">
              Contact GCMWC
            </Link>
            <Link to="/contact" className="px-10 py-5 border-2 border-navy text-navy font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all">
              Request a Resource
            </Link>
            <Link to="/schools" className="px-10 py-5 bg-gold text-white font-bold uppercase tracking-widest hover:bg-navy transition-all shadow-xl">
              Partner With GCMWC
            </Link>
          </div>
          
          <div className="mt-20 pt-12 border-t border-beige">
            <p className="text-[10px] text-navy/30 uppercase tracking-[0.2em] italic leading-loose max-w-4xl mx-auto">
              GCMWC resources are provided for education and standards guidance. GCMWC credentials do not constitute licensure, psychotherapy certification, medical authorization, or permission to diagnose, treat, or manage mental health conditions. Mental Wellness Coaching is a non-clinical discipline.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
