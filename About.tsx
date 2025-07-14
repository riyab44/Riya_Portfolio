import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <motion.div
        className="container mx-auto px-6 py-24 md:py-32 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
    >
        {children}
    </motion.div>
);


const About: React.FC = () => {
  return (
    <SectionWrapper>
      <h2 className="text-4xl font-heading font-bold mb-6">About Me</h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-4">
          I am a digital artist who bridges the gap between functional design and cinematic storytelling. With a unique blend of skills in both **UI/UX Design** and **Visual Effects (VFX)**, I create experiences that are not only intuitive and user-friendly but also visually stunning and emotionally resonant.
        </p>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed">
          My passion lies in building immersive digital worlds—whether it's through a seamless app interface or a breathtaking visual sequence. I believe the best digital products evoke a sense of wonder, and I use my dual expertise to turn ambitious creative visions into reality.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default About;