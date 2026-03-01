import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteImages } from '@/hooks/useSiteImage';

const ProductsSection = () => {
  const images = useSiteImages([
    'home-product-1', 'home-product-2', 'home-product-3', 'home-product-4',
    'home-product-5', 'home-product-6', 'home-product-7', 'home-product-8',
  ]);

  const products = [
    {
      id: '01',
      title: 'Pumps & Compressors',
      description: 'Industrial grade pumping systems',
      image: images['home-product-1'],
    },
    {
      id: '02',
      title: 'Storage Tanks',
      description: 'Industrial storage solutions',
      image: images['home-product-2'],
    },
    {
      id: '03',
      title: 'Instrumentation',
      description: 'Precision measurement devices',
      image: images['home-product-3'],
    },
    {
      id: '04',
      title: 'Safety Equipment',
      description: 'Industrial safety solutions',
      image: images['home-product-4'],
    },
    {
      id: '05',
      title: 'Marine Equipment',
      description: 'Offshore and marine solutions',
      image: images['home-product-5'],
    },
    {
      id: '06',
      title: 'Process Equipment',
      description: 'Industrial processing equipment for oil & gas',
      image: images['home-product-6'],
    },
    {
      id: '07',
      title: 'Control Systems',
      description: 'Advanced automation and controls',
      image: images['home-product-7'],
    },
    {
      id: '08',
      title: 'Pipeline Systems',
      description: 'High-quality pipeline infrastructure',
      image: images['home-product-8'],
    },
  ];
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex justify-between items-start mb-16">
          <span className="text-sm text-gray-500">Our Product</span>
          <h2 className="text-3xl lg:text-5xl font-light text-slate-900 text-right leading-tight max-w-2xl">
            We offer a range of
            <br />
            solutions to choose from.
          </h2>
        </div>

        {/* Continuous Scrolling Products */}
        <div className="relative overflow-hidden">
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes scroll {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(calc(-306px * ${products.length}));
              }
            }
            .animate-scroll {
              animation: scroll 30s linear infinite;
              display: flex;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}} />
          
          <div className="animate-scroll">
            {/* First set of products */}
            {products.map((product) => (
              <div key={`${product.id}-1`} className="group cursor-pointer flex-shrink-0 w-[300px] mx-3">
                <span className="text-sm text-gray-400 mb-4 block">{product.id}</span>
                <div className="bg-gray-100 rounded-3xl p-6 h-64 flex items-center justify-center mb-4 relative overflow-hidden group-hover:bg-gray-200 transition-colors">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <Link
                    to="/products"
                    className="absolute bottom-4 right-4 w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowRight className="w-4 h-4 text-white" />
                  </Link>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-1">{product.title}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
              </div>
            ))}
            {/* Duplicate set for continuous loop */}
            {products.map((product) => (
              <div key={`${product.id}-2`} className="group cursor-pointer flex-shrink-0 w-[300px] mx-3">
                <span className="text-sm text-gray-400 mb-4 block">{product.id}</span>
                <div className="bg-gray-100 rounded-3xl p-6 h-64 flex items-center justify-center mb-4 relative overflow-hidden group-hover:bg-gray-200 transition-colors">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <Link
                    to="/products"
                    className="absolute bottom-4 right-4 w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowRight className="w-4 h-4 text-white" />
                  </Link>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-1">{product.title}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
