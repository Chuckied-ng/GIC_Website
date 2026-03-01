import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  Shield,
  Flame,
  Eye,
  ArrowRight,
  AlertTriangle,
  Radio,
  Siren,
  ShieldCheck,
  Bell,
  Lock,
} from 'lucide-react';
import { useSiteImage } from '@/hooks/useSiteImage';

const SafetySystems = () => {
  const heroImage = useSiteImage('products-safety-hero');
  const complianceImage = useSiteImage('products-safety-compliance');
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
                Safety
                <br />
                <span className="italic">Systems</span>
              </h1>
              <p className="text-gray-600 mt-6 leading-relaxed">
                Comprehensive fire & gas detection, suppression, emergency shutdown, and safety
                instrumented systems for oil & gas, petrochemical, and offshore facilities. GIC
                supplies, installs, and commissions integrated safety systems that protect your
                people, assets, and the environment—meeting the most stringent international safety
                standards.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/contact">
                  <button className="inline-flex items-center bg-slate-900 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors">
                    Request a Consultation
                    <span className="ml-3 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </span>
                  </button>
                </Link>
                <Link to="/services/engineering">
                  <button className="inline-flex items-center border border-slate-300 text-slate-900 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
                    Engineering Services
                  </button>
                </Link>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img
                src={heroImage}
                alt="Safety systems and monitoring"
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
              { value: 'SIL 3', label: 'Certified Systems' },
              { value: '20+', label: 'Safety Projects' },
              { value: '100%', label: 'Compliance Rate' },
              { value: '5M+', label: 'LTI-Free Man-Hours' },
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
                Protecting People
                <br />
                <span className="italic">& Assets</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                In the oil & gas industry, effective safety systems are the last line of defence
                against catastrophic events. GIC provides end-to-end safety system solutions—from
                hazard analysis and system design through equipment supply, installation,
                commissioning, and ongoing maintenance. Our safety systems are designed to IEC 61511
                and IEC 61508 standards, ensuring the highest levels of functional safety.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We partner with the world's leading safety system manufacturers to supply
                SIL-certified equipment backed by comprehensive engineering documentation, proven
                reliability data, and full lifecycle support. Every system we deliver is
                purpose-engineered for the specific hazards and operating conditions of your facility.
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  icon: Flame,
                  title: 'Fire & Gas Detection',
                  description:
                    'Intelligent fire and gas detection systems with voting logic, mapping software, and integrated alarm management for rapid response.',
                },
                {
                  icon: Shield,
                  title: 'Emergency Shutdown (ESD)',
                  description:
                    'SIL 2/3 rated ESD systems providing safe and reliable process shutdown to prevent escalation of hazardous events.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Safety Instrumented Systems',
                  description:
                    'Complete SIS solutions from SIL assessment through logic solver design, installation, and SIL verification testing.',
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

      {/* System Categories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-6">
              Safety System <span className="italic">Categories</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Integrated safety systems engineered for the specific hazards of oil & gas operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Fire Detection Systems',
                items: [
                  'UV/IR flame detectors',
                  'Heat detectors (point & linear)',
                  'Smoke detectors (optical & ionization)',
                  'Multi-spectrum IR detectors',
                  'Aspirating smoke detection (VESDA)',
                ],
              },
              {
                title: 'Gas Detection Systems',
                items: [
                  'Combustible gas detectors (catalytic & IR)',
                  'Toxic gas detectors (H₂S, CO, SO₂)',
                  'Open-path gas detectors',
                  'Ultrasonic gas leak detectors',
                  'Gas mapping & coverage analysis',
                ],
              },
              {
                title: 'Fire Suppression Systems',
                items: [
                  'Deluge & sprinkler systems',
                  'Foam suppression systems',
                  'CO₂ & inert gas systems',
                  'Clean agent systems (FM-200, Novec)',
                  'Dry chemical powder systems',
                ],
              },
              {
                title: 'Emergency Shutdown (ESD)',
                items: [
                  'ESD logic solvers (SIL 2/3)',
                  'Process shutdown valves',
                  'Blowdown systems',
                  'Emergency depressurization',
                  'HIPPS (High Integrity Pressure Protection)',
                ],
              },
              {
                title: 'Safety Instrumented Systems',
                items: [
                  'SIL assessment (LOPA/SIL)',
                  'Safety logic controllers',
                  'SIS field instruments',
                  'Final elements & actuators',
                  'SIL verification & validation',
                ],
              },
              {
                title: 'Public Address & General Alarm',
                items: [
                  'PA/GA systems (offshore rated)',
                  'Emergency evacuation alarms',
                  'Intercom & talk-back systems',
                  'Beacon & strobe lighting',
                  'CCTV & security systems',
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

      {/* Standards & Compliance */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden">
              <img
                src={complianceImage}
                alt="Safety engineering"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <span className="text-sm text-gray-500 tracking-wide">Compliance</span>
              <h2 className="text-4xl font-light text-slate-900 mt-4 mb-6">
                Standards &
                <br />
                <span className="italic">Certifications</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                All safety systems are designed, supplied, and installed in compliance with
                internationally recognized functional safety standards. Our safety engineering team
                holds TÜV-certified Functional Safety Engineer qualifications.
              </p>
              <div className="space-y-4">
                {[
                  'IEC 61511 — Functional Safety (Process Industry)',
                  'IEC 61508 — Functional Safety (E/E/PE Systems)',
                  'NFPA 72 — National Fire Alarm & Signaling Code',
                  'API 2510 — Fire Protection for LPG Facilities',
                  'EN 54 — Fire Detection & Alarm Systems',
                  'ISA 84 — Safety Instrumented Systems',
                  'ATEX / IECEx — Hazardous Area Equipment',
                  'SIL 1/2/3 Certification (TÜV Verified)',
                ].map((standard, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{standard}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifecycle Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-6">
              Safety System <span className="italic">Lifecycle</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Complete lifecycle support from initial hazard study through decommissioning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Hazard Analysis & SIL Assessment',
                description:
                  'HAZOP, LOPA, SIL determination, and safety requirements specification to identify protection needs.',
              },
              {
                step: '02',
                title: 'System Design & Engineering',
                description:
                  'Functional safety engineering, logic design, cause & effect charts, and equipment specification.',
              },
              {
                step: '03',
                title: 'Supply & Installation',
                description:
                  'Equipment procurement, site installation, loop testing, and integrated system commissioning.',
              },
              {
                step: '04',
                title: 'Validation & Maintenance',
                description:
                  'SIL verification testing, proof testing schedules, maintenance programs, and periodic reassessment.',
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

      {/* Technology Partners */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl font-light text-slate-900 mb-6">
              Technology <span className="italic">Partners</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We supply safety systems from the world's most trusted manufacturers—each with
              proven track records in the oil & gas industry.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              'Honeywell (Notifier)',
              'Emerson (DeltaV SIS)',
              'Yokogawa (ProSafe-RS)',
              'Detector Electronics (Det-Tronics)',
              'MSA Safety',
              'Dräger',
              'Tyco Fire Products',
              'Kidde Fire Systems',
              'HIMA',
              'Triconex (Schneider)',
              'Autronica (Xtralis)',
              'Micropack',
            ].map((partner) => (
              <span
                key={partner}
                className="px-5 py-3 bg-white rounded-full border border-gray-200 text-sm text-gray-700 font-medium"
              >
                {partner}
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
              Need Safety System <span className="italic">Solutions?</span>
            </h2>
            <p className="text-gray-400 mb-8">
              From fire & gas detection to complete SIS design—our safety specialists are ready to
              engineer the right protection for your facility.
            </p>
            <Link to="/contact">
              <button className="inline-flex items-center bg-white text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Contact Safety Team
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

export default SafetySystems;
