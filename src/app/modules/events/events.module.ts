import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './pages/events.component';
import { CoreModule } from 'src/app/core/core/core.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';


@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    CoreModule,
    EventsRoutingModule,
    TooltipModule.forRoot()
  ]
})
export class EventsModule { }
