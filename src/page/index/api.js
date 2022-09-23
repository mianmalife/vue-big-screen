import { $http } from "@/shared/axios";
const COMMON_PARAMS = {
  version: "S500BigScreenV1.0",
  method: "post",
};

// 获取天气信息
export const getWeatherData = () => {
  return $http("/GetWeather", COMMON_PARAMS);
};

//获取销售KPI数据
export const getSaleKpiData = () => {
  return $http("/GetBigScreenSalesKPI", COMMON_PARAMS);
};

//获取客流KPI数据
export const getTrafficKpiData = () => {
  return $http("/GetBigScreenTrafficKPI", COMMON_PARAMS);
};

//获取车流KPI数据
export const getVehicleKpiData = () => {
  return $http("/GetBigScreenVehicleKPI", COMMON_PARAMS);
};

// 获取客流实时分析数据
export const getRealtimeTrafficData = () => {
  return $http("/GetBigScreenTrafficRealTimeAnalysis", COMMON_PARAMS);
};

// 获取车流实时分析数据
export const getRealtimeVehicleData = () => {
  return $http("/GetBigScreenVehicleRealTimeAnalysis", COMMON_PARAMS);
};

// 获取销售数据, 近12个月数据
export const getSaleOneYearData = () => {
  return $http("/GetBigScreenSalesByMonth", COMMON_PARAMS);
};

// 获取上月销售前10名数据
export const getSaleTopTenData = () => {
  return $http("/GetBigScreenSalesTop", COMMON_PARAMS);
};

// 获取昨日客流前10名数据
export const getTrafficTopTenData = () => {
  return $http("/GetBigScreenTrafficTop", COMMON_PARAMS);
};
