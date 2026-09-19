// (Move the 'Icons' object block from your old home.jsx into this file here, then render the section)

// Tech Stack & Tool Icons (True-Color Glassmorphic SVGs)
const Icons = {
  Premiere: () => (
    <img
      width="40"
      height="40"
      src="https://img.icons8.com/color/48/adobe-premiere-pro--v1.png"
      alt="adobe-premiere-pro--v1"
    />
  ),
  FinalCutPro: () => (
    <img
      width="40"
      height="40"
      src="https://img.icons8.com/color/48/final-cut-pro-new.png"
      alt="final-cut-pro-new"
    />
  ),
  Davinchi: () => (
    <img
      width="40"
      height="40"
      src="https://img.icons8.com/color/48/davinci-resolve.png"
      alt="davinci-resolve"
    />
  ),
  Photoshop: () => (
    <img
      width="40"
      height="40"
      src="https://img.icons8.com/color/48/adobe-photoshop--v1.png"
      alt="adobe-photoshop--v1"
    />
  ),
  Illustrator: () => (
    <img
      width="40"
      height="40"
      src="https://img.icons8.com/color/48/adobe-illustrator--v1.png"
      alt="adobe-illustrator--v1"
    />
  ),
  Figma: () => (
    <img
      width="40"
      height="40"
      src="https://img.icons8.com/color/48/figma--v1.png"
      alt="figma--v1"
    />
  ),
  HTML5: () => (
    <img
      width="40"
      height="40"
      src="https://img.icons8.com/color/48/html-5--v1.png"
      alt="html-5--v1"
    />
  ),
  CSS3: () => (
    <img
      width="40"
      height="40"
      src="https://img.icons8.com/color/48/css3.png"
      alt="css3"
    />
  ),
  JavaScript: () => (
    <img
      width="40"
      height="40"
      src="https://img.icons8.com/color/48/javascript--v1.png"
      alt="javascript--v1"
    />
  ),
  Python: () => (
    <img
      width="40"
      height="40"
      src="https://img.icons8.com/color/48/python--v1.png"
      alt="python--v1"
    />
  ),
  React: () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/nolan/64/react-native.png"
      alt="react-native"
    />
  ),
  Bootstrap: () => (
    <img
      width="40"
      height="40"
      src="https://img.icons8.com/color-glass/48/bootstrap.png"
      alt="bootstrap"
    />
  ),
  Node: () => (
    <img
      width="40"
      height="40"
      src="https://img.icons8.com/color/48/nodejs.png"
      alt="nodejs"
    />
  ),
  Git: () => (
    <img
      width="40"
      height="40"
      src="https://img.icons8.com/color/48/git.png"
      alt="git"
    />
  ),
  MongoDB: () => (
    <img
      width="40"
      height="40"
      src="https://img.icons8.com/color/48/mongo-db.png"
      alt="mongo-db"
    />
  ),
};

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2>MY SKILLS & TOOLS</h2>
      <p
        style={{
          textAlign: 'center',
          color: 'var(--text-muted)',
          marginBottom: '40px',
        }}
      >
        Software and technologies I use to build visual graphics and code
        applications.
      </p>

      <div className="skills-container">
        {/* Tools I Work With */}
        <div>
          <h3 className="skills-category-title">Tools I Work With</h3>
          <div className="tools-grid">
            {[
              {
                name: 'Premiere Pro',
                desc: 'Video Editing',
                icon: <Icons.Premiere />,
              },
              {
                name: 'Final Cut Pro',
                desc: 'Video Editing',
                icon: <Icons.FinalCutPro />,
              },
              {
                name: 'Davinci Resolve',
                desc: 'Video Editing',
                icon: <Icons.Davinchi />,
              },
              {
                name: 'Photoshop',
                desc: 'Graphic Design',
                icon: <Icons.Photoshop />,
              },
              {
                name: 'Illustrator',
                desc: 'Vector Art',
                icon: <Icons.Illustrator />,
              },
              {
                name: 'Figma',
                desc: 'UI/UX Prototyping',
                icon: <Icons.Figma />,
              },
            ].map((tool, idx) => (
              <div key={idx} className="tool-card">
                <div className="tool-icon">{tool.icon}</div>
                <div className="tool-info">
                  <h4>{tool.name}</h4>
                  <p>{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Web Tech Stack */}
        <div>
          <h3
            className="skills-category-title"
            style={{ color: 'var(--accent-pink)' }}
          >
            Web Tech Stack
          </h3>
          <div className="tools-grid">
            {[
              { name: 'HTML5', desc: 'Frontend', icon: <Icons.HTML5 /> },
              { name: 'CSS3', desc: 'Styling', icon: <Icons.CSS3 /> },
              {
                name: 'JavaScript',
                desc: 'Programming',
                icon: <Icons.JavaScript />,
              },
              { name: 'Python', desc: 'Programming', icon: <Icons.Python /> },
              { name: 'React', desc: 'UI Library', icon: <Icons.React /> },
              {
                name: 'Bootstrap',
                desc: 'CSS Framework',
                icon: <Icons.Bootstrap />,
              },
              { name: 'NodeJs', desc: 'Backend', icon: <Icons.Node /> },
              { name: 'Git', desc: 'Version Control', icon: <Icons.Git /> },
              { name: 'MongoDB', desc: 'Database', icon: <Icons.MongoDB /> },
            ].map((tech, idx) => (
              <div key={idx} className="tool-card">
                <div className="tool-icon">{tech.icon}</div>
                <div className="tool-info">
                  <h4>{tech.name}</h4>
                  <p>{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
