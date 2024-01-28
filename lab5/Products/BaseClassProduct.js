import BaseModel from "../BaseModel/BaseModel.js";

class BaseClassProduct extends BaseModel {
    constructor() {
        super("https://jsonplaceholder.typicode.com/");
        this.endpoint = "comments";
    }
    getAll() {
        super.get();
    }
    GetOne(e) {
        if (typeof e === "number") {
            super.get(e);
        } else {
            throw new Error("id is not a number!");
        }
    }
    deleteOne(id) {
        if (typeof id === "number") {
            super.delete(id);
        } else {
            throw new Error("id is not a number!");
        }
    }
    putOne(id, data) {
        if (typeof id === "number") {
            super.put(id, data);
        } else {
            throw new Error("id is not a number!");
        }
    }
}

export default BaseClassProduct;
