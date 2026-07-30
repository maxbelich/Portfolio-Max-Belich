import { Project } from '../interfaces/project';

export const PROJECTS: Project[] = [
  {
    id: 'join',
    title: 'Join',
    techStack: [
      { name: 'Angular', icon: '/icons/tech/frontend/tech-angular.svg' },
      { name: 'TypeScript', icon: '/icons/tech/frontend/tech-typescript.svg' },
      { name: 'HTML', icon: '/icons/tech/frontend/tech-html.svg' },
      { name: 'CSS', icon: '/icons/tech/frontend/tech-css.svg' },
      { name: 'Firebase', icon: '/icons/tech/frontend/tech-firebase.svg' },
    ],
    description:
      'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    githubLink: 'https://github.com/maxbelich',
    liveLink: 'https://github.com/maxbelich',
    image: '/project-images/pokedex1.png',
  },
  {
    id: 'el-pollo-loco',
    title: 'El Pollo Loco',
    techStack: [
      { name: 'JavaScript', icon: '/icons/tech/frontend/tech-javascript.svg' },
      { name: 'HTML', icon: '/icons/tech/frontend/tech-html.svg' },
      { name: 'CSS', icon: '/icons/tech/frontend/tech-css.svg' },
    ],
    description:
      'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    githubLink: 'https://github.com/maxbelich',
    liveLink: 'https://github.com/maxbelich',
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
    description:
      'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
    githubLink: 'https://github.com/maxbelich',
    liveLink: 'https://github.com/maxbelich',
    image: '/project-images/pokedex2.png',
  },
];
