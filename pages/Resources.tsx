import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, User, ArrowRight } from 'lucide-react';
import { MOCK_ARTICLES } from '../data/mockArticles';
import ConstellationBg from '../components/ConstellationBg';
import SEO from '../components/SEO';

const Resources: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Resources & Articles" 
        description="Explore guides on becoming a wellness coach, understanding professional standards, and maintaining non-clinical scope." 
        path="/resources" 
      />
      
      <header className="relative py-20 bg-beige overflow-hidden border-b border-navy/5">
        <ConstellationBg />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 italic uppercase tracking-tight">Resources</h1>
          <p className="max-w-3xl text-xl leading-relaxed text-navy/70 font-medium italic">
            Professional insights, educational guides, and the latest updates on global coaching standards.
          </p>
        </div>
      </header>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {MOCK_ARTICLES.map((article) => (
            <Link 
              to={`/resources/${article.slug}`} 
              key={article.slug}
              className="group bg-white border border-beige p-8 shadow-sm hover:shadow-xl transition-all flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-teal px-3 py-1 bg-sage/30 rounded-full">
                  {article.category}
                </span>
                <span className="flex items-center text-[10px] text-navy/30 font-bold uppercase tracking-widest italic">
                  <Calendar className="h-3 w-3 mr-1" /> {article.date}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-navy mb-4 italic group-hover:text-teal transition-colors">
                {article.title}
              </h3>
              
              <p className="text-sm text-navy/60 mb-8 italic leading-relaxed flex-grow">
                {article.description}
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-beige">
                <span className="flex items-center text-[10px] text-navy/40 font-bold uppercase tracking-widest italic">
                  <User className="h-3 w-3 mr-1" /> {article.author}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-navy flex items-center group-hover:translate-x-1 transition-transform">
                  Read More <ArrowRight className="ml-2 h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resources;