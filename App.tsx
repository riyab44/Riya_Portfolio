

import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import type { Project } from './types.ts';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import ProjectModal from './components/ProjectModal.tsx';
import Skills from './components/Skills.tsx';

const sections = ['home', 'about', 'projects', 'contact'];

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState('home');
  
  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const refs = Object.values(sectionRefs);
    
    refs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className="antialiased text-white">
      <Header activeSection={activeSection} />
      
      <div className="main-gradient">
        <main>
          <section ref={sectionRefs.home} id="home" className="h-screen relative">
            <Hero />
          </section>
          
          <section ref={sectionRefs.about} id="about" className="scroll-mt-20">
            <About />
          </section>

          <Skills />

          <section ref={sectionRefs.projects} id="projects" className="scroll-mt-20">
            <Projects onProjectClick={openModal} />
          </section>
          <section ref={sectionRefs.contact} id="contact" className="scroll-mt-20">
            <Contact />
          </section>
        </main>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;