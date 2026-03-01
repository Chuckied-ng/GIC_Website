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
  Globe,
  TrendingUp,
  Waves,
  Navigation,
} from 'lucide-react';
import { useSiteImage } from '@/hooks/useSiteImage';

const MarineOffshore = () => {
  const heroImage = useSiteImage('services-marine-hero');
  const fleetMainImage = useSiteImage('services-marine-fleet-main');
  const fleetLeftImage = useSiteImage('services-marine-fleet-left');
  const fleetRightImage = useSiteImage('services-marine-fleet-right');

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
                Marine &
                <br />
                <span className="italic">Offshore Services</span>
              </h1>
              <p className="text-gray-600 mt-6 leading-relaxed">
                Comprehensive marine and offshore support services including vessel chartering,
                offshore logistics, subsea operations, and marine construction. GIC operates a
                strategically positioned fleet of marine assets to support the most demanding
                offshore projects across the Gulf of Guinea and West African waters.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/contact">
                  <button className="inline-flex items-center bg-slate-900 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors">
                    Request Marine Support
                    <span className="ml-3 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </span>
                  </button>
                </Link>
                <Link to="/projects">
                  <button className="inline-flex items-center border border-slate-300 text-slate-900 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
                    View Projects
                  </button>
                </Link>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img
                src={heroImage}
                alt="Offshore platform operations"
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
              { value: '15+', label: 'Marine Vessels' },
              { value: '20+', label: 'Offshore Projects' },
              { value: '0', label: 'Marine Incidents' },
              { value: '24/7', label: 'Operational Readiness' },
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
              <span className="text-sm text-gray-500 tracking-wide">Capabilities</span>
              <h2 className="text-4xl font-light text-slate-900 mt-4 mb-6">
                Full-Spectrum Marine
                <br />
                <span className="italic">& Offshore Capability</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                GIC's marine and offshore division provides integrated services that combine vessel
                operations, marine construction, and offshore logistics into seamless project
                delivery. With a fleet of owned and chartered vessels and an experienced marine
                crew, we support every phase of offshore development—from exploration support
                through production and decommissioning.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our operations are governed by ISM Code, STCW, and MARPOL compliance, with all
                vessels maintained to classification society standards. We bring the highest levels
                of safety, environmental stewardship, and operational reliability to every offshore
                campaign.
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  icon: Ship,
                  title: 'Vessel Chartering',
                  description:
                    'Platform supply vessels, anchor handling tugs, crew boats, and dive support vessels available for short-term and long-term charter.',
                },
                {
                  icon: Anchor,
                  title: 'Marine Construction',
                  description:
                    'Pipelay operations, jacket launch and installation, subsea tie-ins, and offshore heavy lifts with marine spread support.',
                },
                {
                  icon: Navigation,
                  title: 'Offshore Logistics',
                  description:
                    'Integrated logistics management including crew transfer, cargo handling, fuel supply, and base operations support.',
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

      {/* Service Scope */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-6">
              Marine & Offshore <span className="italic">Scope</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              End-to-end marine services supporting every phase of offshore operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Platform Support',
                items: [
                  'Platform supply operations',
                  'Anchor handling & towing',
                  'Crew change vessel services',
                  'Emergency response support',
                  'Standby vessel operations',
                ],
              },
              {
                title: 'Marine Construction',
                items: [
                  'Jacket fabrication & launch',
                  'Topside installation',
                  'Pipelaying operations',
                  'Subsea tie-in & connection',
                  'Offshore heavy lifting',
                ],
              },
              {
                title: 'Subsea Operations',
                items: [
                  'Diving & ROV operations',
                  'Subsea inspection & survey',
                  'Pipeline repair & maintenance',
                  'Cathodic protection installation',
                  'Subsea structure installation',
                ],
              },
              {
                title: 'Vessel Management',
                items: [
                  'Fleet management & scheduling',
                  'Planned maintenance systems',
                  'Class survey compliance',
                  'Crew management & training',
                  'Fuel optimization programs',
                ],
              },
              {
                title: 'Marine Logistics',
                items: [
                  'Shore base operations',
                  'Cargo management & handling',
                  'Personnel transfer services',
                  'Waste management & disposal',
                  'Marine fuel supply',
                ],
              },
              {
                title: 'Decommissioning',
                items: [
                  'Platform removal & disposal',
                  'Pipeline decommissioning',
                  'Subsea structure recovery',
                  'Environmental remediation',
                  'Regulatory compliance support',
                ],
              },
            ].map((scope, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
                <h3 className="text-xl font-medium text-slate-900 mb-4">{scope.title}</h3>
                <ul className="space-y-2">
                  {scope.items.map((item, i) => (
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

      {/* Fleet & Assets */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm text-gray-500 tracking-wide">Our Fleet</span>
              <h2 className="text-4xl font-light text-slate-900 mt-4 mb-6">
                Marine Assets &
                <br />
                <span className="italic">Vessel Fleet</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                GIC maintains a diverse fleet of marine assets strategically positioned across
                Nigeria's maritime corridor. Our vessels are maintained to the highest
                classification society standards and crewed by experienced Nigerian mariners.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Platform Supply Vessels', count: '5' },
                  { label: 'Anchor Handling Tugs', count: '3' },
                  { label: 'Crew Boats', count: '4' },
                  { label: 'Work Barges', count: '3' },
                ].map((asset, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-2xl border border-gray-200 text-center"
                  >
                    <div className="text-3xl font-light text-slate-900 mb-1">{asset.count}</div>
                    <div className="text-gray-500 text-sm">{asset.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src={fleetMainImage}
                  alt="Marine vessel fleet"
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={fleetLeftImage}
                    alt="Offshore operations"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={fleetRightImage}
                    alt="Marine construction"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light text-slate-900 mb-6">
                Marine <span className="italic">Compliance</span>
              </h2>
              <p className="text-gray-600 mb-6">
                All marine operations comply with international maritime regulations and standards:
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  'ISM Code',
                  'STCW Convention',
                  'MARPOL',
                  'SOLAS',
                  'ISPS Code',
                  'NIMASA Regulations',
                  'Flag State Requirements',
                  'OCIMF Standards',
                ].map((std) => (
                  <span
                    key={std}
                    className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200 text-sm text-gray-700"
                  >
                    {std}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-light text-slate-900 mb-6">
                Classification <span className="italic">Societies</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Our vessels are classed and surveyed by leading international classification
                societies:
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  'Bureau Veritas',
                  'Lloyd\'s Register',
                  'DNV',
                  'ABS',
                  'Nigerian Maritime Administration (NIMASA)',
                ].map((society) => (
                  <span
                    key={society}
                    className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200 text-sm text-gray-700"
                  >
                    {society}
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
              Need Marine & Offshore <span className="italic">Support?</span>
            </h2>
            <p className="text-gray-400 mb-8">
              From vessel chartering to full offshore construction campaigns—connect with our marine
              team to discuss your requirements.
            </p>
            <Link to="/contact">
              <button className="inline-flex items-center bg-white text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Contact Marine Team
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

export default MarineOffshore;
