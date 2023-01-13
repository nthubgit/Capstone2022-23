import http from "../http-common";
import authHeader from './auth-header';

class ReviewService {
  getAllByProduct(id) {
    return http.get(`/reviews/item/${id}`, { headers: authHeader() });
  }
  create(id, data) {
    return http.post(`/users/${id}/reviews`, data, { headers: authHeader() });
  }

  update(id, data) {
    return http.put(`/reviews/${id}`, data, { headers: authHeader() });
  }
  delete(id) {
    return http.delete(`/reviews/${id}`, { headers: authHeader() });
  }
}


export default new ReviewService();
