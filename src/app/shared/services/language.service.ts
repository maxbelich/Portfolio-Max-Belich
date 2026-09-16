import { Service, computed, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const STORAGE_KEY = 'lang';

/** Tracks and persists the active UI language (English/German) in localStorage. */
@Service()
export class LanguageService {
  private readonly translate = inject(TranslateService);

  readonly isGerman = computed(() => this.translate.currentLang() === 'de');

  /** Applies a previously saved language from localStorage, if any. */
  restore(): void {
    const savedLang = localStorage.getItem(STORAGE_KEY);
    if (savedLang) {
      this.translate.use(savedLang);
    }
  }

  /** Switches between English and German and persists the choice. */
  toggle(): void {
    const lang = this.isGerman() ? 'en' : 'de';
    this.translate.use(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }
}
