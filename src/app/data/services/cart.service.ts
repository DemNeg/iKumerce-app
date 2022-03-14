import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {LocalStorageService} from "../../shared/services/local-storage.service";

/*
Created by : Singou Dembele

This service is used manage the cart using locale Storage Service =>
 to track orderId and itemCount
 */

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //Behavior Subject that publishes the cart information of the local storage
  private cart = new BehaviorSubject({
    orderId : this.orderId,
    itemCount : this.itemCount
  });

  cartValue$ = this.cart.asObservable();

  constructor(private storage:LocalStorageService ) { }

  //To get order-id from the localstorage using the local storage service
  get orderId():string{
    const id = this.storage.getItem('order-id');
    return id?id:'';
  }

  //To set order-id to the localstorage using the local storage service
  set orderId(id:string){
    this.storage.addItem('order-id',id);
    this.cart.next({orderId: id, itemCount: this.itemCount});
  }

  //To get itemCount from the localstorage using the local storage service
 get itemCount():number{
    const itemCount = this.storage.getItem('item-count');
    return itemCount?parseInt(itemCount):0;
 }

  //To set itemCount to the localstorage using the local storage service
 set itemCount(amount:number){
    this.storage.addItem('item-count', amount.toString());
    this.cart.next({orderId: this.orderId,itemCount: amount})
 }

 incrementItemCount(amount:number){
  this.itemCount = this.itemCount+amount;
 }

  decrementItemCount(amount:number){
    this.itemCount = this.itemCount-amount;
  }

  //To clear the cart
  clearCart(){
       this.storage.deleteItem('item-count');
       this.cart.next({orderId: '',itemCount: 0})
  }
}
