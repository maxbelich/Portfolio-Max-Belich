import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ContactMessage } from '../interfaces/contact-message';

interface MailResponse {
  success: boolean;
  error?: string;
}

/** Sends contact-form messages to the backend mail endpoint. */
@Service()
export class ContactService {
  private readonly http = inject(HttpClient);

  /** Posts the message to {@link environment.mailEndpoint} and resolves with the mail result. */
  send(message: ContactMessage): Promise<MailResponse> {
    return firstValueFrom(this.http.post<MailResponse>(environment.mailEndpoint, message));
  }
}
