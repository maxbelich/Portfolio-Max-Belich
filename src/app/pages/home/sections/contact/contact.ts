import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { form, required, email, validate, submit, FormField } from '@angular/forms/signals';
import { TranslatePipe } from '@ngx-translate/core';
import { ContactMessage } from '../../../../shared/interfaces/contact-message';
import { ContactService } from '../../../../shared/services/contact.service';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  imports: [FormField, RouterLink, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly contactService = inject(ContactService);

  protected readonly status = signal<SubmitStatus>('idle');

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
    this.status.set('submitting');
    await submit(this.contactForm, async () => {
      try {
        await this.contactService.send(this.contactModel());
        this.status.set('success');
        this.contactForm().reset({ name: '', email: '', message: '', privacyAccepted: false });
      } catch {
        this.status.set('error');
      }
    });
  }
}
