import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ContactMessage } from '../interfaces/contact-message';

interface MailResponse {
  success: boolean;
  error?: string;
}

@Service()
export class ContactService {
  private readonly http = inject(HttpClient);

  send(message: ContactMessage): Promise<MailResponse> {
    return firstValueFrom(this.http.post<MailResponse>(environment.mailEndpoint, message));
  }
}
