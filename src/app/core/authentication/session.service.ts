import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService } from 'src/app/shared/services/http-error-handler.service';
import { environment } from 'src/environments/environment';
/*
Created by singou Dembele
The SessionService is responsible for session management.
The service will contain an observable from a BehaviorSubject called loggedInStatus to communicate whether a user is logged in.
*/

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private urlRessource: string = `${environment.apiUrl}/session`;
  private isLoggedIn = new BehaviorSubject(false);  //Default value to false beacuse the user by default is not logged in

  loggedInStatus = this.isLoggedIn.asObservable();

  constructor(private http: HttpClient, private eh: HttpErrorHandlerService) { }

  //Set the value of subject, true for loggedIn, false for not loggedIn
  setLoggedInStatus(status: boolean) {
    this.isLoggedIn.next(status);
  }

  //Make a request to the sever to check if the user has an existing session
  //Since that route is not available in commerceLayer, we need implement our own strategy
  isCustomerLoggedIn(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(`${this.urlRessource}/customer/status`)
      .pipe(catchError(this.eh.handleError));
  }
  
//Destroy the session on the server
  logout(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(`${this.urlRessource}/destroy`)
      .pipe(catchError(this.eh.handleError));
  }
}
