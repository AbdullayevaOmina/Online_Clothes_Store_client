import { getDataFromCookie, setDataToCookie } from "@token-service";
import axios from "axios";

const request = axios.create({
  baseURL: "https://store.go-clothes.uz/v1",
});

async function refreshAccsesToken() {
  try {
    const stored_refresh_token = getDataFromCookie("refresh_token");

    if (!stored_refresh_token) {
      throw new Error("Refresh token not found in cookie ");
    } else {
      const response: any = await axios.get(
        `https://store.go-clothes.uz/v1/token/${stored_refresh_token}`
      );
      const { access_token, refresh_token } = response.data;
      setDataToCookie("access_token", access_token);
      setDataToCookie("refresh_token", refresh_token);
      return access_token;
    }
  } catch (error) {
    console.log(error);
  }
}

request.interceptors.request.use((config) => {
  const access_token = getDataFromCookie("access_token");
  if (access_token) {
    config.headers["Authorization"] = access_token;
  }
  return config;
});

request.interceptors.response.use(
  (response: any) => {
    return response;
  },
  async (error: any) => {
    if (error.response && error.response.status === 401) {
      const access_token = await refreshAccsesToken();
      if (access_token) {
        const originalRequest = error.config;
        originalRequest.headers["Authorization"] = access_token;
      } else {
        console.error("Access token not found in config file " + error.config);
        return Promise.reject(error);
      }
    }
  }
);

export default request;
