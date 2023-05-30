import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { MainComponent } from './main/main.component';
import { DealsComponent } from './deals/deals.component';
import { DialogsigninComponent } from './dialogsignin/dialogsignin.component';
import { AdminComponent } from './admin/admin.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
