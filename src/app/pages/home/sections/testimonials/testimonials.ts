import { Component, computed, signal } from '@angular/core';
import { TestimonialCard } from './testimonial-card/testimonial-card';
import { TESTIMONIALS } from '../../../../shared/data/testimonials.data';

@Component({
  selector: 'app-testimonials',
  imports: [TestimonialCard],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  testimonials = TESTIMONIALS;

  currentIndex = signal(0);

  visibleTestimonials = computed(() => {
    const length = this.testimonials.length;
    const current = this.currentIndex();
    const prevIndex = (current - 1 + length) % length;
    const nextIndex = (current + 1) % length;

    return [
      { testimonial: this.testimonials[prevIndex], position: 'prev' as const },
      { testimonial: this.testimonials[current], position: 'current' as const },
      { testimonial: this.testimonials[nextIndex], position: 'next' as const },
    ];
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
