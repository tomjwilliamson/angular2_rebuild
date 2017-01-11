// function to return url parameter based on current panel state value
import { Injectable } from '@angular/core';
const defaultRoute = 'booking/';

@Injectable()
export class PanelNavigation {

  constructor() { }

  GetURLPath(value: Number = 1) {
    switch (value) {
      case value = 1:
        return defaultRoute + 'flight-request';

      case value = 2:
        return defaultRoute + 'flight-details';

      default:
        return defaultRoute + 'flight-request';
    }
  }

}
