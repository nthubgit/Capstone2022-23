import http from "../http-dummy";

class ProductsService {
  getAll() {
    return http.get("/products?limit=100");
  }
  getOne(id) {
    return http.get(`/products/${id}`);
  }
}

export default new ProductsService();
