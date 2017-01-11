import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { FlightRequestComponent } from './booking/flight-request/flight-request.component';
import { FlightDetailsComponent } from './booking/flight-details/flight-details.component';

const appRoutes: Routes = [
  {
    path: 'booking',
    component: BookingComponent,
    children: [
      {
        path: '',
        component: FlightRequestComponent
      },
      {
        path: 'flight-request',
        component: FlightRequestComponent,
        pathMatch: 'full'
      },
      {
        path: 'flight-details',
        component: FlightDetailsComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'booking',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
