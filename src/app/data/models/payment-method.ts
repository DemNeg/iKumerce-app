//A payment method available to an order
export interface PaymentMethod {
  paymentSourceType?: string;
  name?: string;
  priceAmountCents?: number;
  priceAmountFloat?: number;
  formattedPriceAmount?: string;
  id?: string;
  orderId?: string;
}
