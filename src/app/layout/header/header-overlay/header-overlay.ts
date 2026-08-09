import { Component, computed, effect, HostListener, inject, input, OnDestroy, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-overlay',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './header-overlay.html',
  styleUrl: './header-overlay.scss',
})
export class HeaderOverlay implements OnDestroy {
  private translate = inject(TranslateService);

  open = input<boolean>(false);
  closed = output<void>();
  isGerman = computed(() => this.translate.currentLang() === 'de');

  toggleLanguage() {
    this.translate.use(this.isGerman() ? 'en' : 'de');
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
