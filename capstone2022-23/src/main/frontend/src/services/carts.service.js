import http from "../http-dummy";

class CartsService {
    getCart(id) {
        return http.get(`/carts/${id}`);
      }
}

export default new CartsService();
