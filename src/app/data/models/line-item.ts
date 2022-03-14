//An itemized product added to the cart
export interface LineItem {
  id?:string;
  orderId?:string;
  skuCode?:string;
  imageUrl?:string;
  name?:string;
  quantity?:number;
  skuId?:number;
  formattedTotalAmount?:string;
  formattedUnitAmount?:string;
}
