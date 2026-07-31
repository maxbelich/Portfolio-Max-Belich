import { Component, computed, signal } from '@angular/core';
import { TestimonialCard } from './testimonial-card/testimonial-card';
import { TESTIMONIALS } from '../../../../shared/data/testimonials.data';

type CarouselPosition = 'current' | 'prev' | 'next' | 'hidden';

@Component({
  selector: 'app-testimonials',
  imports: [TestimonialCard],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  testimonials = TESTIMONIALS;

  currentIndex = signal(0);

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

  prev() {
    this.currentIndex.update((i) => (i - 1 + this.testimonials.length) % this.testimonials.length);
  }

  next() {
    this.currentIndex.update((i) => (i + 1) % this.testimonials.length);
  }

  goTo(index: number) {
    this.currentIndex.set(index);
  }
}
