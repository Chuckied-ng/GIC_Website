import { useState, useMemo } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ArrowRight, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProjects } from '@/hooks/useProjects';

const Projects = () => {
  const projects = useProjects();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = new Set(projects.map((p) => p.category));
    return ['All', ...Array.from(cats)];
  }, [projects]);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-start">
            <div className="max-w-2xl">
              <span className="text-sm text-gray-500 tracking-wide">Project Portfolio</span>
              <h1 className="text-5xl lg:text-6xl font-light text-slate-900 mt-4 leading-tight">
                Proven Project
                <br />
                <span className="italic">Execution</span>
              </h1>
              <p className="text-gray-600 mt-6 leading-relaxed max-w-xl">
                Representative projects showcasing our technical capabilities and execution excellence 
                across diverse oil & gas infrastructure.
              </p>
            </div>
            <Link to="/contact">
              <button className="inline-flex items-center bg-slate-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-slate-800 transition-colors text-sm">
                Start Project
                <span className="ml-2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <ArrowUp className="w-3 h-3 text-white" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-y border-gray-200 sticky top-20 z-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-slate-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                {/* Image */}
                <div className="relative rounded-3xl overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <button className="absolute bottom-4 right-4 w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* Content */}
                <div className="flex items-start gap-4">
                  <span className="text-sm text-gray-400">({String(project.id).padStart(2, '0')})</span>
                  <div>
                    <h3 className="text-xl font-medium text-slate-900 group-hover:text-slate-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">{project.location}</p>
                    <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                      {project.scope}
                    </p>
                    <div className="flex items-center gap-4 mt-4 text-sm">
                      <span className="text-gray-500">{project.year}</span>
                      <span className="text-slate-900 font-medium">{project.value}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 leading-tight">
              Discuss Your Project
              <br />
              <span className="italic">Requirements</span>
            </h2>
            <p className="text-gray-600 mt-6 mb-8 leading-relaxed">
              Our experienced project teams are ready to support your next oil & gas infrastructure development.
            </p>
            <Link to="/contact">
              <button className="inline-flex items-center bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-colors">
                Request Consultation
                <span className="ml-3 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
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

export default Projects;
