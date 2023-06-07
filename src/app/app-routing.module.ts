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

const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path:"",
    component:MainComponent
  },
  {
    path: 'main',
    component: MainComponent,

  },
  {
    path:"register",
    component:DialogsigninComponent
  },
  {
    path:"admin",
    component:AdminComponent
  }, {
    path: 'deals',
    component: DealsComponent,
  },
  {
    path:'all',
    component:AllComponent
  },
  {
    path:'search/:search',
    component:AllComponent
  },
  {
    path:'tag/:tag',
    component:AllComponent
  },
  {
    path:'food/:id',
    component:FoodPageComponent
  },
  {
    path:'cart-page',
    component:CartPageComponent
  },{
    path:'register-page',
    component:RegisterPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
