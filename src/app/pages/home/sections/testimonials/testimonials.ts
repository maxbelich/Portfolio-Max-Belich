import { Component, computed, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TestimonialCard } from './testimonial-card/testimonial-card';
import { TESTIMONIALS } from '../../../../shared/data/testimonials.data';

type CarouselPosition = 'current' | 'prev' | 'next' | 'hidden';

@Component({
  selector: 'app-testimonials',
  imports: [TestimonialCard, TranslatePipe],
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

    return this.testimonials.map((testimonial, index) => ({
      testimonial,
      position: this.getPosition(index, current, prevIndex, nextIndex),
    }));
  });

  getPosition(
    index: number,
    current: number,
    prevIndex: number,
    nextIndex: number,
  ): CarouselPosition {
    if (index === current) return 'current';
    if (index === prevIndex) return 'prev';
    if (index === nextIndex) return 'next';
    return 'hidden';
  }

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
