import http from "../http-common";

class ReviewService {
  getAllByProduct(id) {
    return http.get(`/reviews/item/${id}`);
  }
  create(id, data) {
    return http.post(`/users/${id}/reviews`, data);
  }

  update(id, data) {
    return http.put(`/reviews/${id}`, data);
  }
  delete(id) {
    return http.delete(`/reviews/${id}`);
  }
  //tbd
  getOne(id) {
    return http.get(`/reviews/${id}`);
  }
}


export default new ReviewService();
