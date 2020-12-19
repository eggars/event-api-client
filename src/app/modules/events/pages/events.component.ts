import { Component, OnInit } from '@angular/core';
import { Venue } from 'src/app/data/models/venue.interface';
import { EventService } from '@data/services/';

@Component({
  selector: 'app-event',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  public events: Venue[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(res => this.events = res);
  }

}
