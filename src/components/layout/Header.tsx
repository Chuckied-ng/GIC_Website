import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'Engineering Services', path: '/services/engineering' },
    { name: 'Procurement', path: '/services/procurement' },
    { name: 'Construction', path: '/services/construction' },
    { name: 'Marine & Offshore', path: '/services/marine-offshore' },
    { name: 'Dredging', path: '/services/dredging' },
    { name: 'Waste Management', path: '/services/waste-management' },
  ];

  const products = [
    { name: 'Industrial Equipment', path: '/products/industrial-equipment' },
    { name: 'Marine Equipment', path: '/products/marine-equipment' },
    { name: 'Safety Systems', path: '/products/safety-systems' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <img src="/gic-logo.jpeg" alt="GIC Oil & Gas Services" className="h-16 w-auto" />
            <div className="hidden lg:block">
              <div className="text-slate-900 font-bold text-lg leading-tight">
                GIC Oil & Gas
              </div>
              <div className="text-red-600 text-xs uppercase tracking-wider font-semibold">
                Services Limited
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-red-600 font-semibold' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-red-600 font-semibold' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors py-2">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-56 bg-white border border-red-100 shadow-lg rounded-md overflow-hidden">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors py-2">
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {productsDropdownOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-56 bg-white border border-red-100 shadow-lg rounded-md overflow-hidden">
                    {products.map((product) => (
                      <Link
                        key={product.path}
                        to={product.path}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/projects"
              className={`text-sm font-medium transition-colors ${
                isActive('/projects') ? 'text-red-600 font-semibold' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Projects
            </Link>

            <Link
              to="/news"
              className={`text-sm font-medium transition-colors ${
                isActive('/news') ? 'text-red-600 font-semibold' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              News
            </Link>

            <Link to="/contact">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 font-semibold">
                Contact Us
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-red-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-red-100 bg-gray-50">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-900 font-medium hover:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="space-y-2">
                <div className="text-gray-900 font-medium">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block pl-4 text-gray-600 hover:text-red-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <div className="space-y-2">
                <div className="text-gray-900 font-medium">Products</div>
                {products.map((product) => (
                  <Link
                    key={product.path}
                    to={product.path}
                    className="block pl-4 text-gray-600 hover:text-red-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/projects"
                className="text-gray-900 font-medium hover:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>

              <Link
                to="/news"
                className="text-gray-900 font-medium hover:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </Link>

              <Link
                to="/about"
                className="text-gray-900 font-medium hover:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-red-600 hover:bg-red-700 text-white w-full font-semibold">
                  Contact Us
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
