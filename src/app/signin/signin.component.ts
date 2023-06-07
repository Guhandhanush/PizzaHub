import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogsigninComponent } from '../dialogsignin/dialogsignin.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  signinform!: FormGroup;
  isSubmitted= false;
  returnUrl='';
  bgimage: string = 'assets/images/fries.jpg';

  constructor(
    private dialog: MatDialog,
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private userService:UserService,
    private activatedroute:ActivatedRoute,

  ) {}

  ngOnInit(): void {
    this.signinform = this.formbuilder.group({
      /* validation */
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.returnUrl=this.activatedroute.snapshot.queryParams['returnUrl'];
  }


  /* open dialog */
  open() {
    this.dialog.open(DialogsigninComponent, {
      width: '40%',
    });
  }

  hide = true;

  /* button function */
  ngsubmit() {
    this.http.get<any>('http://localhost:3003/register').subscribe(
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

  get fc(){
    return this.signinform.controls;
  }


  submit(){
    if(this.signinform.valid){
    this.isSubmitted =true;
    if(this.signinform.invalid)return;

    this.userService.login({email:this.fc['email'].value,
    password:this.fc['password'].value}).subscribe(()=>{
      this.router.navigateByUrl('all');


    });
  }else{
    alert('Invalid Credentials');
  }

  }

}
