import { useContext } from 'react';
import { PortfolioContext } from '../../Context/PortfolioContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';

import SplitFlapText from '../../components/SplitFlapText';
import ScrollReveal from '../../components/ScrollReveal';
import GradientText from '../../components/GradientText';

import './home.css';
// import axios from 'axios';

const Home = () => {
  // const { scrollToSection } = useContext(PortfolioContext);

  // const handleContactSubmit = async e => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const data = Object.fromEntries(formData.entries());

  //   try {
  //     const res = await axios.post('http://localhost:5000/api/contact', data);
  //     alert(
  //       res.data.method === 'mongodb'
  //         ? 'Message saved to database!'
  //         : 'Database offline: Message sent via Gmail!'
  //     );
  //     e.target.reset();
  //   } catch (err) {
  //     alert('Failed to send message.');
  //   }
  // };

  return (
    <main className="home-content">
      {/* HERO SECTION */}
      <section id="home" className="section hero">
        <div className="glass-hero-card">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="hero-text"
          >
            {/* <div className="badge glass-card">
              <img
                src="/icons8-video.gif"
                alt="Animated Icon"
                width="32"
                height="32"
              />{' '}
              Video Editor & Graphic Designer
            </div> */}

            {/* Split Flap Effect for Heading */}
            <div
              style={{
                margin: '20px 0',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <SplitFlapText
                words={[
                  'I AM JEFFIN',
                  'VIDEO EDITOR',
                  'UI/UX DESIGNER',
                  'WEB DEVELOPER',
                ]}
                flipDuration={0.1}
                stagger={0.05}
                cycleDelay={1500}
                charset="alphanumeric"
                tileColor="#151021"
                textColor="#f3f2f7"
                tileRadius={8}
                gap={6}
                fontSize={72}
                loop
                padTo={14}
              />
            </div>
            {/* Replaced heading with GradientText */}
            {/* Animated Gradient Title */}
            {/* <div style={{ margin: '1.5rem 0' }}> */}
              <GradientText
                colors={['#5227FF', '#a900e8', '#e003ed']}
                animationSpeed={2}
                showBorder={false}
                className="hero-gradient-title"
              >
                <span
                  style={{
                    display: 'block',
                    fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                    lineHeight: 1.2,
                    fontWeight: 700,
                    textAlign: 'center',
                  }}
                >
                  I CREATE VISUALS
                  <br />
                  THAT MAKE PEOPLE
                  <br />
                  STOP.
                </span>
              </GradientText>
            {/* </div> */}
            {/* Scroll Reveal Effect for Subtitle Paragraph */}
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur={true}
              baseRotation={3}
              blurStrength={8}
              textClassName="hero-reveal-text"
            >
              I am a video editor, graphic designer, and full-stack web
              developer dedicated to shaping stories that stand out. By blending
              technical precision with artistic vision, I build immersive visual
              content and responsive web solutions. From concept to code and
              final cut, I turn creative ideas into memorable experiences that
              leave a lasting impression.
            </ScrollReveal>
            <div className="hero-buttons">
              <Link
                to="/all-works"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary glass-btn"
              >
                View My Work <ExternalLink size={16} />
              </Link>
              <a
                href="/cv.pdf"
                download="Jeffin_James_CV.pdf"
                className="btn-secondary glass-btn"
              >
                Download CV <Download size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
export default Home;
