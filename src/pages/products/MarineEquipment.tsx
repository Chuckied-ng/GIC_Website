import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  Anchor,
  Ship,
  Shield,
  ArrowRight,
  Wrench,
  Waves,
  Navigation,
  LifeBuoy,
  Compass,
} from 'lucide-react';
import { useSiteImage } from '@/hooks/useSiteImage';

const MarineEquipment = () => {
  const heroImage = useSiteImage('products-marine-hero');
  const complianceImage = useSiteImage('products-marine-compliance');
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
                Marine
                <br />
                <span className="italic">Equipment</span>
              </h1>
              <p className="text-gray-600 mt-6 leading-relaxed">
                Specialized marine and offshore equipment for vessel operations, subsea
                installations, and offshore construction. GIC supplies, installs, and maintains
                mission-critical marine systems sourced from world-leading manufacturers—ensuring
                safety, reliability, and regulatory compliance in the most demanding maritime
                environments.
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
                <Link to="/services/marine-offshore">
                  <button className="inline-flex items-center border border-slate-300 text-slate-900 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
                    Marine Services
                  </button>
                </Link>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img
                src={heroImage}
                alt="Marine equipment and operations"
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
              { value: '30+', label: 'Marine OEM Partners' },
              { value: '20+', label: 'Systems Supplied' },
              { value: 'IMO', label: 'Compliant Products' },
              { value: '15+', label: 'Years Marine Supply' },
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
                Trusted Marine
                <br />
                <span className="italic">Equipment Solutions</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The marine and offshore environment demands equipment that performs reliably under
                extreme conditions—saltwater exposure, high pressure, heavy loads, and continuous
                operation. GIC supplies marine equipment that meets and exceeds these challenges,
                sourced from manufacturers with proven track records in the offshore energy sector.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our marine equipment specialists provide full technical advisory—from specification
                development and vendor evaluation through inspection, delivery logistics, and
                after-sales support. Every product is supplied with complete certification and
                documentation for classification society approval.
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  icon: Ship,
                  title: 'Deck Equipment',
                  description:
                    'Cranes, winches, anchor handling systems, and cargo handling equipment for offshore vessel operations.',
                },
                {
                  icon: Anchor,
                  title: 'Mooring Systems',
                  description:
                    'Complete mooring solutions including chains, anchors, wire ropes, and dynamic positioning systems.',
                },
                {
                  icon: LifeBuoy,
                  title: 'Life-Saving Appliances',
                  description:
                    'SOLAS-compliant lifeboats, life rafts, rescue boats, and personal protective equipment for offshore personnel.',
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
              Marine Equipment <span className="italic">Categories</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Complete marine equipment portfolio for vessels, platforms, and offshore installations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Deck Machinery',
                items: [
                  'Offshore cranes & pedestal cranes',
                  'Anchor windlasses & mooring winches',
                  'Tugger winches & capstans',
                  'Pipe handling equipment',
                  'A-frames & launch systems',
                ],
              },
              {
                title: 'Navigation & Communication',
                items: [
                  'Radar & ECDIS systems',
                  'GPS & positioning systems',
                  'VHF/UHF radio equipment',
                  'Satellite communication systems',
                  'AIS & GMDSS equipment',
                ],
              },
              {
                title: 'Propulsion & Power',
                items: [
                  'Main engines & generators',
                  'Thrusters & azimuth drives',
                  'Propeller systems & shafting',
                  'Power management systems',
                  'Emergency generators',
                ],
              },
              {
                title: 'Subsea Equipment',
                items: [
                  'ROV systems & tooling',
                  'Diving equipment & systems',
                  'Subsea connectors & jumpers',
                  'Pipeline repair clamps',
                  'Subsea manifolds & templates',
                ],
              },
              {
                title: 'Safety & Survival Equipment',
                items: [
                  'Freefall lifeboats',
                  'Davit-launched life rafts',
                  'Rescue boats & FRCs',
                  'Immersion suits & life jackets',
                  'Man overboard recovery systems',
                ],
              },
              {
                title: 'Mooring & Anchoring',
                items: [
                  'Offshore mooring chains',
                  'Drag & suction anchors',
                  'Wire ropes & synthetic lines',
                  'Buoys & chain stoppers',
                  'DP systems & sensors',
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

      {/* Compliance & Certifications */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm text-gray-500 tracking-wide">Compliance</span>
              <h2 className="text-4xl font-light text-slate-900 mt-4 mb-6">
                Class-Approved &
                <br />
                <span className="italic">Fully Certified</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                All marine equipment supplied by GIC is certified to international maritime
                standards and approved by leading classification societies. We handle the complete
                documentation chain—from type-approval certificates through final acceptance
                testing.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  'SOLAS',
                  'IMO MSC',
                  'DNV Type Approval',
                  'Lloyd\'s Register',
                  'Bureau Veritas',
                  'ABS Certified',
                  'NORSOK',
                  'ATEX/IECEx',
                ].map((cert) => (
                  <span
                    key={cert}
                    className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-gray-700"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img
                src={complianceImage}
                alt="Marine operations"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Supply Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-6">
              Supply <span className="italic">Process</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Structured approach ensuring correct specification, quality, and timely delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Technical Specification',
                description:
                  'Review of vessel/platform requirements, operating conditions, and classification society rules.',
              },
              {
                step: '02',
                title: 'Vendor & Product Selection',
                description:
                  'Sourcing from type-approved manufacturers with proven marine track records.',
              },
              {
                step: '03',
                title: 'Inspection & Testing',
                description:
                  'Witness testing, documentation review, and final acceptance at manufacturer facilities.',
              },
              {
                step: '04',
                title: 'Delivery & Commissioning',
                description:
                  'Managed marine logistics, on-board installation support, and commissioning verification.',
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

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-light text-white mb-6">
              Need Marine <span className="italic">Equipment?</span>
            </h2>
            <p className="text-gray-400 mb-8">
              From deck machinery to subsea systems—our marine equipment specialists are ready to
              support your requirements with technical expertise and competitive pricing.
            </p>
            <Link to="/contact">
              <button className="inline-flex items-center bg-white text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Contact Marine Equipment Team
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

export default MarineEquipment;
