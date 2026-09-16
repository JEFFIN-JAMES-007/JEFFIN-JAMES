import React, { useState, useEffect } from 'react';
import { ParallaxProvider, useParallax } from 'react-scroll-parallax';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import Ballpit from './components/Ballpit'; // Import Ballpit component

import {
  ExternalLink,
  Download,
  Send,
  Menu,
  X,
  Sparkles,
  Terminal,
} from 'lucide-react';

// Import portfolio images (update paths as needed for your setup)
import merryChristmasImg from './assets/Images/Santa-Strangerthings.png';
import LuxuaryHotelImg from './assets/Images/Travel.png';
import HathorPerfumeImg from './assets/Images/Hathor final.png';
import StyleFashionImg from './assets/Images/Fashion Poster Blue.png';
import FarahImg from './assets/Images/Dubai Parlour.png';
import OnamImg from './assets/Images/Onam 2025.png';
import profileImg from './assets/jeffin-profile.jpg';

import ServicesSection from './ServicSection/ServiceSection.jsx';
import './App.css';

/* ==========================================================================
   GLASSMORPHISM TRUE-COLOR SOFTWARE & SOCIAL ICONS
   ========================================================================== */
const GlassIcon = ({
  children,
  color = '#6366f1',
  glowColor = 'rgba(99, 102, 241, 0.4)',
}) => (
  <div
    className="glass-icon-wrapper"
    style={{
      '--icon-color': color,
      '--icon-glow': glowColor,
    }}
  >
    <div className="glass-icon-inner">{children}</div>
  </div>
);

// Tech Stack & Tool Icons (True-Color Glassmorphic SVGs)
const Icons = {
  Premiere: () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/color/48/adobe-premiere-pro--v1.png"
      alt="adobe-premiere-pro--v1"
    />
  ),
  FinalCutPro: () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/color/48/final-cut-pro-new.png"
      alt="final-cut-pro-new"
    />
  ),
  Davinchi: () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/color/48/davinci-resolve.png"
      alt="davinci-resolve"
    />
  ),
  Photoshop: () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/color/48/adobe-photoshop--v1.png"
      alt="adobe-photoshop--v1"
    />
  ),
  Illustrator: () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/color/48/adobe-illustrator--v1.png"
      alt="adobe-illustrator--v1"
    />
  ),
  Figma: () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/color/48/figma--v1.png"
      alt="figma--v1"
    />
  ),
  HTML5: () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/color/48/html-5--v1.png"
      alt="html-5--v1"
    />
  ),
  CSS3: () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/color/48/css3.png"
      alt="css3"
    />
  ),
  JavaScript: () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/color/48/javascript--v1.png"
      alt="javascript--v1"
    />
  ),
  Python: () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/color/48/python--v1.png"
      alt="python--v1"
    />
  ),
  React: () => (
    <img
      width="64"
      height="64"
      src="https://img.icons8.com/nolan/64/react-native.png"
      alt="react-native"
    />
  ),

  Bootstrap: () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/color-glass/48/bootstrap.png"
      alt="bootstrap"
    />
  ),
  Node: () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/color/48/nodejs.png"
      alt="nodejs"
    />
  ),
  Git: () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/color/48/git.png"
      alt="git"
    />
  ),
  MongoDB: () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/color/48/mongo-db.png"
      alt="mongo-db"
    />
  ),
  Instagram: () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/fluency/48/instagram-new.png"
      alt="instagram-new"
    />
  ),
  Facebook: () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/fluency/48/facebook-new.png"
      alt="facebook-new"
    />
  ),
  WhatsApp: () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/color/48/whatsapp--v1.png"
      alt="whatsapp--v1"
    />
  ),
  Behance: () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/color/48/behance.png"
      alt="behance"
    />
  ),
  LinkedIn: () => (
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/fluency/48/linkedin.png"
      alt="linkedin"
    />
  ),
};

/* ==========================================================================
   INDIVIDUAL PARALLAX PROJECT CARD COMPONENT (npm parallax-controller)
   ========================================================================== */
function ParallaxProjectCard({ item, index }) {
  // Configured parallax controller with scale + easeInQuad
  const parallax = useParallax({
    scale: [0.85, 1.05],
    easing: 'easeInQuad',
  });

  return (
    <div
      ref={parallax.ref}
      className="group relative rounded-2xl overflow-hidden bg-slate-900/80 border border-white/10 shadow-2xl transition-all duration-300 hover:border-purple-500/50"
    >
      {/* =========================================================
          IMAGE LOCATION: Add or swap project card images here!
          Src attribute uses imports defined at top of file.
         ========================================================= */}
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 flex flex-col justify-end">
        <h3 className="text-xl font-bold text-white">{item.title}</h3>
        <p className="text-xs text-indigo-400 font-medium mt-1">
          {item.category || 'Graphic Design & Visuals'}
        </p>
      </div>
    </div>
  );
}

