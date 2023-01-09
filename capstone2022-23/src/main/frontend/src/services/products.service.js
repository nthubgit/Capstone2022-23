import { dummyjson } from "../http-common";

class ProductsService {
  getAll() {
    return http.get("/products");
  }
}


export default new ProductsService();
