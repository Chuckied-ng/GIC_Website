import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { CheckCircle2, FileText, Cog, TrendingUp, ArrowRight } from 'lucide-react';
import { useSiteImages } from '@/hooks/useSiteImage';

const EngineeringServices = () => {
  const images = useSiteImages([
    'services-eng-hero', 'services-eng-process', 'services-eng-structural', 'services-eng-electrical',
  ]);

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
                Engineering
                <br />
                <span className="italic">Services</span>
              </h1>
              <p className="text-gray-600 mt-6 leading-relaxed">
                Comprehensive engineering design from conceptual studies through detailed engineering, 
                covering all major disciplines for oil & gas facilities.
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
                src={images['services-eng-hero']}
                alt="Engineering"
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
                Multidisciplinary Engineering
                <br />
                <span className="italic">Excellence</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our engineering teams deliver integrated design solutions across all project phases, 
                from front-end engineering design (FEED) through detailed engineering and construction support.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With experience spanning offshore platforms, subsea systems, processing facilities, 
                and pipeline infrastructure, we provide technically robust and cost-effective solutions 
                aligned with international standards and client specifications.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { icon: FileText, title: 'FEED Studies', description: 'Front-end engineering design with cost estimation, risk assessment, and execution planning.' },
                { icon: Cog, title: 'Detailed Engineering', description: 'Complete engineering deliverables including drawings, specifications, and material requisitions.' },
                { icon: TrendingUp, title: 'Design Optimization', description: 'Value engineering and constructability reviews to enhance project economics.' },
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

      {/* Disciplines */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-6">
              Engineering <span className="italic">Disciplines</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Integrated multidisciplinary teams delivering coordinated design packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Process Engineering',
                items: ['Process flow diagrams', 'Heat & material balances', 'Equipment sizing & selection', 'Process simulation', 'Safety systems design'],
              },
              {
                title: 'Mechanical Engineering',
                items: ['Equipment design & specifications', 'Rotating machinery selection', 'Piping design & stress analysis', 'HVAC systems', 'Layout & 3D modeling'],
              },
              {
                title: 'Structural Engineering',
                items: ['Structural design & analysis', 'Foundation engineering', 'Offshore platforms', 'Steel & concrete structures', 'Seismic design'],
              },
              {
                title: 'Electrical Engineering',
                items: ['Power distribution systems', 'Motor control centers', 'Lighting design', 'Cable sizing & routing', 'Earthing & lightning protection'],
              },
              {
                title: 'Instrumentation & Control',
                items: ['Instrument selection', 'Control system architecture', 'DCS/PLC/SCADA design', 'Safety instrumented systems', 'Network design'],
              },
              {
                title: 'Civil Engineering',
                items: ['Site development', 'Road & drainage design', 'Concrete structures', 'Soil investigations', 'Foundation design'],
              },
            ].map((discipline, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
                <h3 className="text-xl font-medium text-slate-900 mb-4">{discipline.title}</h3>
                <ul className="space-y-2">
                  {discipline.items.map((item, i) => (
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

      {/* Standards & Tools */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light text-slate-900 mb-6">Design Standards</h2>
              <p className="text-gray-600 mb-6">
                Our designs comply with internationally recognized codes and standards:
              </p>
              <div className="flex flex-wrap gap-3">
                {['API Standards', 'ASME Codes', 'ANSI', 'BS/EN Standards', 'ISO', 'IEC', 'NORSOK', 'DNV Standards'].map((std) => (
                  <span key={std} className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-gray-700">
                    {std}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-light text-slate-900 mb-6">Engineering Tools</h2>
              <p className="text-gray-600 mb-6">
                Industry-leading software for accurate design and analysis:
              </p>
              <div className="flex flex-wrap gap-3">
                {['AutoCAD Plant 3D', 'AVEVA E3D', 'CAESAR II', 'HYSYS/Aspen', 'ETAP', 'STAAD.Pro', 'ANSYS', 'PDMS'].map((tool) => (
                  <span key={tool} className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-gray-700">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-light text-white mb-6">
              Need Engineering <span className="italic">Support?</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Connect with our engineering team to discuss your project requirements.
            </p>
            <Link to="/contact">
              <button className="inline-flex items-center bg-white text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Contact Engineering Team
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

export default EngineeringServices;
