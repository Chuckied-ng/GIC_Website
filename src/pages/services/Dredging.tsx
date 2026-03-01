import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { CheckCircle2, Waves, Anchor, Navigation, ArrowRight, BarChart3 } from 'lucide-react';
import { useSiteImage } from '@/hooks/useSiteImage';

const DredgingServices = () => {
  const heroImage = useSiteImage('services-dredging-hero');
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
                Dredging
                <br />
                <span className="italic">Services</span>
              </h1>
              <p className="text-gray-600 mt-6 leading-relaxed">
                Comprehensive dredging solutions for waterway maintenance, port development, 
                land reclamation, and offshore pipeline trenching across Nigeria and the West African coast.
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
                alt="Dredging Operations"
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
                Precision Dredging
                <br />
                <span className="italic">Operations</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                GIC Oil & Gas Services delivers expert dredging and marine excavation services 
                across the full spectrum of waterway, port, and offshore projects. Our experienced 
                teams deploy modern dredging equipment tailored to project-specific conditions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From capital dredging for new port infrastructure to maintenance dredging for 
                existing channels, we ensure navigational safety, environmental compliance, and 
                operational efficiency on every project.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { icon: Waves, title: 'Capital Dredging', description: 'New waterway creation, port basin excavation, and channel deepening to design depths for vessels of all classes.' },
                { icon: Anchor, title: 'Maintenance Dredging', description: 'Regular sedimentation removal to maintain navigation channels, harbours, and marine terminals at required depths.' },
                { icon: Navigation, title: 'Pipeline Trenching', description: 'Precise subsea trenching for pipeline installation, burial, and protection in offshore and nearshore environments.' },
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

      {/* Service Areas */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-6">
              Service <span className="italic">Areas</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Integrated dredging capabilities covering all project types and marine environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Port & Harbour Development',
                items: ['New port basin construction', 'Berth deepening & widening', 'Turning circle development', 'Quay wall excavation', 'Breakwater foundation dredging'],
              },
              {
                title: 'Waterway & Channel Works',
                items: ['Navigation channel deepening', 'River bar removal', 'Creek & estuary maintenance', 'Flood control channel dredging', 'Cross-river infrastructure support'],
              },
              {
                title: 'Offshore & Subsea',
                items: ['Pipeline trench excavation', 'Cable route trenching', 'Seabed levelling', 'Anchor block excavation', 'Subsea structure installation support'],
              },
              {
                title: 'Land Reclamation',
                items: ['Hydraulic fill placement', 'Reclamation area preparation', 'Borrow area management', 'Ground improvement dredging', 'Coastal protection works'],
              },
              {
                title: 'Environmental Dredging',
                items: ['Contaminated sediment removal', 'Closed containment dredging', 'Turbidity monitoring & control', 'Sediment dewatering & disposal', 'Environmental impact mitigation'],
              },
              {
                title: 'Survey & Assessment',
                items: ['Pre- and post-dredge surveys', 'Hydrographic surveying', 'Sediment sampling & analysis', 'Dredge volume calculations', 'Reporting & documentation'],
              },
            ].map((area, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
                <h3 className="text-xl font-medium text-slate-900 mb-4">{area.title}</h3>
                <ul className="space-y-2">
                  {area.items.map((item, i) => (
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

      {/* Equipment & Standards */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light text-slate-900 mb-6">Dredging Equipment</h2>
              <p className="text-gray-600 mb-6">
                Modern, well-maintained fleet capable of handling diverse dredging requirements:
              </p>
              <div className="flex flex-wrap gap-3">
                {['Trailing Suction Hopper', 'Cutter Suction Dredger', 'Backhoe Dredger', 'Water Injection Dredger', 'Grab Dredger', 'Booster Pump Stations', 'Survey Vessels', 'Spud Barges'].map((equip) => (
                  <span key={equip} className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-gray-700">
                    {equip}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-light text-slate-900 mb-6">Compliance & Standards</h2>
              <p className="text-gray-600 mb-6">
                All operations conducted in accordance with recognized marine and environmental standards:
              </p>
              <div className="flex flex-wrap gap-3">
                {['MARPOL', 'IMO Guidelines', 'PIANC Standards', 'IHO Survey Standards', 'NIMASA Regulations', 'DPR Requirements', 'ISO 14001', 'OHSAS 18001'].map((std) => (
                  <span key={std} className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-gray-700">
                    {std}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '20+', label: 'Dredging Projects Completed' },
              { value: '2M+', label: 'Cubic Metres Dredged' },
              { value: '8', label: 'Vessel Fleet Capacity' },
              { value: '100%', label: 'Environmental Compliance' },
            ].map((stat, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-3xl border border-gray-200">
                <div className="text-4xl font-light text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
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
              Need Dredging <span className="italic">Solutions?</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Contact our dredging specialists to discuss your waterway, port, or offshore project requirements.
            </p>
            <Link to="/contact">
              <button className="inline-flex items-center bg-white text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Contact Dredging Team
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

export default DredgingServices;
