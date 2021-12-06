import axios from "axios";

class ContactService {
  getAll() {
    return axios.get("/task");
  }

  get(id) {
    return axios.get(`/task/${id}`);
  }

  create(data) {
    return axios.post("/task", data);
  }

  update(id, data) {
    return axios.put(`/task/${id}`, data);
  }

  delete(id) {
    return axios.delete(`/task/one/${id}`);
  }

  deleteAll() {
    return axios.delete(`/task/all/`);
  }
}

export default new ContactService();
