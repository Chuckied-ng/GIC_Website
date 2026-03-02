import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, ShoppingCart, HardHat, Anchor } from 'lucide-react';
import { useSiteImages } from '@/hooks/useSiteImage';

const servicesStaticData = [
  {
    icon: Wrench,
    title: 'Engineering Services',
    description: 'Comprehensive engineering design from conceptual studies through detailed engineering, covering all major disciplines for oil & gas facilities.',
    imageKey: 'services-eng-hero',
    path: '/services/engineering',
    capabilities: [
      'Process Design & Optimization',
      'Mechanical & Piping Design',
      'Structural & Civil Engineering',
      'Instrumentation & Control Systems',
      'Electrical Systems Design',
      'FEED & Detailed Engineering'
    ]
  },
  {
    icon: ShoppingCart,
    title: 'Procurement',
    description: 'Strategic sourcing and supply chain management to ensure your project has the right materials, equipment, and vendors at the right time.',
    imageKey: 'services-procurement-hero',
    path: '/services/procurement',
    capabilities: [
      'Vendor Selection & Qualification',
      'Global Sourcing & Negotiation',
      'Expediting & Logistics',
      'Quality Inspection & Assurance',
      'Supply Chain Optimization',
      'Materials Management'
    ]
  },
  {
    icon: HardHat,
    title: 'Construction & Installation',
    description: 'Turnkey construction management for onshore and offshore facilities with a focus on safety, quality, and schedule adherence.',
    imageKey: 'services-construction-hero',
    path: '/services/construction',
    capabilities: [
      'Fabrication & Module Assembly',
      'Onshore & Offshore Installation',
      'Pre-commissioning & Testing',
      'Startup & Performance Testing',
      'Project Management & Controls',
      'HSE Compliance & Safety'
    ]
  },
  {
    icon: Anchor,
    title: 'Marine & Offshore',
    description: 'Specialized marine operations including subsea engineering, pipeline installation, and offshore logistics management.',
    imageKey: 'services-marine-hero',
    path: '/services/marine-offshore',
    capabilities: [
      'Subsea Engineering & Design',
      'Pipeline Installation & Support',
      'Platform Operations Support',
      'Marine Logistics & Coordination',
      'Diving & ROV Operations',
      'Offshore Supply & Transport'
    ]
  }
];

const Services = () => {
  const images = useSiteImages([
    'services-eng-hero',
    'services-procurement-hero',
    'services-construction-hero',
    'services-marine-hero',
    'services-overview-why-choose',
  ]);
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm text-gray-500 tracking-wide">Our Services</span>
            <h1 className="text-5xl lg:text-7xl font-light text-slate-900 mt-4 leading-tight">
              Integrated Solutions
              <br />
              <span className="italic">Across the Value Chain</span>
            </h1>
            <p className="text-lg text-gray-600 mt-8 leading-relaxed max-w-2xl mx-auto">
              From conceptual design to operational support, GIC Oil & Gas Services Limited delivers 
              comprehensive engineering, procurement, construction, and marine solutions for the energy sector.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicesStaticData.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={images[service.imageKey]}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-6 left-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                      <IconComponent className="w-7 h-7 text-red-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-3xl font-light text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Capabilities List */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Key Capabilities</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.capabilities.slice(0, 4).map((capability, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link to={service.path}>
                      <button className="inline-flex items-center text-slate-900 font-medium hover:text-red-600 transition-colors group/btn">
                        See More Details
                        <span className="ml-2 w-8 h-8 bg-slate-900 group-hover/btn:bg-red-600 rounded-full flex items-center justify-center transition-colors">
                          <ArrowRight className="w-4 h-4 text-white" />
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 leading-tight">
                Why Choose
                <br />
                <span className="italic">GIC Services</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                With decades of combined experience in the oil & gas sector, our team delivers 
                integrated solutions that reduce project risk, optimize costs, and ensure regulatory compliance.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-semibold text-lg">01</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2">Integrated Approach</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Seamless coordination across disciplines—engineering, procurement, construction, and marine—under one roof.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-semibold text-lg">02</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2">Local Expertise, Global Standards</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Deep understanding of regional requirements combined with international best practices and certifications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-semibold text-lg">03</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2">Safety & Compliance First</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Rigorous HSE protocols and quality management systems ensuring project success without compromise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img
                src={images['services-overview-why-choose']}
                alt="Team at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              Ready to discuss
              <br />
              <span className="italic">your project?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Our team is ready to support your next oil & gas project with integrated, 
              cost-effective solutions tailored to your requirements.
            </p>
            <Link to="/contact">
              <button className="inline-flex items-center bg-white text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Request a Consultation
                <span className="ml-3 w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-white" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
