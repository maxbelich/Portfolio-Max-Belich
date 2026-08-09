import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Testimonial } from '../../../../../shared/interfaces/testimonial';

@Component({
  selector: 'app-testimonial-card',
  imports: [TranslatePipe],
  templateUrl: './testimonial-card.html',
  styleUrl: './testimonial-card.scss',
})
export class TestimonialCard {
  testimonial = input.required<Testimonial>();
  dimmed = input<boolean>(false);
}
