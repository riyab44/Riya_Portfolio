
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

const TwinklingStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = Array.from({ length: 80 }).map(() => ({
      top: `${getRandomNumber(0, 100)}%`,
      left: `${getRandomNumber(0, 100)}%`,
      animationDuration: `${getRandomNumber(4, 10)}s`,
      animationDelay: `-${getRandomNumber(0, 10)}s`,
      transform: `scale(${getRandomNumber(0.5, 1.2)})`,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
      {stars.map((style, i) => (
        <div key={i} className="star-particle" style={style} />
      ))}
    </div>
  );
};

const SingleShootingStar = () => {
  const [star, setStar] = useState(null);
  const [key, setKey] = useState(0);

  const createStar = useCallback(() => {
    const angle = getRandomNumber(-45, 45);
    const startY = getRandomNumber(0, 70);
    const duration = getRandomNumber(6, 12); // Adjusted speed
    const postAnimationDelay = getRandomNumber(1, 4) * 1000;

    setStar({ angle, startY, duration, postAnimationDelay });
    setKey(prevKey => prevKey + 1);
  }, []);

  useEffect(() => {
    createStar();
  }, [createStar]);

  const handleAnimationEnd = () => {
    if (star) {
      setTimeout(() => {
        setStar(null); // Remove from DOM
        setTimeout(createStar, 50); // Create new one after a short delay
      }, star.postAnimationDelay);
    }
  };

  if (!star) return null;

  return (
    <div
      key={key}
      className="shooting-star-container"
      style={{
        top: `${star.startY}%`,
        transform: `rotate(${star.angle}deg)`,
      }}
      aria-hidden="true"
    >
      <div 
        className="shooting-star"
        style={{ animationDuration: `${star.duration}s` }}
        onAnimationEnd={handleAnimationEnd}
      />
    </div>
  );
};


const Hero = () => {

  const handleViewWorkClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
  };

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-black">
      <TwinklingStars />
      <SingleShootingStar />

      {/* Hero Text Content */}
      <div className="relative z-10 text-center p-4">
        <motion.h1
          className="text-5xl md:text-6xl font-heading font-black mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I’m Riya Bhismire
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-[var(--text-muted)] mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          A Digital Alchemist Weaving UI/UX with Visual Effects.
        </motion.p>
        <motion.button
          onClick={handleViewWorkClick}
          className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full transition-shadow duration-300 glow-on-hover-teal cursor-pointer glitch-hover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Explore My Work
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
