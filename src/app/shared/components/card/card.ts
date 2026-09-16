import { Component, input } from '@angular/core';

/** Generic content card with an optional eyebrow label. */
@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  eyebrow = input<string>('');
}
