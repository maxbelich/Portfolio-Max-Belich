import { Service, computed, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const STORAGE_KEY = 'lang';

@Service()
export class LanguageService {
  private readonly translate = inject(TranslateService);

  readonly isGerman = computed(() => this.translate.currentLang() === 'de');

  restore(): void {
    const savedLang = localStorage.getItem(STORAGE_KEY);
    if (savedLang) {
      this.translate.use(savedLang);
    }
  }

  toggle(): void {
    const lang = this.isGerman() ? 'en' : 'de';
    this.translate.use(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }
}
