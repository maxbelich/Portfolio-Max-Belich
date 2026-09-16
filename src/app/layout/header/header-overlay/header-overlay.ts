import { Component, effect, HostListener, inject, input, OnDestroy, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../../shared/services/language.service';

/** Full-screen mobile navigation overlay; locks page scroll while open. */
@Component({
  selector: 'app-header-overlay',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './header-overlay.html',
  styleUrl: './header-overlay.scss',
})
export class HeaderOverlay implements OnDestroy {
  private readonly languageService = inject(LanguageService);

  open = input<boolean>(false);
  closed = output<void>();
  isGerman = this.languageService.isGerman;

  /** Switches the active translation language. */
  toggleLanguage() {
    this.languageService.toggle();
  }

  constructor() {
    effect(() => {
      document.documentElement.classList.toggle('scroll-locked', this.open());
    });
  }

  /** Removes the scroll lock in case the overlay unmounts while still open. */
  ngOnDestroy() {
    document.documentElement.classList.remove('scroll-locked');
  }

  /** Closes the overlay when Escape is pressed while it's open. */
  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.open()) {
      this.closed.emit();
    }
  }
}
