import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { CheckCircle2, Recycle, Trash2, Leaf, ArrowRight, Shield } from 'lucide-react';
import { useSiteImage } from '@/hooks/useSiteImage';

const WasteManagementServices = () => {
  const heroImage = useSiteImage('services-waste-hero');
  const hseImage = useSiteImage('services-waste-hse');
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
                Waste
                <br />
                <span className="italic">Management</span>
              </h1>
              <p className="text-gray-600 mt-6 leading-relaxed">
                End-to-end waste management and environmental remediation services for the oil & gas 
                industry — from oilfield waste collection and treatment to full site remediation and 
                regulatory compliance.
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
                alt="Waste Management Operations"
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
                Responsible Waste
                <br />
                <span className="italic">Solutions</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                GIC Oil & Gas Services provides integrated waste management solutions specifically 
                designed for upstream, midstream, and downstream oil & gas operations. Our services 
                ensure safe handling, treatment, and disposal of all waste streams in compliance 
                with DPR, NESREA, and international environmental standards.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From routine operational waste to complex hazardous material remediation, our 
                certified environmental specialists deploy best-practice technologies to protect 
                the environment while keeping your operations fully compliant.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { icon: Trash2, title: 'Oilfield Waste Management', description: 'Collection, segregation, treatment, and safe disposal of drilling cuttings, produced water, and hydrocarbon-contaminated materials.' },
                { icon: Recycle, title: 'Recycling & Recovery', description: 'Resource recovery from waste streams including oil reclamation from slop, scrap metal recycling, and solvent recovery programmes.' },
                { icon: Leaf, title: 'Environmental Remediation', description: 'Contaminated site assessment, bioremediation, soil washing, and full site restoration to pre-impact condition.' },
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

      {/* Service Categories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-6">
              Service <span className="italic">Categories</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive waste management capabilities across all oilfield waste streams and environmental challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Drilling Waste Management',
                items: ['Drill cuttings collection & disposal', 'Waste-based drilling fluid treatment', 'Cuttings re-injection (CRI)', 'Thermal desorption treatment', 'Zero-discharge drilling support'],
              },
              {
                title: 'Produced Water Treatment',
                items: ['Produced water separation', 'Oil-in-water monitoring', 'Chemical dosing & treatment', 'Injection water preparation', 'Evaporation & disposal management'],
              },
              {
                title: 'Hazardous Waste Handling',
                items: ['NORM/TENORM waste management', 'Chemical waste segregation', 'Contaminated PPE disposal', 'Laboratory waste handling', 'Manifesting & chain of custody'],
              },
              {
                title: 'Spill Response & Remediation',
                items: ['Emergency oil spill response', 'Contaminated soil excavation', 'In-situ bioremediation', 'Phytoremediation programmes', 'Post-remediation monitoring'],
              },
              {
                title: 'Solid Waste Management',
                items: ['Onshore facility waste collection', 'Offshore platform waste logistics', 'General refuse management', 'Organic waste composting', 'Waste minimisation planning'],
              },
              {
                title: 'Compliance & Reporting',
                items: ['Waste management plans (WMP)', 'Environmental impact assessment support', 'Regulatory submissions (DPR/NESREA)', 'Waste tracking & reporting', 'Third-party audit preparation'],
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

      {/* Treatment Technologies & Regulations */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light text-slate-900 mb-6">Treatment Technologies</h2>
              <p className="text-gray-600 mb-6">
                Advanced treatment technologies deployed for effective waste processing:
              </p>
              <div className="flex flex-wrap gap-3">
                {['Thermal Desorption', 'Bioremediation', 'Solidification/Stabilisation', 'Centrifuge Separation', 'Vacuum Extraction', 'Landfarming', 'Incineration', 'Electrokinetic Remediation'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-light text-slate-900 mb-6">Regulatory Compliance</h2>
              <p className="text-gray-600 mb-6">
                Operations fully aligned with Nigerian and international environmental regulations:
              </p>
              <div className="flex flex-wrap gap-3">
                {['DPR Regulations', 'NESREA Act', 'NOSDRA Standards', 'ISO 14001', 'MARPOL Annex V', 'Basel Convention', 'OSPAR Guidelines', 'EGASPIN'].map((reg) => (
                  <span key={reg} className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-gray-700">
                    {reg}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HSE Commitment */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden">
              <img
                src={hseImage}
                alt="Environmental Compliance"
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <span className="text-sm text-gray-500 tracking-wide">HSE Commitment</span>
              <h2 className="text-4xl font-light text-slate-900 mt-4 mb-6">
                Zero Harm,
                <br />
                <span className="italic">Zero Compromise</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our waste management operations are governed by a rigorous HSE management system. 
                Every waste stream is handled, transported, and disposed of in a manner that 
                eliminates risk to personnel, communities, and the environment.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, label: 'ISO 14001 Aligned EMS' },
                  { icon: CheckCircle2, label: 'Certified Waste Handlers' },
                  { icon: Leaf, label: 'Environmental Monitoring' },
                  { icon: Recycle, label: 'Waste Minimisation Plans' },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-2xl border border-gray-200">
                      <Icon className="w-5 h-5 text-slate-900 flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '20+', label: 'Waste Management Assignments' },
              { value: '0', label: 'Regulatory Violations' },
              { value: '95%', label: 'Waste Diversion Rate' },
              { value: '20+', label: 'Years Environmental Experience' },
            ].map((stat, index) => (
              <div key={index} className="p-8 bg-white rounded-3xl border border-gray-200">
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
              Need Waste Management <span className="italic">Support?</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Speak with our environmental specialists about your waste management and remediation requirements.
            </p>
            <Link to="/contact">
              <button className="inline-flex items-center bg-white text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Contact Environmental Team
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

export default WasteManagementServices;
