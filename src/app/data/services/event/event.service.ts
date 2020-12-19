import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventApiResponse, Venue, VenueItemResponse, VenueListResponse } from '@data/models/';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiRoot = '/api';
  private serviceRoot = '/events';

  private get rootPath(): string { return `${this.apiRoot}${this.serviceRoot}`; }

  constructor(private http: HttpClient) { }

  public getEvents(): Observable<Venue[]> {
    const path = `${this.rootPath}/getEvents`;

    return this.http.post<EventApiResponse<VenueListResponse>>(path, {})
      .pipe(map((response: EventApiResponse<VenueListResponse>) => {
        return response.Result.events;
      }));
  }

  public getEvent(): Observable<Venue> {
    const path = `${this.rootPath}/getEvent`;

    return this.http.post<EventApiResponse<VenueItemResponse>>(path, {})
      .pipe(map((response: EventApiResponse<VenueItemResponse>) => {
        return response.Result.event;
      }));
  }
}
