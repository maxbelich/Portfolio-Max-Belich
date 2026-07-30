import { Component, HostListener, input, output, signal } from '@angular/core';
import { Project } from '../../../../../shared/interfaces/project';

const TRANSITION_DURATION_MS = 200;

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

  isTransitioning = signal(false);

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.project()) {
      this.closed.emit();
    }
  }

  onNextClick() {
    if (this.isTransitioning()) {
      return;
    }
    this.isTransitioning.set(true);
    setTimeout(() => {
      this.next.emit();
      this.isTransitioning.set(false);
    }, TRANSITION_DURATION_MS);
  }
}
