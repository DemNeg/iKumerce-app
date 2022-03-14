//Location that contains SKU inventory
export interface StockLocation {
  id?: string;
  number?: number;
  name?: string;
  shipmentId?: string;
  labelFormat?: string;
  deliveryLeadTimeId?: string;
}
