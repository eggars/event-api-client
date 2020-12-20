import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '@data/models';
import { Order } from '@data/models/order.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiRoot = '/api';
  private serviceRoot = '/order';

  private get rootPath(): string { return `${this.apiRoot}${this.serviceRoot}`; }

  constructor(private http: HttpClient) { }

  public submitOrder(formValue: any): Observable<Order> {
    const path = `${this.rootPath}/createOrder`;
    return this.http.post<ApiResponse<Order>>(path, formValue)
      .pipe(map((response: ApiResponse<Order>) => {
        return response.Result;
      }));
  }
}
