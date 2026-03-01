import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  Cog,
  Gauge,
  Wrench,
  ArrowRight,
  Shield,
  TrendingUp,
  Award,
  Package,
  Settings,
} from 'lucide-react';
import { useSiteImage } from '@/hooks/useSiteImage';

const IndustrialEquipment = () => {
  const heroImage = useSiteImage('products-industrial-hero');
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <span className="text-sm text-gray-500 tracking-wide">Products</span>
              <h1 className="text-5xl lg:text-6xl font-light text-slate-900 mt-4 leading-tight">
                Industrial
                <br />
                <span className="italic">Equipment</span>
              </h1>
              <p className="text-gray-600 mt-6 leading-relaxed">
                High-quality industrial equipment and machinery sourced from world-leading
                manufacturers for the oil & gas, petrochemical, and power generation sectors. GIC
                provides complete equipment solutions—from selection and procurement through
                installation, commissioning, and ongoing aftermarket support.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/contact">
                  <button className="inline-flex items-center bg-slate-900 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors">
                    Request a Quote
                    <span className="ml-3 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </span>
                  </button>
                </Link>
                <Link to="/services/procurement">
                  <button className="inline-flex items-center border border-slate-300 text-slate-900 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
                    Procurement Services
                  </button>
                </Link>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img
                src={heroImage}
                alt="Industrial equipment"
                className="w-full h-[480px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'OEM Partnerships' },
              { value: '1,000+', label: 'Equipment Supplied' },
              { value: '100%', label: 'Quality Certified' },
              { value: '48hr', label: 'Response Time' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-light text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-sm text-gray-500 tracking-wide">Our Portfolio</span>
              <h2 className="text-4xl font-light text-slate-900 mt-4 mb-6">
                Trusted Equipment
                <br />
                <span className="italic">Solutions</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                GIC partners with globally recognized OEMs and manufacturers to supply high-quality
                industrial equipment tailored for the demanding conditions of oil & gas operations.
                Every piece of equipment we supply comes with full documentation, warranty support,
                and a commitment to aftermarket service excellence.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our equipment specialists work closely with engineering teams to ensure correct
                selection, specification compliance, and seamless integration into your operational
                environment—minimizing commissioning timelines and maximizing asset reliability.
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  icon: Cog,
                  title: 'OEM Partnerships',
                  description:
                    'Authorized distributorships and partnerships with leading global manufacturers ensuring genuine parts and factory-backed support.',
                },
                {
                  icon: Shield,
                  title: 'Quality Assurance',
                  description:
                    'Complete inspection, testing, and documentation packages including mill certificates, test reports, and compliance verification.',
                },
                {
                  icon: Wrench,
                  title: 'Installation & Commissioning',
                  description:
                    'Factory-trained technicians for on-site installation, alignment, testing, and commissioning of all supplied equipment.',
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-white rounded-2xl border border-gray-200"
                  >
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

      {/* Equipment Categories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-6">
              Equipment <span className="italic">Categories</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive portfolio spanning all major industrial equipment categories for the
              energy sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Rotating Equipment',
                items: [
                  'Centrifugal & reciprocating pumps',
                  'Gas & air compressors',
                  'Gas turbines & generators',
                  'Electric motors & drives',
                  'Fans, blowers & expanders',
                ],
              },
              {
                title: 'Static Equipment',
                items: [
                  'Pressure vessels & reactors',
                  'Heat exchangers & coolers',
                  'Storage tanks (API 650/620)',
                  'Columns & separators',
                  'Pig launchers & receivers',
                ],
              },
              {
                title: 'Process Equipment',
                items: [
                  'Produced water treatment systems',
                  'Gas processing packages',
                  'Chemical injection systems',
                  'Metering & custody transfer systems',
                  'Flare systems & knock-out drums',
                ],
              },
              {
                title: 'Valves & Actuators',
                items: [
                  'Gate, globe & check valves',
                  'Ball & butterfly valves',
                  'Safety relief valves',
                  'Control valves with actuators',
                  'Subsea valve packages',
                ],
              },
              {
                title: 'Electrical Equipment',
                items: [
                  'Power transformers',
                  'Switchgear & MCCs',
                  'Variable speed drives (VFDs)',
                  'UPS systems & batteries',
                  'Lighting & cable systems',
                ],
              },
              {
                title: 'Instrumentation & Controls',
                items: [
                  'Transmitters & sensors',
                  'Flow measurement devices',
                  'DCS/PLC control systems',
                  'Analyzers & sampling systems',
                  'Fire & gas detection equipment',
                ],
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

      {/* Supply Process */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-6">
              Supply <span className="italic">Process</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A systematic approach from specification review through delivery and aftermarket
              support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Specification Review',
                description:
                  'Technical review of equipment specifications, operating conditions, and compliance requirements.',
              },
              {
                step: '02',
                title: 'Vendor Selection',
                description:
                  'Sourcing from qualified manufacturers with bid evaluation based on technical merit and commercial terms.',
              },
              {
                step: '03',
                title: 'Quality & Inspection',
                description:
                  'Factory acceptance testing, third-party inspection, and complete documentation verification.',
              },
              {
                step: '04',
                title: 'Delivery & Support',
                description:
                  'Managed logistics, on-site installation support, commissioning assistance, and warranty management.',
              },
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

      {/* Key Brands / OEMs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl font-light text-slate-900 mb-6">
              Representing Leading <span className="italic">Manufacturers</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We partner with globally respected OEMs to ensure our clients receive equipment that
              meets the highest standards of performance and reliability.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              'Cameron (Schlumberger)',
              'Flowserve',
              'Emerson',
              'ABB',
              'Siemens',
              'Caterpillar',
              'Solar Turbines',
              'Dresser-Rand',
              'Alfa Laval',
              'Honeywell',
              'Yokogawa',
              'Schneider Electric',
            ].map((brand) => (
              <span
                key={brand}
                className="px-5 py-3 bg-gray-50 rounded-full border border-gray-200 text-sm text-gray-700 font-medium"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-light text-white mb-6">
              Need Industrial <span className="italic">Equipment?</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Contact our equipment specialists to discuss your requirements and receive a
              competitive quotation with full technical support.
            </p>
            <Link to="/contact">
              <button className="inline-flex items-center bg-white text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Request Equipment Quote
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

export default IndustrialEquipment;
