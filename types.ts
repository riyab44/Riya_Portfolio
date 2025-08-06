// Case study structure for a UI/UX project
interface UIUXCaseStudy {
  type: 'ui/ux';
  figmaEmbedUrl?: string;
  caseStudyImage?: string;
  appPreviewVideo?: string;
  problem?: string;
  solution?: string;
  screens?: string[];
}

// Case study structure for a VFX project
interface VFXCaseStudy {
  type: 'vfx';
  brief: string;
  process: string;
  renders: string[]; // URLs to images or video stills
}

export interface Project {
  id: number;
  title: string;
  category: string;
  role: string;
  image: string;
  coverVideo?: string;
  coverVideoPublicId?: string;
  projectType: 'ui/ux' | 'vfx';
  description: string;
  tools: string[];
  caseStudy: UIUXCaseStudy | VFXCaseStudy;
}