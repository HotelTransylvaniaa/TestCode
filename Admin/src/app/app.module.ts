import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { HotelsListComponent } from './components/hotels/hotels-list/hotels-list.component';
import { AddHotelComponent } from './components/hotels/add-hotel/add-hotel.component';
import { BookingListComponent } from './components/booking/booking-list/booking-list.component';
import { EditBookingComponent } from './components/booking/edit-booking/edit-booking.component';
import { AddBookingComponent } from './components/booking/add-booking/add-booking.component';
import { UsersComponent } from './components/users/users.component';
import { AdminPageComponent } from './components/dashboard/admin-page/admin-page.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    AddUserComponent,
    HotelsListComponent,
    AddHotelComponent,
    BookingListComponent,
    EditBookingComponent,
    AddBookingComponent,
    UsersComponent,
    AdminPageComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
