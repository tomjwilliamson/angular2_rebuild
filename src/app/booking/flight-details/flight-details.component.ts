import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from '../reducers/panel.reducer';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {

  constructor(private store: Store<any>) { }

  goToPanel(type) {
    if (type === 'next') { this.store.dispatch({ type: INCREMENT }); } else { this.store.dispatch({ type: DECREMENT }); }
  }

  ngOnInit() {
  }

}
