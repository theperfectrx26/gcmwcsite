import { Article } from '../types';

export const MOCK_ARTICLES: Article[] = [
  {
    slug: 'how-to-become-a-mental-wellness-coach',
    title: 'How to Become a Certified Mental Wellness Coach',
    description: 'A comprehensive guide on the educational pathways, credentialing requirements, and professional standards for non-clinical coaches.',
    author: 'GCMWC Registrar',
    date: '2025-05-10',
    category: 'Education',
    content: `
      <h2>The Path to Professional Credentialing</h2>
      <p>Becoming a mental wellness coach is a significant professional commitment that bridges the gap between general life coaching and clinical mental health services. At the Global Commission for Mental Wellness Coaching (GCMWC), we define clear pathways to ensure public safety and professional excellence.</p>
      
      <h3>1. Understand the Non-Clinical Boundary</h3>
      <p>The first step in becoming a wellness coach is understanding what you *do not* do. Unlike therapists or psychologists, wellness coaches do not diagnose or treat mental illnesses. You focus on the "well" population, helping them optimize their emotional regulation, resilience, and personal goal-setting.</p>
      
      <h3>2. Complete an Accredited Core Curriculum (MWC-T)</h3>
      <p>Your journey begins with 60 hours of foundational training. This curriculum must be accredited by GCMWC to ensure it covers the module map required for the MWC-T designation. Topics include:</p>
      <ul>
        <li>Ethical Boundaries and Scope</li>
        <li>Inquiry-Based Coaching Techniques</li>
        <li>Resilience Frameworks</li>
        <li>Non-Clinical Stress Management</li>
      </ul>

      <h3>3. Applied Experience and Preceptorship (MWC-C)</h3>
      <p>Once you hold the MWC-T training designation, you must transition to professional certification (MWC-C). This requires 40 hours of verified coaching experience and 10 hours of preceptorship under a board-approved mentor.</p>

      <h3>4. The Board Evaluation</h3>
      <p>The final step is the Capstone Evaluation. This is a live demonstration of your coaching competence, ensuring you can maintain ethical boundaries while providing effective support.</p>
    `
  },
  {
    slug: 'clinical-vs-non-clinical-support',
    title: 'Non-Clinical vs. Clinical Support: Understanding the Difference',
    description: 'Why the distinction between coaching and therapy is critical for professional liability and public safety.',
    author: 'Standards Committee',
    date: '2025-05-15',
    category: 'Standards',
    content: `
      <h2>Defining the Scope</h2>
      <p>The most common risk in the mental wellness field is "scope creep"—when a non-clinical professional begins performing clinical tasks. This guide clarifies the GCMWC standards on these boundaries.</p>
      
      <h3>The Clinical Domain</h3>
      <p>Clinical work is characterized by diagnosis, treatment of pathology, and management of mental disorders. It is reserved for licensed healthcare professionals such as psychologists, psychiatrists, and clinical social workers.</p>
      
      <h3>The Coaching Domain</h3>
      <p>Non-clinical coaching is peer-level support. It focuses on the present and the future. Coaches help clients build mental fitness, much like a personal trainer helps a client build physical fitness.</p>
      
      <h3>Referral Triggers</h3>
      <p>Professional coaches must be trained to recognize when a client's needs exceed their scope. Common triggers include suicidal ideation, psychosis, active addiction, or historical trauma that interferes with current functioning.</p>
    `
  },
  {
    slug: 'scope-of-practice',
    title: 'What Mental Wellness Coaches Can and Cannot Do',
    description: 'A plain-language guide to scope of practice, green-zone coaching activities, red-zone clinical activities, and referral triggers.',
    author: 'Standards Committee',
    date: '2025-06-01',
    category: 'Scope',
    content: `
      <h2>The Boundary of Care</h2>
      <p>Mental Wellness Coaching operates within a specific "Green Zone" of activity. Success in this field depends on unwavering commitment to these boundaries.</p>
      <h3>Green Zone (What You Can Do)</h3>
      <ul>
        <li>Support stress management and resilience.</li>
        <li>Help clients identify goals and behavior patterns.</li>
        <li>Use coaching tools, reflective questions, and accountability.</li>
      </ul>
      <h3>Red Zone (What You Cannot Do)</h3>
      <ul>
        <li>Diagnose mental health disorders.</li>
        <li>Treat clinical conditions like depression or anxiety.</li>
        <li>Provide crisis intervention or psychotherapy.</li>
      </ul>
    `
  },
  {
    slug: 'referral-standards',
    title: 'When a Coach Should Refer a Client',
    description: 'How Mental Wellness Coaches recognize red flags such as suicidal ideation, psychosis, active addiction, or medical instability.',
    author: 'Ethics Panel',
    date: '2025-06-05',
    category: 'Referral',
    content: `
      <h2>Recognizing the Threshold</h2>
      <p>The most important skill a coach can possess is the ability to recognize when coaching is no longer sufficient and clinical care is required.</p>
      <h3>Critical Red Flags</h3>
      <p>Coaches must refer immediately if they encounter:</p>
      <ul>
        <li>Suicidal or homicidal ideation.</li>
        <li>Active psychosis or detachment from reality.</li>
        <li>Substance use that prevents participation in coaching.</li>
        <li>Severe, untreated trauma surfacing during sessions.</li>
      </ul>
    `
  },
  {
    slug: 'why-credentialing-matters',
    title: 'Why Credentialing Matters in Mental Wellness Coaching',
    description: 'How standards, credential verification, ethics enforcement, and renewal protect clients, coaches, institutions, and the public.',
    author: 'Executive Registry',
    date: '2025-06-10',
    category: 'Credentialing',
    content: `
      <h2>The Anchor of Professionalism</h2>
      <p>In a rapidly growing wellness market, credentials provide the anchor that ensures accountability and public trust.</p>
      <h3>Protecting the Public</h3>
      <p>Credentialing ensures that a coach has been vetted against a common standard of ethics and competence. Without it, the public has no way to verify the quality or safety of the support they receive.</p>
    `
  },
  {
    slug: 'institutional-adoption',
    title: 'How Schools Can Bring Mental Wellness Coaching to Campus',
    description: 'A guide for universities, colleges, and workforce departments that want to pilot GCMWC-aligned training.',
    author: 'Institutional Relations',
    date: '2025-06-15',
    category: 'Schools',
    content: `
      <h2>Expanding Support Infrastructure</h2>
      <p>Universities are facing a mental health crisis. GCMWC standards allow schools to train peer-coaches to handle non-clinical needs, freeing up clinical staff for serious cases.</p>
      <h3>The Pilot Model</h3>
      <p>Schools can adopt the GCMWC curriculum as a 10-week elective or professional certificate program.</p>
    `
  },
  {
    slug: 'faith-integration',
    title: 'Faith-Based Coaching Without Overstepping',
    description: 'How coaches can integrate faith, prayer, and values ethically without clinical misrepresentation.',
    author: 'Chaplaincy Support',
    date: '2025-06-20',
    category: 'Faith Integration',
    content: `
      <h2>Spiritual and Mental Wellness</h2>
      <p>For many clients, spiritual wellness is inseparable from mental wellness. GCMWC guidelines allow for the ethical integration of faith within coaching sessions.</p>
      <h3>Ethical Principles</h3>
      <ul>
        <li>Respect client autonomy.</li>
        <li>Avoid proselytizing or coercion.</li>
        <li>Maintain clarity that spiritual support is not psychotherapy.</li>
      </ul>
    `
  },
  {
    slug: 'public-safety-impact',
    title: 'Mental Wellness Coaching and Public Safety',
    description: 'Why coaching programs need scope boundaries, complaint processes, ethical standards, and referral expectations.',
    author: 'Legal Counsel',
    date: '2025-06-25',
    category: 'Public Safety',
    content: `
      <h2>Safety Through Structure</h2>
      <p>Public safety is the primary driver of GCMWC standards. By defining what coaching is *not*, we protect both the client and the coach.</p>
    `
  }
];