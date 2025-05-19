import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../admin/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'manage-applicants',
    loadComponent: () =>
      import('../admin/manage-applicants/manage-applicants.component').then(m => m.ManageApplicantsComponent)
  },
  {
    path: 'applicant-details',
    loadComponent: () =>
      import('../admin/applicant-details/applicant-details.component').then(m => m.ApplicantDetailsComponent)
  },
  {
    path: 'announcements',
    loadComponent: () =>
      import('../admin/announcements/announcements.component').then(m => m.AnnouncementsComponent)
  }
];
