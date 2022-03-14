import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../models/customer";
import {environment} from "../../../environments/environment";
import {catchError} from "rxjs/operators";
import {HttpErrorHandlerService} from "../../shared/services/http-error-handler.service";

/*
  Created by : Singou Dembele
  Customers are created and their information retrieved using this service.
 */
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private urlRessource = `${environment.apiUrl}/api/customers`;

  constructor(private http: HttpClient, private eh: HttpErrorHandlerService) {
  }

  createCustomer(email: string, password: string, firstName: string, lastName: string): Observable<Customer> {
    let headers = new HttpHeaders({
      'Accept': 'application/vnd.api+json',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOiJ4eWVnYkZBWkxuIiwic2x1ZyI6InRoZS1vcmFuZ2UtYnJhbmQtMjk0In0sImFwcGxpY2F0aW9uIjp7ImlkIjoiRE5PdllpUHlLcCIsImtpbmQiOiJzYWxlc19jaGFubmVsIiwicHVibGljIjp0cnVlfSwidGVzdCI6dHJ1ZSwiZXhwIjoxNjQ3MTg4MzI4LCJtYXJrZXQiOnsiaWQiOlsiZGpRYlBoeE5wZyJdLCJwcmljZV9saXN0X2lkIjoibkxOV0VDQVhwQiIsInN0b2NrX2xvY2F0aW9uX2lkcyI6WyJKblZQZ3VSZ1drIiwiUE1ScG91anhPRyJdLCJnZW9jb2Rlcl9pZCI6bnVsbCwiYWxsb3dzX2V4dGVybmFsX3ByaWNlcyI6ZmFsc2V9LCJyYW5kIjowLjc2ODY3MjExNzQ2OTc0MTR9.rZmfU9JB3psH8rwxXpZGBPADQ1TW03w-dSlWhz1osN_IG3L_7JRu2VZN2Su7f3Rk7cp86KDjvsoKkTXHetXXAA',
      'Content-Type': 'application/vnd.api+json'
    });

    return this.http.post<Customer>(this.urlRessource, {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    }, {headers:headers}).pipe(catchError(this.eh.handleError));
  }

  getCurrentCustomer(): Observable<Customer> {
    return this.http.get<Customer>(`${this.urlRessource}/current`)
      .pipe(catchError(this.eh.handleError));
  }

  getCustomer(id: string): Observable<Customer> {

    let headers = new HttpHeaders({
      'Accept': 'application/vnd.api+json',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOiJ4eWVnYkZBWkxuIiwic2x1ZyI6InRoZS1vcmFuZ2UtYnJhbmQtMjk0In0sImFwcGxpY2F0aW9uIjp7ImlkIjoiRE5PdllpUHlLcCIsImtpbmQiOiJzYWxlc19jaGFubmVsIiwicHVibGljIjp0cnVlfSwidGVzdCI6dHJ1ZSwiZXhwIjoxNjQ3MTg4MzI4LCJtYXJrZXQiOnsiaWQiOlsiZGpRYlBoeE5wZyJdLCJwcmljZV9saXN0X2lkIjoibkxOV0VDQVhwQiIsInN0b2NrX2xvY2F0aW9uX2lkcyI6WyJKblZQZ3VSZ1drIiwiUE1ScG91anhPRyJdLCJnZW9jb2Rlcl9pZCI6bnVsbCwiYWxsb3dzX2V4dGVybmFsX3ByaWNlcyI6ZmFsc2V9LCJyYW5kIjowLjc2ODY3MjExNzQ2OTc0MTR9.rZmfU9JB3psH8rwxXpZGBPADQ1TW03w-dSlWhz1osN_IG3L_7JRu2VZN2Su7f3Rk7cp86KDjvsoKkTXHetXXAA'
    });
    return this.http.get<Customer>(`${this.urlRessource}/${id}`, {headers:headers})
      .pipe(catchError(this.eh.handleError));
  }
}
