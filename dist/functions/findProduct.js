"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findProduct = void 0;
const findProduct = (products, id) => {
    return products.find((product) => product.id === id);
};
exports.findProduct = findProduct;
