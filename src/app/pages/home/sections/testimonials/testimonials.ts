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

    return this.testimonials.map((testimonial, index) => ({
      testimonial,
      position: this.getPosition(index, current, prevIndex, nextIndex),
    }));
  });

  /** Determines a testimonial's carousel role for the given indices. */
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
