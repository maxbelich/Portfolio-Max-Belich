import { Component, effect, HostListener, inject, input, OnDestroy, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../../shared/services/language.service';

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

  toggleLanguage() {
    this.languageService.toggle();
  }

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
