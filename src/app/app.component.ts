import { Component } from '@angular/core';
import { ClientTrackingService } from './data/services/client-tracking/client-tracking.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private clientTracking: ClientTrackingService) {
  }
}
