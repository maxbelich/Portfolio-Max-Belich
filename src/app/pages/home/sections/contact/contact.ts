import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { form, required, email, validate, submit, FormField } from '@angular/forms/signals';
import { TranslatePipe } from '@ngx-translate/core';
import { ContactMessage } from '../../../../shared/interfaces/contact-message';

@Component({
  selector: 'app-contact',
  imports: [FormField, RouterLink, TranslatePipe],
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
    required(schemaPath.name, { message: 'contact.errors.nameRequired' });
    required(schemaPath.email, { message: 'contact.errors.emailRequired' });
    email(schemaPath.email, { message: 'contact.errors.emailInvalid' });
    required(schemaPath.message, { message: 'contact.errors.messageRequired' });
    validate(schemaPath.privacyAccepted, ({ value }) => {
      if (!value()) {
        return { kind: 'privacyRequired', message: 'contact.errors.privacyRequired' };
      }
      return null;
    });
  });

  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    await submit(this.contactForm, async () => {});
  }
}
