import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getUserList() {
    return this.http.get('http://localhost:8000/api/admin/users')
  }
  deletUser(id:any){
    return this.http.delete(`http://localhost:8000/api/admin/users/${id}`)
  }
  addUser(user:any){
    console.log(user)
    return this.http.post(`http://localhost:8000/api/admin/users`,user)
  }

}
