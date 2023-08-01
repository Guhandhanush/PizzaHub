import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogsigninComponent } from './dialogsignin/dialogsignin.component';
import { CartService } from './services/cart.service';
import { UserService } from './services/user.service';
import { user } from './shared/models/user';
import { Router } from '@angular/router';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'pizza';
  cartquantity = 0;
  user!: user;
  username!: string;

  constructor(
    private dialog: MatDialog,
    cartservice: CartService,
    private userService: UserService,
    private router: Router,
    private apiservice: ApiService
  ) {
    cartservice.getcartObservable().subscribe((newCart) => {
      this.cartquantity = newCart.totalCount;
    });

    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    });
  }

  logout() {
    this.apiservice.logout();
    this.router.navigate(['main']);
  }

  get isAuth() {
    return this.user.token;
  }

  changePassword() {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.width = '550px';
    this.dialog.open(DialogsigninComponent), dialogconfig;
  }
}
