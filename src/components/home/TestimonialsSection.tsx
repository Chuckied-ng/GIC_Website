import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useSiteImages } from '@/hooks/useSiteImage';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = useSiteImages(['home-testimonial-1', 'home-testimonial-2', 'home-testimonial-3']);

  const testimonials = [
    {
      id: 1,
      name: 'John Adeyemi',
      role: 'CEO, PetroEnergy',
      quote: 'Their engineering platform delivered unmatched efficiency and reliability, making complex projects accessible and seamless. We\'ve never managed our operations so easily or felt so confident in our project outcomes.',
      image: images['home-testimonial-1'],
    },
    {
      id: 2,
      name: 'Sarah Okonkwo',
      role: 'Operations Director, OilMax',
      quote: 'GIC has transformed how we approach our EPCI projects. Their attention to detail and commitment to quality has made them an invaluable partner for our operations across West Africa.',
      image: images['home-testimonial-2'],
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Project Manager, GlobalOil',
      quote: 'Working with GIC has been exceptional. Their team\'s expertise in marine and offshore operations has helped us complete complex projects on time and within budget.',
      image: images['home-testimonial-3'],
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Navigation & Stats */}
        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:border-slate-900 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-slate-900" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
          <div className="flex items-center gap-8">
            <div className="px-4 py-2 border border-gray-300 rounded-full">
              <span className="text-sm text-slate-900 font-medium">5+ country client</span>
            </div>
            <div className="px-4 py-2 border border-gray-300 rounded-full">
              <span className="text-sm text-slate-900 font-medium">$20M+ in revenue</span>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-gray-500 tracking-wide">Testimonials</span>
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mt-4 leading-tight">
            Trusted by many,
            <br />
            loved by more
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="flex items-center justify-center gap-4">
          {/* Previous Arrow Button */}
          <button
            onClick={prevTestimonial}
            className="hidden lg:flex w-10 h-10 border border-gray-300 rounded-full items-center justify-center bg-white hover:bg-slate-900 hover:border-slate-900 hover:text-white transition-all animate-pulse hover:animate-none"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Side Image - Previous */}
          <div className="hidden lg:block w-20 h-80 rounded-2xl overflow-hidden opacity-30">
            <img
              src={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].image}
              alt=""
              className="w-full h-full object-cover grayscale"
            />
          </div>

          {/* Main Card */}
          <div className="flex items-center gap-8 max-w-4xl">
            <div className="w-80 h-96 rounded-3xl overflow-hidden flex-shrink-0">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-200 flex-1">
              <div className="mb-6">
                <h3 className="text-xl font-medium text-slate-900">{current.name}</h3>
                <p className="text-gray-500 text-sm">{current.role}</p>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {current.quote}
              </p>
            </div>
          </div>

          {/* Side Image - Next */}
          <div className="hidden lg:block w-20 h-80 rounded-2xl overflow-hidden opacity-30">
            <img
              src={testimonials[(currentIndex + 1) % testimonials.length].image}
              alt=""
              className="w-full h-full object-cover grayscale"
            />
          </div>

          {/* Next Arrow Button */}
          <button
            onClick={nextTestimonial}
            className="hidden lg:flex w-10 h-10 bg-slate-900 rounded-full items-center justify-center hover:bg-slate-700 transition-all animate-pulse hover:animate-none"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Scroll Bar Design */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="flex items-center gap-8">
            <div className="text-sm text-gray-600 font-medium min-w-fit">Scroll to explore</div>
            <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-slate-900 rounded-full" style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%`, transition: 'width 0.3s ease' }}></div>
            </div>
            <div className="text-sm text-gray-600 min-w-fit">{currentIndex + 1} of {testimonials.length}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
