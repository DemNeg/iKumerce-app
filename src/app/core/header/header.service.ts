import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpErrorHandlerService } from 'src/app/shared/services/http-error-handler.service';
/*
The HeaderService is used to communicate whether the cart, login, and logout buttons should be shown in the header. 
These buttons are hidden on the login and signup pages but present on all other pages to prevent confusion. 
*/

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http:HttpClient, private eh:HttpErrorHandlerService) { }

    private headerButtonsVisibility = new BehaviorSubject(true);
  
    showHeaderButtons = this.headerButtonsVisibility.asObservable();  //To communicate with the header
  
    
  
    //To set a value for the observable
    setHeaderButtonsVisibility(visible: boolean) {
      this.headerButtonsVisibility.next(visible);
    }
  
}
