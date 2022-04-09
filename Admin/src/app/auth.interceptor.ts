import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
 token:any
  constructor() {
    this.token=localStorage.getItem("token")
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   request= request.clone({
     headers:request.headers.set('authorization',this.token)
   })
    return next.handle(request);
  }
}
