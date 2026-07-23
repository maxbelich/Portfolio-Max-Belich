import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSet } from './skill-set';

describe('SkillSet', () => {
  let component: SkillSet;
  let fixture: ComponentFixture<SkillSet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillSet],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillSet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
