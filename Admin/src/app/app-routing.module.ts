import { NotFoundComponent } from './components/notfound/not-found/not-found.component';
import { IsauthGuard } from './isauth.guard';
import { LoginComponent } from './components/login/login.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingListComponent } from './components/booking/booking-list/booking-list.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { EditHotelComponent } from './components/hotels/edit-hotel/edit-hotel.component';
import { HotelsListComponent } from './components/hotels/hotels-list/hotels-list.component';
import { UsersComponent } from './components/users/users.component';
import { UserBookingComponent } from './components/users/user-booking/user-booking.component';
import { AddHotelComponent } from './components/hotels/add-hotel/add-hotel.component';


const routes: Routes = [
  {path:"",component:DashboardComponent,canActivate:[IsauthGuard]},
  {path:"login",component:LoginComponent},
  {path:"admin/users",component:UsersComponent,canActivate:[IsauthGuard]},
  {path:"admin/hotels",component:HotelsListComponent,canActivate:[IsauthGuard] },
  {path:"admin/hotel-add",component:AddHotelComponent,canActivate:[IsauthGuard]},
  {path:"admin/hotel-edit/:id",component:EditHotelComponent,canActivate:[IsauthGuard] },
  {path:"admin/booking",component:BookingListComponent,canActivate:[IsauthGuard]},
  {path:"admin/users/add-user",component:AddUserComponent,canActivate:[IsauthGuard]},
  {path:"admin/users/user-booking/:id",component:UserBookingComponent,canActivate:[IsauthGuard]},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
