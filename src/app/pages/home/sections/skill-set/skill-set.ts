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

  /** Repositions the tooltip so it stays within the viewport for the focused/hovered skill. */
  updateTooltipShift(event: Event) {
    const item = event.currentTarget as HTMLElement;
    const box = this.tooltipBox()?.nativeElement;
    if (!box) return;

    const itemCenter = item.getBoundingClientRect().left + item.getBoundingClientRect().width / 2;
    const idealLeft = itemCenter - box.offsetWidth / 2;
    const idealRight = idealLeft + box.offsetWidth;

    this.tooltipShift.set(this.calculateShift(idealLeft, idealRight));
  }

  /** Horizontal offset needed to keep the tooltip inside the viewport, or 0 if it already fits. */
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
