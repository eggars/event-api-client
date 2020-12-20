import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { EventsModule } from '../../events.module';

import { EventTicketsComponent } from './event-tickets.component';

describe('EventTicketsComponent', () => {
  let component: EventTicketsComponent;
  let fixture: ComponentFixture<EventTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventTicketsComponent ],
      imports: [ReactiveFormsModule, TranslateModule.forRoot(), HttpClientTestingModule, EventsModule],
      providers: []
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
