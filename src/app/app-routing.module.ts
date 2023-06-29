import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { MainComponent } from './main/main.component';
import { DealsComponent } from './deals/deals.component';
import { DialogsigninComponent } from './dialogsignin/dialogsignin.component';
import { AdminComponent } from './admin/admin.component';
import { AllComponent } from './components/pages/all/all.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { SidebarComponent } from './components/partials/sidebar/sidebar.component';
import { RouteGuardService } from './service/route-guard.service';
import { DashboardHeaderComponent } from './components/partials/dashboard-header/dashboard-header.component';
import { ManageCategoryComponent } from './admin-components/manage-category/manage-category.component';
import { ManageProductsComponent } from './admin-components/manage-products/manage-products.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'register',
    component: DialogsigninComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['admin'],
    },
  },
  {
    path: 'deals',
    component: DealsComponent,
  },
  {
    path: 'all',
    component: AllComponent,
  },
  {
    path: 'search/:search',
    component: AllComponent,
  },
  {
    path: 'tag/:tag',
    component: AllComponent,
  },
  {
    path: 'food/:id',
    component: FoodPageComponent,
  },
  {
    path: 'cart-page',
    component: CartPageComponent,
  },
  {
    path: 'register-page',
    component: RegisterPageComponent,
  },
  {
    path: 'checkout',
    component: PaymentPageComponent,
  },
  {
    path:'category',
    component:ManageCategoryComponent,
  },
  {
    path: 'sidebar',
    component: SidebarComponent,
    children: [
      {
        path: 'users',
        component: AdminComponent,
      },
      {
        path: 'admin',
        component: DashboardComponent,
      },
      {
        path: 'category',
        component: ManageCategoryComponent,
      },
      {
        path: 'products',
        component: ManageProductsComponent,
      },

    ],
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['admin'],
    },
  },
  {
    path: 'nav',
    component: DashboardHeaderComponent,
  },
  {
    path: 'category',
    component: ManageCategoryComponent,
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['admin'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
