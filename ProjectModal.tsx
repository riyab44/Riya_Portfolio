import React from 'react';
import { motion, Variants } from 'framer-motion';
import type { Project } from './types';
import { XIcon } from './Icons';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 200, damping: 25 },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 50,
    transition: { duration: 0.2 },
  },
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const accentColor = project.projectType === 'ui/ux' ? 'var(--accent-teal)' : 'var(--accent-yellow)';

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      <motion.div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[var(--bg-mid)] rounded-lg shadow-2xl overflow-y-auto"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="sticky top-4 right-4 z-10 float-right text-gray-400 hover:text-white transition-colors"
          aria-label="Close project details"
        >
          <XIcon />
        </button>
        <div className="p-8 md:p-12">
          <h2 
            className="text-4xl font-heading font-bold mb-2"
            style={{ color: accentColor }}
          >
            {project.title}
          </h2>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[var(--text-muted)] mb-6">
            <span><strong>Role:</strong> {project.role}</span>
            <span><strong>Tools:</strong> {project.tools.join(', ')}</span>
          </div>

          <div className="prose prose-invert max-w-none prose-p:text-[var(--text-muted)] prose-strong:text-[var(--text-light)]">
            {project.caseStudy.type === 'ui/ux' ? (
              <>
                {project.caseStudy.appPreviewVideo ? (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-[var(--text-light)] mb-4">App Preview</h3>
                    <div className="not-prose flex justify-center">
                      <video
                          src={project.caseStudy.appPreviewVideo}
                          className="rounded-lg border border-slate-700 bg-slate-900 w-full aspect-video"
                          controls
                          autoPlay
                          loop
                          muted
                          playsInline
                          aria-label={`${project.title} app preview`}
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    {project.caseStudy.problem && <>
                      <h3 className="text-xl font-bold text-[var(--text-light)]">The Problem</h3>
                      <p>{project.caseStudy.problem}</p>
                    </>}
                    {project.caseStudy.solution && <>
                      <h3 className="text-xl font-bold text-[var(--text-light)] mt-6">The Solution</h3>
                      <p>{project.caseStudy.solution}</p>
                    </>}
                  </>
                )}
                
                {/* Figma Embed Section */}
                {project.caseStudy.figmaEmbedUrl && (
                  <>
                    <h3 className="text-xl font-bold text-[var(--text-light)] mt-6">Interactive Prototype</h3>
                    <div className="not-prose mt-4">
                       <iframe
                        className="w-full aspect-[16/9] rounded-lg border border-slate-700 bg-slate-900"
                        src={project.caseStudy.figmaEmbedUrl}
                        allowFullScreen
                        title={`${project.title} Figma Prototype`}
                      ></iframe>
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <h3 className="text-xl font-bold text-[var(--text-light)]">The Brief</h3>
                <p>{project.caseStudy.brief}</p>
                <h3 className="text-xl font-bold text-[var(--text-light)] mt-6">Creative Process</h3>
                <p>{project.caseStudy.process}</p>
              </>
            )}
          </div>
          
          <h3 className="text-2xl font-bold mt-12 mb-6 text-center font-heading">
             {project.caseStudy.type === 'ui/ux' ? 'Key Screens' : 'Final Renders'}
          </h3>
          <div className="flex justify-center overflow-x-auto space-x-4 p-4 -mx-4 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
              {(project.caseStudy.type === 'ui/ux' ? project.caseStudy.screens : project.caseStudy.renders).map((src, index) => (
                  <div key={index} className="flex-shrink-0 w-4/5 md:w-3/5 rounded-lg overflow-hidden shadow-lg">
                      <img src={src} alt={`Screen ${index + 1}`} className="w-full h-auto object-cover"/>
                  </div>
              ))}
          </div>

          {project.caseStudy.type === 'ui/ux' && project.caseStudy.caseStudyImage && (
            <>
              <h3 className="text-2xl font-bold mt-12 mb-6 text-center font-heading">
                  Case Study
              </h3>
              <div className="rounded-lg overflow-hidden border border-slate-700 bg-slate-900 max-w-full mx-auto">
                <img
                  src={project.caseStudy.caseStudyImage}
                  alt={`${project.title} Case Study overview`}
                  className="w-full h-auto object-contain"
                />
              </div>
            </>
          )}

        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;