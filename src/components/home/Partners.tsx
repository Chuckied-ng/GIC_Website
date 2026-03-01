import React from "react";
import { useSiteImages } from '@/hooks/useSiteImage';

const Partners = () => {
  const logos = useSiteImages([
    'partner-shell', 'partner-chevron', 'partner-nnpc', 'partner-seplat',
    'partner-agip', 'partner-heritage', 'partner-oando', 'partner-addax', 'partner-renaissance',
  ]);

  const partners = [
    { name: "Shell", logo: logos['partner-shell'] },
    { name: "Chevron", logo: logos['partner-chevron'] },
    { name: "NNPC", logo: logos['partner-nnpc'] },
    { name: "Seplat", logo: logos['partner-seplat'] },
    { name: "Agip", logo: logos['partner-agip'] },
    { name: "Heritage Oil", logo: logos['partner-heritage'] },
    { name: "Oando", logo: logos['partner-oando'] },
    { name: "Addax Petroleum", logo: logos['partner-addax'] },
    { name: "Renaissance", logo: logos['partner-renaissance'] },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-sm text-red-600 tracking-wide uppercase font-medium">
            Trusted Partners
          </span>
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mt-4">
            Our <span className="italic text-red-600">Clients</span>
          </h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            Delivering excellence to leading operators across the energy sector
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-red-600 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <div className="h-20 w-full flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-20 max-w-full w-auto h-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="text-center text-slate-700 text-sm font-medium group-hover:text-red-600 transition-colors">
                  {partner.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "50+", label: "Active Clients" },
            { value: "20+", label: "Projects Delivered" },
            { value: "25+", label: "Years Experience" },
            { value: "12", label: "Countries Served" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl lg:text-5xl font-light text-red-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
