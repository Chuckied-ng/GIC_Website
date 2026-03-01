import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { useSiteImages } from '@/hooks/useSiteImage';
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Target,
  TrendingUp,
  Award,
  Users,
  Globe,
  Anchor,
  Wrench,
  BarChart3,
  Lightbulb,
  Handshake,
  HardHat,
} from 'lucide-react';

const About = () => {
  const images = useSiteImages([
    'about-hero', 'about-story-1', 'about-story-2', 'about-story-3', 'about-story-4',
    'about-capabilities-main', 'about-capabilities-left', 'about-capabilities-right',
    'about-certifications', 'about-local-content', 'about-hse',
  ]);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <span className="text-sm text-red-600 tracking-wide uppercase font-medium">About GIC Oil & Gas</span>
              <h1 className="text-5xl lg:text-6xl font-light text-slate-900 mt-4 leading-tight">
                Engineering Excellence
                <br />
                <span className="italic text-red-600">Since 2007</span>
              </h1>
              <p className="text-gray-600 mt-6 leading-relaxed">
                GIC Oil & Gas Services Limited is a leading indigenous EPCI contractor delivering
                world-class engineering, procurement, construction, and marine services across West
                Africa. We combine deep local expertise with international standards to execute
                complex energy infrastructure projects safely, on schedule, and within budget.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/contact">
                  <button className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-colors">
                    Work With Us
                    <span className="ml-3 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </span>
                  </button>
                </Link>
                <Link to="/projects">
                  <button className="inline-flex items-center border-2 border-red-600 text-red-600 px-6 py-3 rounded-full font-medium hover:bg-red-50 transition-colors">
                    View Our Projects
                  </button>
                </Link>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img
                src={images['about-hero']}
                alt="GIC Oil & Gas Operations"
                className="w-full h-[480px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '25+', label: 'Years of Operation' },
              { value: '20+', label: 'Projects Delivered' },
              { value: '50+', label: 'Active Clients' },
              { value: '12', label: 'Countries Served' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-light text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <img
                src={images['about-story-1']}
                alt="Engineering Work"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <img
                src={images['about-story-2']}
                alt="Offshore Facility"
                className="w-full h-64 object-cover rounded-2xl mt-8"
              />
              <img
                src={images['about-story-3']}
                alt="Pipeline Construction"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <img
                src={images['about-story-4']}
                alt="Industrial Operations"
                className="w-full h-64 object-cover rounded-2xl mt-8"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm text-red-600 tracking-wide uppercase font-medium">Our Story</span>
              <h2 className="text-4xl font-light text-slate-900 mt-4 mb-6">
                Built on Decades of
                <br />
                <span className="italic text-red-600">Proven Performance</span>
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2007, GIC Oil & Gas Services Limited was established with a clear mission:
                  to build a world-class, indigenous EPCI company capable of delivering complex energy
                  projects to the highest international standards. From our headquarters in Port
                  Harcourt, Nigeria, we've grown into one of the most trusted engineering services
                  companies operating in the Niger Delta and beyond.
                </p>
                <p>
                  Over two decades, we have successfully executed hundreds of projects for major
                  international oil companies (IOCs), national oil companies (NOCs), and independent
                  operators—spanning offshore platform fabrication, subsea installations, pipeline
                  construction, flow station upgrades, and comprehensive facility maintenance.
                </p>
                <p>
                  Our growth has been powered by a relentless commitment to technical excellence,
                  safety, and client satisfaction. Today, with a multidisciplinary team of over 500
                  professionals and a fleet of marine assets and fabrication facilities, GIC stands as
                  a benchmark for what indigenous companies can achieve in the global energy sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose GIC */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <span className="text-sm text-red-600 tracking-wide uppercase font-medium">Why GIC</span>
            <h2 className="text-4xl font-light text-slate-900 mt-4 mb-6">
              The Competitive
              <br />
              <span className="italic text-red-600">Advantage</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Choosing the right EPCI partner is critical. Here's why leading operators across West
              Africa consistently trust GIC for their most demanding projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: HardHat,
                title: 'End-to-End EPCI Capability',
                description:
                  'From conceptual engineering through commissioning and start-up, we manage every phase of your project under one roof—reducing interfaces, risk, and cost.',
              },
              {
                icon: Shield,
                title: 'Zero-Harm Safety Culture',
                description:
                  'With over 5 million man-hours LTI-free, our HSE record speaks for itself. Safety isn\'t a priority—it\'s a core value embedded in every operation.',
              },
              {
                icon: Globe,
                title: 'Local Expertise, Global Standards',
                description:
                  'Deep understanding of Niger Delta conditions combined with compliance to API, ASME, DNV, and international engineering codes ensures quality without compromise.',
              },
              {
                icon: Wrench,
                title: 'In-House Fabrication & Marine Assets',
                description:
                  'Strategically positioned fabrication yards and a fleet of vessels give us direct control over quality, scheduling, and logistics for onshore and offshore projects.',
              },
              {
                icon: Users,
                title: '20+ Projects Completed',
                description:
                  'Our multidisciplinary workforce includes engineers, welders, project managers, and HSE specialists—trained to execute complex scopes across all disciplines.',
              },
              {
                icon: BarChart3,
                title: 'Proven Track Record',
                description:
                  'Over 500 projects successfully delivered for Shell, TotalEnergies, Chevron, NNPC, and other major operators—on time and within budget.',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-red-200 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-3 group-hover:text-red-600 transition-colors">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 lg:p-12 rounded-3xl border-2 border-red-600">
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-4">
                Our <span className="italic text-red-600">Mission</span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver exceptional engineering, procurement, and construction services that enable
                our clients to develop and operate energy assets safely, efficiently, and sustainably—while
                creating lasting value for stakeholders, local communities, and the broader Nigerian economy.
              </p>
            </div>

            <div className="bg-white p-10 lg:p-12 rounded-3xl border-2 border-red-600">
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-4">
                Our <span className="italic text-red-600">Vision</span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the preferred indigenous EPCI contractor in West Africa and a globally recognized
                engineering services company—known for technical excellence, reliable execution,
                and innovative solutions that drive energy infrastructure development across emerging markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Capabilities Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm text-red-600 tracking-wide uppercase font-medium">What We Do</span>
              <h2 className="text-4xl font-light text-slate-900 mt-4 mb-6">
                Comprehensive Capabilities
                <br />
                <span className="italic text-red-600">Across the Value Chain</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                GIC provides integrated services that cover the full project lifecycle—from feasibility
                studies through construction, commissioning, and ongoing operations support. Our
                breadth of capability means clients benefit from seamless coordination and reduced
                project risk.
              </p>

              <div className="space-y-4">
                {[
                  'Front-End Engineering Design (FEED) & Detailed Engineering',
                  'Offshore Platform Fabrication & Installation',
                  'Subsea Pipeline & Flowline Construction',
                  'Process & Production Facility Upgrades',
                  'Marine Vessel Chartering & Logistics',
                  'Procurement & Supply Chain Management',
                  'Maintenance, Modifications & Operations (MMO)',
                  'Project Management & Construction Supervision',
                ].map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{capability}</span>
                  </div>
                ))}
              </div>

              <Link to="/services/engineering" className="mt-8 inline-block">
                <button className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-colors">
                  Explore Our Services
                  <span className="ml-3 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </span>
                </button>
              </Link>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src={images['about-capabilities-main']}
                  alt="Offshore Platform"
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={images['about-capabilities-left']}
                    alt="Pipeline Construction"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={images['about-capabilities-right']}
                    alt="Fabrication Yard"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm text-red-600 tracking-wide uppercase font-medium">Our Values</span>
            <h2 className="text-4xl font-light text-slate-900 mt-4 mb-6">
              Principles That
              <br />
              <span className="italic text-red-600">Define Us</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our values are not aspirational statements—they are operational commitments that guide
              every project decision, every client interaction, and every team behaviour.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Safety First',
                description:
                  'Zero-harm culture across all operations with rigorous HSE protocols, continuous training, and real-time incident monitoring. Safety is non-negotiable.',
              },
              {
                icon: Award,
                title: 'Technical Excellence',
                description:
                  'World-class engineering standards backed by qualified professionals, advanced tools, and peer-reviewed design processes that ensure precision.',
              },
              {
                icon: Handshake,
                title: 'Integrity & Transparency',
                description:
                  'Honest reporting, ethical conduct, and full accountability in all stakeholder relationships. We earn trust through consistent actions.',
              },
              {
                icon: CheckCircle2,
                title: 'Quality Assurance',
                description:
                  'ISO-certified management systems ensuring consistent delivery of high-quality engineering, materials, and workmanship on every project.',
              },
              {
                icon: Lightbulb,
                title: 'Innovation',
                description:
                  'Continuously adopting new technologies, digital tools, and lean methodologies to improve project delivery and reduce environmental impact.',
              },
              {
                icon: Anchor,
                title: 'Local Content Commitment',
                description:
                  'Developing Nigerian talent, strengthening local supply chains, and maximizing in-country value creation while meeting global standards.',
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg hover:border-red-200 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-3 group-hover:text-red-600 transition-colors">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Sectors */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm text-red-600 tracking-wide uppercase font-medium">Who We Serve</span>
            <h2 className="text-4xl font-light text-slate-900 mt-4 mb-6">
              Trusted by Industry
              <br />
              <span className="italic text-red-600">Leaders</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              From international oil companies to government agencies, our client portfolio reflects
              the depth of trust we've built through consistent, high-quality project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'International Oil Companies',
                examples: 'Shell, TotalEnergies, Chevron, ExxonMobil, Eni',
                icon: Globe,
              },
              {
                title: 'National Oil Companies',
                examples: 'NNPC, NAPIMS, NCDMB, NPDC',
                icon: Award,
              },
              {
                title: 'Independent Operators',
                examples: 'Seplat, Aiteo, First E&P, Eroton, Neconde',
                icon: BarChart3,
              },
              {
                title: 'EPCI & Service Companies',
                examples: 'Saipem, Subsea7, Technip, Wood Group',
                icon: Wrench,
              },
            ].map((sector, index) => {
              const Icon = sector.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-gray-50 rounded-2xl border border-gray-100 text-center hover:border-red-200 hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-red-600 transition-colors">{sector.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{sector.examples}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-sm text-red-600 tracking-wide uppercase font-medium">Quality & Compliance</span>
              <h2 className="text-4xl font-light text-slate-900 mt-4 mb-6">
                Certifications &
                <br />
                <span className="italic text-red-600">Memberships</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our commitment to quality is backed by internationally recognized certifications and
                active membership in leading professional bodies. These credentials assure our clients
                that every project meets the most stringent industry requirements.
              </p>
              <div className="rounded-3xl overflow-hidden">
                <img
                  src={images['about-certifications']}
                  alt="Quality Standards"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Award,
                  title: 'ISO Certifications',
                  items: [
                    'ISO 9001:2015 — Quality Management System',
                    'ISO 14001:2015 — Environmental Management',
                    'ISO 45001:2018 — Occupational Health & Safety',
                  ],
                },
                {
                  icon: Shield,
                  title: 'Industry Licenses & Approvals',
                  items: [
                    'DPR Engineering License',
                    'NNPC/NAPIMS Contractor Registration',
                    'API Monogram Certification',
                    'ASME Code Certification',
                    'NCDMB Nigerian Content Compliance',
                  ],
                },
                {
                  icon: Users,
                  title: 'Professional Memberships',
                  items: [
                    'Nigerian Society of Engineers (NSE)',
                    'Society of Petroleum Engineers (SPE)',
                    'Project Management Institute (PMI)',
                    'International Association of Drilling Contractors (IADC)',
                  ],
                },
              ].map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-2xl border-2 border-red-600">
                    <div className="flex items-center space-x-4 mb-5">
                      <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-medium text-slate-900">{cert.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {cert.items.map((item, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Local Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-slate-900 rounded-3xl p-10 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm text-gray-400 tracking-wide">Our Commitment</span>
                <h2 className="text-4xl font-light text-white mt-4 mb-6">
                  Driving Nigerian Content &
                  <br />
                  <span className="italic">Local Development</span>
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  As a proudly indigenous company, GIC is deeply committed to maximizing Nigerian
                  content in every project. We actively invest in local workforce development,
                  prioritize Nigerian sub-contractors and suppliers, and partner with local
                  institutions to build the next generation of oil & gas professionals.
                </p>
                <div className="space-y-4">
                  {[
                    'Over 90% local workforce composition',
                    'In-house training academy for welders, fitters & technicians',
                    'Active partnerships with Nigerian universities',
                    'Local vendor development & supply chain programs',
                    'Full NCDMB compliance on all projects',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={images['about-local-content']}
                  alt="Local workforce development"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HSE Commitment */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden">
              <img
                src={images['about-hse']}
                alt="Safety operations"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <span className="text-sm text-gray-500 tracking-wide">Health, Safety & Environment</span>
              <h2 className="text-4xl font-light text-slate-900 mt-4 mb-6">
                Uncompromising Commitment
                <br />
                <span className="italic">to HSE Excellence</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Safety is the cornerstone of everything we do at GIC. Our integrated HSE management
                system ensures that every worker returns home safely, every day. We have consistently
                achieved industry-leading safety metrics across all project sites.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center">
                  <div className="text-3xl font-light text-slate-900 mb-1">5M+</div>
                  <div className="text-gray-500 text-sm">LTI-Free Man-Hours</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center">
                  <div className="text-3xl font-light text-slate-900 mb-1">0.0</div>
                  <div className="text-gray-500 text-sm">TRIR (Total Recordable)</div>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  'Comprehensive risk assessment before every operation',
                  'Mandatory safety inductions and toolbox talks',
                  'Real-time incident tracking and reporting systems',
                  'Regular emergency response drills and simulations',
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partners Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-sm text-red-600 tracking-wide uppercase font-medium">
              Strategic Partners
            </span>
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mt-4">
              Our <span className="italic text-red-600">Partners</span>
            </h2>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
              Collaborating with industry leaders across procurement, mining, energy, and construction to deliver integrated solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'GIC Services LLC',
                sector: 'Procurement',
                initial: 'GS',
                description: 'Strategic procurement partner for oil & gas equipment and materials supply chain management.',
              },
              {
                name: 'Geerose Mining',
                sector: 'Mining',
                initial: 'GM',
                description: 'Leading mining operations partner providing mineral extraction and resource development services.',
              },
              {
                name: 'E-Power Plus Global',
                sector: 'Renewable Energy',
                initial: 'EP',
                description: 'Renewable energy solutions provider driving sustainable power infrastructure across West Africa.',
              },
              {
                name: 'Geerose Nigeria Limited',
                sector: 'Construction',
                initial: 'GN',
                description: 'Construction and civil engineering partner delivering infrastructure projects across Nigeria.',
              },
            ].map((partner) => (
              <div
                key={partner.name}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-red-600 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex flex-col h-full space-y-4">
                  {/* Logo Placeholder */}
                  <div className="h-16 w-full flex items-center">
                    <div className="w-16 h-16 bg-slate-900 group-hover:bg-red-600 rounded-2xl flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                      <span className="text-white font-semibold text-lg">{partner.initial}</span>
                    </div>
                  </div>
                  {/* Sector Tag */}
                  <span className="inline-block text-xs text-red-600 bg-red-50 border border-red-100 px-3 py-1 rounded-full font-medium w-fit">
                    {partner.sector}
                  </span>
                  {/* Name */}
                  <h3 className="text-slate-900 font-medium text-lg group-hover:text-red-600 transition-colors leading-tight">
                    {partner.name}
                  </h3>
                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {partner.description}
                  </p>
                  {/* Divider */}
                  <div className="w-8 h-0.5 bg-red-600 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-gray-50 rounded-3xl p-10 lg:p-16 text-center">
            <h2 className="text-4xl font-light text-slate-900 mb-4">
              Ready to Partner with <span className="italic">GIC?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Whether you need a full EPCI contractor, specialist engineering support, or marine
              logistics—our team is ready to discuss how we can deliver your next project safely,
              on time, and within budget.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <button className="inline-flex items-center bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors">
                  Get In Touch
                  <span className="ml-3 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </span>
                </button>
              </Link>
              <Link to="/projects">
                <button className="inline-flex items-center border border-slate-300 text-slate-900 px-8 py-3 rounded-full font-medium hover:bg-white transition-colors">
                  View Our Projects
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
