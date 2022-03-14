import {PaymentSource} from "./payment-source";

//A payment made through Paypal
export interface PaypalPayment extends PaymentSource{
  orderId?: string;
  paypalId?: string;
  paypalPayerId?: string;
}
