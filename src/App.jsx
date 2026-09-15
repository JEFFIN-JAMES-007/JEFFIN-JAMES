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
    <GlassIcon color="#ea77ff" glowColor="rgba(234, 119, 255, 0.35)">
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#ea77ff]">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5c0 .8-.4 1.5-1.1 1.8V16H7v-8h2.5c1.4 0 2 1 2 2.3v1.2zm7.5 4.5h-1.4v-1c-.3.7-1 1.1-1.8 1.1-1.3 0-2.3-1.1-2.3-2.6V11h1.4v2.3c0 .8.4 1.3 1.1 1.3s1.2-.5 1.2-1.3V11H17v5zm-8.6-4.7c0-.7-.3-1.1-1-1.1H7.2v2.2H7.4c.7 0 1-.3 1-.1.1v-1z" />
      </svg>
    </GlassIcon>
  ),
  Photoshop: () => (
    <GlassIcon color="#31a8ff" glowColor="rgba(49, 168, 255, 0.35)">
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#31a8ff]">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.8c0 1.5-1 2.2-2.5 2.2H5.5V8h2.9c1.6 0 2.6.9 2.6 2.3v1.5zm7.5 4.2h-1.4v-.9c-.4.6-1.1 1-1.9 1-1.2 0-2.1-.8-2.1-2.1 0-1.5 1.1-2.2 2.8-2.2h1.2v-.3c0-.6-.4-1-1.1-1-.6 0-1.1.3-1.2.8h-1.3c.1-1.2 1.2-1.9 2.6-1.9 1.5 0 2.4.8 2.4 2.1V16zM7.1 9.3H6.8v3.3h.3c.9 0 1.4-.4 1.4-1.3v-.8c0-.8-.5-1.2-1.4-1.2z" />
      </svg>
    </GlassIcon>
  ),
  Illustrator: () => (
    <GlassIcon color="#ff9a00" glowColor="rgba(255, 154, 0, 0.35)">
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#ff9a00]">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7.6 13h-1.5l-.5-1.8H6.6L6.1 16H4.7l2.8-8h1.7l2.2 8zm5.6 0h-1.4v-5.6h1.4V16zm0-6.8h-1.4V7.8h1.4v1.4zM8.3 10.1L7.3 13h1.9l-.9-2.9z" />
      </svg>
    </GlassIcon>
  ),
  Figma: () => (
    <GlassIcon color="#a259ff" glowColor="rgba(162, 89, 255, 0.35)">
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#a259ff]">
        <path d="M12 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm0-6c0-1.66-1.34-3-3-3S6 4.34 6 6s1.34 3 3 3 3-1.34 3-3zm0 12c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3zm6-6c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm0-6c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3z" />
      </svg>
    </GlassIcon>
  ),
  HTML5: () => (
    <GlassIcon color="#e34f26" glowColor="rgba(227, 79, 38, 0.35)">
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#e34f26]">
        <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.236-2.679H5.414l.691 8.077h8.877l-.372 4.148-2.639.714-2.643-.718-.17-1.906H6.521l.338 4.229 5.11 1.41 5.119-1.41.688-7.668H8.531z" />
      </svg>
    </GlassIcon>
  ),
  CSS3: () => (
    <GlassIcon color="#1572b6" glowColor="rgba(21, 114, 182, 0.35)">
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#1572b6]">
        <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm14.195 11.125l.396-4.406H5.451l.235 2.679h7.458l-.232 2.613-2.942.793-2.946-.793-.187-2.083H4.152l.375 4.672 5.443 1.512 5.443-1.512.723-8.093H15.695z" />
      </svg>
    </GlassIcon>
  ),
  JavaScript: () => (
    <GlassIcon color="#f7df1e" glowColor="rgba(247, 223, 30, 0.35)">
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#f7df1e]">
        <path d="M3 3h18v18H3V3zm11.525 14.34c.78 0 1.248-.37 1.642-.907.312-.424.437-.733.437-1.393v-3.793h1.724v3.896c0 1.157-.354 2.05-1.03 2.656-.782.704-1.872.936-3.03.936-1.488 0-2.585-.562-3.093-1.616l1.247-.732c.28.53.766.853 1.38.853zm-5.717-.238c.453.764 1.2 1.182 2.19 1.182 1.14 0 1.848-.562 1.848-1.42 0-.853-.515-1.233-1.577-1.693l-.547-.238c-1.563-.674-2.28-1.393-2.28-2.656 0-1.513 1.216-2.628 3.013-2.628 1.344 0 2.25.48 2.828 1.482l-1.2.764c-.36-.617-.852-.882-1.56-.882-.765 0-1.294.437-1.294 1.05 0 .647.39 1.01 1.36 1.428l.547.238c1.828.793 2.53 1.482 2.53 2.828 0 1.77-1.376 2.8-3.328 2.8-1.72 0-2.812-.662-3.39-1.838l1.25-.718z" />
      </svg>
    </GlassIcon>
  ),
  React: () => (
    <GlassIcon color="#61dafb" glowColor="rgba(97, 218, 251, 0.35)">
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#61dafb]">
        <path d="M12 9a3 3 0 100 6 3 3 0 000-6zm0-4.5c-4.97 0-9 1.79-9 4s4.03 4 9 4 9-1.79 9-4-4.03-4-9-4zm0 11c-4.97 0-9 1.79-9 4s4.03 4 9 4 9-1.79 9-4-4.03-4-9-4z" />
      </svg>
    </GlassIcon>
  ),
  Sass: () => (
    <GlassIcon color="#cc6699" glowColor="rgba(204, 102, 153, 0.35)">
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#cc6699]">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
      </svg>
    </GlassIcon>
  ),
  Bootstrap: () => (
    <GlassIcon color="#7952b3" glowColor="rgba(121, 82, 179, 0.35)">
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#7952b3]">
        <path d="M18.8 4H5.2C4.5 4 4 4.5 4 5.2v13.6c0 .7.5 1.2 1.2 1.2h13.6c.7 0 1.2-.5 1.2-1.2V5.2c0-.7-.5-1.2-1.2-1.2zM13.5 15.5c-1.2 0-2.1-.6-2.5-1.5v1.3H9V8.5h2v1.3c.4-.9 1.3-1.5 2.5-1.5 1.9 0 3.2 1.5 3.2 3.6s-1.3 3.6-3.2 3.6z" />
      </svg>
    </GlassIcon>
  ),
  Git: () => (
    <GlassIcon color="#f05032" glowColor="rgba(240, 80, 50, 0.35)">
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#f05032]">
        <path d="M21.5 11.5l-9-9c-.4-.4-1-.4-1.4 0l-1.8 1.8 2.3 2.3c.4-.1.9 0 1.2.3.5.5.5 1.3 0 1.8-.4.4-1.1.5-1.6.2l-2.2 2.2v2.8c.3.2.5.5.5.9 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.6.4-1.1.9-1.4V9.6c-.5-.3-.9-.8-.9-1.4 0-.6.3-1.1.8-1.4L5.3 4.5l-2.8 2.8c-.4.4-.4 1 0 1.4l9 9c.4.4 1 .4 1.4 0l8.6-8.6c.4-.4.4-1 0-1.4z" />
      </svg>
    </GlassIcon>
  ),
  MongoDB: () => (
    <GlassIcon color="#47a248" glowColor="rgba(71, 162, 72, 0.35)">
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#47a248]">
        <path d="M12 1.5c-1 4.5-5 8-5 12 0 3.3 2.2 6 5 6.5 2.8-.5 5-3.2 5-6.5 0-4-4-7.5-5-12zm0 16.5c-1.7 0-3-1.8-3-4 0-2.5 2-5.2 3-7.5 1 2.3 3 5 3 7.5 0 2.2-1.3 4-3 4z" />
      </svg>
    </GlassIcon>
  ),
  Instagram: () => (
    <GlassIcon color="#e1306c" glowColor="rgba(225, 48, 108, 0.35)">
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[#e1306c]">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    </GlassIcon>
  ),
  Facebook: () => (
    <GlassIcon color="#1877f2" glowColor="rgba(24, 119, 242, 0.35)">
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[#1877f2]">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    </GlassIcon>
  ),
  WhatsApp: () => (
    <GlassIcon color="#25d366" glowColor="rgba(37, 211, 102, 0.35)">
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[#25d366]">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
      </svg>
    </GlassIcon>
  ),
  Behance: () => (
    <GlassIcon color="#1769ff" glowColor="rgba(23, 105, 255, 0.35)">
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[#1769ff]">
        <path d="M22 7h-7V5h7v2zm-1.708 6.113c.086.533.094.9.016 1.484-.258 1.9-1.789 3.003-3.808 3.003-2.617 0-4.3-1.812-4.3-4.39 0-2.483 1.702-4.412 4.195-4.412 2.41 0 3.844 1.625 3.844 4.09 0 .285-.023.633-.047.883l-5.906.002c.078.969.836 1.703 2.11 1.703.883 0 1.523-.398 1.766-1.125l2.13.762zm-3.836-3.141c-.82 0-1.445.539-1.602 1.344h3.18c-.063-.82-.695-1.344-1.578-1.344zM3 17h4.898c2.406 0 3.906-1.07 3.906-2.734 0-1.102-.625-1.922-1.688-2.281.828-.352 1.352-1.031 1.352-2.023 0-1.508-1.258-2.461-3.328-2.461H3V17zm2.438-7.852h1.969c.805 0 1.281.383 1.281.977 0 .617-.477.992-1.305.992H5.438V9.148zm0 5.437v-2.11h2.219c.922 0 1.453.43 1.453 1.055 0 .641-.531 1.055-1.484 1.055H5.438z" />
      </svg>
    </GlassIcon>
  ),
  LinkedIn: () => (
    <GlassIcon color="#0077b5" glowColor="rgba(0, 119, 181, 0.35)">
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[#0077b5]">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    </GlassIcon>
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
                      { name: 'Sass', icon: <Icons.Sass /> },
                      { name: 'JavaScript', icon: <Icons.JavaScript /> },
                      { name: 'React', icon: <Icons.React /> },
                      { name: 'Bootstrap', icon: <Icons.Bootstrap /> },
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
