import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { ApiService } from '../service/api.service';
import { MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-dialogsignin',
  templateUrl: './dialogsignin.component.html',
  styleUrls: ['./dialogsignin.component.css'],
})
export class DialogsigninComponent implements OnInit {
  constructor(private formbuilder: FormBuilder, private api: ApiService, private dialogref :MatDialogRef<DialogsigninComponent>) {}
  registerform!: FormGroup;
  ngOnInit(): void {
    this.registerform = this.formbuilder.group({
      username: ['', Validators.required],
      emailFormControl: ['', Validators.required],
      number: ['', Validators.required],
      address: ['', Validators.required],
      password:['',Validators.required]
    });
  }

  submit() {
    if(this.registerform.valid){
      this.api.postusers(this.registerform.value)
      .subscribe({
        next:(res)=>{
          alert('User added successfully')
          this.registerform.reset();
          this.dialogref.close('saved');
        },
        error:()=>{
          alert('Error while adding the user')
        }
      })
    }
  }
}
