import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { CheckCircle2, Package, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';
import { useSiteImage } from '@/hooks/useSiteImage';

const Procurement = () => {
  const heroImage = useSiteImage('services-procurement-hero');

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <span className="text-sm text-gray-500 tracking-wide">Services</span>
              <h1 className="text-5xl lg:text-6xl font-light text-slate-900 mt-4 leading-tight">
                Procurement
                <br />
                <span className="italic">Services</span>
              </h1>
              <p className="text-gray-600 mt-6 leading-relaxed">
                Strategic sourcing and supply chain management for complex oil & gas projects, 
                ensuring quality, compliance, and on-time delivery.
              </p>
              <Link to="/contact" className="mt-8 inline-block">
                <button className="inline-flex items-center bg-slate-900 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors">
                  Get Started
                  <span className="ml-3 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </span>
                </button>
              </Link>
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img
                src={heroImage}
                alt="Procurement"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-sm text-gray-500 tracking-wide">Capabilities</span>
              <h2 className="text-4xl font-light text-slate-900 mt-4 mb-6">
                End-to-End Procurement
                <br />
                <span className="italic">Solutions</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our procurement specialists manage the entire supply chain from vendor qualification 
                through equipment delivery, ensuring materials and equipment meet project specifications 
                and arrive on schedule.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With established relationships with global manufacturers and local suppliers, we leverage 
                competitive pricing while maintaining quality standards and supporting local content requirements.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { icon: Package, title: 'Strategic Sourcing', description: 'Vendor qualification, bid evaluation, and supplier selection based on technical and commercial criteria.' },
                { icon: TrendingUp, title: 'Expediting Services', description: 'Progress monitoring, factory inspections, and delivery coordination to maintain project schedules.' },
                { icon: ShieldCheck, title: 'Quality Assurance', description: 'Inspection, testing, and documentation ensuring compliance with specifications and standards.' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-2xl border border-gray-200">
                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-6">
              Procurement <span className="italic">Scope</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive procurement services across all equipment categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Rotating Equipment',
                items: ['Pumps & compressors', 'Gas turbines', 'Electric motors', 'Gearboxes', 'Fans & blowers'],
              },
              {
                title: 'Static Equipment',
                items: ['Pressure vessels', 'Heat exchangers', 'Storage tanks', 'Columns & towers', 'Separators'],
              },
              {
                title: 'Piping Materials',
                items: ['Line pipe & fittings', 'Valves & actuators', 'Flanges & gaskets', 'Pipe supports', 'Specialty alloys'],
              },
              {
                title: 'Electrical Equipment',
                items: ['Transformers', 'Switchgear & MCCs', 'UPS systems', 'Cables & accessories', 'Lighting fixtures'],
              },
              {
                title: 'Instrumentation',
                items: ['Control valves', 'Flow meters', 'Pressure & temperature transmitters', 'Analyzers', 'Safety systems'],
              },
              {
                title: 'Structural & Civil',
                items: ['Structural steel', 'Concrete & cement', 'Building materials', 'Coatings & paints', 'Access systems'],
              },
            ].map((category, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
                <h3 className="text-xl font-medium text-slate-900 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-6">
              Procurement <span className="italic">Process</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Structured approach ensuring quality, compliance, and on-time delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Vendor Qualification', description: 'Technical and commercial evaluation of potential suppliers.' },
              { step: '02', title: 'Bid Management', description: 'Request for quotation, bid analysis, and supplier selection.' },
              { step: '03', title: 'Order Execution', description: 'Purchase order placement and documentation management.' },
              { step: '04', title: 'Quality & Delivery', description: 'Inspection, expediting, and logistics coordination.' },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-light text-gray-200 mb-4">{process.step}</div>
                <h3 className="text-lg font-medium text-slate-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-light text-white mb-6">
              Need Procurement <span className="italic">Support?</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Connect with our procurement team to optimize your supply chain.
            </p>
            <Link to="/contact">
              <button className="inline-flex items-center bg-white text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Contact Procurement Team
                <span className="ml-3 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
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

export default Procurement;
