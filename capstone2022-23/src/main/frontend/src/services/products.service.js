import { dummyjson } from "../http-common";

class ProductsService {
  getAll() {
    return dummyjson.get("/products");
  }
  getOne(id) {
    return dummyjson.get("/products");
  }
}


export default new ProductsService();
