import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUserRegister } from 'src/app/shared/interfaces/IUserRegister';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  hide = true;
  register!:FormGroup;
  isSubmitted = false;

  returnUrl='';
  constructor(private formbuilder:FormBuilder,private userService:UserService,private activatedRoute:ActivatedRoute,
    private router:Router) {

    }
  ngOnInit(): void {
    this.register = this.formbuilder.group({
      name:['',[Validators.required, Validators.minLength(5)]],
      email:['',Validators.required,Validators.email],
      password:['',Validators.required,Validators.minLength(8)],
      address:['',Validators.required,Validators.minLength(5)]
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
  }



  get fc(){
    return this.register.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this.register.invalid) return;

    const fv =this.register.value;
    const user :IUserRegister = {
      name: fv.name,
      email: fv.email,
      password:fv.password,
      address: fv.address
    };

    this.userService.register(user).subscribe(_ =>{
      this.router.navigateByUrl(this.returnUrl);
    })

    console.log(this.register.value);

  }



}
