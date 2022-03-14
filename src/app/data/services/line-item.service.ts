import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HttpErrorHandlerService} from "../../shared/services/http-error-handler.service";
import {LineItem} from "../models/line-item";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
/*
  Created by singou Dembele
  Items added to the cart are managed by this service.
 */
@Injectable({
  providedIn: 'root'
})
export class LineItemService {
  private urlRessource: string = `${environment.apiUrl}/api/line_items`;

  constructor(private http: HttpClient, private eh: HttpErrorHandlerService) { }

  createLineItem(lineItem: LineItem): Observable<LineItem> {
    let headers = new HttpHeaders({
      'Accept': 'application/vnd.api+json',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOiJ4eWVnYkZBWkxuIiwic2x1ZyI6InRoZS1vcmFuZ2UtYnJhbmQtMjk0In0sImFwcGxpY2F0aW9uIjp7ImlkIjoiRE5PdllpUHlLcCIsImtpbmQiOiJzYWxlc19jaGFubmVsIiwicHVibGljIjp0cnVlfSwidGVzdCI6dHJ1ZSwiZXhwIjoxNjQ3MTg4MzI4LCJtYXJrZXQiOnsiaWQiOlsiZGpRYlBoeE5wZyJdLCJwcmljZV9saXN0X2lkIjoibkxOV0VDQVhwQiIsInN0b2NrX2xvY2F0aW9uX2lkcyI6WyJKblZQZ3VSZ1drIiwiUE1ScG91anhPRyJdLCJnZW9jb2Rlcl9pZCI6bnVsbCwiYWxsb3dzX2V4dGVybmFsX3ByaWNlcyI6ZmFsc2V9LCJyYW5kIjowLjc2ODY3MjExNzQ2OTc0MTR9.rZmfU9JB3psH8rwxXpZGBPADQ1TW03w-dSlWhz1osN_IG3L_7JRu2VZN2Su7f3Rk7cp86KDjvsoKkTXHetXXAA',
      'Content-Type': 'application/vnd.api+json'
    });
    return this.http.post<LineItem>(this.urlRessource, lineItem,{headers:headers})
      .pipe(catchError(this.eh.handleError));
  }


  getLineItem(id: string): Observable<LineItem> {
    let headers = new HttpHeaders({
      'Accept': 'application/vnd.api+json',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOiJ4eWVnYkZBWkxuIiwic2x1ZyI6InRoZS1vcmFuZ2UtYnJhbmQtMjk0In0sImFwcGxpY2F0aW9uIjp7ImlkIjoiRE5PdllpUHlLcCIsImtpbmQiOiJzYWxlc19jaGFubmVsIiwicHVibGljIjp0cnVlfSwidGVzdCI6dHJ1ZSwiZXhwIjoxNjQ3MTg4MzI4LCJtYXJrZXQiOnsiaWQiOlsiZGpRYlBoeE5wZyJdLCJwcmljZV9saXN0X2lkIjoibkxOV0VDQVhwQiIsInN0b2NrX2xvY2F0aW9uX2lkcyI6WyJKblZQZ3VSZ1drIiwiUE1ScG91anhPRyJdLCJnZW9jb2Rlcl9pZCI6bnVsbCwiYWxsb3dzX2V4dGVybmFsX3ByaWNlcyI6ZmFsc2V9LCJyYW5kIjowLjc2ODY3MjExNzQ2OTc0MTR9.rZmfU9JB3psH8rwxXpZGBPADQ1TW03w-dSlWhz1osN_IG3L_7JRu2VZN2Su7f3Rk7cp86KDjvsoKkTXHetXXAA'
    });
    return this.http.get<LineItem>(`${this.urlRessource}/${id}`,{headers:headers})
      .pipe(catchError(this.eh.handleError));
  }


  updateLineItem(id: string, quantity: number): Observable<LineItem> {
    let headers = new HttpHeaders({
      'Accept': 'application/vnd.api+json',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOiJ4eWVnYkZBWkxuIiwic2x1ZyI6InRoZS1vcmFuZ2UtYnJhbmQtMjk0In0sImFwcGxpY2F0aW9uIjp7ImlkIjoiRE5PdllpUHlLcCIsImtpbmQiOiJzYWxlc19jaGFubmVsIiwicHVibGljIjp0cnVlfSwidGVzdCI6dHJ1ZSwiZXhwIjoxNjQ3MTg4MzI4LCJtYXJrZXQiOnsiaWQiOlsiZGpRYlBoeE5wZyJdLCJwcmljZV9saXN0X2lkIjoibkxOV0VDQVhwQiIsInN0b2NrX2xvY2F0aW9uX2lkcyI6WyJKblZQZ3VSZ1drIiwiUE1ScG91anhPRyJdLCJnZW9jb2Rlcl9pZCI6bnVsbCwiYWxsb3dzX2V4dGVybmFsX3ByaWNlcyI6ZmFsc2V9LCJyYW5kIjowLjc2ODY3MjExNzQ2OTc0MTR9.rZmfU9JB3psH8rwxXpZGBPADQ1TW03w-dSlWhz1osN_IG3L_7JRu2VZN2Su7f3Rk7cp86KDjvsoKkTXHetXXAA'
    });
    return this.http.patch<LineItem>(`${this.urlRessource}/${id}`, { quantity: quantity },{headers:headers})
      .pipe(catchError(this.eh.handleError));
  }


  deleteLineItem(id: string): Observable<LineItem> {
    let headers = new HttpHeaders({
      'Accept': 'application/vnd.api+json',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOiJ4eWVnYkZBWkxuIiwic2x1ZyI6InRoZS1vcmFuZ2UtYnJhbmQtMjk0In0sImFwcGxpY2F0aW9uIjp7ImlkIjoiRE5PdllpUHlLcCIsImtpbmQiOiJzYWxlc19jaGFubmVsIiwicHVibGljIjp0cnVlfSwidGVzdCI6dHJ1ZSwiZXhwIjoxNjQ3MTg4MzI4LCJtYXJrZXQiOnsiaWQiOlsiZGpRYlBoeE5wZyJdLCJwcmljZV9saXN0X2lkIjoibkxOV0VDQVhwQiIsInN0b2NrX2xvY2F0aW9uX2lkcyI6WyJKblZQZ3VSZ1drIiwiUE1ScG91anhPRyJdLCJnZW9jb2Rlcl9pZCI6bnVsbCwiYWxsb3dzX2V4dGVybmFsX3ByaWNlcyI6ZmFsc2V9LCJyYW5kIjowLjc2ODY3MjExNzQ2OTc0MTR9.rZmfU9JB3psH8rwxXpZGBPADQ1TW03w-dSlWhz1osN_IG3L_7JRu2VZN2Su7f3Rk7cp86KDjvsoKkTXHetXXAA'
    });
    return this.http.delete<LineItem>(`${this.urlRessource}/${id}`,{headers:headers})
      .pipe(catchError(this.eh.handleError));
  }
}
