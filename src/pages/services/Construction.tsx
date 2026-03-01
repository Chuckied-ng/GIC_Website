import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  HardHat,
  Wrench,
  Shield,
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  Clock,
  BarChart3,
} from 'lucide-react';
import { useSiteImage } from '@/hooks/useSiteImage';

const Construction = () => {
  const heroImage = useSiteImage('services-construction-hero');
  const advantageImage = useSiteImage('services-construction-advantage');
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
                Construction
                <br />
                <span className="italic">Services</span>
              </h1>
              <p className="text-gray-600 mt-6 leading-relaxed">
                Full-spectrum construction capabilities for onshore and offshore oil & gas
                facilities—from civil works and structural steel erection to mechanical installation,
                piping fabrication, and commissioning support. We deliver complex construction scopes
                safely, on schedule, and to the highest quality standards.
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
                alt="Construction site operations"
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
              { value: '20+', label: 'Construction Projects' },
              { value: '5M+', label: 'LTI-Free Man-Hours' },
              { value: '100+', label: 'Skilled Crews' },
              { value: '98%', label: 'On-Time Delivery' },
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
                Integrated Construction
                <br />
                <span className="italic">Excellence</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                GIC's construction division executes complex onshore and offshore projects across
                Nigeria and West Africa. Our experienced construction teams, combined with in-house
                fabrication yards and equipment fleets, enable us to maintain full control over
                quality, scheduling, and cost—delivering predictable outcomes on every project.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From greenfield developments and brownfield modifications to maintenance shutdowns and
                turnaround projects, we bring the right resources, expertise, and management systems
                to every construction challenge. Our zero-harm safety culture ensures that every
                worker returns home safely, every day.
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  icon: HardHat,
                  title: 'Onshore Construction',
                  description:
                    'Flow stations, gas plants, tank farms, pipeline installations, and processing facility construction across all terrains.',
                },
                {
                  icon: Wrench,
                  title: 'Offshore Installation',
                  description:
                    'Platform fabrication, topside installation, subsea tie-ins, and jacket launch and installation for offshore developments.',
                },
                {
                  icon: Shield,
                  title: 'HSE Management',
                  description:
                    'Integrated safety management with dedicated HSE teams, permit-to-work systems, and real-time incident monitoring.',
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

      {/* Construction Scope */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-6">
              Construction <span className="italic">Scope</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              End-to-end construction services covering every discipline and project phase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Civil & Structural Works',
                items: [
                  'Piling & foundation construction',
                  'Concrete works & formwork',
                  'Structural steel erection',
                  'Road & drainage construction',
                  'Building & accommodation works',
                ],
              },
              {
                title: 'Mechanical Installation',
                items: [
                  'Equipment setting & alignment',
                  'Pressure vessel installation',
                  'Rotating equipment installation',
                  'Tank construction & erection',
                  'Lifting & heavy hauling',
                ],
              },
              {
                title: 'Piping Fabrication & Erection',
                items: [
                  'Carbon steel & alloy piping',
                  'GRP/GRE piping systems',
                  'High-pressure piping',
                  'Underground piping',
                  'Hydrotesting & flushing',
                ],
              },
              {
                title: 'Electrical & Instrumentation',
                items: [
                  'Cable pulling & termination',
                  'Switchgear installation',
                  'Instrument installation & calibration',
                  'DCS/PLC/SCADA installation',
                  'Fire & gas system installation',
                ],
              },
              {
                title: 'Pipeline Construction',
                items: [
                  'Right-of-way preparation',
                  'Pipe stringing & welding',
                  'Crossing construction (HDD)',
                  'Pipeline testing & cleaning',
                  'Cathodic protection installation',
                ],
              },
              {
                title: 'Pre-commissioning & Commissioning',
                items: [
                  'System completions & handover',
                  'Mechanical completion verification',
                  'Loop checking & function testing',
                  'Performance testing',
                  'Operational readiness support',
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

      {/* Why GIC Construction */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden">
              <img
                src={advantageImage}
                alt="Construction operations"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div>
              <span className="text-sm text-gray-500 tracking-wide">Why GIC</span>
              <h2 className="text-4xl font-light text-slate-900 mt-4 mb-6">
                The Construction
                <br />
                <span className="italic">Advantage</span>
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: Users,
                    title: 'Experienced Workforce',
                    description:
                      'Over 300 skilled tradespeople including welders, fitters, riggers, and electricians—all trained to international competency standards.',
                  },
                  {
                    icon: Award,
                    title: 'In-House Fabrication',
                    description:
                      'Strategically located fabrication yards with heavy-lift capability, ensuring quality control and schedule optimization.',
                  },
                  {
                    icon: Clock,
                    title: 'Schedule Certainty',
                    description:
                      'Advanced planning tools, earned value management, and dedicated scheduling teams ensure on-time project delivery.',
                  },
                  {
                    icon: BarChart3,
                    title: 'Cost Control',
                    description:
                      'Transparent cost reporting, competitive local sourcing, and efficient resource allocation to maximize project value.',
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Execution Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-6">
              Execution <span className="italic">Process</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A proven methodology ensuring safe, efficient, and predictable project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Mobilization & Planning',
                description:
                  'Site survey, construction planning, resource mobilization, and HSE setup prior to construction kick-off.',
              },
              {
                step: '02',
                title: 'Fabrication & Procurement',
                description:
                  'In-house fabrication of structural and piping spools, concurrent with material procurement and expediting.',
              },
              {
                step: '03',
                title: 'Site Construction',
                description:
                  'Disciplined execution with integrated QA/QC, daily progress tracking, and proactive risk management.',
              },
              {
                step: '04',
                title: 'Commissioning & Handover',
                description:
                  'Systematic completions, pre-commissioning, commissioning, and performance verification prior to handover.',
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
              Need Construction <span className="italic">Support?</span>
            </h2>
            <p className="text-gray-400 mb-8">
              From concept to commissioning—connect with our construction team to discuss your next
              project.
            </p>
            <Link to="/contact">
              <button className="inline-flex items-center bg-white text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Contact Construction Team
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

export default Construction;
