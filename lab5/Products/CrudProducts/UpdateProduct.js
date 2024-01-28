import BaseClassProduct from "../BaseClassProduct.js";

export const PutProducts = new BaseClassProduct();
console.log("-----------PutProduct");
const data = {
    email: "loiktpc05314@gmail",
    name: "KimThanhloi",
};
PutProducts.putOne(1, data);
