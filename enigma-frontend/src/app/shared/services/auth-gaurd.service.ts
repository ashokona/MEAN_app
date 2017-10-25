import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.router = router;
    console.log(this.router.url);
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.userService.isAuthenticated.take(1).map(bool => {
      if (bool) {
        let role = this.userService.getCurrentUser().role.toLocaleLowerCase();
        let currentUrl = state.url.toLowerCase().slice(1,state.url.length);
        console.log(currentUrl)
        if(role == currentUrl){
            return bool
        }
        
      }
      else{
        this.router.navigate(['/']);
      }
    });
  }

  // canActivate(){
  //   console.log(this.router.url);
  //   let role = this.userService.getCurrentUser().role;
  //   //console.log(role);
  //   if(role == "Reseller"){
  //     return true
  //   }else{
  //     return false
  //   }
  // }
}
