import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse, Venue, VenueItemResponse, VenueListResponse } from '@data/models/';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public selectedEvent$: BehaviorSubject<Venue> = new BehaviorSubject({} as Venue);
  private apiRoot = '/api';
  private serviceRoot = '/events';

  private get rootPath(): string { return `${this.apiRoot}${this.serviceRoot}`; }

  constructor(private http: HttpClient) { }

  public getEvents(): Observable<Venue[]> {
    const path = `${this.rootPath}/getEvents`;

    return this.http.post<ApiResponse<VenueListResponse>>(path, {})
      .pipe(map((response: ApiResponse<VenueListResponse>) => {
        return response.Result.events;
      }));
  }

  public getEvent(): Observable<Venue> {
    const path = `${this.rootPath}/getEvent`;

    return this.http.post<ApiResponse<VenueItemResponse>>(path, {})
      .pipe(map((response: ApiResponse<VenueItemResponse>) => {
        return response.Result.event;
      }));
  }

  public setSelectEvent(event: Venue): void {
    this.selectedEvent$.next(event);
  }
}
