import BaseClassProduct from "../BaseClassProduct.js";

export const DeleteProducts = new BaseClassProduct();
console.log("-----------DeleteProduct");

DeleteProducts.deleteOne(1);
