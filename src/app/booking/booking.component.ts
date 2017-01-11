import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { PanelNavigation } from './shared/panel-navigation';

interface AppState {
  panelNumber: number;
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent implements OnInit {

  public panelNumber;

  constructor(private store: Store<AppState>, private router: Router, panelNavigation: PanelNavigation) {

    this.store.select('updatePanel')
      .subscribe(panel => {
        this.panelNumber = panel;
        this.router.navigate([panelNavigation.GetURLPath(this.panelNumber)]);
      });

  }

  ngOnInit() {
  }

}
