import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})

export class SigninComponent implements OnInit {
  signinform!: FormGroup;
  isSubmitted = false;
  returnUrl = '';
  responseMessage: any;
  hide = true;

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
    private api: ApiService,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.signinform = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.returnUrl = this.activatedroute.snapshot.queryParams['returnUrl'];
  }

  ngsubmit() {
    this.http.get<any>('http://localhost:2628/users').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.email === this.signinform.value.email &&
            a.password === this.signinform.value.password
          );
        });

        if (user) {
          alert(`Login successful  Welcome ${user.username}`);
          this.signinform.reset();
          this.router.navigate(['all']);
        } else {
          alert('Invalid Credentials!');
        }
      },
      (err) => {
        alert('Something went wrong!');
      }
    );
  }

  get fc() {
    return this.signinform.controls;
  }

  submit() {
    if (this.signinform.valid) {
      this.isSubmitted = true;
      if (this.signinform.invalid) return;

      this.userService
        .login({
          email: this.fc['email'].value,
          password: this.fc['password'].value,
        })
        .subscribe(() => {
          this.router.navigateByUrl('all');
        });
    } else {
      alert('Invalid Credentials');
    }
  }

  handleSubmit() {
    var signinData = this.signinform.value;
    var data = {
      email: signinData.email,
      password: signinData.password,
    };
    this.api.login(data).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/all']);
        this.signinform.reset();
      },
      (err) => {
        this.responseMessage = err.error?.message;
        console.log(this.responseMessage);
      }
    );
  }
}
