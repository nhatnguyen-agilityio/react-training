interface CartItemInterface {
  productId: number;
  variantId: number;
  quantity: number;
}

export interface CartInterface {
  userId: number;
  items: CartItemInterface[];
}
