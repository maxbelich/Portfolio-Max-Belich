import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { form, required, email, validate, submit, FormField } from '@angular/forms/signals';
import { ContactMessage } from '../../../../shared/interfaces/contact-message';

@Component({
  selector: 'app-contact',
  imports: [FormField, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contactModel = signal<ContactMessage>({
    name: '',
    email: '',
    message: '',
    privacyAccepted: false,
  });

  contactForm = form(this.contactModel, (schemaPath) => {
    required(schemaPath.name, { message: 'Oops! it seems your name is missing ' });
    required(schemaPath.email, { message: 'Hoppla! your email is required' });
    email(schemaPath.email, { message: "Hoppla! that doesn't look like a valid email" });
    required(schemaPath.message, { message: 'What do you need to develop?' });
    validate(schemaPath.privacyAccepted, ({ value }) => {
      if (!value()) {
        return { kind: 'privacyRequired', message: 'Please accept the privacy policy.' };
      }
      return null;
    });
  });

  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    // submit() markiert alle Felder als touched, damit Fehler auch ohne vorheriges
    // Antippen sichtbar werden, und führt die Action nur bei gültigem Formular aus.
    await submit(this.contactForm, async () => {
      // TODO: tatsächliches Versenden
    });
  }
}
