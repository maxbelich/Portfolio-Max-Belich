import { Component, computed, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ProjectOverlay } from './project-overlay/project-overlay';
import { PROJECTS } from '../../../../shared/data/projects.data';

/** Pixel measurements used to vertically align the hover preview with the hovered row. */
const ITEM_HEIGHT = 110;
const PREVIEW_HEIGHT = 192;
const PREVIEW_ROW_OVERHANG = (PREVIEW_HEIGHT - ITEM_HEIGHT) / 2;

/** Featured-projects list with a hover preview and a selectable project overlay. */
@Component({
  selector: 'app-featured-projects',
  imports: [ProjectOverlay, TranslatePipe],
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

  /** Updates the hover preview to track the last-hovered project. */
  onHover(projectId: string) {
    this.hoveredProjectId.set(projectId);
    this.lastHoveredProjectId.set(projectId);
  }

  selectedProjectId = signal<string | null>(null);
  selectedIndex = computed(() =>
    this.projects.findIndex((project) => project.id === this.selectedProjectId()),
  );
  selectedProject = computed(() => this.projects[this.selectedIndex()] ?? null);

  /** Advances the overlay to the next project, wrapping around at the end. */
  nextProject() {
    const nextIndex = (this.selectedIndex() + 1) % this.projects.length;
    this.selectedProjectId.set(this.projects[nextIndex].id);
  }
}
