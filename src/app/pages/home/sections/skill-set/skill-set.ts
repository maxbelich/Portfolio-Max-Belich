import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Card } from '../../../../shared/components/card/card';
import { Button } from '../../../../shared/components/button/button';
import { SKILLS } from '../../../../shared/data/skills.data';

@Component({
  selector: 'app-skill-set',
  imports: [Card, Button, TranslatePipe],
  templateUrl: './skill-set.html',
  styleUrl: './skill-set.scss',
})
export class SkillSet {
  skills = SKILLS;

  tooltipBox = viewChild<ElementRef<HTMLElement>>('tooltipBox');
  tooltipShift = signal(0);

  updateTooltipShift(event: Event) {
    const item = event.currentTarget as HTMLElement;
    const box = this.tooltipBox()?.nativeElement;
    if (!box) return;

    const itemCenter = item.getBoundingClientRect().left + item.getBoundingClientRect().width / 2;
    const idealLeft = itemCenter - box.offsetWidth / 2;
    const idealRight = idealLeft + box.offsetWidth;

    this.tooltipShift.set(this.calculateShift(idealLeft, idealRight));
  }

  calculateShift(idealLeft: number, idealRight: number): number {
    const margin = 16;
    if (idealLeft < margin) {
      return margin - idealLeft;
    }
    if (idealRight > window.innerWidth - margin) {
      return window.innerWidth - margin - idealRight;
    }
    return 0;
  }
}
