import http from "../http-common";

class ReviewService {
  getAll() {
    return http.get("/reviews");
  }
  create(data) {
    return http.post("/reviews", data);
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
