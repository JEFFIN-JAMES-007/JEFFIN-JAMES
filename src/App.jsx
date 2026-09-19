import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { PortfolioProvider } from './Context/PortfolioContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


// Pages
import Home from './Pages/Home/home.jsx';
import About from './Pages/About/about';
import Skills from './Pages/Skills/skills';
import Projects from './Pages/Projects/projects';
import Services from './Pages/Services/services.jsx';
import Contact from './Pages/Contact/contact';
import HireMe from './Pages/HireMe/hireMe';
import AllWorks from './Pages/AllWorks';

import './App.css';

// Inner component so useLocation runs INSIDE <Router>
const MainLayout = () => {
  const location = useLocation();
  const isAllWorksPage = location.pathname === '/all-works';

  return (
    <div className="app-container">
      {!isAllWorksPage && <Navbar />}
      
      <Routes>
        {/* Combine sections for the main Home view */}
        <Route 
          path="/" 
          element={
            <>
              <Home />
              <About />
              <Skills />
              <Projects />
              <Services />
              <Contact />
            </>
          } 
        />
        
        {/* Individual routes kept in case you link directly to them */}
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hire-me" element={<HireMe />} />
        <Route path="/all-works" element={<AllWorks />} />
      </Routes>

      {!isAllWorksPage && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <PortfolioProvider>
      <Router>
        <MainLayout />
      </Router>
    </PortfolioProvider>
  );
};

export default App;