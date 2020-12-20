import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { AlertModule } from 'ngx-bootstrap/alert';
import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './pages/events.component';
import { DateTimeFormatPipe } from 'src/app/core/pipes/full-date-time.pipe';
import { BaseModule } from 'src/app/core/base.module';
import { EventTicketsComponent } from './pages/event-tickets/event-tickets.component';
import { defineLocale, deLocale } from 'ngx-bootstrap/chronos';
import { FormErrorsForComponent } from 'src/app/shared/components/form-errors-for/form-errors-for.component';


@NgModule({
  declarations: [EventsComponent, DateTimeFormatPipe, EventTicketsComponent, FormErrorsForComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    BaseModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [
    BsLocaleService
  ]
})
export class EventsModule {
  constructor(private bsLocaleService: BsLocaleService) {
    defineLocale('de', deLocale);
    this.bsLocaleService.use('de');
  }
}
