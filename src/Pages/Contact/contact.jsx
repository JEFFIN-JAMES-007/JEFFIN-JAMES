import { useState } from 'react';
import { Send } from 'lucide-react';
import axios from 'axios';
import './contact.css';
import BorderGlow from './BorderGlow';
import SwipeToast from '../../components/SwipeToast.jsx';

const Contact = () => {
  const [toasts, setToasts] = useState([]);

  // Toast trigger function
  const notify = (title, description) => {
    setToasts(t => [...t, { id: Date.now(), title, description }]);
  };

  const handleContactSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    //   try {
    //     // Use environment variable for production hosting flexibility
    //     const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    //     const res = await axios.post(`${API_URL}/api/contact`, data);

    //     if (res.data.method === 'mongodb') {
    //       notify('Sended', 'Message saved to database!');
    //     } else {
    //       notify('Sended', 'Database offline: Message sent via Gmail!');
    //     }
    //     e.target.reset();
    //   } catch (err) {
    //     notify('Error', 'Failed to send message.');
    //   }
    // };
    // const handleContactSubmit = async e => {
    //   e.preventDefault();
    //   const formData = new FormData(e.target);

    // Add your Web3Forms Access Key here
    formData.append('access_key', 'b2c574d3-c30b-45ce-b7a7-2f507dc65d23');
    // (Optional) Set an email subject
    formData.append('subject', 'New Contact from Portfolio Website');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        notify('Message sent successfully! I will get back to you soon.');
        e.target.reset(); // Clear the form
      } else {
        notify('Error sending message: ' + data.message);
      }
    } catch (err) {
      notify('Failed to send message. Please check your internet connection.');
    }
  };

  return (
    <section id="contact" className="section contact-section">
      {/* Toast Notification Container */}
      <div
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 99999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 10,
        }}
      >
        {toasts.map(t => (
          <SwipeToast
            key={t.id}
            inline
            title={t.title}
            description={t.description}
            duration={4000}
            onClose={() => setToasts(s => s.filter(x => x.id !== t.id))}
          />
        ))}
      </div>
      {/* Responsive GIF container above text */}
      <div className="contact-gif-container">
        <img src="/Chaisaw HI.gif" alt="Chainsaw Greeting GIF" />
      </div>

      <h2>Connect With Me</h2>
      {/* BorderGlow as the main container for the form */}
      <BorderGlow
        edgeSensitivity={30}
        glowColor="260 100 70"
        backgroundColor="#0d0914"
        borderRadius={24}
        glowRadius={35}
        glowIntensity={1.2}
        coneSpread={28}
        animated={true}
        colors={['#6a35ff', '#ff54a2', '#38bdf8']}
        className="contact-glow-wrapper"
      >
        <form
          onSubmit={handleContactSubmit}
          className="contact-form glass-card"
        >
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="glass-input"
            />
            <input
              type="text"
              name="location"
              placeholder="Place / Location"
              required
              className="glass-input"
            />
          </div>
          <div className="form-row">
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              required
              className="glass-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              required
              className="glass-input"
            />
          </div>
          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows="5"
            required
            className="glass-input"
          ></textarea>
          <button type="submit" className="btn-primary glass-sub-btn">
            Submit Message <Send size={16} />
          </button>
        </form>
      </BorderGlow>
    </section>
  );
};

export default Contact;
