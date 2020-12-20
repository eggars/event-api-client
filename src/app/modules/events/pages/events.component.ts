import { Component, OnDestroy, OnInit } from '@angular/core';
import { Venue } from 'src/app/data/models/venue.interface';
import { EventService } from '@data/services/';
import { compareDate } from 'src/app/core/helpers/sort-functions/date.comparer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-event',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {
  public events: Venue[] = [];
  public selectedEvent: Venue | undefined;
  private subscription: Subscription | undefined;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getEvents();
    this.subscribeToSelectedEvent();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  public selectEvent(event: Venue): void {
    this.eventService.setSelectEvent(event);
    // this.eventService.getEvent().subscribe((res) => {});
  }

  private subscribeToSelectedEvent(): void {
    this.subscription = this.eventService.selectedEvent$.subscribe(res => this.selectedEvent = res);
  }

  private getEvents(): void {
    this.eventService.getEvents().subscribe(res => {
      this.events = res.sort(compareDate('desc'));
    });
  }

}
