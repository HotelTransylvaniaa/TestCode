import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }
  getbookingList() {
    return this.http.get('http://localhost:8000/api/admin/booking')
  }

  deletebookingList(id:any) {
    return this.http.delete(`http://localhost:8000/api/admin/booking/${id}`)
  }
}
