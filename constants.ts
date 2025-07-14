
import type { Project } from './types.ts';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Foodie',
    category: 'Food Recipe & Blog Website',
    role: 'UI/UX Designer & Prototyper',
    image: 'https://res.cloudinary.com/dzcrgidic/image/upload/v1752409040/Screenshot_2024-08-08_at_7.07.01_PM_c7qcc5.png',
    coverVideo: 'https://res.cloudinary.com/dzcrgidic/video/upload/v1752408368/FOODIE_csszpb.mp4',
    projectType: 'ui/ux',
    description: 'A delicious-looking website for food lovers to discover new recipes and read food blogs, focusing on a clean, user-friendly experience.',
    tools: ['Figma', 'Canva', 'Photoshop'],
    caseStudy: {
      type: 'ui/ux',
      appPreviewVideo: 'https://res.cloudinary.com/dzcrgidic/video/upload/v1752408368/FOODIE_csszpb.mp4',
      caseStudyImage: 'https://res.cloudinary.com/dzcrgidic/image/upload/v1752427524/food_Case_Study_Template_p2rzlg.jpg'
    }
  },
  {
    id: 2,
    title: 'Project Chimera',
    category: 'Sci-Fi Title Sequence',
    role: 'VFX & Motion Graphics Artist',
    image: 'https://picsum.photos/seed/vfx_project_1/600/400',
    projectType: 'vfx',
    description: 'A cinematic title sequence for a futuristic short film, combining 3D elements and abstract particle simulations.',
    tools: ['After Effects', 'Cinema 4D', 'Redshift', 'Houdini'],
     caseStudy: {
      type: 'vfx',
      brief: 'The director wanted a title sequence that established a feeling of mystery, high technology, and cosmic scale. The core theme was "digital consciousness".',
      process: 'Starting with style frames in Photoshop, I moved to Cinema 4D for 3D modeling and animation. Particle effects were generated in Houdini and composited in After Effects, where final color grading and typography were applied.',
      renders: [
        'https://picsum.photos/seed/render2a/800/600',
        'https://picsum.photos/seed/render2b/800/600',
        'https://picsum.photos/seed/render2c/800/600',
      ]
    }
  },
  {
    id: 3,
    title: 'Fashion',
    category: 'E commerce App',
    role: 'Lead UI/UX Designer',
    image: 'https://res.cloudinary.com/dzcrgidic/video/upload/v1752487239/fashion_mbfxgi.jpg',
    coverVideo: 'https://res.cloudinary.com/dzcrgidic/video/upload/v1752487239/fashion_mbfxgi.mp4',
    projectType: 'ui/ux',
    description: 'An immersive online shopping experience for a luxury fashion brand.',
    tools: ['Figma', 'Canva', 'Photoshop'],
    caseStudy: {
      type: 'ui/ux',
      appPreviewVideo: 'https://res.cloudinary.com/dzcrgidic/video/upload/v1752487239/fashion_mbfxgi.mp4',
      caseStudyImage: 'https://res.cloudinary.com/dzcrgidic/image/upload/v1752489104/Fashion_jpg-min_gbhq16.jpg'
    }
  },
   {
    id: 4,
    title: 'EmberCharge',
    category: 'Product Commercial VFX',
    role: 'FX Artist & Compositor',
    image: 'https://picsum.photos/seed/vfx_project_2/600/400',
    projectType: 'vfx',
    description: 'Dynamic energy effects for a futuristic electric vehicle commercial.',
    tools: ['Nuke', 'Houdini', 'Maya'],
    caseStudy: {
      type: 'vfx',
      brief: 'Create visually stunning and believable energy effects that flow around a new concept car, highlighting its speed and futuristic charging technology.',
      process: 'The car was match-moved from the live-action plate. I developed a particle and fluid simulation in Houdini to create the energy tendrils, then composited them onto the footage in Nuke, handling lighting integration and reflections.',
      renders: [
        'https://picsum.photos/seed/render4a/800/600',
        'https://picsum.photos/seed/render4b/800/600',
        'https://picsum.photos/seed/render4c/800/600',
      ]
    }
  },
  {
    id: 5,
    title: 'CleanUp',
    category: 'Home Cleaning Service App',
    role: 'UX Researcher & UI Designer',
    image: 'https://res.cloudinary.com/dzcrgidic/image/upload/v1752397664/UX_Case_Study_Template_jlsfh6.jpg',
    coverVideo: 'https://res.cloudinary.com/dzcrgidic/video/upload/v1752404832/Clenup_mockup_qxqt8n.mp4',
    projectType: 'ui/ux',
    description: 'A user-friendly mobile app for booking and managing home cleaning services with ease and reliability.',
    tools: ['Figma', 'Canva', 'Photoshop'],
    caseStudy: {
      type: 'ui/ux',
      appPreviewVideo: 'https://res.cloudinary.com/dzcrgidic/video/upload/v1752404832/Clenup_mockup_qxqt8n.mp4',
      caseStudyImage: 'https://res.cloudinary.com/dzcrgidic/image/upload/v1752397664/UX_Case_Study_Template_jlsfh6.jpg'
    }
  }
];