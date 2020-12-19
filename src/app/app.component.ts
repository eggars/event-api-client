import { Component } from '@angular/core';
import { ClientTrackingService } from './services/client-tracking/client-tracking.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private clientTracking: ClientTrackingService) {
  }
}
