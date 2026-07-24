import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { AboutMe } from './sections/about-me/about-me';
import { SkillSet } from './sections/skill-set/skill-set';
import { FeaturedProjects } from './sections/featured-projects/featured-projects';
import { Contact } from './sections/contact/contact';
import { Testimonials } from './sections/testimonials/testimonials';

@Component({
  selector: 'app-home',
  imports: [Hero, AboutMe, SkillSet, FeaturedProjects, Testimonials, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
