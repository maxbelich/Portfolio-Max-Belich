import { Component, effect, HostListener, input, OnDestroy, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-overlay',
  imports: [RouterLink],
  templateUrl: './header-overlay.html',
  styleUrl: './header-overlay.scss',
})
export class HeaderOverlay implements OnDestroy {
  open = input<boolean>(false);
  closed = output<void>();

  constructor() {
    effect(() => {
      document.documentElement.classList.toggle('scroll-locked', this.open());
    });
  }

  ngOnDestroy() {
    document.documentElement.classList.remove('scroll-locked');
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.open()) {
      this.closed.emit();
    }
  }
}
