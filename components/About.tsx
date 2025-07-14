
import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        className="container mx-auto px-6 py-12 md:py-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
    >
        {children}
    </motion.div>
);


const About = () => {
  return (
    <SectionWrapper>
      <h2 className="text-4xl font-heading font-bold mb-6">About Me</h2>
      <div className="max-w-3xl mx-auto text-left">
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
            I am a UI/UX designer and VFX artist who merges logic with imagination, and usability with visual wonder. I design intuitive, human centered digital experiences that not only solve real problems, but leave a lasting impression.
        </p>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
            My process begins with deep user research, journey mapping, and early concept sketching — evolving into pixel-perfect prototypes using tools like <strong>Figma</strong>. But I don’t stop at function. I bring in motion design, cinematic storytelling, and compositing techniques to make interfaces truly feel alive.
        </p>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
            As a compositor working with <strong>Nuke</strong>, I focus on creating atmospheric depth, smooth transitions, and layered motion that amplify the user experience. I apply VFX principles like timing, color harmony, and visual rhythm to design interactions that are not only polished but emotionally resonant.
        </p>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
            From scroll animations and hover effects to interface storytelling, I believe every detail matters and that motion is a part of the journey, not just the finish.
        </p>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
            I thrive in collaborative spaces, working closely with developers, stakeholders, and creative teams, using usability testing, data insights, and rapid iteration to craft products that feel thoughtful, natural, and alive.
        </p>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed">
            Off the screen, I stay inspired by exploring new design and compositing tools, experimenting in <strong>Nuke</strong>, and capturing the beauty of everyday moments through photography always seeking new ways to blend technology and visual storytelling.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default About;