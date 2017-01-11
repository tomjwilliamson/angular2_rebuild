import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlightRequestComponent } from './flight-request/flight-request.component';

const bookingRoutes: Routes = [
  {
    path: 'flight-request/:id',
    component: FlightRequestComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(bookingRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class BookingRoutingModule { }
