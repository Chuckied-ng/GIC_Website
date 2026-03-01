import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useNews } from '@/hooks/useNews';

const News = () => {
  const newsArticles = useNews();
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <span className="text-sm text-gray-400 tracking-wide uppercase">Latest Updates</span>
            <h1 className="text-5xl lg:text-6xl font-light mt-4 leading-tight">
              News & Insights
            </h1>
            <p className="text-lg text-gray-300 mt-6 leading-relaxed">
              Stay informed with the latest developments, project updates, and industry insights from GIC Oil & Gas Services Limited.
            </p>
          </div>
        </div>
        
        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
      </section>

      {/* News Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <Link
                key={article.id}
                to={`/news/${article.id}`}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-medium px-3 py-1.5 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {article.date}
                  </div>
                  
                  <h3 className="text-xl font-medium text-slate-900 mb-3 group-hover:text-red-600 transition-colors leading-snug">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-6">
              Stay Connected with Industry Updates
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Subscribe to our newsletter for exclusive insights, project updates, and industry trends delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full sm:w-96 px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
              <button className="inline-flex items-center bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors whitespace-nowrap">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
