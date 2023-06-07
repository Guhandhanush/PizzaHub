import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { user } from '../shared/models/user';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/constants/urs';
import { ToastrService } from 'ngx-toastr';
import { IUserRegister } from '../shared/interfaces/IUserRegister';

const USER_KEY = 'user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<user>(this.getUserLocalStorage());
  public userObservable!: Observable<user>;
  constructor(private http: HttpClient, private toastrService: ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin: IUserLogin): Observable<user> {
    return this.http.post<user>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.setUserLocalStorage(user);
          this.userSubject.next(user);
          alert(`Welcome ${user.name}`);
          this.toastrService.success(
            `Welcome to PizzaHub ${user.name}!`,
            'Logged in successfully'
          );
        },
        error: (errorresponse) => {
          alert("Login failed")
          this.toastrService.error(errorresponse.error, 'Login failed');
        },
      })
    );
  }

  register(userRegister:IUserRegister):Observable<user>{
    return this.http.post<user>(USER_REGISTER_URL,userRegister).pipe(
      tap({
        next: (user) => {
          this.setUserLocalStorage(user);
          this.userSubject.next(user);
          alert(`Welcome to PizzaHub ${user.name}`);
        },
      error:(err) => {
        alert(`Register Failed`);
        console.log(err);

      }
      })
    )
  }

  logout(){
    this.userSubject.next(new user());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  private setUserLocalStorage(user:user){
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserLocalStorage():user{
    const UserJson = localStorage.getItem(USER_KEY);
    if(UserJson) return JSON.parse(UserJson) as user;
    return new user();
  }

}
