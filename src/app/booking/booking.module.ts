import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingComponent } from './booking.component';
import { FlightRequestComponent } from './flight-request/flight-request.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BookingComponent,
    FlightRequestComponent,
    FlightDetailsComponent,
    OverviewComponent
  ],
  providers: []
})
export class BookingModule {}
