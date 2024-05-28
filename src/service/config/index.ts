import axios from "axios";
import type { AxiosInstance } from "axios";
import { getDataFromCookie } from "@token-service";

export const request: AxiosInstance = axios.create({
  baseURL: "http://store.go-clothes.uz:5555",
  //   timeout: 5000,
});

request.interceptors.request.use((config) => {
  const token = getDataFromCookie("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
export default request;
