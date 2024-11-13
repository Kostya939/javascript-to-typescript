import { findProduct } from './functions/findProduct.js';
import { filterByPrice } from './functions/filterByPrice.js';
import { addToCart } from './functions/addToCart.js';
import { calculateTotal } from './functions/calculateTotal.js';
import { electronics, clothing } from './test/testData.js';

const electronicsCart = addToCart([], electronics[0], 2);

const clothingCart = addToCart([], clothing[0], 1);

console.log('Кошик з електронікою:', electronicsCart);
console.log('Кошик з одягом:', clothingCart);

const totalElectronics = calculateTotal(electronicsCart);
console.log('Загальна вартість електроніки:', totalElectronics);

const totalClothing = calculateTotal(clothingCart);
console.log('Загальна вартість одягу:', totalClothing);
