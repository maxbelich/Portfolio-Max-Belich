import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { HeaderOverlay } from './header-overlay/header-overlay';

@Component({
  selector: 'app-header',
  imports: [RouterLink, HeaderOverlay, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private translate = inject(TranslateService);

  menuOpen = signal(false);
  isGerman = computed(() => this.translate.currentLang() === 'de');

  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }

  toggleLanguage() {
    this.translate.use(this.isGerman() ? 'en' : 'de');
  }
}
