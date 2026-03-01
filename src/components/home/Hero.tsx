import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteImage } from '@/hooks/useSiteImage';

const Hero = () => {
  const heroBg = useSiteImage('home-hero-bg');

  return (
    <section className="relative min-h-[90vh] flex items-end pb-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Oil and gas facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Main Headline - Large Serif Style */}
            <h1 className="text-5xl lg:text-7xl font-light text-white mb-8 leading-[1.1] tracking-tight">
              Innovative Oil & Gas
              <br />
              Engineering
              <br />
              <span className="italic">Solution.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-white/70 text-base mb-8 max-w-md leading-relaxed">
              Our comprehensive EPCI solutions help you optimize operations, reduce costs, and deliver projects with excellence and precision.
            </p>

            {/* CTA Button - Pill Style */}
            <Link to="/contact">
              <button className="inline-flex items-center bg-white text-slate-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors group">
                Get Started
                <span className="ml-3 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center group-hover:bg-slate-800 transition-colors">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              </button>
            </Link>
          </div>

          {/* Right Content - Stats */}
          <div className="flex justify-end gap-16">
            <div className="text-center">
              <div className="text-6xl lg:text-7xl font-light text-white mb-2">
                50<span className="text-white/60">%</span>
              </div>
              <div className="text-white/60 text-sm">Cost Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-6xl lg:text-7xl font-light text-white mb-2">
                20<span className="text-white/60">+</span>
              </div>
              <div className="text-white/60 text-sm">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
