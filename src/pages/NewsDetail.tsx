import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Share2, Clock, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getArticleById } from '@/lib/newsStore';

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = id ? getArticleById(Number(id)) : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-6 lg:px-12 py-20 text-center">
          <h1 className="text-3xl font-light text-slate-900 mb-4">Article Not Found</h1>
          <Link to="/news" className="text-red-600 hover:text-red-700 inline-flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Article Header */}
      <article className="pt-24 pb-20">
        {/* Back Button */}
        <div className="container mx-auto px-6 lg:px-12 mb-8">
          <Link
            to="/news"
            className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Link>
        </div>

        {/* Article Meta */}
        <div className="container mx-auto px-6 lg:px-12 mb-8">
          <div className="max-w-4xl">
            <span className="inline-block bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              {article.category}
            </span>
            
            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {article.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {article.readTime}
              </div>
              <div className="flex items-center">
                By {article.author}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="container mx-auto px-6 lg:px-12 mb-12">
          <div className="max-w-5xl">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="prose prose-lg max-w-none">
              {article.content.map((block, index) => {
                if (block.type === 'paragraph') {
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed mb-6">
                      {block.text}
                    </p>
                  );
                }
                
                if (block.type === 'heading') {
                  return (
                    <h2 key={index} className="text-2xl lg:text-3xl font-light text-slate-900 mt-12 mb-6">
                      {block.text}
                    </h2>
                  );
                }
                
                if (block.type === 'list' && block.items) {
                  return (
                    <ul key={index} className="space-y-3 mb-8">
                      {block.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-gray-700">
                          <span className="inline-block w-1.5 h-1.5 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                
                return null;
              })}
            </div>

            {/* Share Section */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 font-medium">Share this article</span>
                <button className="inline-flex items-center text-slate-900 hover:text-red-600 transition-colors">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles CTA */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light text-slate-900 mb-4">
              Explore More Insights
            </h2>
            <p className="text-gray-600 mb-8">
              Stay informed with the latest developments and industry insights from GIC Oil & Gas Services Limited.
            </p>
            <Link
              to="/news"
              className="inline-flex items-center bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors"
            >
              View All News
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsDetail;
