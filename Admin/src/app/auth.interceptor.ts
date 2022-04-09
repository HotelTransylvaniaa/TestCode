import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

 token:any=localStorage.getItem("token")
  constructor(private router: Router) {
    // console.log(localStorage.getItem("token"),"in interceptor")
  }


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   request= request.clone({
     headers:request.headers.set('authorization',this.token)
   })
    //return next.handle(request).catch(err => this.handleAuthErrorerr(err));
    return next.handle(request).pipe( tap(() => {},
      (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status !== 401) {
         return;
        }
        localStorage.removeItem("token");
        this.router.navigate(['login']);
        console.log("unauth")
      }
    }));
  }
}
