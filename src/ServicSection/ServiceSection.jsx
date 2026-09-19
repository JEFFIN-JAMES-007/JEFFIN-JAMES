import React from 'react';

const services = [
  {
    id: '01',
    title: 'UI/UX & Figma Design',
    description:
      'Crafting clean, intuitive, and modern digital interfaces, design systems, and responsive prototypes.',
    icon: '🎨',
    color: '#6366f1',
    glow: 'rgba(99, 102, 241, 0.4)',
    tags: ['Figma', 'Prototyping', 'User Research'],
  },
  {
    id: '02',
    title: 'Video Editing & Post Production',
    description:
      'High-impact video editing, visual effects, dynamic motion graphics, and audio sync for digital content.',
    icon: '🎬',
    color: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.4)',
    tags: ['Motion Design', 'Color Grading', 'VFX'],
  },
  {
    id: '03',
    title: 'Graphic Design & Branding',
    description:
      'Building memorable brand identities, promotional banners, vector artwork, and digital marketing assets.',
    icon: '✨',
    color: '#ec4899',
    glow: 'rgba(236, 72, 153, 0.4)',
    tags: ['Branding', 'Vector Art', 'Illustrator'],
  },
  {
    id: '04',
    title: 'Frontend Development & Web Design',
    description:
      'Creating responsive and interactive web applications with modern frameworks and best practices.',
    icon: '💻',
    color: '#3b82f6',
    glow: 'rgba(59, 130, 246, 0.4)',
    tags: ['Frontend Development', 'Web Design', 'React'],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{ padding: '85px 20px', maxWidth: '1200px', margin: '0 auto' }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div
          className="glass-icon-wrapper"
          style={{
            '--icon-color': '#6366f1',
            '--icon-glow': 'rgba(99,102,241,0.4)',
            marginBottom: '16px',
          }}
        >
          <span className="glass-icon-inner" style={{ fontSize: '20px' }}>
            🛠️
          </span>
        </div>
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            margin: '8px 0',
            letterSpacing: '-0.5px',
          }}
        >
          Services & Expertise
        </h2>
        <p
          style={{
            color: 'rgba(255, 255, 255, 0.6)',
            maxWidth: '600px',
            margin: '0 auto',
            fontSize: '1rem',
          }}
        >
          Delivering high-quality solutions bridging creative design, media
          production, and technical engineering.
        </p>
      </div>

      {/* Services Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        {services.map(service => (
          <div
            key={service.id}
            className="terminal-card"
            style={{
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.3s ease, border-color 0.3s ease',
            }}
          >
            <div>
              {/* Card Header with Icon & Index */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px',
                }}
              >
                <div
                  className="glass-icon-wrapper"
                  style={{
                    '--icon-color': service.color,
                    '--icon-glow': service.glow,
                  }}
                >
                  <span
                    className="glass-icon-inner"
                    style={{ fontSize: '22px' }}
                  >
                    {service.icon}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '0.9rem',
                    color: 'rgba(255, 255, 255, 0.35)',
                    fontWeight: 'bold',
                  }}
                >
                  {service.id}
                </span>
              </div>

              {/* Service Title & Description */}
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '12px',
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: '0.925rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.6',
                }}
              >
                {service.description}
              </p>
            </div>

            {/* Tags Footer */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginTop: '24px',
                paddingTop: '16px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {service.tags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.75rem',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontFamily: 'monospace',
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
