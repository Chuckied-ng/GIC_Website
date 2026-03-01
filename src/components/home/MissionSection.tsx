import { Battery, Sun } from 'lucide-react';
import { useSiteImage } from '@/hooks/useSiteImage';

const MissionSection = () => {
  const visionImage = useSiteImage('home-mission-vision');

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <span className="text-sm text-gray-500 tracking-wide">Our Mission</span>
          <h2 className="text-3xl lg:text-5xl font-light text-slate-900 max-w-3xl text-right leading-tight">
            We drive innovation and improvement
            <br />
            to create cost-effective, reliable
            <br />
            solutions powered by engineering
            <br />
            <span className="italic">excellence.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Dark with Stats */}
          <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="flex justify-between items-start mb-20">
              <span className="text-sm text-gray-400">Project Completion</span>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <Battery className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="px-4 py-2 bg-white/10 rounded-full inline-block mb-4">
              <span className="text-sm text-gray-300">Year Target</span>
            </div>
            <div className="text-6xl font-light mb-2">20+</div>
            <div className="text-gray-400">Projects in the region</div>
          </div>

          {/* Card 2 - Image with Vision */}
          <div className="bg-slate-800 rounded-3xl overflow-hidden relative">
            <img
              src={visionImage}
              alt="Engineer at work"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="relative z-10 h-full flex flex-col justify-between p-8">
              <div className="flex justify-end">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Sun className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 mt-auto">
                <h3 className="text-xl text-white font-medium mb-2">Our Vision</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  To be the preferred indigenous EPCI contractor in West Africa and a globally recognized engineering services company—known for technical excellence, reliable execution, and innovative solutions that drive energy infrastructure development across emerging markets.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - Light with Tags */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200">
            <h3 className="text-xl text-slate-900 font-medium mb-2">
              Always keep our product and service quality for the better output
            </h3>
            <div className="flex flex-wrap gap-2 mt-8">
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">#timedelivery</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">#research&development</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">#trainingpersonel</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">#qualityservice</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
