import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DealsComponent } from './deals/deals.component';
import { SigninComponent } from './signin/signin.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogsigninComponent } from './dialogsignin/dialogsignin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OrdernowComponent } from './ordernow/ordernow.component';
import { RatingModule } from 'ng-starrating';
import { AdminComponent } from './admin/admin.component';
import { AllComponent } from './components/pages/all/all.component';
import { SearchbarComponent } from './components/partials/searchbar/searchbar.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/partials/title/title.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { ToastrModule } from 'ngx-toastr';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/pages/forgot-password/forgot-password.component';
import { TokenInterceptorInterceptor } from './token-interceptor.interceptor';
import { ManageCategoryComponent } from './admin-components/manage-category/manage-category.component';
import { DialogCategoryComponent } from './admin-components/dialog-category/dialog-category.component';
import { ManageProductsComponent } from './admin-components/manage-products/manage-products.component';
import { SidebarComponent } from './components/partials/sidebar/sidebar.component';
import { DashboardHeaderComponent } from './components/partials/dashboard-header/dashboard-header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    DealsComponent,
    SigninComponent,
    MainComponent,
    DialogsigninComponent,
    OrdernowComponent,
    AdminComponent,
    AllComponent,
    SearchbarComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    RegisterPageComponent,
    PaymentPageComponent,
    DashboardComponent,
    SidebarComponent,
    ForgotPasswordComponent,
    DashboardHeaderComponent,
    ManageCategoryComponent,
    DialogCategoryComponent,
    ManageProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatChipsModule,
    HttpClientModule,
    FormsModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatSortModule,
    MatCardModule,
    MatBadgeModule,
    RatingModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatSlideToggleModule
  ],
  providers: [
    HttpClientModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
