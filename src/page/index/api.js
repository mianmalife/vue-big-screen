import { $http } from "@/shared/axios";
export const fetchTask = (url, config) => {
  return $http(url, config);
};
