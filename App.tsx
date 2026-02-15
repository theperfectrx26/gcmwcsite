import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Layout/Navbar.tsx';
import Footer from './components/Layout/Footer.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Standards from './pages/Standards.tsx';
import Credentials from './pages/Credentials.tsx';
import MWCT from './pages/MWCT.tsx';
import MWCC from './pages/MWCC.tsx';
import ProgramAccreditation from './pages/ProgramAccreditation.tsx';
import Registry from './pages/Registry.tsx';
import Directory from './pages/Directory.tsx';
import Schools from './pages/Schools.tsx';
import UniversityHub from './pages/UniversityHub.tsx';
import SchoolKit from './pages/SchoolKit.tsx';
import PilotApplication from './pages/PilotApplication.tsx';
import MWFR from './pages/MWFR.tsx';
import Ethics from './pages/Ethics.tsx';
import Contact from './pages/Contact.tsx';
import SEO from './components/SEO.tsx';
import SchemaMarkup from './components/SchemaMarkup.tsx';
import Resources from './pages/Resources.tsx';
import ArticleDetail from './pages/ArticleDetail.tsx';

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
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <SEO 
                  title="Home" 
                  description="The Global Commission for Mental Wellness Coaching (GCMWC) is the international authority for non-clinical coaching standards." 
                  path="/" 
                />
                <SchemaMarkup 
                  type="Organization" 
                  data={{
                    "name": "Global Commission for Mental Wellness Coaching",
                    "url": "https://gcmwc.org",
                    "logo": "https://gcmwc.org/logo.png",
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "email": "registrar@gcmwc.org",
                      "contactType": "Registrar"
                    }
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
                        "name": "What is the scope of a Mental Wellness Coach?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Mental Wellness Coaching is non-clinical and non-diagnostic. Coaches focus on resilience, stress management, and goal-setting for the well population."
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
            <Route path="/contact" element={<Contact />} />
            <Route path="/credentials/mwc-t" element={<MWCT />} />
            <Route path="/credentials/mwc-c" element={<MWCC />} />
            <Route path="/program-accreditation" element={<ProgramAccreditation />} />
            <Route path="/schools/university" element={<UniversityHub />} />
            <Route path="/schools/kit" element={<SchoolKit />} />
            <Route path="/schools/pilot" element={<PilotApplication />} />
            <Route path="/mwfr" element={<MWFR />} />
            <Route path="/privacy" element={<LegalPlaceholder title="Privacy Policy" />} />
            <Route path="/terms" element={<LegalPlaceholder title="Terms of Service" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;