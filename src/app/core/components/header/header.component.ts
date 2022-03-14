import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UntilDestroy } from '@ngneat/until-destroy';
import { concat } from 'rxjs';
import { CartService } from 'src/app/data/services/cart.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { SessionService } from '../../authentication/session.service';
import { HeaderService } from '../../header/header.service';
/*
The HeaderComponent is basically the header displayed at the top of a page. 
It will contain the app title, the cart, login, and logout buttons.
*/
@UntilDestroy({checkProperties:true})
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartAmount: number = 0;
  isLoggedIn: boolean = false;
  showButtons: boolean = true;

  constructor(private sessionService:SessionService,private cartService:CartService,
    private headerService:HeaderService,private authService:AuthenticationService,
     private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.sessionService.isCustomerLoggedIn()
    .subscribe(()=>{
      //Since customerLogin status is not available in commerceLayer, we need implement our own strategy
      // ==> so once this component gets initialized set 
      this.isLoggedIn = true;
      this.sessionService.setLoggedInStatus(true)
    });

    this.sessionService.loggedInStatus.subscribe(status =>{
      this.isLoggedIn = status
    });
    this.headerService.showHeaderButtons.subscribe(visible=>{
      this.showButtons = visible
    });

    this.cartService.cartValue$.subscribe(cart=>{
      this.cartAmount = cart.itemCount
    });
  }

  logout(){
    concat(
      this.sessionService.logout(),
      this.authService.getClientSession()
    ).subscribe(
      () => {
        this.snackBar.open('You have been logged out.', 'Close', { duration: 4000 });
        this.sessionService.setLoggedInStatus(false);
      },
      err => this.snackBar.open('There was a problem logging you out.', 'Close', { duration: 4000 })
    );
  }
  
}
