import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_ARTICLES } from '../data/mockArticles';
import SEO from '../components/SEO';
import { ArrowLeft, Calendar, User, BookOpen } from 'lucide-react';

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = MOCK_ARTICLES.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl font-bold text-navy">Article not found.</h1>
        <Link to="/resources" className="text-teal hover:underline mt-4 inline-block">Return to Resources</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-24">
      <SEO 
        title={article.title} 
        description={article.description} 
        path={`/resources/${article.slug}`} 
      />
      
      <div className="max-w-4xl mx-auto px-4 pt-16">
        <Link to="/resources" className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-navy/40 hover:text-navy transition-colors mb-12">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Resources
        </Link>
        
        <header className="mb-16">
          <div className="flex items-center space-x-6 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-teal px-3 py-1 bg-sage/30 rounded-full">
              {article.category}
            </span>
            <div className="flex items-center text-[10px] text-navy/40 font-bold uppercase tracking-widest italic">
              <Calendar className="h-3 w-3 mr-1" /> {article.date}
            </div>
            <div className="flex items-center text-[10px] text-navy/40 font-bold uppercase tracking-widest italic">
              <User className="h-3 w-3 mr-1" /> {article.author}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-8 italic leading-tight">
            {article.title}
          </h1>
          
          <p className="text-xl text-navy/60 italic leading-relaxed border-l-4 border-teal pl-8">
            {article.description}
          </p>
        </header>

        <article className="prose prose-navy prose-lg max-w-none">
          <div 
            className="text-navy/80 italic leading-loose space-y-8"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>

        <div className="mt-24 p-12 bg-beige border-l-8 border-navy shadow-sm">
          <div className="flex items-center space-x-4 mb-6">
            <BookOpen className="h-8 w-8 text-navy" />
            <h3 className="text-xl font-bold text-navy uppercase tracking-widest italic">Further Reading</h3>
          </div>
          <p className="text-navy/60 italic text-sm mb-8 leading-relaxed">
            Ready to take the next step? Explore our official standards or begin your credentialing process today.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/standards" className="px-8 py-3 bg-navy text-white text-[10px] font-bold uppercase tracking-widest hover:bg-teal transition-all">
              Standards Manual
            </Link>
            <Link to="/credentials" className="px-8 py-3 border-2 border-navy text-navy text-[10px] font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all">
              Credentials Overview
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;