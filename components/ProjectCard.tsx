
import React, { useEffect, useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import type { Project } from '../types.ts';

const cardVariants: Variants = {
  initial: { opacity: 0, y: 50, scale: 0.9 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    scale: 0.9,
    transition: {
      duration: 0.4,
      ease: 'easeIn',
    }
  }
};

declare const cloudinary: any;

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const accentColor = project.projectType === 'ui/ux' ? 'var(--accent-teal)' : 'var(--accent-yellow)';
  const playerRef = useRef<any>(null);
  const [isBuffering, setIsBuffering] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    if (project.coverVideoPublicId && typeof cloudinary !== 'undefined') {
      const playerId = `player-${project.id}`;
      
      const container = document.getElementById(playerId);
      if (container) {
          container.innerHTML = '';
      }
      
      playerRef.current = cloudinary.player(playerId, {
        cloudName: 'dzcrgidic',
        publicId: project.coverVideoPublicId,
        profile: 'cld-looping',
        muted: true,
        autoplay: true,
        loop: true,
        fluid: true,
        poster: project.image,
      });

      const player = playerRef.current;
      if (player) {
          player.on('loadstart', () => {
              setIsBuffering(true);
              setLoadProgress(0);
          });
          
          player.on('progress', () => {
              const duration = player.duration();
              if (duration > 0) {
                  let bufferedEnd = 0;
                  const bufferedRanges = player.buffered();
                  if (bufferedRanges.length > 0) {
                      bufferedEnd = bufferedRanges.end(bufferedRanges.length - 1);
                  }
                  const progress = (bufferedEnd / duration) * 100;
                  setLoadProgress(progress);
              }
          });

          player.on('playing', () => {
              setIsBuffering(false);
          });

          player.on('waiting', () => {
              setIsBuffering(true);
          });

          player.on('loadeddata', () => {
              setLoadProgress(100);
          });
      }

      return () => {
        if (playerRef.current) {
          playerRef.current.dispose();
          playerRef.current = null;
        }
      };
    } else if (project.coverVideo) {
        const videoElement = document.getElementById(`video-${project.id}`) as HTMLVideoElement;
        if(videoElement) videoElement.play().catch(() => {});
    }

  }, [project.id, project.coverVideoPublicId, project.image, project.coverVideo]);


  return (
    <motion.div
      layout
      className="bg-slate-800/50 rounded-lg overflow-hidden cursor-pointer group"
      onClick={onClick}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover={{ 
        scale: 1.05, 
        boxShadow: `0px 10px 30px ${accentColor}20`,
        transition: { duration: 0.3 } 
      }}
    >
      <div className="relative w-full h-64 bg-slate-900">
        {project.coverVideoPublicId ? (
          <>
            <div
              id={`player-${project.id}`}
              key={project.id}
              className="w-full h-full"
              aria-label={`${project.title} video preview`}
            />
            {isBuffering && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-700/50 overflow-hidden">
                <motion.div
                  className="h-full"
                  style={{ 
                    backgroundColor: accentColor,
                    boxShadow: `0 0 8px ${accentColor}` 
                  }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${loadProgress}%` }}
                  transition={{ duration: 0.3, ease: 'linear' }}
                />
              </div>
            )}
          </>
        ) : project.coverVideo ? (
          <video
            id={`video-${project.id}`}
            src={project.coverVideo}
            poster={project.image}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            aria-label={`${project.title} video preview`}
          />
        ) : (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
        <div 
          className="absolute top-4 right-4 px-3 py-1 text-xs font-bold text-black rounded-full"
          style={{ backgroundColor: accentColor }}
        >
          {project.projectType.toUpperCase()}
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm font-semibold mb-1" style={{ color: accentColor }}>{project.category}</p>
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-[var(--text-muted)]">{project.description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;