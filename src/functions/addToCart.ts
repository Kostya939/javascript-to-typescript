import { BaseProduct } from '../types/BaseProduct';
import { CartItem } from '../types/CartItem';

export const addToCart = <T extends BaseProduct>(
  cart: CartItem<T>[],
  product: T,
  quantity: number
): CartItem<T>[] => {
  const existingItem = cart.find((item: CartItem<T>) => item.product.id === product.id);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ product, quantity });
  }
  return cart;
};
