import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNews } from '@/hooks/useNews';

const NewsSection = () => {
  const allArticles = useNews();
  const news = allArticles.slice(0, 4).map((a) => ({
    id: a.id,
    date: a.date,
    title: a.title,
    image: a.image.replace('w=1200', 'w=600'),
  }));
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-gray-500 tracking-wide">Latest Info</span>
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mt-4 leading-tight">
            Catch up on today's top updates and the
            <br />
            stories that matter most
          </h2>
        </div>

        {/* News Cards Carousel */}
        <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide">
          {news.map((item) => (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              className="relative flex-shrink-0 w-72 h-96 rounded-3xl overflow-hidden group cursor-pointer snap-start"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              
              {/* Arrow */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-red-600 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-white/70 text-sm">{item.date}</span>
                <h3 className="text-lg text-white font-medium mt-2 leading-snug">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Show All Button */}
        <div className="text-center mt-12">
          <Link to="/news">
            <button className="inline-flex items-center bg-slate-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-slate-800 transition-colors text-sm">
              Show All
              <span className="ml-2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <ArrowRight className="w-3 h-3 text-white" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
