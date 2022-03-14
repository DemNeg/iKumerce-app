//Represents the amount to delivery a shipment
import {ShippingMethod} from "./shipping-method";
import {StockLocation} from "./stock-location";

export interface DeliveryLeadTime {
  id?:number;
  minHours?:number;
  maxHours?:number;
  minDays?:number;
  maxDays?:number;
  shippingMethod?:ShippingMethod;
  stockLocation?:StockLocation;
}
