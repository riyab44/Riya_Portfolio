
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from './Icons.tsx';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

interface HeaderProps {
    activeSection: string;
}


const Header = ({ activeSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    if(isMenuOpen) {
        toggleMenu();
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md shadow-lg shadow-black/10"
        aria-label="Main Navigation"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-xl font-bold text-glow-teal" style={{color: 'var(--accent-teal)'}}>
            Riya Bhismire
          </a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-base transition-colors duration-300 ${activeSection === link.id ? 'text-[var(--accent-teal)]' : 'text-[var(--text-light)] hover:text-[var(--accent-teal)]'}`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[var(--text-light)] focus:outline-none"
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-[60] bg-[var(--bg-mid)] md:hidden"
            aria-modal="true"
            role="dialog"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <button
                onClick={toggleMenu}
                className="absolute top-6 right-6 text-[var(--text-light)] focus:outline-none"
                aria-label="Close menu"
              >
                <XIcon />
              </button>
              <nav className="flex flex-col space-y-8 text-center">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className="text-2xl font-semibold text-[var(--text-light)] hover:text-[var(--accent-magenta)] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;