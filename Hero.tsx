import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// A wrapper component that applies the parallax motion effect to its children.
const FloatingAsset: React.FC<{
  children: React.ReactNode;
  className?: string;
  depth: number;
  mouseX: number;
  mouseY: number;
}> = ({ children, className, depth, mouseX, mouseY }) => {
  const moveX = (mouseX - window.innerWidth / 2) * depth;
  const moveY = (mouseY - window.innerHeight / 2) * depth;

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{
        transform: `translateX(${moveX}px) translateY(${moveY}px) translateZ(0)`,
        willChange: 'transform',
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: Math.random() * 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

// UI & VFX Asset Components
interface AssetProps extends React.HTMLAttributes<HTMLElement> {}
interface ColorAssetProps extends AssetProps {
  accentColor: 'teal' | 'magenta' | 'blue' | 'yellow';
}

const WireframeCard: React.FC<AssetProps> = ({ className, ...rest }) => (
    <div className={`w-56 h-36 bg-slate-800/30 backdrop-blur-sm border border-slate-600 rounded-xl p-3 flex flex-col space-y-3 ${className}`} {...rest}>
        <div className="flex items-center space-x-2">
            <div className="w-5 h-5 rounded-full bg-slate-700"></div>
            <div className="w-2/3 h-4 bg-slate-700 rounded"></div>
        </div>
        <div className="w-full h-6 bg-slate-700/80 rounded"></div>
        <div className="w-5/6 h-6 bg-slate-700/80 rounded"></div>
    </div>
);

const NodeGraphIcon: React.FC<ColorAssetProps> = ({ className, accentColor, ...rest }) => (
    <div className={`w-48 h-32 relative ${className}`} {...rest}>
        <svg width="100%" height="100%" viewBox="0 0 120 80" className="absolute">
            <line x1="10" y1="40" x2="50" y2="20" stroke="rgba(100,116,139,0.5)" strokeWidth="1.5" />
            <line x1="50" y1="20" x2="90" y2="40" stroke="rgba(100,116,139,0.5)" strokeWidth="1.5" />
            <line x1="50" y1="60" x2="90" y2="40" stroke="rgba(100,116,139,0.5)" strokeWidth="1.5" />
        </svg>
        <div className="w-8 h-8 rounded-md bg-slate-700 absolute top-[28px] left-0"></div>
        <div className={`w-8 h-8 rounded-md bg-[var(--accent-${accentColor})] absolute top-2 left-[42px]`}></div>
        <div className="w-8 h-8 rounded-md bg-slate-700 absolute bottom-2 left-[42px]"></div>
        <div className="w-8 h-8 rounded-md bg-slate-700 absolute top-[28px] left-[82px]"></div>
    </div>
);


const RenderIcon: React.FC<ColorAssetProps> = ({ className, accentColor, ...rest }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`w-16 h-16 filter drop-shadow-lg ${className}`} style={{ color: `var(--accent-${accentColor})`, ...rest.style }}>
      <path d="M12 15a7 7 0 0 0 7-7 7 7 0 0 0-7-7 7 7 0 0 0-7 7 7 7 0 0 0 7 7z" />
      <path d="M20.59 12.24l-1.54 2.52a1 1 0 0 1-1.39.38l-2.1-1.21" />
      <path d="M3.41 12.24l1.54 2.52a1 1 0 0 0 1.39.38l2.1-1.21" />
      <path d="M12 21a.94.94 0 0 1-.58-.19l-4-2.8A1 1 0 0 1 7 17V8.45" />
      <path d="M12 21a.94.94 0 0 0 .58-.19l4-2.8A1 1 0 0 0 17 17V8.45" />
    </svg>
);


const ProfileCard: React.FC<AssetProps> = ({ className, ...rest }) => (
    <div className={`w-48 h-20 bg-slate-800/30 backdrop-blur-md border border-slate-700 rounded-xl flex items-center p-3 space-x-3 ${className}`} {...rest}>
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent-magenta)] to-[var(--accent-blue)]"></div>
        <div className="flex-1 space-y-2">
            <div className="w-full h-3 bg-slate-600 rounded-full"></div>
            <div className="w-2/3 h-3 bg-slate-700 rounded-full"></div>
        </div>
    </div>
);

const PenIcon: React.FC<ColorAssetProps> = ({ className, accentColor, ...rest }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`w-24 h-24 -rotate-45 filter drop-shadow-lg ${className}`} style={{ color: `var(--accent-${accentColor})`, ...rest.style }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" />
    </svg>
);

const LikeButtonIcon: React.FC<ColorAssetProps> = ({ className, accentColor, ...rest }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`w-16 h-16 filter drop-shadow-lg ${className}`} style={{ color: `var(--accent-${accentColor})`, ...rest.style }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
);

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleViewWorkClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
  };

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
      
      {/* Background glow for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-[var(--accent-blue)] opacity-10 rounded-full blur-3xl animate-pulse" />

      {/* Floating UI/UX & VFX Assets */}
      <FloatingAsset className="top-[15%] left-[10%]" depth={0.03} mouseX={mousePosition.x} mouseY={mousePosition.y}>
        <WireframeCard className="animate-glow-teal" style={{ animationDelay: '-1s' }} />
      </FloatingAsset>
      
      <FloatingAsset className="bottom-[20%] right-[12%]" depth={0.05} mouseX={mousePosition.x} mouseY={mousePosition.y}>
        <NodeGraphIcon accentColor="yellow" className="animate-glow-yellow" style={{ animationDelay: '0s' }}/>
      </FloatingAsset>

      <FloatingAsset className="top-[20%] right-[15%]" depth={-0.02} mouseX={mousePosition.x} mouseY={mousePosition.y}>
        <RenderIcon accentColor="magenta" className="animate-glow-magenta" style={{ animationDelay: '-3s' }}/>
      </FloatingAsset>

      <FloatingAsset className="bottom-[15%] left-[20%]" depth={-0.04} mouseX={mousePosition.x} mouseY={mousePosition.y}>
        <LikeButtonIcon accentColor="magenta" className="animate-glow-magenta" style={{ animationDelay: '-2s' }}/>
      </FloatingAsset>

      <FloatingAsset className="top-[60%] right-[25%]" depth={-0.025} mouseX={mousePosition.x} mouseY={mousePosition.y}>
        <ProfileCard className="animate-glow-teal" style={{ animationDelay: '-4s' }} />
      </FloatingAsset>
      
      <FloatingAsset className="top-[40%] right-[8%]" depth={0.04} mouseX={mousePosition.x} mouseY={mousePosition.y}>
        <PenIcon accentColor="blue" className="animate-glow-blue" style={{ animationDelay: '-5s' }} />
      </FloatingAsset>

      {/* Hero Text Content */}
      <div className="relative z-10 text-center p-4">
        <motion.h1
          className="text-5xl md:text-6xl font-heading font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-teal)] via-[var(--accent-magenta)] to-[var(--accent-yellow)]"
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
          className="px-8 py-3 bg-[var(--accent-yellow)] text-black font-bold rounded-full transition-all duration-300 glow-on-hover-teal cursor-pointer glitch-hover"
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