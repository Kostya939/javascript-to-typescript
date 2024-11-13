import { Electronics } from '../types/Electronics';
import { Clothing } from '../types/Clothing';

export const electronics: Electronics[] = [
  {
    id: 1,
    name: 'Телефон',
    price: 10000,
    category: 'electronics',
    brand: 'Samsung',
    warranty: 24
  },
  // Додайте інші електронні товари
];

export const clothing: Clothing[] = [
  {
    id: 2,
    name: 'Куртка',
    price: 2500,
    category: 'clothing',
    size: 'L',
    material: 'Котон'
  },
  // Додайте інші товари одягу
];
