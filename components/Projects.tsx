
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../constants.ts';
import type { Project } from '../types.ts';
import ProjectCard from './ProjectCard.tsx';

type Category = 'all' | 'ui/ux' | 'vfx';

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}

const Projects = ({ onProjectClick }: ProjectsProps) => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.projectType === activeCategory);

  const buttonClasses = (category: Category) => 
    `px-5 py-2 rounded-full text-base font-semibold transition-all duration-300 ${
      activeCategory === category 
      ? 'bg-[var(--accent-yellow)] text-black' 
      : 'bg-slate-700/50 hover:bg-slate-600/50 text-white'
    }`;

  return (
    <motion.div
      className="container mx-auto px-6 py-12 md:py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-heading font-bold text-center mb-8">My Work</h2>
      
      <div className="flex justify-center items-center space-x-2 md:space-x-4 mb-12">
        <button className={buttonClasses('all')} onClick={() => setActiveCategory('all')}>All</button>
        <button className={buttonClasses('ui/ux')} onClick={() => setActiveCategory('ui/ux')}>UI/UX</button>
        <button className={buttonClasses('vfx')} onClick={() => setActiveCategory('vfx')}>VFX & Motion</button>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => onProjectClick(project)} 
              index={index}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Projects;