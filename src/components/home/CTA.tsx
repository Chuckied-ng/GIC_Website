import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteImage } from '@/hooks/useSiteImage';

const CTA = () => {
  const bgImage = useSiteImage('home-cta-bg');

  return (
    <section className="mx-6 lg:mx-12 mb-24">
      <div className="relative rounded-3xl overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt="Engineering work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 py-20 px-8 lg:px-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white leading-tight max-w-xl">
            Become Our Member
          </h2>
          <p className="text-white/70 mt-4 max-w-md">
            Partner with us and deliver excellence with reliable engineering solutions for your next project
          </p>
          <Link to="/contact" className="mt-8 inline-block">
            <button className="inline-flex items-center bg-white text-slate-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors group">
              Get Started
              <span className="ml-3 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center group-hover:bg-slate-800 transition-colors">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
