import { Mail } from 'lucide-react';
import axios from 'axios';
import './contact.css';

const Contact = () => {
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
    <section id="contact" className="section contact-section">
      {/* Responsive GIF container above text */}
      <div className="contact-gif-container">
        <img src="/Chaisaw HI.gif" alt="Chainsaw Greeting GIF" />
      </div>

      <h2>Connect With Me</h2>

      <form onSubmit={handleContactSubmit} className="contact-form glass-card">
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
          Submit Message <Mail size={16} />
        </button>
      </form>
    </section>
  );
};

export default Contact;
