import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { useProjects } from '@/hooks/useProjects';

const Projects = () => {
  const allProjects = useProjects();
  const projects = allProjects.slice(0, 4); // Show first 4 on homepage
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-gray-400 tracking-wide">Our Project</span>
          <h2 className="text-4xl lg:text-5xl font-light text-white mt-4 leading-tight">
            Explore our projects
            <br />
            in the real world
          </h2>
          <Link to="/projects" className="mt-8 inline-block">
            <button className="inline-flex items-center bg-white text-slate-900 px-5 py-2.5 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm">
              Show All
              <span className="ml-2 w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center">
                <ArrowUp className="w-3 h-3 text-white" />
              </span>
            </button>
          </Link>
        </div>

        {/* Projects Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`relative ${index % 3 === 0 ? 'md:row-span-1' : ''}`}
            >
              <div className={`rounded-2xl overflow-hidden ${index % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'} max-w-lg`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="mt-4 flex items-start gap-8">
                <span className="text-gray-500 text-sm">({String(project.id).padStart(2, '0')})</span>
                <div>
                  <h3 className="text-xl text-white font-light">{project.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
