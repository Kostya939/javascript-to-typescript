import { BaseProduct } from './BaseProduct';

export type Electronics = BaseProduct & {
  category: 'electronics';
  brand: string;
  warranty: number; // у місяцях
};
