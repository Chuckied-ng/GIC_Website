import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img 
              src="/gic-logo.jpeg" 
              alt="GIC Oil & Gas Services Limited" 
              className="h-12 w-auto mb-6"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Powering a greener tomorrow through innovative engineering solutions, delivering reliable, efficient, and sustainable energy for all.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-medium text-base mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Service
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Testimonial
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-medium text-base mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/engineering" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Engineering
                </Link>
              </li>
              <li>
                <Link to="/services/procurement" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Procurement
                </Link>
              </li>
              <li>
                <Link to="/services/construction" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Construction
                </Link>
              </li>
              <li>
                <Link to="/services/marine-offshore" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Marine & Offshore
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-base mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">(62) 765 897 908</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@gicoilgas.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Plot 123, Industrial Area,
                  <br />Port Harcourt, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2026 GIC Oil & Gas Services Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
