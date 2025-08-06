

import type { Project } from './types.ts';

export const projects: Project[] = [
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
  },
  {
    id: 2,
    title: 'VFX Paint Prep Showreel',
    category: 'Paint & Prep Showreel',
    role: 'Paint & Prep Artist',
    image: 'https://res.cloudinary.com/dzcrgidic/image/upload/v1753347074/project_chimera_cover_vjokz3.jpg',
    coverVideo: 'https://res.cloudinary.com/dzcrgidic/video/upload/v1753346390/Prep_showreel_d0ydoe.mp4',
    projectType: 'vfx',
    description: 'A showcase of core paint and prep techniques: face cleanup, wire removal, 2D tracking, projection clean plates, and chroma marker removal.',
    tools: ['Nuke', 'Silhouette', 'Adobe Photoshop', 'Adobe Premiere Pro'],
     caseStudy: {
      type: 'vfx',
      brief: 'This showreel is a compilation of various "invisible" visual effects shots, focusing on cleanup and preparation tasks which are fundamental to high-quality VFX.',
      process: 'The work displayed includes meticulous wire removal, rotoscoping for object isolation, 2D tracking to apply clean patches, creating seamless clean plates via projection, and removing on-set markers from green/blue screens.',
      renders: [
        'https://res.cloudinary.com/dzcrgidic/video/upload/v1753346390/Prep_showreel_d0ydoe.mp4'
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
    title: 'Eye Glow Effect',
    category: 'NUKE Composition',
    role: 'Compositor',
    image: 'https://res.cloudinary.com/dzcrgidic/image/upload/v1753429388/eye_glow_comp_cover_img-min_lq4x5q.jpg',
    coverVideo: 'https://res.cloudinary.com/dzcrgidic/video/upload/final_render_all_qusonj.mp4',
    projectType: 'vfx',
    description: 'A Nuke composition project focused on tracking eyes, creating a sub-surface glow effect, and adding a cinematic finish.',
    tools: ['Nuke', 'Silhouette', 'Mocha Pro'],
    caseStudy: {
      type: 'vfx',
      brief: 'The objective was to create a realistic and captivating eye glow effect for a character in a dramatic scene, suggesting a supernatural power or intense emotion.',
      process: 'The process involved precise 2D tracking and rotoscoping of the eyes using Mocha Pro and Silhouette. In Nuke, the glow effect was built with multiple layers to simulate light emanating from beneath the skin, including core glows, falloff, and interactive lighting on the face. The final composite was then color graded to enhance the mood and integrate the effect seamlessly into the shot.',
      renders: [
        'https://res.cloudinary.com/dzcrgidic/video/upload/final_render_all_qusonj.mp4'
      ]
    }
  },
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
  }
];
