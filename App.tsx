import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Standards from './pages/Standards';
import Credentials from './pages/Credentials';
import MWCT from './pages/MWCT';
import MWCC from './pages/MWCC';
import ProgramAccreditation from './pages/ProgramAccreditation';
import Registry from './pages/Registry';
import Directory from './pages/Directory';
import Schools from './pages/Schools';
import UniversityHub from './pages/UniversityHub';
import SchoolKit from './pages/SchoolKit';
import PilotApplication from './pages/PilotApplication';
import MWFR from './pages/MWFR';
import Ethics from './pages/Ethics';
import EthicsCode from './pages/EthicsCode';
import ComplaintSubmission from './pages/ComplaintSubmission';
import Contact from './pages/Contact';
import SEO from './components/SEO';
import SchemaMarkup from './components/SchemaMarkup';
import Resources from './pages/Resources';
import ArticleDetail from './pages/ArticleDetail';
import Enroll from './pages/Enroll';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTop from './components/Layout/ScrollToTop';

const LegalPlaceholder: React.FC<{ title: string }> = ({ title }) => (
  <div className="py-24 max-w-4xl mx-auto px-4">
    <SEO title={title} description={`Official GCMWC ${title} documentation.`} path="/legal" />
    <h1 className="text-3xl font-bold text-navy mb-8 italic uppercase tracking-widest">{title}</h1>
    <div className="space-y-6 text-navy/60 italic leading-relaxed">
      <p>This document defines the formal legal framework for interacting with the Global Commission for Mental Wellness Coaching (GCMWC).</p>
    </div>
    <div className="mt-12">
      <Link to="/" className="text-teal font-bold uppercase tracking-widest border-b border-teal">Return to Hub</Link>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <SEO 
                  title="Global Standard for Mental Wellness Coaching" 
                  description="GCMWC provides program-based training and certification for non-clinical mental wellness coaching pathways." 
                  path="/" 
                />
                <SchemaMarkup 
                  type="Organization" 
                  data={{
                    "name": "Global Commission for Mental Wellness Coaching",
                    "alternateName": "GCMWC",
                    "url": "https://gcmwc.org",
                    "logo": "https://gcmwc.org/logo.png",
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "email": "support@theperfectrx.com",
                      "contactType": "Registrar"
                    },
                    "description": "Program-based training and certification organization for non-clinical mental wellness coaching."
                  }} 
                />
                <Home />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/standards" element={
              <>
                <SchemaMarkup 
                  type="FAQPage" 
                  data={{
                    "mainEntity": [
                      {
                        "@type": "Question",
                        "name": "What is the difference between wellness coaching and therapy?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Wellness coaching is non-clinical and non-diagnostic. Coaches focus on the 'well' population, optimizing resilience and emotional regulation, while therapists treat pathological mental disorders."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "How can I verify a mental wellness coach?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "You can verify any coach using the GCMWC Public Credential Registry by searching for their name or Credential ID."
                        }
                      }
                    ]
                  }} 
                />
                <Standards />
              </>
            } />
            <Route path="/credentials" element={<Credentials />} />
            <Route path="/registry" element={<Registry />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:slug" element={<ArticleDetail />} />
            <Route path="/schools" element={<Schools />} />
            <Route path="/ethics" element={<Ethics />} />
            <Route path="/ethics/code" element={<EthicsCode />} />
            <Route path="/ethics/complaint" element={<ComplaintSubmission />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enroll" element={<Enroll />} />
            <Route path="/credentials/mwc-t" element={<MWCT />} />
            <Route path="/credentials/mwc-c" element={<MWCC />} />
            <Route path="/program-accreditation" element={<ProgramAccreditation />} />
            <Route path="/schools/university" element={<UniversityHub />} />
            <Route path="/schools/kit" element={<SchoolKit />} />
            <Route path="/schools/pilot" element={<PilotApplication />} />
            <Route path="/mwfr" element={<MWFR />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;