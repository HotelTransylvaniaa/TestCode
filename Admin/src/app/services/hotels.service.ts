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
    getHotelById(id:any) {
      return this.http.get(`http://localhost:8000/api/admin/hotels/${id}`)
    }
    deleteHotelsById(id:any) {
      return this.http.delete(`http://localhost:8000/api/admin/hotels/${id}`)
    }
    // editHotelById(id:any){
    //   return this.http.patch(`http://localhost:8000/api/admin/hotels/${id}`, body:any)
    // }

}
