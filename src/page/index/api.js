import { $http, mockData } from "@/shared/axios";
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
  const data = {
    Month: 8,
    Year: 2021,
    SalesAmount: 1234.48,
    SalesMoM: 12.23,
    SalesYoY: -1.23,
    BagRate: 31.23,
    ATV: 123.25,
    ATVMoM: 12.23,
  };

  return mockData("/GetBigScreenSalesKPI", COMMON_PARAMS, data);
};

//获取客流KPI数据
export const getTrafficKpiData = () => {
  const data = {
    Month: 8,
    Year: 2021,
    FlowsYesterday: 1234.48,
    FlowsDayQoQ: -12.23,
    FlowsDayYoY: 1.23,
    FlowsMonth: 31.23,
    FlowsMonthQoQ: 123.25,
    FlowsMonthYoY: 12.23,
    FlowsYear: 123,
    FlowsYearQoQ: 55,
  };
  return mockData("/GetBigScreenTrafficKPI", COMMON_PARAMS, data);
};

//获取车流KPI数据
export const getVehicleKpiData = () => {
  const data = {
    Month: 8,
    Year: 2021,
    FlowsYesterday: 1234.48,
    FlowsDayQoQ: 12.23,
    FlowsDayYoY: -1.23,
    FlowsMonth: 31.23,
    FlowsMonthQoQ: 123.25,
    FlowsMonthYoY: 12.23,
    FlowsYear: 123,
    FlowsYearQoQ: 55,
  };

  return mockData("/GetBigScreenVehicleKPI", COMMON_PARAMS, data);
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
