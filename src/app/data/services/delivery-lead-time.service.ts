import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HttpErrorHandlerService} from "../../shared/services/http-error-handler.service";
import {Observable} from "rxjs";
import {DeliveryLeadTime} from "../models/delivery-lead-time";
import {catchError} from "rxjs/operators";

/*
Created by Singou Dembele
This service returns information about shipping timelines from various stock locations.
 */
@Injectable({
  providedIn: 'root'
})
export class DeliveryLeadTimeService {
  private urlRessource: string = `${environment.apiUrl}/api/delivery_lead_times`;

  constructor(private http: HttpClient, private eh: HttpErrorHandlerService) { }

  getDeliveryLeadTimes(): Observable<DeliveryLeadTime[]> {
    let headers = new HttpHeaders({
      'Accept': 'application/vnd.api+json',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOiJ4eWVnYkZBWkxuIiwic2x1ZyI6InRoZS1vcmFuZ2UtYnJhbmQtMjk0In0sImFwcGxpY2F0aW9uIjp7ImlkIjoiRE5PdllpUHlLcCIsImtpbmQiOiJzYWxlc19jaGFubmVsIiwicHVibGljIjp0cnVlfSwidGVzdCI6dHJ1ZSwiZXhwIjoxNjQ3MTg4MzI4LCJtYXJrZXQiOnsiaWQiOlsiZGpRYlBoeE5wZyJdLCJwcmljZV9saXN0X2lkIjoibkxOV0VDQVhwQiIsInN0b2NrX2xvY2F0aW9uX2lkcyI6WyJKblZQZ3VSZ1drIiwiUE1ScG91anhPRyJdLCJnZW9jb2Rlcl9pZCI6bnVsbCwiYWxsb3dzX2V4dGVybmFsX3ByaWNlcyI6ZmFsc2V9LCJyYW5kIjowLjc2ODY3MjExNzQ2OTc0MTR9.rZmfU9JB3psH8rwxXpZGBPADQ1TW03w-dSlWhz1osN_IG3L_7JRu2VZN2Su7f3Rk7cp86KDjvsoKkTXHetXXAA'
    });
    return this.http.get<DeliveryLeadTime[]>(this.urlRessource,{headers:headers})
      .pipe(catchError(this.eh.handleError));
  }
}
