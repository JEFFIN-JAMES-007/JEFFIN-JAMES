// import { Instagram, MessageCircle, Linkedin } from 'lucide-react';
// import { FaFacebook } from 'react-icons/fa6';

const Footer = () => (
  <footer className="footer glass-card">
    <p>© 2026 Jeffin James. All Rights Reserved.</p>
         <img src="/Cute Girl.gif" alt="" class="about-gif" height="100" align-items="center"></img>

    <div className="social-links">
      <a
        href="https://www.instagram.com/jeffinjamesdesigner"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://img.icons8.com/color/48/instagram-new.png"
          alt="Instagram"
          className="w-5 h-5 cursor-pointer hover:opacity-80 glass-icon"
        />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://img.icons8.com/color/48/facebook-new.png"
          alt="Facebook"
          className="w-5 h-5 cursor-pointer hover:opacity-80 glass-icon"
        />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://img.icons8.com/color/48/linkedin.png"
          alt="LinkedIn"
          className="w-5 h-5 cursor-pointer hover:opacity-80 glass-icon"
        />
      </a>
    </div>
  </footer>
);
export default Footer;
