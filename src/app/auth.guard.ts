import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private rut:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(sessionStorage.getItem('islogin')==undefined){
        this.rut.navigate(['/']);
        return false;
        
      }
      else{
        return true;
      }
    
  }
  isloggedin(){
    if(sessionStorage.getItem('islogin')){
      return true;
    }
    return false;
  }

  logout(){
    sessionStorage.removeItem('islogin');
    
  }
  
  
}
