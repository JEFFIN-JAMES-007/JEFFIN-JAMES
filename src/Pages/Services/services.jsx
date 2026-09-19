import React from 'react';
import './services.css';

const servicesData = [
  {
    id: '01',
    title: 'UI/UX & Figma Design',
    description:
      'Crafting clean, intuitive, and modern digital interfaces, design systems, and responsive interactive prototypes.',
    iconGif: '/icons8-figma.gif',
    tags: ['Figma', 'Prototyping', 'User Experience'],
    accent: '#6a35ff',
  },
  {
    id: '02',
    title: 'Video Editing & Post Production',
    description:
      'High-impact video editing, visual effects, dynamic motion graphics, and audio sync crafted for digital platforms.',
    iconGif: '/icons8-video.gif',
    tags: ['Motion Design', 'Color Grading', 'VFX'],
    accent: '#a855f7',
  },
  {
    id: '03',
    title: 'Graphic Design & Branding',
    description:
      'Building memorable brand identities, promotional banners, vector artwork, and high-conversion marketing assets.',
    iconGif: '/icons8-web-design.gif',
    tags: ['Branding', 'Vector Art', 'Photoshop'],
    accent: '#ff54a2',
  },
];

const Services = () => {
  return (
    <section id="services" className="section services-section">
      <div className="services-header">
        <span className="section-badge">WHAT I DO</span>
        <h2>Services & Expertise</h2>
        <p className="services-subtitle">
          Delivering high-quality visual solutions bridging creative design,
          media production, and interactive interfaces.
        </p>
      </div>

      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card glass-card">
            {/* Animated Ambient Neon Aura */}
            <div className="neon-glow-aura" />

            <div className="service-card-top">
              <div className="icon-glow-wrapper">
                <img
                  src={service.iconGif}
                  alt={service.title}
                  className="service-gif-icon"
                />
              </div>
              <span className="service-number">{service.id}</span>
            </div>

            <div className="service-card-body">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>

            <div className="service-card-tags">
              {service.tags.map((tag, idx) => (
                <span key={idx} className="service-tag">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;