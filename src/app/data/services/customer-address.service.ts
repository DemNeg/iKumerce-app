import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerAddress} from "../models/customer-address";
import {catchError} from "rxjs/operators";
import {HttpErrorHandlerService} from "../../shared/services/http-error-handler.service";


/*
  Created by: Singou Dembele
  This service is used to associate a customer with one or addresses
 */
@Injectable({
  providedIn: 'root'
})
export class CustomerAddressService {
  private urlRessource = `${environment.apiUrl}/api/customer_addresses`;

  constructor(private http:HttpClient,private eh:HttpErrorHandlerService) { }

  createCustomerAddress(customerId:number, addressId:number):Observable<CustomerAddress>{
    let headers = new HttpHeaders({
      'Accept': 'application/vnd.api+json',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOiJ4eWVnYkZBWkxuIiwic2x1ZyI6InRoZS1vcmFuZ2UtYnJhbmQtMjk0In0sImFwcGxpY2F0aW9uIjp7ImlkIjoiRE5PdllpUHlLcCIsImtpbmQiOiJzYWxlc19jaGFubmVsIiwicHVibGljIjp0cnVlfSwidGVzdCI6dHJ1ZSwiZXhwIjoxNjQ3MTg4MzI4LCJtYXJrZXQiOnsiaWQiOlsiZGpRYlBoeE5wZyJdLCJwcmljZV9saXN0X2lkIjoibkxOV0VDQVhwQiIsInN0b2NrX2xvY2F0aW9uX2lkcyI6WyJKblZQZ3VSZ1drIiwiUE1ScG91anhPRyJdLCJnZW9jb2Rlcl9pZCI6bnVsbCwiYWxsb3dzX2V4dGVybmFsX3ByaWNlcyI6ZmFsc2V9LCJyYW5kIjowLjc2ODY3MjExNzQ2OTc0MTR9.rZmfU9JB3psH8rwxXpZGBPADQ1TW03w-dSlWhz1osN_IG3L_7JRu2VZN2Su7f3Rk7cp86KDjvsoKkTXHetXXAA',
      'Content-Type': 'application/vnd.api+json'
    });
      return this.http.post<CustomerAddress>(this.urlRessource,{customerId:customerId,addressId:addressId},{headers:headers})
        .pipe(catchError(this.eh.handleError));
  }

  getCustomerAddresses():Observable<CustomerAddress[]>{
    let headers = new HttpHeaders({
      'Accept': 'application/vnd.api+json',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOiJ4eWVnYkZBWkxuIiwic2x1ZyI6InRoZS1vcmFuZ2UtYnJhbmQtMjk0In0sImFwcGxpY2F0aW9uIjp7ImlkIjoiRE5PdllpUHlLcCIsImtpbmQiOiJzYWxlc19jaGFubmVsIiwicHVibGljIjp0cnVlfSwidGVzdCI6dHJ1ZSwiZXhwIjoxNjQ3MTg4MzI4LCJtYXJrZXQiOnsiaWQiOlsiZGpRYlBoeE5wZyJdLCJwcmljZV9saXN0X2lkIjoibkxOV0VDQVhwQiIsInN0b2NrX2xvY2F0aW9uX2lkcyI6WyJKblZQZ3VSZ1drIiwiUE1ScG91anhPRyJdLCJnZW9jb2Rlcl9pZCI6bnVsbCwiYWxsb3dzX2V4dGVybmFsX3ByaWNlcyI6ZmFsc2V9LCJyYW5kIjowLjc2ODY3MjExNzQ2OTc0MTR9.rZmfU9JB3psH8rwxXpZGBPADQ1TW03w-dSlWhz1osN_IG3L_7JRu2VZN2Su7f3Rk7cp86KDjvsoKkTXHetXXAA'
    });
    return this.http.get<CustomerAddress[]>(this.urlRessource,{headers:headers})
      .pipe(catchError(this.eh.handleError));
  }

  getCustomerAddress(id:string):Observable<CustomerAddress>{
    let headers = new HttpHeaders({
      'Accept': 'application/vnd.api+json',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOiJ4eWVnYkZBWkxuIiwic2x1ZyI6InRoZS1vcmFuZ2UtYnJhbmQtMjk0In0sImFwcGxpY2F0aW9uIjp7ImlkIjoiRE5PdllpUHlLcCIsImtpbmQiOiJzYWxlc19jaGFubmVsIiwicHVibGljIjp0cnVlfSwidGVzdCI6dHJ1ZSwiZXhwIjoxNjQ3MTg4MzI4LCJtYXJrZXQiOnsiaWQiOlsiZGpRYlBoeE5wZyJdLCJwcmljZV9saXN0X2lkIjoibkxOV0VDQVhwQiIsInN0b2NrX2xvY2F0aW9uX2lkcyI6WyJKblZQZ3VSZ1drIiwiUE1ScG91anhPRyJdLCJnZW9jb2Rlcl9pZCI6bnVsbCwiYWxsb3dzX2V4dGVybmFsX3ByaWNlcyI6ZmFsc2V9LCJyYW5kIjowLjc2ODY3MjExNzQ2OTc0MTR9.rZmfU9JB3psH8rwxXpZGBPADQ1TW03w-dSlWhz1osN_IG3L_7JRu2VZN2Su7f3Rk7cp86KDjvsoKkTXHetXXAA'
    });
    return this.http.get(this.urlRessource+"/"+id,{headers:headers})
      .pipe(catchError(this.eh.handleError));
  }
}

