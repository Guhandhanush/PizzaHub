import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  hide = true;
  register!: FormGroup;
  isSubmitted = false;
  responseMessage:any;

  returnUrl = '';
  constructor(
    private formbuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private api: ApiService,

  ) {}
  ngOnInit(): void {
    this.register = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      number: ['', Validators.required],
      address: ['', Validators.required],
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
  }

  submit() {
    if (this.register.valid) {
      this.api.signup(this.register.value).subscribe({
        next: (res) => {
          this.responseMessage = res;
          alert('User added successfully');
          this.register.reset();
          this.router.navigate(['signin']);
        },
        error: (error) => {
          this.responseMessage=error?.message;
          alert('Error while adding the user');
          this.register.reset();
        },
      });
    }
  }
}
