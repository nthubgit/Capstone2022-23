import http from "../http-common";
import authHeader from './auth-header';

class AccountService {
  getAll() {
    return http.get("/users");
  }
  create(data) {
    return http.post("/users", data);
  }
  update(id, data) {
    return http.put(`/users/${id}`, data, { headers: authHeader() });
  }
  delete(id) {
    return http.delete(`/users/${id}`);
  }
  getOne(id) {
    return http.get(`/users/${id}`);
  }
}

export default new AccountService();
