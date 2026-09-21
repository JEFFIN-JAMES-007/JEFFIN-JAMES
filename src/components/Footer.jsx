import { useState, useEffect } from 'react';
import SplitFlapText from '../components/SplitFlapText';
import './Footer.css';

const Footer = () => {
  const [timeString, setTimeString] = useState('');
  const currentYear = new Date().getFullYear();
  

  useEffect(() => {
    // Function to generate a fixed-width time string (HH:MM:SS)
    const updateTimeString = () => {
      const now = new Date();
      // Using 12-hour format 
     let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      // Determine AM/PM
      const ampm = hours >= 12 ? 'PM' : 'AM';

      // Convert to 12-hour format
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      const formattedHours = String(hours).padStart(2, '0');

      // Result format: HH:MM:SSPM (9 characters total)
      setTimeString(`${formattedHours}:${minutes}:${seconds}${ampm}`);
    };

    updateTimeString(); // Initial call
    const timer = setInterval(updateTimeString, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <footer className="footer glass-footer">
      <div className="footer-content-wrapper">
        {/* Left Side: Copyright */}
        <div className="footer-info">
          <p>© {currentYear} Jeffin James. All Rights Reserved.</p>
        </div>
        {/* Center: Split Flap Live Clock */}
        <div className="footer-clock-container">
          {timeString && (
            <SplitFlapText
              words={[timeString]}
              flipDuration={0.08}
              stagger={0.02}
              cycleDelay={0}
              charset="alphanumeric" // Focuses tiles on numbers and colons
              tileColor="#151021"
              textColor="#FF9FFC" // Glowing accent color for the clock digits
              tileRadius={4}
              gap={4}
              fontSize={18} // Compact scale ideal for a footer
              loop={false}
              padTo={9} // Ensures uniform width layout (HH:MM:SS)
            />
          )}
        </div>

        {/* Center: Animated Character GIF */}
        <div className="footer-gif-container">
          <img
            src="/Cute Girl.gif"
            alt="Character animation"
            className="footer-gif"
          />
        </div>

        {/* Right Side: Social Media Links */}
        <div className="social-links">
          <a
            href="https://www.instagram.com/jeffinjamesdesigner"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img
              src="https://img.icons8.com/color/48/instagram-new.png"
              alt="Instagram"
              className="glass-icon"
            />
          </a>
          <a
            href="https://www.behance.net/jeffinjames"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
          >
            <img
              src="https://img.icons8.com/color/48/behance.png"
              alt="Behance"
              className="glass-icon"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img
              src="https://img.icons8.com/color/48/linkedin.png"
              alt="LinkedIn"
              className="glass-icon"
            />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img
              src="https://img.icons8.com/color/48/facebook-new.png"
              alt="Facebook"
              className="glass-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
