"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByPrice = void 0;
// Фільтрація товарів за ціною
const filterByPrice = (products, maxPrice) => {
    return products.filter(product => product.price <= maxPrice);
};
exports.filterByPrice = filterByPrice;
