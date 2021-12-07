import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { DashboardLayoutComponent } from "./layouts/dashboard-layout/dashboard-layout.component";
import { HomeComponent } from './pages/home/home.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { CreateAccountComponent } from './pages/authentication/create-account/create-account.component';
import { ForgotPasswordComponent } from './pages/authentication/forgot-password/forgot-password.component';
import { EventsComponent } from './pages/events/events.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'events',
        component: EventsComponent,
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'auth',
        component: AuthenticationComponent,
      },
      {
        path: 'createAccount',
        component: CreateAccountComponent,
      },
      {
        path: 'forgotPassword',
        component: ForgotPasswordComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
