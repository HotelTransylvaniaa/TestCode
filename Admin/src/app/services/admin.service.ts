import { Injectable } from '@angular/core';
import { HttpClient ,HttpBackend} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient,private handler: HttpBackend) { }
  adminLogin(admindata:any) {
    console.log("admindata",admindata)
    this.http=new HttpClient(this.handler);
    return this.http.post('http://localhost:8000/api/admin/login',admindata)
  }
}
