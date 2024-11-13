import { BaseProduct } from '../types/BaseProduct';

// Фільтрація товарів за ціною
export const filterByPrice = <T extends BaseProduct>(products: T[], maxPrice: number): T[] => {
  return products.filter(product => product.price <= maxPrice);
};
