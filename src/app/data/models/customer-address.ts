// An address associated with a customer
import {Address} from "./address";

export interface CustomerAddress {
  id?:string;
  name?:string;
  address?:Address;
  addressId?:string;
  customerId?:string
}
