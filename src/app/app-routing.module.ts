import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { DashboardLayoutComponent } from "./layouts/dashboard-layout/dashboard-layout.component";
import { HomeComponent } from './pages/home/home.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { CreateAccountComponent } from './pages/authentication/create-account/create-account.component';
import { ForgotPasswordComponent } from './pages/authentication/forgot-password/forgot-password.component';
import { EventsComponent } from './pages/events/events.component';
import { EventComponent } from './pages/events/event/event.component';
import { ProducersComponent } from './pages/producers/producers.component';
import { ProducerComponent } from './pages/producers/producer/producer.component';
import { AdministratorComponent } from './pages/administrator/administrator.component';
import { ProducerPageComponent } from './pages/producer-page/producer-page.component';
import { CreateEventComponent } from './pages/events/create-event/create-event.component';
import { CreateProductComponent } from './pages/products/create-product/create-product.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProducerProductsComponent } from './pages/products/producer-products/producer-products.component';

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
      },
      {
        path: 'event/:id',
        component: EventComponent,
      },
      {
        path: 'producers',
        component: ProducersComponent,
      },
      {
        path: 'producer/:id',
        component: ProducerComponent,
      },
      {
        path: 'administrator',
        component: AdministratorComponent,
      },
      {
        path: 'addEvent/:id',
        component: CreateEventComponent,
      },
      {
        path: 'functions',
        component: ProducerPageComponent,
      },
      {
        path: 'newProduct/:id',
        component: CreateProductComponent,
      },
      {
        path: 'products/:id',
        component: ProductsComponent,
      },
      {
        path: 'producer-products/:id',
        component: ProducerProductsComponent,
      },
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
