import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(public auth:AuthService, public router:Router) { }

  canActivate(router:ActivatedRouteSnapshot):boolean{
    let expectedRoleArray = router.data;
    expectedRoleArray = expectedRoleArray['expectedRole'];

    const token:any = localStorage.getItem('token');
    var tokenPayload:any;
    try{
      tokenPayload = jwt_decode(token);
    }
    catch(err){
      localStorage.clear();
      this.router.navigate(['/all']);
    }

    let checkRole = false;

    for(let i=0; i<expectedRoleArray['length'];i++){
      if(expectedRoleArray[i] == tokenPayload.role){
        checkRole = true;
      }
    }
    if(tokenPayload.role == 'admin'){
      if(this.auth.isAunthenticated() && checkRole ){
        return true;
      }
      else{
        this.router.navigate(['/sidebar']);
        return false;
      }
    }
    else{
      this.router.navigate(['/all']);
      return false;
    }
  }
}
