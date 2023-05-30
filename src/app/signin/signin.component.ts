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
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  signinform!: FormGroup;

  bgimage:string="assets/images/fries.jpg"

  constructor(private dialog: MatDialog, private formbuilder: FormBuilder,
    private http:HttpClient,private router:Router) {}

  ngOnInit(): void {
    this.signinform = this.formbuilder.group({
      /* validation */
      emailFormControl: ['', Validators.required],
      password: ['', Validators.required],
    });
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
    this.http.get<any>("http://localhost:3000/register")
    .subscribe(res=>{
      const user =res.find((a:any)=>{
        return a.emailFormControl === this.signinform.value.emailFormControl && a.password === this.signinform.value.password
      });


       if(user){
        alert('Login Success!');
        this.signinform.reset();
        this.router.navigate(['main'])
      }else{
        alert('Invalid Credentials!');
      }

    },err=>{
      alert('Something went wrong!')
    })



  }
}
