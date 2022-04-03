import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingListComponent } from './components/booking/booking-list/booking-list.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { EditHotelComponent } from './components/hotels/edit-hotel/edit-hotel.component';
import { HotelsListComponent } from './components/hotels/hotels-list/hotels-list.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:"admin/users",component:UsersComponent},
  {path:"admin/hotels",component:HotelsListComponent },
  {path:"admin/hotel-edit/:id",component:EditHotelComponent },
  {path:"admin/booking",component:BookingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
