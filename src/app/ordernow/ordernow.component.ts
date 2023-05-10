import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-ordernow',
  templateUrl: './ordernow.component.html',
  styleUrls: ['./ordernow.component.css']
})
export class OrdernowComponent {
  number = new FormControl('',[Validators.required,Validators.min(10), Validators.max(10)])
  address = new FormControl('',[Validators.required])
  quantity = new FormControl('',Validators.required)

  submit(){
    alert('We have Received your order!')
  }
}
