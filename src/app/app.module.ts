import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { BookingComponent } from './booking/booking.component';
import { FlightRequestComponent } from './booking/flight-request/flight-request.component';
import { FlightDetailsComponent } from './booking/flight-details/flight-details.component';
import { CollectionAddressComponent } from './booking/collection-address/collection-address.component';
import { OverviewComponent } from './booking/overview/overview.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { updatePanel } from './booking/reducers/panel.reducer';
import { PanelNavigation } from './booking/shared/panel-navigation';
import { PostService } from './services/post.service';


@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    FlightRequestComponent,
    FlightDetailsComponent,
    CollectionAddressComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore({ updatePanel }),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [PanelNavigation, PostService],
  bootstrap: [AppComponent]
})

export class AppModule { }
