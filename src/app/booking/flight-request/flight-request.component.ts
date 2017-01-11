import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT } from '../reducers/panel.reducer';
import { FlightRequestModel } from './flight-request.model';
import Shared from '../shared/shared';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-flight-request',
  providers: [FlightRequestModel, PostService],
  templateUrl: './flight-request.component.html',
  styleUrls: ['./flight-request.component.css']
})
export class FlightRequestComponent implements OnInit {

  public panelNumber;
  public isLoading: boolean = false;

  flightRequestForm: FormGroup;

  constructor(private store: Store<any>, fb: FormBuilder, public requestModel: FlightRequestModel, private postService: PostService) {

    this.flightRequestForm = fb.group({
      FlightNumber: [null, Validators.required],
      DepartureDay: [null, Validators.required],
      DepartureMonth: [null, Validators.required],
      DepartureYear: [null, Validators.required]
    });

  }

  submitForm(formData: any, event: Event): void {

    event.preventDefault();
    let formattedDate = Shared.multiDateFormat(formData.DepartureDay.toString(),
                                               formData.DepartureMonth.toString(),
                                               formData.DepartureYear.toString());

    this.requestModel.flightNumber = formData.FlightNumber;
    this.requestModel.departureDate = formattedDate;
    this.requestModel.overwriteEntry = false;

    console.log(this.requestModel);
    this.postService.postData(this.requestModel);

  }

  goToPanel(type) {
    if (type === 'next') { this.store.dispatch({ type: INCREMENT }); } else { this.store.dispatch({ type: DECREMENT }); }
  }

  ngOnInit() { }

}
