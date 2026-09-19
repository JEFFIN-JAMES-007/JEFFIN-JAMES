import { createContext, useState } from 'react';

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = id => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PortfolioContext.Provider value={{ activeSection, scrollToSection }}>
      {children}
    </PortfolioContext.Provider>
  );
};
