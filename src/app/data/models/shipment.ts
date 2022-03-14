// Collection of items shipped together
import {StockLocation} from "./stock-location";
import {ShippingMethod} from "./shipping-method";
import {LineItem} from "./line-item";

export interface Shipment {
  id?: string;
  number?: string;
  status?: string;
  currencyCode?: string;
  costAmountCents?: number;
  costAmountFloat?: number;
  formattedCostAmount?: string;
  skusCount?: number;
  stockLocation?: StockLocation;
  orderId?: string;
  availableShippingMethods?: ShippingMethod[];
  shipmentLineItems?: LineItem[];
  lineItems?: LineItem[];
}
