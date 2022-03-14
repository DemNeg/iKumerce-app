import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpErrorHandlerService } from "src/app/shared/services/http-error-handler.service";
import { environment } from "src/environments/environment";


/* 
Created by singou Dembele
This service should allows us to get customer and client tokens.
These token are used to access to the rest of the API's routes
*/
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private urlRessouurce: string = `${environment.apiUrl}/oauth/token`;

  constructor(private http: HttpClient, private eh: HttpErrorHandlerService) { }

  //To get client token ==> need to add scope and client_id later
  getClientSession(): Observable<object> {
    return this.http.post<object>(
      this.urlRessouurce,
      { grantType: 'client_credentials' })
      .pipe(catchError(this.eh.handleError));
  }


  //To get customer token ==> some additional information need to be added
  login(email: string, password: string): Observable<object> {
    return this.http.post<object>(
      this.urlRessouurce,
      { username: email, password: password, grantType: 'password' })
      .pipe(catchError(this.eh.handleError));
  }
}
