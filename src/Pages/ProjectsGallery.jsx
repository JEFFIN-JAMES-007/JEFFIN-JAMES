import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// Project Data matching your reference
const projects = [
  { id: 1, title: "Merry Christmas Poster", category: "Graphic Design & Poster", img: "/projects/project-1.jpg" },
  { id: 2, title: "Luxury Hotel Branding", category: "UI/UX & Identity", img: "/projects/project-2.jpg" },
  { id: 3, title: "Hathor Perfume", category: "Product Packaging", img: "/projects/project-3.jpg" },
  { id: 4, title: "Style Fashion Poster", category: "Brand Campaign", img: "/projects/project-4.jpg" },
  { id: 5, title: "Farah Parlour Brochure", category: "Marketing Visuals", img: "/projects/project-5.jpg" },
  { id: 6, title: "Onam Festival Edition", category: "Digital Illustration", img: "/projects/project-6.jpg" },
];

const ParallaxCard = ({ project, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Create the parallax speed difference based on whether the index is even or odd
  const y = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 100 : -100, index % 2 === 0 ? -100 : 100]);

  return (
    <motion.div ref={ref} style={{ y }} className="parallax-card glass-card">
      <img src={project.img} alt={project.title} className="parallax-img" />
      <div className="parallax-info">
        <h3>{project.title}</h3>
        <p>{project.category}</p>
        <button className="btn-secondary glass-btn" style={{marginTop: '15px'}}>
          View Project <ExternalLink size={14}/>
        </button>
      </div>
    </motion.div>
  );
};

const ProjectsGallery = () => {
  return (
    <div className="gallery-page">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="gallery-header"
      >
        <h1>My Creative <span className="gradient-text">Gallery</span></h1>
        <p>A deep dive into visual storytelling and digital craftsmanship.</p>
      </motion.div>

      <div className="parallax-grid">
        {projects.map((project, index) => (
          <ParallaxCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsGallery;