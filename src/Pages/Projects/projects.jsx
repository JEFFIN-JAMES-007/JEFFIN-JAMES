import React, { useState, useEffect } from 'react';
import { ExternalLink, X } from 'lucide-react';
import './project.css';

const projectsData = [
  {
    id: 1,
    title: 'Blueberry Lemonade Poster',
    category: 'Graphic Design & Poster',
    img: 'Project Images/BLUEBERRY LEMONADE 🍋.jpg',
  },
  {
    id: 2,
    title: 'Luxury Pan Cake Landing page',
    category: 'UI/UX & Identity',
    img: 'Project Images/Pancakes Landing Page.jpg',
  },
  {
    id: 3,
    title: 'Skincare',
    category: 'Product Packaging',
    img: 'Project Images/Package.jpg',
  },
  {
    id: 4,
    title: 'Luxury Perfume',
    category: 'Brand Campaign',
    img: 'Project Images/Perfume.png',
  },
  {
    id: 5,
    title: 'Farah Parlour Brochure',
    category: 'Marketing Visuals',
    img: 'Project Images/Beauty parlour.jpg',
  },
  {
    id: 6,
    title: 'Yakuzha Edition',
    category: 'Digital Illustration',
    img: 'Project Images/Yakuzha.jpg',
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  // Lock background scroll when zoomed in & support ESC key to exit
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') setActiveProject(null);
    };

    if (activeProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject]);

  return (
    <section id="projects" className="section">
      <h2>FEATURED PROJECTS</h2>
      <p
        style={{
          textAlign: 'center',
          color: 'var(--text-muted)',
          marginBottom: '40px',
        }}
      >
        A showcase of creative graphics, video projects, and web builds.
      </p>

      <div className="projects-grid">
        {projectsData.map(project => (
          <div
            key={project.id}
            className="project-card glass-card"
            onClick={() => setActiveProject(project)}
          >
            <div className="img-wrapper">
              <img src={project.img} alt={project.title} />
              <div className="hover-overlay">
                <ExternalLink color="#fff" size={32} />
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CENTER ZOOM OVERLAY WITH BLURRED BACKGROUND */}
      {activeProject && (
        <div
          className="image-zoom-overlay active"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="zoomed-image-wrapper"
            onClick={() => setActiveProject(null)}
          >
            <img
              src={activeProject.img}
              alt={activeProject.title}
              className="zoomed-image"
            />
            <div className="zoomed-caption">
              <h3>{activeProject.title}</h3>
              <p>{activeProject.category}</p>
            </div>
            <button
              className="zoom-close-btn"
              onClick={e => {
                e.stopPropagation();
                setActiveProject(null);
              }}
              aria-label="Close zoomed view"
            >
              <X color="#fff" size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
