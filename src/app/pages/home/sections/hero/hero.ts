import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Button } from '../../../../shared/components/button/button';

/** Hero section with an auto-scrolling phrase banner. */
@Component({
  selector: 'app-hero',
  imports: [Button, TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  /** Translation keys for the phrases shown in the banner marquee. */
  readonly bannerPhrases = [
    'hero.banner.remote',
    'hero.banner.role',
    'hero.banner.location',
    'hero.banner.openToWork',
  ];

  /** Repeated group indices used to render duplicate phrase sets for a seamless loop. */
  readonly bannerGroups = [0, 1, 2, 3];
}
