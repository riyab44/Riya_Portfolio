import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <motion.section
      className="container mx-auto px-6 py-24 md:py-32 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-heading font-bold mb-4">Get In Touch</h2>
      <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-8">
        I'm currently available for freelance and full-time opportunities that challenge my creative and technical skills. If you have a project that could benefit from a blend of design and VFX, let's talk.
      </p>
      <motion.a
        href="mailto:hello@riyabhismire.com"
        className="inline-block px-10 py-4 bg-[var(--accent-magenta)] text-black font-bold rounded-full transition-all duration-300 glow-on-hover-magenta"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        hello@riyabhismire.com
      </motion.a>

      <div className="mt-12 flex justify-center space-x-6">
        <a href="#" className="text-[var(--text-muted)] hover:text-[var(--accent-blue)] transition-colors">LinkedIn</a>
        <a href="#" className="text-[var(--text-muted)] hover:text-[var(--accent-blue)] transition-colors">ArtStation</a>
        <a href="#" className="text-[var(--text-muted)] hover:text-[var(--accent-blue)] transition-colors">Vimeo</a>
      </div>
    </motion.section>
  );
};

export default Contact;