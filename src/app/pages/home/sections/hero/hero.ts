import { Component } from '@angular/core';
import { Button } from '../../../../shared/components/button/button';

@Component({
  selector: 'app-hero',
  imports: [Button],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  readonly bannerPhrases = [
    'Available for remote work',
    'Fullstack Developer',
    'Based in Stuttgart',
    'Open to work',
  ];

  readonly bannerGroups = [0, 1, 2, 3];
}
