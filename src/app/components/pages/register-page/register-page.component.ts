import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})

export class RegisterPageComponent {
  hide = true;
  register!: FormGroup;
  isSubmitted = false;
  responseMessage: any;


  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.register = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      number: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  submit() {
    if (this.register.valid) {
      this.api.signup(this.register.value).subscribe({
        next: (res) => {
          this.responseMessage = res;
          alert('User added successfully');
          this.register.reset();
          this.router.navigateByUrl('/signin');
        },
        error: (error) => {
          this.responseMessage = error?.message;
          alert('Error while adding the user');
          this.register.reset();
        },
      });
    }
  }

}
