import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { PortfolioContext } from '../Context/PortfolioContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { scrollToSection, setActiveSection } = useContext(PortfolioContext);
  const [localActiveSection, setLocalActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    'home',
    'about',
    'skills',
    'projects',
    'services',
    'contact',
  ];

  const activeSection = localActiveSection;

  const updateActiveSection = item => {
    setLocalActiveSection(item);
    if (setActiveSection) {
      setActiveSection(item);
    }
  };

  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const element = document.getElementById(item);
        if (element) {
          if (scrollPosition >= element.offsetTop) {
            updateActiveSection(item);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = item => {
    setIsOpen(false);
    updateActiveSection(item);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(item), 100);
    } else {
      scrollToSection(item);
    }
  };

  return (
    <nav className="glass-navbar">
      {/* Combined Left Brand Container */}
      <div className="nav-brand" onClick={() => handleNavClick('home')}>
        <img src="/Jeffin.jpg" alt="JEFFIN James" className="nav-avatar" />
        <span className="brand-title">JEFFIN JAMES</span>
      </div>

      {/* Desktop Navigation Links */}
      <div className="nav-links desktop-menu">
        {navItems.map(item => (
          <button
            key={item}
            className={`nav-item ${activeSection === item ? 'active' : ''}`}
            onClick={() => handleNavClick(item)}
          >
            {activeSection === item && (
              <motion.div
                layoutId="bubble"
                className="active-bubble"
                transition={{
                  type: 'spring',
                  stiffness: 450,
                  damping: 35,
                  mass: 0.5,
                }}
              />
            )}
            <span
              style={{
                position: 'relative',
                zIndex: 1,
                textTransform: 'capitalize',
              }}
            >
              {item}
            </span>
          </button>
        ))}
      </div>

      {/* Desktop Action Button */}
      <div className="desktop-menu">
        <Link to="/hire-me" className="btn-primary glass-btn">
          Hire me
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mobile-dropdown glass-card"
          >
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="mobile-nav-item"
              >
                <span style={{ textTransform: 'capitalize' }}>{item}</span>
              </button>
            ))}
            <Link
              to="/hire-me"
              onClick={() => setIsOpen(false)}
              className="btn-primary glass-btn mobile-hire-btn"
            >
              Hire me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
