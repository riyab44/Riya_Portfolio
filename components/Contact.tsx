
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      className="container mx-auto px-6 py-12 md:py-16 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-heading font-bold mb-4">Get In Touch</h2>
      <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-8">
        I'm currently available for freelance and full-time opportunities that challenge my creative and technical skills. If you have a project that could benefit from a blend of design and VFX, let's talk.
      </p>
      <div className="flex justify-center items-center space-x-8 mt-4">
        <motion.a
          href="mailto:bhismireriya04@gmail.com"
          className="inline-block rounded-full"
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          aria-label="Email Riya Bhismire"
        >
          <img
            src="https://res.cloudinary.com/dzcrgidic/image/upload/v1752496181/mail_h9os8o.png"
            alt="Email Icon"
            className="h-16 w-16 object-contain"
          />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/riya-vfx-uiux-artist/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full"
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          aria-label="Riya Bhismire on LinkedIn"
        >
          <img
            src="https://res.cloudinary.com/dzcrgidic/image/upload/v1752496181/linkedin_syiznc.png"
            alt="LinkedIn Icon"
            className="h-14 w-14 object-contain p-1"
          />
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Contact;