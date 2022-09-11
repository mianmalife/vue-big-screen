import axios from "axios";
import qs from "qs";

const instance = axios.create({
  baseURL: "",
  timeout: 30000,
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: "comma" }),
});

instance.interceptors.request.use(
  (config) => {
    console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const $http = instance;
$http.mock = (_, data) => {
  return Promise.resolve(data);
};

export default $http;
