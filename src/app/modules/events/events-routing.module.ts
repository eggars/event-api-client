import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventTicketsComponent } from './pages/event-tickets/event-tickets.component';

import { EventsComponent } from './pages/events.component';

const routes: Routes = [
  { path: '', component: EventsComponent },
  { path: ':id', component: EventTicketsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
