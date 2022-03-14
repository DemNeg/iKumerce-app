import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {HttpErrorHandlerService} from "../../shared/services/http-error-handler.service";
import {PaypalPayment} from "../models/paypal-payment";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
/*
Created by Singou Dembele
This service is responsible for creating and updating Paypal payments for orders.
Additionally, we can get a Paypal payment given its id.
 */
@Injectable({
  providedIn: 'root'
})
export class PaypalPaymentService {
  private urlRessource: string = `${environment.apiUrl}/api/paypal_payments`;

  constructor(private http: HttpClient, private eh: HttpErrorHandlerService) { }

  createPaypalPayment(payment: PaypalPayment): Observable<PaypalPayment> {
    return this.http.post<PaypalPayment>(this.urlRessource, payment)
      .pipe(catchError(this.eh.handleError));
  }

  getPaypalPayment(id: string): Observable<PaypalPayment> {
    return this.http.get<PaypalPayment>(`${this.urlRessource}/${id}`)
      .pipe(catchError(this.eh.handleError));
  }

  updatePaypalPayment(id: string, paypalPayerId: string): Observable<PaypalPayment> {
    return this.http.patch<PaypalPayment>(
      `${this.urlRessource}/${id}`,
      { paypalPayerId: paypalPayerId }
    )
      .pipe(catchError(this.eh.handleError));
  }
}
