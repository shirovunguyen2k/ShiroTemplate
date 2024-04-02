import axios, { AxiosResponse } from "axios";

const MS_BASE_URL = "";

const axiosClient = axios.create({
  baseURL: MS_BASE_URL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    Prefer: "HonorNonIndexedQueriesWarningMayFailRandomly",
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export { axiosClient };
