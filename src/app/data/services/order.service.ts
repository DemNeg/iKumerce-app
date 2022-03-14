import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {HttpErrorHandlerService} from "../../shared/services/http-error-handler.service";
import {Observable} from "rxjs";
import {GetOrderParams, Order, UpdateOrderParams} from "../models/order";
import {catchError} from "rxjs/operators";
import {Shipment} from "../models/shipment";
/*
Created by Singou Dembele
this service allows you to create, update, delete, or get an order.
Additionally, you may choose to get the shipments associated with an order
 */
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private urlRessource: string = `${environment.apiUrl}/api/orders`;

  constructor(private http: HttpClient, private eh: HttpErrorHandlerService) { }

  createOrder(): Observable<Order> {
    return this.http.post<Order>(this.urlRessource, {})
      .pipe(catchError(this.eh.handleError));
  }

  getOrder(id: string, orderParam: GetOrderParams): Observable<Order> {
    let params = {};
    if (orderParam != GetOrderParams.none) {
      params = { [orderParam]: 'true' };
    }

    return this.http.get<Order>(`${this.urlRessource}/${id}`, { params: params })
      .pipe(catchError(this.eh.handleError));
  }

  updateOrder(order: Order, params: UpdateOrderParams[]): Observable<Order> {
    let updateParams = [];
    for (const param of params) {
      updateParams.push(param.toString());
    }
    return this.http.patch<Order>(
      `${this.urlRessource}/${order.id}`,
      order,
      { params: { 'field': updateParams } }
    ).pipe(catchError(this.eh.handleError));
  }

  getOrderShipments(id: string): Observable<Shipment[]> {
    return this.http.get<Shipment[]>(`${this.urlRessource}/${id}/shipments`)
      .pipe(catchError(this.eh.handleError));
  }
}
