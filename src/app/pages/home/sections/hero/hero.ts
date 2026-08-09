import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Button } from '../../../../shared/components/button/button';

@Component({
  selector: 'app-hero',
  imports: [Button, TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  readonly bannerPhrases = [
    'hero.banner.remote',
    'hero.banner.role',
    'hero.banner.location',
    'hero.banner.openToWork',
  ];

  readonly bannerGroups = [0, 1, 2, 3];
}
