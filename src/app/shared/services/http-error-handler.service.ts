import { Injectable } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService {

  constructor() { }

  handleError(err:HttpErrorResponse):Observable<any>{
    let displayMessage='';

    if(err.error instanceof ErrorEvent){
      displayMessage =  `Client Side Error :${err.error.message}`
    }else{
      displayMessage =  `Server Side Error :${err.error.message}`
    }
    return throwError(displayMessage);
  }
}
