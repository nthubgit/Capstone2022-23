import http from "../http-dummy";

class ProductsService {
  getAll() {
    return http.get("/products?limit=100");
  }
  getOne(id) {
    return http.get(`/products/${id}`);
  }
  create(data) {
    return http.post(`/products/add`, data);
  }
  update(id, data) {
    return http.put(`/products/${id}`, data);
  }
  delete(id) {
    return http.delete(`/products/${id}`);
  }
}

export default new ProductsService();
