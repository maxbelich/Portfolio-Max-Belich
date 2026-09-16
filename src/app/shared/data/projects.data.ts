import { Project } from '../interfaces/project';

/** Portfolio projects shown in the featured-projects section. */
export const PROJECTS: Project[] = [
  {
    id: 'join',
    title: 'Join',
    techStack: [
      { name: 'Angular', icon: '/icons/tech/frontend/tech-angular.svg' },
      { name: 'TypeScript', icon: '/icons/tech/frontend/tech-typescript.svg' },
      { name: 'HTML', icon: '/icons/tech/frontend/tech-html.svg' },
      { name: 'CSS', icon: '/icons/tech/frontend/tech-css.svg' },
      { name: 'Supabase', icon: '/icons/tech/frontend/tech-supabase.svg' },
    ],
    descriptionKey: 'projects.join.description',
    githubLink: 'https://github.com/maxbelich/join',
    liveLink: 'https://join.maxbelich.de/',
    image: '/project-images/join.png',
  },
  {
    id: 'el-pollo-loco',
    title: 'El Pollo Loco',
    techStack: [
      { name: 'JavaScript', icon: '/icons/tech/frontend/tech-javascript.svg' },
      { name: 'HTML', icon: '/icons/tech/frontend/tech-html.svg' },
      { name: 'CSS', icon: '/icons/tech/frontend/tech-css.svg' },
    ],
    descriptionKey: 'projects.elPolloLoco.description',
    githubLink: 'https://github.com/maxbelich/EL-Pollo-Loco',
    liveLink: 'https://el-pollo-loco.maxbelich.de/',
    image: '/project-images/el-pollo-loco.png',
  },
  {
    id: 'pokedex',
    title: 'Pokédex',
    techStack: [
      { name: 'JavaScript', icon: '/icons/tech/frontend/tech-javascript.svg' },
      { name: 'HTML', icon: '/icons/tech/frontend/tech-html.svg' },
      { name: 'CSS', icon: '/icons/tech/frontend/tech-css.svg' },
    ],
    descriptionKey: 'projects.pokedex.description',
    githubLink: 'https://github.com/maxbelich/Pokedex',
    liveLink: 'https://pokedex.maxbelich.de/',
    image: '/project-images/pokedex2.png',
  },
];
