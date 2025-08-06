import React from 'react';

const skills = [
  { name: 'Figma', src: 'https://res.cloudinary.com/dzcrgidic/image/upload/v1752494116/figma_tacdt1.png' },
  { name: 'Photoshop', src: 'https://res.cloudinary.com/dzcrgidic/image/upload/v1752494117/Photoshop_c6gxak.png' },
  { name: 'After Effects', src: 'https://res.cloudinary.com/dzcrgidic/image/upload/v1752494116/after_effect_gilcxy.png' },
  { name: 'Premiere Pro', src: 'https://res.cloudinary.com/dzcrgidic/image/upload/v1752494116/Premiere_pro_plzw8o.png' },
  { name: 'Nuke', src: 'https://res.cloudinary.com/dzcrgidic/image/upload/v1752494116/nuke_a8mt3c.png' },
  { name: 'Silhouette', src: 'https://res.cloudinary.com/dzcrgidic/image/upload/v1752494116/silhouette-software_c8htdy.png' },
  { name: 'Maya', src: 'https://res.cloudinary.com/dzcrgidic/image/upload/v1752496182/maya_tp889m.png' },
  { name: 'Canva', src: 'https://res.cloudinary.com/dzcrgidic/image/upload/v1752496523/canva_kbj6do.png' },
];

const Skills: React.FC = () => {
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="skills-scroller" aria-label="Technology skills scroller">
      <div className="skills-scroller__inner">
        {duplicatedSkills.map((skill, index) => (
          <img
            key={index}
            src={skill.src}
            alt={skill.name}
            title={skill.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;