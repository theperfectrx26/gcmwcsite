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
  }
];