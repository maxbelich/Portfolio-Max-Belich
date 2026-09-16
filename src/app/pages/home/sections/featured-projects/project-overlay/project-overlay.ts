import { Component, effect, HostListener, input, OnDestroy, output, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Project } from '../../../../../shared/interfaces/project';

/** Debounce window so rapid clicks can't double-trigger the next-project transition. */
const TRANSITION_DURATION_MS = 200;

/** Full-screen overlay showing one project's details; locks page scroll while open. */
@Component({
  selector: 'app-project-overlay',
  imports: [TranslatePipe],
  templateUrl: './project-overlay.html',
  styleUrl: './project-overlay.scss',
})
export class ProjectOverlay implements OnDestroy {
  project = input<Project | null>(null);
  index = input<number>(0);
  closed = output<void>();
  next = output<void>();

  isTransitioning = signal(false);

  constructor() {
    effect(() => {
      document.documentElement.classList.toggle('scroll-locked', this.project() !== null);
    });
  }

  /** Removes the scroll lock in case the overlay unmounts while still open. */
  ngOnDestroy() {
    document.documentElement.classList.remove('scroll-locked');
  }

  /** Closes the overlay when Escape is pressed while a project is shown. */
  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.project()) {
      this.closed.emit();
    }
  }

  /** Emits {@link next} after a short delay, ignoring clicks while already transitioning. */
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
