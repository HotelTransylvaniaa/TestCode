import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { HotelsListComponent } from './components/hotels/hotels-list/hotels-list.component';
import { AddHotelComponent } from './components/hotels/add-hotel/add-hotel.component';
import { EditHotelComponent } from './components/hotels/edit-hotel/edit-hotel.component';
import { BookingListComponent } from './components/booking/booking-list/booking-list.component';
import { EditBookingComponent } from './components/booking/edit-booking/edit-booking.component';
import { AddBookingComponent } from './components/booking/add-booking/add-booking.component';
import { SideNavComponent } from './components/dashboard/side-nav/side-nav.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    AddUserComponent,
    EditUserComponent,
    HotelsListComponent,
    AddHotelComponent,
    EditHotelComponent,
    BookingListComponent,
    EditBookingComponent,
    AddBookingComponent,
    SideNavComponent,
    DashboardComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
