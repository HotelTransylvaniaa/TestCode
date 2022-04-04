import { AddUserComponent } from './components/users/add-user/add-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingListComponent } from './components/booking/booking-list/booking-list.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { HotelsListComponent } from './components/hotels/hotels-list/hotels-list.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:"admin/users",component:UsersComponent},
  {path:"admin/hotels",component:HotelsListComponent },
  {path:"admin/booking",component:BookingListComponent},
  {path:"admin/users/add-user",component:AddUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
