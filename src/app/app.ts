import { Component, effect, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Portfolio');

  private router = inject(Router);
  private translate = inject(TranslateService);
  isLegalPage = signal(false);

  constructor() {
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe(() => {
      const active = this.router.url === '/legal-notice' || this.router.url === '/privacy-policy';
      this.isLegalPage.set(active);
      document.documentElement.classList.toggle('legal-notice-bg', active);
    });

    effect(() => {
      const lang = this.translate.currentLang() ?? this.translate.fallbackLang() ?? 'en';
      document.documentElement.setAttribute('lang', lang);
    });
  }
}
