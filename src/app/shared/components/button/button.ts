import { Component, input } from '@angular/core';

/** Reusable call-to-action link styled as a button. */
@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  label = input.required<string>();
  target = input.required<string>();
}
