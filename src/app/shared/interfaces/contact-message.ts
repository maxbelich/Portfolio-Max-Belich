/** Payload submitted by the contact form. */
export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  privacyAccepted: boolean;
}