/* ==========================================================================
   MAIN APP COMPONENT
   ========================================================================== */
export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [activePage, setActivePage] = useState('home'); // 'home' | 'work'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Form State for Contact API
  const [formData, setFormData] = useState({
    name: '',
    place: '',
    mobile: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  // 1. HERO PARALLAX HOOKS
  const { scrollY, scrollYProgress } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  // 2. EXPANDING / CONVERGING SCROLL ANIMATIONS FOR "MY WORK" PAGE
  const card1X = useTransform(scrollYProgress, [0, 0.4], [-140, 0]);
  const card1Y = useTransform(scrollYProgress, [0, 0.4], [-90, 0]);
  const card1Scale = useTransform(scrollYProgress, [0, 0.4], [0.75, 1]);

  const card2Scale = useTransform(scrollYProgress, [0, 0.4], [0.65, 1]);

  const card3X = useTransform(scrollYProgress, [0, 0.4], [140, 0]);
  const card3Y = useTransform(scrollYProgress, [0, 0.4], [-90, 0]);
  const card3Scale = useTransform(scrollYProgress, [0, 0.4], [0.75, 1]);

  const card4X = useTransform(scrollYProgress, [0.2, 0.7], [-140, 0]);
  const card4Y = useTransform(scrollYProgress, [0.2, 0.7], [90, 0]);

  const card5Scale = useTransform(scrollYProgress, [0.2, 0.7], [0.65, 1]);

  const card6X = useTransform(scrollYProgress, [0.2, 0.7], [140, 0]);
  const card6Y = useTransform(scrollYProgress, [0.2, 0.7], [90, 0]);

  const workFadeIn = useTransform(scrollYProgress, [0, 0.3], [0.2, 1]);
  const workTextOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  // Form submit handler connecting to backend
  const handleFormSubmit = async e => {
    e.preventDefault();
    setFormStatus('Sending...');
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        setFormStatus('Message Sent Successfully!');
        setFormData({
          name: '',
          place: '',
          mobile: '',
          email: '',
          message: '',
        });
      } else {
        setFormStatus('Failed to send message.');
      }
    } catch (err) {
      setFormStatus('Error sending message. Ensure backend server is running.');
    }
  };

  const navLinks = [
    'Home',
    'About',
    'Skills',
    'Projects',
    'Services',
    'Contact',
  ];

  const workProjects = [
    {
      title: 'Merry Christmas Poster',
      img: merryChristmasImg,
      x: card1X,
      y: card1Y,
      scale: card1Scale,
    },
    { title: 'Luxury Travel 2025', img: LuxuaryHotelImg, scale: card2Scale },
    {
      title: 'Hathor Perfume Brand',
      img: HathorPerfumeImg,
      x: card3X,
      y: card3Y,
      scale: card3Scale,
    },
    {
      title: 'Swag Style Campaign',
      img: StyleFashionImg,
      x: card4X,
      y: card4Y,
    },
    { title: 'Farah Beauty Parlour', img: FarahImg, scale: card5Scale },
    { title: 'Onam Festival Edition', img: OnamImg, x: card6X, y: card6Y },
  ];

  const featuredProjects = [
    {
      title: 'Merry Christmas Poster',
      img: merryChristmasImg,
      category: 'Graphic Design & Poster',
    },
    {
      title: 'Luxury Hotel Branding',
      img: LuxuaryHotelImg,
      category: 'UI/UX & Identity',
    },
    {
      title: 'Hathor Perfume',
      img: HathorPerfumeImg,
      category: 'Product Packaging',
    },
    {
      title: 'Style Fashion Poster',
      img: StyleFashionImg,
      category: 'Brand Campaign',
    },
    {
      title: 'Farah Parlour Brochure',
      img: FarahImg,
      category: 'Marketing Visuals',
    },
    {
      title: 'Onam Festival Edition',
      img: OnamImg,
      category: 'Digital Illustration',
    },
  ];

  return (
    <ParallaxProvider>
      {/* <div className="relative min-h-screen bg-[#0d0714] text-slate-100 font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden"> */}
      <div className="relative min-h-screen bg-[#0d0714] text-slate-100 font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
        {/* =========================================================
          FIXED FULLSCREEN BALLPIT BACKGROUND
         ========================================================= */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        >
          <Ballpit
            count={80}
            gravity={0.7}
            friction={0.8}
            wallBounce={0.95}
            followCursor={true}
          />
        </div>
        {/* 1. GLASSMORPHISM NAVBAR */}
        <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
          <nav className="relative flex items-center justify-between px-6 py-3 rounded-full bg-slate-950/40 backdrop-blur-md border border-white/10 shadow-2xl max-w-4xl w-full">
            <a
              href="#home"
              onClick={() => setActivePage('home')}
              className="text-lg font-bold tracking-wider text-white flex items-center gap-2"
            >
              <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-black">
                <img
                  src="/Jeffin.jpg"
                  alt="JJ"
                  className="w-full h-full rounded-full object-cover"
                />
              </span>
              JEFFIN JAMES
            </a>

            <div className="hidden md:flex items-center space-x-1 relative">
              {navLinks.map(tab => {
                const isActive = activeTab === tab && activePage === 'home';
                return (
                  <a
                    key={tab}
                    href={`#${tab.toLowerCase()}`}
                    onClick={() => {
                      setActiveTab(tab);
                      setActivePage('home');
                    }}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-lg border border-white/15"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{tab}</span>
                  </a>
                );
              })}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:inline-flex px-4 py-2 text-xs font-semibold rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 transition-all border border-indigo-400/30"
            >
              Hire me
            </motion.a>

            <button
              className="md:hidden text-slate-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </header>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-x-4 top-20 z-40 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:hidden space-y-4"
            >
              {navLinks.map(tab => (
                <a
                  key={tab}
                  href={`#${tab.toLowerCase()}`}
                  onClick={() => {
                    setActiveTab(tab);
                    setActivePage('home');
                    setMobileMenuOpen(false);
                  }}
                  className="block text-slate-300 hover:text-white font-medium text-lg py-1"
                >
                  {tab}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* PAGE SWITCHER */}
        {activePage === 'home' ? (
          <main className="pt-28">
            {/* HERO SECTION WITH PARALLAX */}
            <section
              id="home"
              className="relative min-h-[85vh] flex items-center justify-center px-4 overflow-hidden"
            >
              <motion.div
                style={{ y: heroY, opacity: heroOpacity }}
                className="text-center max-w-4xl space-y-6 relative z-10"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium">
                  <Sparkles size={14} /> Video Editor & Graphic Designer
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                  I CREATE VISUALS <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                    THAT MAKE PEOPLE STOP.
                  </span>
                </h1>

                <p className="text-slate-400 text-base sm:text-xl max-w-2xl mx-auto">
                  I'm Jeffin James. A video editor, graphic designer, and
                  full-stack web developer turning creative ideas into striking
                  visual experiences.
                </p>

                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0px 0px 20px rgba(99, 102, 241, 0.4)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setActivePage('work');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-6 py-3.5 rounded-full bg-indigo-600 text-white font-semibold flex items-center gap-2 border border-indigo-400/30 shadow-lg shadow-indigo-600/30 transition-all"
                  >
                    View My Work <ExternalLink size={18} />
                  </motion.button>

                  <motion.a
                    href="/JEFFIN JAMES.pdf"
                    download="Jeffin_James.pdf"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold flex items-center gap-2 border border-white/10 transition-all"
                  >
                    Download CV <Download size={18} />
                  </motion.a>
                </div>
              </motion.div>
            </section>

            {/* ABOUT SECTION WITH PERFECTLY ALIGNED RESPONSIVE TERMINAL CARD */}
            <section
              id="about"
              className="py-20 px-4 max-w-6xl mx-auto border-t border-slate-800/80"
            >
              <div className="text-center space-y-2 mb-12">
                <h2 className="text-3xl font-bold text-white">
                  Learn More About Me
                </h2>
                <p className="text-slate-400">
                  Creative designer and developer behind the screen.
                </p>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                {/* Profile Image Column */}
                <div className="lg:col-span-5 relative group flex flex-col justify-center">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
                  {/* =========================================================
                      IMAGE LOCATION: Profile Image
                     ========================================================= */}
                  <img
                    src={profileImg}
                    alt="Jeffin James Profile"
                    className="relative rounded-2xl w-full h-[380px] lg:h-full object-cover bg-slate-800 border border-white/10"
                  />
                </div>

                {/* Terminal Card Column (React & Fully Responsive Alignment) */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div className="terminal-card bg-slate-950/90 rounded-2xl border border-indigo-500/30 shadow-2xl overflow-hidden h-full flex flex-col justify-between font-mono">
                    {/* Terminal Header Bar */}
                    <div className="terminal-header bg-slate-900/80 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                        <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                      </div>
                      <div className="text-xs text-slate-400 font-medium flex items-center gap-1">
                        <Terminal size={14} className="text-indigo-400" />
                        <span>jeffin@developer:~</span>
                      </div>
                      <div className="w-12"></div>
                    </div>

                    {/* Terminal Code Body */}
                    <div className="terminal-body p-5 sm:p-6 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto">
                      <div>
                        <span className="text-emerald-400">
                          jeffin@portfolio
                        </span>
                        <span className="text-slate-500">:</span>
                        <span className="text-indigo-400">~/about</span>
                        <span className="text-slate-500">$ </span>
                        <span className="text-white font-semibold">
                          cat bio.json
                        </span>
                      </div>

                      <div className="pl-2 border-l-2 border-indigo-500/30 space-y-1">
                        <p className="text-purple-300">{'{'}</p>
                        <p className="pl-4">
                          <span className="text-indigo-300">"name"</span>:{' '}
                          <span className="text-emerald-300">
                            "Jeffin James"
                          </span>
                          ,
                        </p>
                        <p className="pl-4">
                          <span className="text-indigo-300">"roles"</span>: [
                          <span className="text-amber-300">"Video Editor"</span>
                          ,
                          <span className="text-amber-300">
                            {' '}
                            "Graphic Designer"
                          </span>
                          ,
                          <span className="text-amber-300">
                            {' '}
                            "Full-Stack Dev"
                          </span>
                          ],
                        </p>
                        <p className="pl-4">
                          <span className="text-indigo-300">"focus"</span>:{' '}
                          <span className="text-emerald-300">
                            "Visual Storytelling & Modern Web Prototyping"
                          </span>
                          ,
                        </p>
                        <p className="pl-4">
                          <span className="text-indigo-300">"mission"</span>:{' '}
                          <span className="text-emerald-300">
                            "Crafting immersive visual experiences that leave
                            lasting brand impressions."
                          </span>
                        </p>
                        <p className="text-purple-300">{'}'}</p>
                      </div>

                      <div>
                        <span className="text-emerald-400">
                          jeffin@portfolio
                        </span>
                        <span className="text-slate-500">:</span>
                        <span className="text-indigo-400">~/about</span>
                        <span className="text-slate-500">$ </span>
                        <span className="text-white">echo $SUMMARY</span>
                        <p className="mt-1 text-slate-400 font-sans leading-relaxed">
                          With a deep passion for editing, UI design, and
                          creative storytelling, I help brands and individuals
                          transform ideas into powerful visuals that captivate
                          and perform.
                        </p>
                      </div>

                      <div className="flex items-center gap-1 text-emerald-400 pt-1">
                        <span>jeffin@portfolio:~/about$ </span>
                        <span className="animate-pulse font-bold">_</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SKILLS & TOOLS SECTION WITH TRUE-COLOR GLASSMORPHISM ICONS */}
            <section
              id="skills"
              className="py-20 bg-slate-950/40 border-t border-slate-800/80"
            >
              <div className="max-w-5xl mx-auto px-4 space-y-12">
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-bold text-white">
                    MY SKILLS & TOOLS
                  </h2>
                  <p className="text-slate-400">
                    Software and technologies I use to build visual graphics and
                    code applications.
                  </p>
                </div>

                {/* Tools I Work With */}
                <div className="space-y-6">
                  <h3 className="text-sm font-semibold tracking-wider text-indigo-400 uppercase">
                    Tools I Work With
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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
                      <motion.div
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 flex items-center gap-3 backdrop-blur-md"
                      >
                        <div className="flex-shrink-0">{tool.icon}</div>
                        <div>
                          <div className="font-semibold text-white text-sm">
                            {tool.name}
                          </div>
                          <div className="text-xs text-slate-500">
                            {tool.desc}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Web Tech Stack */}
                <div className="space-y-6">
                  <h3 className="text-sm font-semibold tracking-wider text-purple-400 uppercase">
                    Web Tech Stack
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { name: 'HTML5', icon: <Icons.HTML5 /> },
                      { name: 'CSS3', icon: <Icons.CSS3 /> },
                      { name: 'JavaScript', icon: <Icons.JavaScript /> },
                      { name: 'Python', icon: <Icons.Python /> },
                      { name: 'React', icon: <Icons.React /> },
                      { name: 'Bootstrap', icon: <Icons.Bootstrap /> },
                      { name: 'NodeJs', icon: <Icons.Node /> },
                      { name: 'Git', icon: <Icons.Git /> },
                      { name: 'MongoDB', icon: <Icons.MongoDB /> },
                    ].map((tech, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.03 }}
                        className="p-3 flex items-center gap-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 font-medium text-sm backdrop-blur-md"
                      >
                        <div className="flex-shrink-0">{tech.icon}</div>
                        <span>{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* NEW PROJECTS SECTION WITH PARALLAX EFFECT & EASE-IN SCALING */}
            <section
              id="projects"
              className="py-20 px-4 max-w-6xl mx-auto border-t border-slate-800/80"
            >
              <div className="text-center space-y-2 mb-12">
                <h2 className="text-3xl font-bold text-white">
                  FEATURED PROJECTS
                </h2>
                <p className="text-slate-400">
                  A showcase of creative graphics, video projects, and web
                  builds.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map((item, index) => (
                  <ParallaxProjectCard key={index} item={item} index={index} />
                ))}
              </div>
            </section>
            {/* SERVICES SECTION */}
            <ServicesSection />

            {/* CONTACT SECTION */}
            <section
              id="contact"
              className="py-20 px-4 max-w-3xl mx-auto border-t border-slate-800/80"
            >
              <div className="text-center space-y-3 mb-10">
                <h2 className="text-3xl font-bold text-white">
                  Connect With Me
                </h2>
                <p className="text-slate-400">
                  Send me a message for work inquiries or creative projects.
                </p>
              </div>

              <form
                onSubmit={handleFormSubmit}
                className="space-y-4 bg-slate-900/50 p-6 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Jeffin James"
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-white focus:outline-none focus:border-indigo-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">
                      Place / Location
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.place}
                      onChange={e =>
                        setFormData({ ...formData, place: e.target.value })
                      }
                      placeholder="Kerala, India"
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-white focus:outline-none focus:border-indigo-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={e =>
                        setFormData({ ...formData, mobile: e.target.value })
                      }
                      placeholder="+91 9876543210"
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-white focus:outline-none focus:border-indigo-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">
                      Email ID
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="jeffin@example.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-white focus:outline-none focus:border-indigo-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={e =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-white focus:outline-none focus:border-indigo-500 text-sm"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all text-sm"
                >
                  Submit Message <Send size={16} />
                </motion.button>

                {formStatus && (
                  <p className="text-center text-xs text-indigo-400 pt-2 font-medium">
                    {formStatus}
                  </p>
                )}
              </form>
            </section>
          </main>
        ) : (
          /* WORK PAGE WITH EXPANDING/CONVERGING SCROLL ANIMATION */
          <main className="relative min-h-[200vh] pt-28 pb-20 px-4">
            <div className="sticky top-24 max-w-6xl mx-auto flex flex-col justify-center min-h-[80vh]">
              <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
                <div>
                  <h1 className="text-3xl font-bold text-white">
                    My Creative Portfolio Work
                  </h1>
                  <p className="text-slate-400 text-xs mt-1">
                    Scroll down to expand work • Scroll up to converge
                  </p>
                </div>
                <button
                  onClick={() => setActivePage('home')}
                  className="px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-all border border-white/10"
                >
                  ← Back to Home
                </button>
              </div>

              {/* EXPANDING / CONVERGING SCROLL GRID */}
              <motion.div
                style={{ opacity: workFadeIn }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              >
                {workProjects.map((item, index) => (
                  <motion.div
                    key={index}
                    style={{
                      x: item.x || 0,
                      y: item.y || 0,
                      scale: item.scale || 1,
                    }}
                    className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl"
                  >
                    {/* =========================================================
                        IMAGE LOCATION: Work Page Portfolio Images
                       ========================================================= */}
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <motion.div
                      style={{ opacity: workTextOpacity }}
                      className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 flex flex-col justify-end"
                    >
                      <h3 className="text-lg font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-indigo-400 font-medium mt-1">
                        Graphic Design & Visuals
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </main>
        )}

        {/* FOOTER WITH TRUE-COLOR GLASSMORPHISM SOCIAL ICONS */}
        <footer className="border-t border-slate-800/80 bg-slate-950/60 py-8 px-4">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Jeffin James. All Rights Reserved.
            </p>

            <div className="flex items-center space-x-3">
              {[
                {
                  icon: <Icons.Instagram />,
                  href: 'https://www.instagram.com/jeffinjamesdesigner',
                },
                { icon: <Icons.Facebook />, href: 'https://facebook.com' },
                { icon: <Icons.WhatsApp />, href: 'https://wa.me/8086575494' },
                {
                  icon: <Icons.Behance />,
                  href: 'https://www.behance.net/jeffinjames',
                },
                {
                  icon: <Icons.LinkedIn />,
                  href: 'https://www.linkedin.com/in/jeffin-james',
                },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="inline-block"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </ParallaxProvider>
  );
}
