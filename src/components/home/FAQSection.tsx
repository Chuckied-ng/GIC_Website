import { useState } from 'react';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    id: 1,
    question: 'What services does GIC offer?',
    answer: 'GIC provides comprehensive EPCI (Engineering, Procurement, Construction, and Installation) services including process engineering, project management, construction management, and marine & offshore operations for the oil and gas industry.',
  },
  {
    id: 2,
    question: 'What industries do you serve?',
    answer: 'We primarily serve the oil & gas industry, including upstream, midstream, and downstream operations. Our clients include major operators, EPCI contractors, and government entities across West Africa and international markets.',
  },
  {
    id: 3,
    question: 'How do you ensure project quality?',
    answer: 'We maintain ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications. Our quality management system ensures rigorous standards throughout all project phases.',
  },
  {
    id: 4,
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on scope and complexity. We work closely with clients to develop realistic schedules and employ proven project management methodologies to ensure on-time delivery.',
  },
];

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <span className="text-sm text-gray-500 tracking-wide">FAQ</span>
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mt-4 leading-tight">
              Your Questions,
              <br />
              Our Answers.
            </h2>
            <Link to="/contact" className="mt-8 inline-block">
              <button className="inline-flex items-center bg-slate-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-slate-800 transition-colors text-sm">
                Ask More
                <span className="ml-2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-3 h-3 text-white" />
                </span>
              </button>
            </Link>
          </div>

          {/* Right Column - Accordion */}
          <div className="border-t border-gray-200">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="border-b border-gray-200">
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                  className="w-full py-6 flex items-center justify-between text-left"
                >
                  <h3 className="text-xl font-light text-slate-900 pr-8">{faq.question}</h3>
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    {expandedIndex === index ? (
                      <Minus className="w-5 h-5 text-slate-900" />
                    ) : (
                      <Plus className="w-5 h-5 text-slate-900" />
                    )}
                  </div>
                </button>
                {expandedIndex === index && (
                  <div className="pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
