import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Card } from '../../../../shared/components/card/card';

/** About-me section of the home page. */
@Component({
  selector: 'app-about-me',
  imports: [Card, TranslatePipe],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {}
