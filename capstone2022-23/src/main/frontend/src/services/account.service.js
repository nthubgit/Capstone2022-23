import http from "../http-common";

class AccountService {
  getAll() {
    return http.get("/users");
  }
  create(data) {
    return http.post("/users", data);
  }

  update(id, data) {
    return http.put(`/users/${id}`, data);
  }
  delete(id) {
    return http.delete(`/users/${id}`);
  }
  //tbd
  getOne(id) {
    return http.get(`/users/${id}`);
  }
}


export default new AccountService();
