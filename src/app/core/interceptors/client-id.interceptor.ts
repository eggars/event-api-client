import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientTrackingService } from 'src/app/data/services/client-tracking/client-tracking.service';

@Injectable()
export class ClientIdInterceptor implements HttpInterceptor {

  constructor(private clientTrackingService: ClientTrackingService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clientId = this.clientTrackingService.clientId;
    const modifiedReq = req.clone({
      headers: req.headers.set('LogId', clientId)
    });

    return next.handle(modifiedReq);
  }
}
