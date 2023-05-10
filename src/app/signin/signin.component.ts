import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'
import {MatDialog} from '@angular/material/dialog'
import { DialogsigninComponent } from '../dialogsignin/dialogsignin.component';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

constructor(private dialog:MatDialog){

}
/* open dialog */
open(){
  this.dialog.open(DialogsigninComponent,{
    width:"30%"
  })
}

/* validation */
emailFormControl=new FormControl("",[Validators.required, Validators.email])
  password=new FormControl("",[Validators.required,Validators.maxLength(16),Validators.minLength(8)])
  hide = true;

/* button function */
ngsubmit(){
  alert('Thank You for siging in!')
}

}
