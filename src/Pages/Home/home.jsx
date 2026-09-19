import { useContext } from 'react';
import { PortfolioContext } from '../../Context/PortfolioContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Download,
  ExternalLink,
  MonitorPlay,
  PenTool,
  Zap,
  Video,
  Layout,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import axios from 'axios';


const Home = () => {
  const { scrollToSection } = useContext(PortfolioContext);

  const handleContactSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await axios.post('http://localhost:5000/api/contact', data);
      alert(
        res.data.method === 'mongodb'
          ? 'Message saved to database!'
          : 'Database offline: Message sent via Gmail!'
      );
      e.target.reset();
    } catch (err) {
      alert('Failed to send message.');
    }
  };

  return (
    <main className="home-content">
      {/* HERO SECTION */}
      <section id="home" className="section hero">
        <div className="glass-hero-card">
      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hero-text"
        >
          <div className="badge glass-card">
            <img
              src="/icons8-video.gif"
              alt="Animated Icon"
              width="32"
              height="32"
            />{' '}
            Video Editor & Graphic Designer
          </div>
          <h1>
            I CREATE VISUALS
            <br />
            <span className="gradient-text">THAT MAKE PEOPLE</span>
            <br />
            <span className="gradient-text-pink">STOP.</span>
          </h1>
          <p>
            I'm Jeffin James. A video editor, graphic designer, and full-stack
            web developer turning creative ideas into striking visual
            experiences.
          </p>
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
        </motion.div></div>
      </section>

      {/* ABOUT ME SECTION (Terminal UI) */}

      {/* SKILLS SECTION */}


      {/* NEW: PROJECTS SECTION */}


      {/* SERVICES SECTION */}


      {/* CONTACT SECTION */}
 
    </main>
  );
};
export default Home;
