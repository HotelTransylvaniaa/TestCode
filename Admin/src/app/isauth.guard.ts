import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsauthGuard implements CanActivate {
  constructor(private service:AuthService,private router:Router){}
  canActivate(){
    if(this.service.getToken()){
      return true
    }
   this.router.navigate(["login"])
   return false
  }
}
