import { BaseProduct } from './BaseProduct';

export type CartItem<T extends BaseProduct> = {
  product: T;
  quantity: number;
};
