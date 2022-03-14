import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {HttpErrorHandlerService} from "../../shared/services/http-error-handler.service";
import {Observable} from "rxjs";
import {Shipment} from "../models/shipment";
import {catchError} from "rxjs/operators";
/*
Created by Singou Dembele
This service gets a shipment or updates it given its id.
 */
@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  private urlRessource: string = `${environment.apiUrl}/api/shipments`;

  constructor(private http: HttpClient, private eh: HttpErrorHandlerService) { }

  getShipment(id: string): Observable<Shipment> {
    return this.http.get<Shipment>(`${this.urlRessource}/${id}`)
      .pipe(catchError(this.eh.handleError));
  }

  updateShipment(id: string, shippingMethodId: string): Observable<Shipment> {
    return this.http.patch<Shipment>(
      `${this.urlRessource}/${id}`,
      { shippingMethodId: shippingMethodId }
    )
      .pipe(catchError(this.eh.handleError));
  }
}
