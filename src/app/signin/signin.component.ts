import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogsigninComponent } from '../dialogsignin/dialogsignin.component';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  signinform!: FormGroup;

  constructor(private dialog: MatDialog, private formbuilder: FormBuilder) {}

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
      width: '30%',
    });
  }

  hide = true;

  /* button function */
  ngsubmit() {
    if (this.signinform.valid) {
      console.log(this.signinform.value);
    }
  }
}
