import { Component, HostListener, input, output } from '@angular/core';
import { Project } from '../../../../../shared/interfaces/project';

@Component({
  selector: 'app-project-overlay',
  imports: [],
  templateUrl: './project-overlay.html',
  styleUrl: './project-overlay.scss',
})
export class ProjectOverlay {
  project = input<Project | null>(null);
  index = input<number>(0);
  closed = output<void>();
  next = output<void>();

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.project()) {
      this.closed.emit();
    }
  }
}
