import { Routes } from '@angular/router';

export const APPLICANT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../applicant/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('../applicant/profile/profile.component').then(m => m.ProfileComponent)
  },
  {
    path: 'application-form',
    loadComponent: () =>
      import('../applicant/application-form/application-form.component').then(m => m.ApplicationFormComponent)
  },
  {
    path: 'documents',
    loadComponent: () =>
      import('../applicant/documents/documents.component').then(m => m.DocumentsComponent)
  }
];
