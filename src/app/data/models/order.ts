//Shopping cart or collection of line-items
import {LineItem} from "./line-item";
import {Shipment} from "./shipment";
import {PaymentMethod} from "./payment-method";
import {PaypalPayment} from "./paypal-payment";

export interface Order {
  id?: string;
  number?: number;
  skusCount?: number;
  lineItems?: LineItem[];
  shipments?: Shipment[];
  formattedSubtotalAmount?: string;
  formattedDiscountAmount?: string;
  formattedShippingAmount?: string;
  formattedTotalTaxAmount?: string;
  formattedGiftCardAmount?: string;
  formattedTotalAmountWithTaxes?: string;
  giftCardCode?: string;
  couponCode?: string;
  customerEmail?: string;
  billingAddressId?: string;
  shippingAddressId?: string;
  billingAddressCloneId?: string;
  shippingAddressCloneId?: string;
  availablePaymentMethods?: PaymentMethod[];
  paymentMethodId?: string;
  paymentSource?: PaypalPayment;
  place?: boolean;
}

export enum GetOrderParams {
  cart = 'forCart',
  availablePaymentMethods = 'withAvailablePaymentMethods',
  paymentSource = 'withPaymentSource',
  paymentMethod = 'withPaymentMethod',
  shipments = 'withShipments',
  none = 'none'
}

export enum UpdateOrderParams {
  customerEmail = "customerEmail",
  billingAddress = "billingAddress",
  billingAddressClone = "billingAddressClone",
  shippingAddressSameAsBilling = "shippingAddressSameAsBilling",
  shippingAddressClone = "shippingAddressClone",
  billingAddressSameAsShipping = "billingAddressSameAsShipping",
  shippingAddress = "shippingAddress",
  paymentMethod = "paymentMethod",
  giftCardOrCouponCode = "giftCardOrCouponCode",
  giftCardCode = "giftCardCode",
  couponCode = "couponCode",
  place = "place"
}

