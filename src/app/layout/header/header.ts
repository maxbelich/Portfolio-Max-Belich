import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderOverlay } from './header-overlay/header-overlay';

@Component({
  selector: 'app-header',
  imports: [RouterLink, HeaderOverlay],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }
}
