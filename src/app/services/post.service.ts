import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const BASE_URL = 'http://devapi.portr.com/api/FlightStatus/GetFlightStatus';

@Injectable()
export class PostService {

  constructor(private http: Http) { }

  postData(request: Object): void {
    console.log(request);
    this.http.post(BASE_URL, request)
      .subscribe((res: Response) => {
        let data = res.json();
        console.log(data);
      });
  }


}
