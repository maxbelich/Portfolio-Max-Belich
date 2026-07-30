import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOverlay } from './project-overlay';

describe('ProjectOverlay', () => {
  let component: ProjectOverlay;
  let fixture: ComponentFixture<ProjectOverlay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectOverlay],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectOverlay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
