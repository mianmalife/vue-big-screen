import axios from "axios";
import axiosRetry from "axios-retry";
import qs from "qs";
const controller = new AbortController();

const instance = axios.create({
  baseURL: "",
  timeout: 30000,
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: "comma" }),
});

axiosRetry(instance, { retries: 3 });

export async function $http(url, config) {
  const response = await instance.request({ url, ...config });
  const result = response.data;
  // 业务判断
  return result;
}

export async function mockData(data) {
  return Promise.resolve(data);
}

export function withCancelToken(ajax) {
  let signal;
  function send(data, config) {
    cancel();
    signal = controller.signal;
    return ajax(data, { ...config, signal });
  }
  function cancel() {
    if (signal) {
      controller.abort();
      signal = null;
    }
  }

  return [send, cancel];
}

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
