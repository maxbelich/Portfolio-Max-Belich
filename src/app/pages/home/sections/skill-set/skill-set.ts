import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Card } from '../../../../shared/components/card/card';
import { Button } from '../../../../shared/components/button/button';
import { SKILLS } from '../../../../shared/data/skills.data';

/** Skill grid with a hover tooltip that repositions itself to stay on screen. */
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

  /** Shifts the tooltip horizontally so it stays within the viewport for the hovered skill. */
  updateTooltipShift(event: MouseEvent) {
    const item = event.currentTarget as HTMLElement;
    const box = this.tooltipBox()?.nativeElement;
    if (!box) return;

    const margin = 16;
    const itemCenter = item.getBoundingClientRect().left + item.getBoundingClientRect().width / 2;
    const idealLeft = itemCenter - box.offsetWidth / 2;
    const idealRight = idealLeft + box.offsetWidth;

    let shift = 0;
    if (idealLeft < margin) {
      shift = margin - idealLeft;
    } else if (idealRight > window.innerWidth - margin) {
      shift = window.innerWidth - margin - idealRight;
    }

    this.tooltipShift.set(shift);
  }
}
