export interface ProjectTech {
  name: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  techStack: ProjectTech[];
  descriptionKey?: string;
  githubLink?: string;
  liveLink?: string;
  image?: string;
}
