const About = () => {
  return (<section id="about" className="section">
        <h2>Learn More About Me</h2>
        <div className="about-container">
          <img src="/Jeff.jpg" alt="Profile" className="about-img glass-card" />
          <div className="terminal-card glass-card">
            <div className="terminal-header">
              <div className="dots">
                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>
              </div>
              <span>Jeffin@developer:~</span>
            </div>
            <div className="terminal-body">
              <p className="command">Jeffin@portfolio:~/about$ cat bio.json</p>
              <pre>
                {`{
  "name": "Jeffin James",
  "roles": ["Video Editor", "Graphic Designer", "Full Stack Dev"],
  "focus": "Visual Storytelling & Modern Web Prototyping",
  "mission": "Crafting immersive visual experiences that leave lasting brand impressions."
}`}
              </pre>
              <p className="command">Jeffin@portfolio:~/about$ echo $SUMMARY</p>
              <p>
                With a deep passion for editing, UI design, and creative
                storytelling, I help brands and individuals transform ideas into
                powerful visuals that captivate and perform.
              </p>
            </div>
          </div>
        </div>
      </section>);
};
export default About;