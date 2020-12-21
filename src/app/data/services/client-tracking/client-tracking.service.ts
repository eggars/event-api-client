import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ClientTrackingService {
  public clientId$: BehaviorSubject<string> = new BehaviorSubject(uuidv4());

  public get clientId(): string { return this.clientId$.value; }

  constructor() { }
}
