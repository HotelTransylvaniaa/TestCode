import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  adminLogin(admindata:any) {
    return this.http.post('http://localhost:8000/api/admin/login',admindata)
  }
}
