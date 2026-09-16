import { Component, computed, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TestimonialCard } from './testimonial-card/testimonial-card';
import { TESTIMONIALS } from '../../../../shared/data/testimonials.data';

/** Position of a testimonial relative to the active carousel slide. */
type CarouselPosition = 'current' | 'prev' | 'next' | 'hidden';

/** Testimonials carousel that cycles through {@link TESTIMONIALS}. */
@Component({
  selector: 'app-testimonials',
  imports: [TestimonialCard, TranslatePipe],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  testimonials = TESTIMONIALS;

  currentIndex = signal(0);

  /** Maps each testimonial to its carousel position relative to {@link currentIndex}. */
  displayItems = computed(() => {
    const length = this.testimonials.length;
    const current = this.currentIndex();
    const prevIndex = (current - 1 + length) % length;
    const nextIndex = (current + 1) % length;

    return this.testimonials.map((testimonial, index) => {
      let position: CarouselPosition = 'hidden';
      if (index === current) {
        position = 'current';
      } else if (index === prevIndex) {
        position = 'prev';
      } else if (index === nextIndex) {
        position = 'next';
      }
      return { testimonial, position };
    });
  });

  /** Moves to the previous testimonial, wrapping around at the start. */
  prev() {
    this.currentIndex.update((i) => (i - 1 + this.testimonials.length) % this.testimonials.length);
  }

  /** Moves to the next testimonial, wrapping around at the end. */
  next() {
    this.currentIndex.update((i) => (i + 1) % this.testimonials.length);
  }

  /** Jumps directly to the testimonial at the given index. */
  goTo(index: number) {
    this.currentIndex.set(index);
  }
}
