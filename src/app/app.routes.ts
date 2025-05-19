import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';



export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'faq',
    loadComponent: () =>
      import('./pages/faq/faq.component').then(m => m.FaqComponent)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./auth/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'applicant',
    loadChildren: () =>
      import('./routes/applicant.routes').then(m => m.APPLICANT_ROUTES)
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./routes/admin.routes').then(m => m.ADMIN_ROUTES)
  },

  {
  path: 'applicant/dashboard',
  loadComponent: () =>
    import('./applicant/dashboard/dashboard.component').then(
      (m) => m.DashboardComponent
    ),
}

];

export const appRouterProviders = [provideRouter(routes)];
