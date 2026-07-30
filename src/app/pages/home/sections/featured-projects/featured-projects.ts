import { Component, computed, signal } from '@angular/core';
import { ProjectOverlay } from './project-overlay/project-overlay';
import { PROJECTS } from '../../../../shared/data/projects.data';

const ITEM_HEIGHT = 110;
const PREVIEW_HEIGHT = 192;
const PREVIEW_ROW_OVERHANG = (PREVIEW_HEIGHT - ITEM_HEIGHT) / 2;

@Component({
  selector: 'app-featured-projects',
  imports: [ProjectOverlay],
  templateUrl: './featured-projects.html',
  styleUrl: './featured-projects.scss',
})
export class FeaturedProjects {
  projects = PROJECTS;

  hoveredProjectId = signal<string | null>(null);
  isPreviewVisible = computed(() => this.hoveredProjectId() !== null);

  lastHoveredProjectId = signal<string | null>(null);
  lastHoveredIndex = computed(() =>
    this.projects.findIndex((project) => project.id === this.lastHoveredProjectId()),
  );
  previewImage = computed(
    () => this.projects.find((project) => project.id === this.lastHoveredProjectId())?.image ?? null,
  );
  previewTop = computed(() => {
    const index = this.lastHoveredIndex();
    return index >= 0 ? index * ITEM_HEIGHT - PREVIEW_ROW_OVERHANG : 0;
  });

  onHover(projectId: string) {
    this.hoveredProjectId.set(projectId);
    this.lastHoveredProjectId.set(projectId);
  }

  selectedProjectId = signal<string | null>(null);
  selectedIndex = computed(() =>
    this.projects.findIndex((project) => project.id === this.selectedProjectId()),
  );
  selectedProject = computed(() => this.projects[this.selectedIndex()] ?? null);

  nextProject() {
    const nextIndex = (this.selectedIndex() + 1) % this.projects.length;
    this.selectedProjectId.set(this.projects[nextIndex].id);
  }
}
