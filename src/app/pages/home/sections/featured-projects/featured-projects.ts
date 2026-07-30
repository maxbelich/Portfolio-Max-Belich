import { Component, computed, signal } from '@angular/core';
import { ProjectOverlay } from './project-overlay/project-overlay';
import { PROJECTS } from '../../../../shared/data/projects.data';
import { Project } from '../../../../shared/interfaces/project';

@Component({
  selector: 'app-featured-projects',
  imports: [ProjectOverlay],
  templateUrl: './featured-projects.html',
  styleUrl: './featured-projects.scss',
})
export class FeaturedProjects {
  projects = PROJECTS;

  hoveredProjectId = signal<string | null>(null);
  hoveredImage = computed(
    () => this.projects.find((project) => project.id === this.hoveredProjectId())?.image ?? null,
  );

  selectedProjectId = signal<string | null>(null);
  selectedIndex = computed(() =>
    this.projects.findIndex((project) => project.id === this.selectedProjectId()),
  );
  selectedProject = computed(() => this.projects[this.selectedIndex()] ?? null);

  nextProject() {
    const nextIndex = (this.selectedIndex() + 1) % this.projects.length;
    this.selectedProjectId.set(this.projects[nextIndex].id);
  }

  techLabel(project: Project): string {
    return project.techStack.map((tech) => tech.name).join(' | ');
  }
}
