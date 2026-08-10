import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../shared/services/language.service';
import { HeaderOverlay } from './header-overlay/header-overlay';

@Component({
  selector: 'app-header',
  imports: [RouterLink, HeaderOverlay, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly languageService = inject(LanguageService);

  menuOpen = signal(false);
  isGerman = this.languageService.isGerman;

  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }

  toggleLanguage() {
    this.languageService.toggle();
  }
}
