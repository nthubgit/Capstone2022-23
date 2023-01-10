import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});

export const dummyjson = axios.create({
  baseURL: "https://dummyjson.com/",
  headers: {
    "Content-type": "application/json"
  }
});
