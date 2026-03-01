import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteImage } from '@/hooks/useSiteImage';

const CTABanner = () => {
  const bgImage = useSiteImage('home-cta-banner-bg');

  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Industrial installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-900/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 h-full flex flex-col justify-end pb-12">
        <div className="max-w-2xl">
          <h2 className="text-4xl lg:text-5xl font-light text-white leading-tight mb-8">
            Partner with us for
            <br />
            reliable EPCI delivery, backed by
            <br />
            <span className="italic">engineering excellence.</span>
          </h2>
          
          <Link to="/contact">
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

export default CTABanner;
