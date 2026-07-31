import { Component, input } from '@angular/core';
import { Testimonial } from '../../../../../shared/interfaces/testimonial';

@Component({
  selector: 'app-testimonial-card',
  imports: [],
  templateUrl: './testimonial-card.html',
  styleUrl: './testimonial-card.scss',
})
export class TestimonialCard {
  testimonial = input.required<Testimonial>();
}
