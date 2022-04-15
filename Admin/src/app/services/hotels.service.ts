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
    addHotel(hotel:any) {
      return this.http.post(`http://localhost:8000/api/admin/hotels`,hotel)
    }
    getHotelById(id:any) {
      return this.http.get(`http://localhost:8000/api/admin/hotels/${id}`)
    }
    deleteHotelsById(id:any) {
      return this.http.delete(`http://localhost:8000/api/admin/hotels/${id}`)
    }
    editHotelById(id:any,hotel:any){
      return this.http.put(`http://localhost:8000/api/admin/hotels/${id}`, hotel)
    }

}
