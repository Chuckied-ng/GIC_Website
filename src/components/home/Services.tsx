import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import { useSiteImages } from '@/hooks/useSiteImage';

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);
  const images = useSiteImages([
    'home-service-engineering',
    'home-service-procurement',
    'home-service-construction',
    'home-service-marine',
  ]);

  const services = [
    {
      id: '01',
      title: 'Engineering Services',
      description: 'As the world\'s traditional energy sources continue to evolve, engineering excellence has become more than just a choice—it\'s a necessity. Our engineering services provide reliable, cost-efficient, and comprehensive solutions for industrial and commercial projects.',
      image: images['home-service-engineering'],
      categories: ['Process Design', 'Mechanical Engineering', 'Structural Analysis', 'Instrumentation'],
      path: '/services/engineering',
    },
    {
      id: '02',
      title: 'Procurement',
      description: 'Strategic sourcing and supply chain management to ensure your project has the right materials, equipment, and vendors at the right time.',
      image: images['home-service-procurement'],
      categories: ['Vendor Qualification', 'Expediting', 'Quality Assurance', 'Logistics'],
      path: '/services/procurement',
    },
    {
      id: '03',
      title: 'Construction & Installation',
      description: 'Turnkey construction management for onshore and offshore facilities with a focus on safety, quality, and schedule adherence.',
      image: images['home-service-construction'],
      categories: ['Fabrication', 'Installation', 'Pre-commissioning', 'Startup Support'],
      path: '/services/construction',
    },
    {
      id: '04',
      title: 'Marine & Offshore',
      description: 'Specialized marine operations including subsea engineering, pipeline installation, and offshore logistics management.',
      image: images['home-service-marine'],
      categories: ['Subsea Engineering', 'Pipeline Installation', 'Platform Support', 'Marine Logistics'],
      path: '/services/marine-offshore',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex justify-between items-start mb-16">
          <h2 className="text-3xl lg:text-5xl font-light text-slate-900 leading-tight max-w-2xl">
            Smart services designed
            <br />
            for a sustainable future.
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">Our Service</span>
            <Link to="/services">
              <button className="inline-flex items-center bg-slate-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-slate-800 transition-colors text-sm">
                Know More
                <span className="ml-2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-3 h-3 text-white" />
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Accordion Services */}
        <div className="border-t border-gray-200">
          {services.map((service, index) => (
            <div key={service.id} className="border-b border-gray-200">
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                className="w-full py-8 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-12">
                  <span className="text-2xl font-light text-gray-400">{service.id}</span>
                  <h3 className="text-2xl lg:text-4xl font-light text-slate-900">{service.title}</h3>
                </div>
                <div className="w-10 h-10 flex items-center justify-center">
                  {expandedIndex === index ? (
                    <Minus className="w-6 h-6 text-slate-900" />
                  ) : (
                    <Plus className="w-6 h-6 text-slate-900" />
                  )}
                </div>
              </button>
              
              {/* Expanded Content */}
              {expandedIndex === index && (
                <div className="pb-12 pl-24">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image */}
                    <div className="rounded-2xl overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-72 object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex gap-8">
                      {/* Categories */}
                      <div className="space-y-4 min-w-[180px]">
                        {service.categories.map((category) => (
                          <div key={category} className="flex items-center justify-between py-2 border-b border-gray-200">
                            <span className="text-sm text-slate-900">{category}</span>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                          </div>
                        ))}
                      </div>

                      {/* Description */}
                      <div className="flex flex-col justify-between">
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {service.description}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed mt-4">
                          With our professional engineering services, you can reduce your operational costs, improve efficiency, and contribute to a more sustainable future.
                        </p>
                        <Link to={service.path} className="mt-6">
                          <button className="inline-flex items-center bg-white text-slate-900 px-5 py-2.5 rounded-full font-medium border border-gray-300 hover:border-slate-900 transition-colors text-sm">
                            Get Started
                            <span className="ml-2 w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center">
                              <ArrowRight className="w-3 h-3 text-white" />
                            </span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
