import { Component } from '@angular/core';
import { Card } from '../../../../shared/components/card/card';
import { Button } from '../../../../shared/components/button/button';
import { SKILLS } from '../../../../shared/data/skills.data';

@Component({
  selector: 'app-skill-set',
  imports: [Card, Button],
  templateUrl: './skill-set.html',
  styleUrl: './skill-set.scss',
})
export class SkillSet {
  skills = SKILLS;
}
