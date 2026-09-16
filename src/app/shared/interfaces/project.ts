/** Technology badge shown in a project's tech stack. */
export interface ProjectTech {
  name: string;
  icon: string;
}

/** A portfolio project entry; optional fields hide their UI element when omitted. */
export interface Project {
  id: string;
  title: string;
  techStack: ProjectTech[];
  descriptionKey?: string;
  githubLink?: string;
  liveLink?: string;
  image?: string;
}
