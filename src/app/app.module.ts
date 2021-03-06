import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './pages/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAccountComponent } from './pages/authentication/create-account/create-account.component';
import { ForgotPasswordComponent } from './pages/authentication/forgot-password/forgot-password.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselItemComponent } from './components/carousel/carousel-item/carousel-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { EventsComponent } from './pages/events/events.component';
import { EventComponent } from './pages/events/event/event.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProducersComponent } from './pages/producers/producers.component';
import { ProducerComponent } from './pages/producers/producer/producer.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { AdministratorComponent } from './pages/administrator/administrator.component';
import { ProducerPageComponent } from './pages/producer-page/producer-page.component';
import { MatTableModule } from '@angular/material/table';
import { CreateEventComponent } from './pages/events/create-event/create-event.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ProductsComponent } from './pages/products/products.component';
import { CreateProductComponent } from './pages/products/create-product/create-product.component';
import { ProducerProductsComponent } from './pages/products/producer-products/producer-products.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    DashboardLayoutComponent,
    HomeComponent,
    AuthenticationComponent,
    CreateAccountComponent,
    ForgotPasswordComponent,
    CarouselComponent,
    CarouselItemComponent,
    EventsComponent,
    EventComponent,
    ProducersComponent,
    ProducerComponent,
    AdministratorComponent,
    ProducerPageComponent,
    CreateEventComponent,
    ProductsComponent,
    CreateProductComponent,
    ProducerProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatSnackBarModule,
    Ng2SearchPipeModule,
    MatSelectModule,
    MatMenuModule,
    MatTableModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
