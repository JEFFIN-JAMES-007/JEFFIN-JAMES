import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './hireme.css'

const HireMe = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <div className="pricing-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pricing-header"
      >
        <h2>Choose Your Plan</h2>
        <p>Select the perfect service tier for your next creative project.</p>
      </motion.div>

      <motion.div
        className="pricing-cards"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Basic Card */}
        <motion.div variants={item} className="price-card glass-card">
          <h3>Basic</h3>
          <h2 className="price">$99</h2>
          <ul>
            <li>
              <CheckCircle2 size={16} color="#8c7ae6" /> Basic Video Editing
            </li>
            <li>
              <CheckCircle2 size={16} color="#8c7ae6" /> 1 Flyer / Poster Design
            </li>
            <li>
              <CheckCircle2 size={16} color="#8c7ae6" /> 2 Revisions
            </li>
          </ul>
          <button className="btn-secondary glass-btn">Select Plan</button>
        </motion.div>

        {/* Medium Card */}
        <motion.div variants={item} className="price-card glass-card pro-card">
          <div className="popular-badge">Most Popular</div>
          <h3>Medium</h3>
          <h2 className="price">$249</h2>
          <ul>
            <li>
              <CheckCircle2 size={16} color="#8c7ae6" /> Advanced Video & Audio
              Sync
            </li>
            <li>
              <CheckCircle2 size={16} color="#8c7ae6" /> Full Brand Identity
              Setup
            </li>
            <li>
              <CheckCircle2 size={16} color="#8c7ae6" /> Basic Figma Prototyping
            </li>
            <li>
              <CheckCircle2 size={16} color="#8c7ae6" /> 5 Revisions
            </li>
          </ul>
          <button className="btn-primary glass-btn">Select Plan</button>
        </motion.div>

        {/* Pro Card */}
        <motion.div variants={item} className="price-card glass-card">
          <h3>Pro</h3>
          <h2 className="price">$499</h2>
          <ul>
            <li>
              <CheckCircle2 size={16} color="#8c7ae6" /> Motion Graphics & VFX
            </li>
            <li>
              <CheckCircle2 size={16} color="#8c7ae6" /> Full Stack Web App UI
            </li>
            <li>
              <CheckCircle2 size={16} color="#8c7ae6" /> Hardware Systems
              Consult
            </li>
            <li>
              <CheckCircle2 size={16} color="#8c7ae6" /> Unlimited Revisions
            </li>
          </ul>
          <button className="btn-secondary glass-btn">Select Plan</button>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default HireMe;
