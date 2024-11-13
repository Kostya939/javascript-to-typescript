import { BaseProduct } from '../types/BaseProduct';
import { CartItem } from '../types/CartItem';

// Підрахунок загальної вартості
export const calculateTotal = <T extends BaseProduct>(cart: CartItem<T>[]): number => {
  return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
};
