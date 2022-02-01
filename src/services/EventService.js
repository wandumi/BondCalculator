import axios from "axios";
import Nprogress from "nprogress";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  Nprogress.start();
  return config;
});

apiClient.interceptors.response.use((response) => {
  Nprogress.done();
  return response;
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },
  getEvent(id) {
    return apiClient.get("/events" + id);
  },
  postEvent(event) {
    return apiClient.post("/events", event);
  },
};
