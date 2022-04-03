import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private http: HttpClient) { }

    getHotelsList() {
      return this.http.get('http://localhost:8000/api/admin/hotels')
    }

}
