import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './pages/events.component';
import { DateTimeFormatPipe } from 'src/app/core/pipes/full-date-time.pipe';
import { BaseModule } from 'src/app/core/base.module';
import { EventTicketsComponent } from './pages/event-tickets/event-tickets.component';


@NgModule({
  declarations: [EventsComponent, DateTimeFormatPipe, EventTicketsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    BaseModule,
    TooltipModule.forRoot()
  ]
})
export class EventsModule { }
