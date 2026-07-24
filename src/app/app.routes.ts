import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { LegalNotice } from './pages/legal-notice/legal-notice';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'impressum',
    component: LegalNotice,
  },
  {
    path: 'datenschutz',
    component: PrivacyPolicy,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
