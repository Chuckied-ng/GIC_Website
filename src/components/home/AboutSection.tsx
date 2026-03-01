import { Zap, Target, Settings } from 'lucide-react';
import { useSiteImages } from '@/hooks/useSiteImage';

const AboutSection = () => {
  const images = useSiteImages(['home-about-1', 'home-about-2']);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-gray-500 tracking-wide">About Us</span>
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mt-4 max-w-4xl mx-auto leading-tight">
            GIC delivers simple,{' '}
            engineering solutions
            <br />
            to help you <span className="text-gray-400 italic">optimize operations, reduce costs, and build
            <br />
            a sustainable future</span>
          </h2>
        </div>

        {/* Feature Icons */}
        <div className="flex justify-center gap-8 mb-20">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center mb-3">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm text-gray-600">Energy</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 border border-gray-300 rounded-full flex items-center justify-center mb-3">
              <Target className="w-6 h-6 text-slate-900" />
            </div>
            <span className="text-sm text-gray-600">Effective</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 border border-gray-300 rounded-full flex items-center justify-center mb-3">
              <Settings className="w-6 h-6 text-slate-900" />
            </div>
            <span className="text-sm text-gray-600">Affordable</span>
          </div>
        </div>

        {/* Two Images */}
        <div className="flex justify-center gap-4 max-w-3xl mx-auto">
          <div className="w-1/2 rounded-3xl overflow-hidden bg-blue-100">
            <img
              src={images['home-about-1']}
              alt="Engineering equipment"
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="w-1/2 rounded-3xl overflow-hidden bg-blue-100">
            <img
              src={images['home-about-2']}
              alt="Industrial facility"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
