<template>
  <div id="app">
    <div class="top__bar clearfix">
      <div class="left">
        <div class="area">深圳-龙岗</div>
        <div class="time">17:03:28</div>
        <div class="date">2022-09-19</div>
        <div class="weekday">星期一</div>
      </div>
      <div class="right">
        <div class="weather">多云</div>
        <div class="temp">24℃</div>
      </div>
      <div class="center">深圳龙岗万科-经营数据一览</div>
    </div>
    <div class="middle__panel">
      <div class="item__panel data__overview">
        <div class="item__title">数据概览</div>
        <div class="detail">
          <div class="flag top">
            <div class="name">客流</div>
          </div>
          <div class="data__panel">
            <div class="top__panel">
              <div class="yesterday">
                <div class="day__pass">
                  <span class="label_title">昨日客流(人次)</span>
                  <span class="pass_num">17,548</span>
                </div>
                <div class="chain__yoy">
                  <div class="chain">
                    <span class="label_title">环比(较上一日):&ensp;</span>
                    <span>↓ -4.52%</span>
                  </div>
                  <div class="yoy">
                    <span class="label_title">同比(上周同日):&ensp;</span>
                    <span>↑ +12.00%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="bott__panel">
              <div class="bott_wrapper">
                <div class="month">
                  <div class="pass_flow">
                    <span class="label_title">8月客流(万人次)</span>
                    <span class="pass_num">23.28</span>
                  </div>
                  <div class="percent">
                    <div>
                      <span class="label_title">环比(较上一月):&ensp;</span>
                      <span>↓ -4.52%</span>
                    </div>
                    <div>
                      <span class="label_title">同比(去年同月):&ensp;</span>
                      <span>↑ +12.00%</span>
                    </div>
                  </div>
                </div>
                <div class="year">
                  <div class="pass_flow">
                    <span class="label_title">2022年客流(万人次)</span>
                    <span class="pass_num">2,853.89</span>
                  </div>
                  <div class="percent">
                    <span class="label_title">环比(较去年):&ensp;</span>
                    <span>↓ -4.52%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="detail detail-center">
          <div class="flag center">
            <div class="name">车流</div>
          </div>
          <div class="data__panel">
            <div class="top__panel">
              <div class="yesterday">
                <div class="day__pass">
                  <span class="label_title">昨日车流(辆)</span>
                  <span class="pass_num">2,778</span>
                </div>
                <div class="chain__yoy">
                  <div class="chain">
                    <span class="label_title">环比(较上一日):&ensp;</span>
                    <span>↓ -4.52%</span>
                  </div>
                  <div class="yoy">
                    <span class="label_title">同比(上周同日):&ensp;</span>
                    <span>↑ +12.00%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="bott__panel">
              <div class="bott_wrapper">
                <div class="month">
                  <div class="pass_flow">
                    <span class="label_title">8月车流(万辆)</span>
                    <span class="pass_num">31.85</span>
                  </div>
                  <div class="percent">
                    <div>
                      <span class="label_title">环比(较上一月):&ensp;</span>
                      <span>↓ -4.52%</span>
                    </div>
                    <div>
                      <span class="label_title">同比(去年同月):&ensp;</span>
                      <span>↑ +12.00%</span>
                    </div>
                  </div>
                </div>
                <div class="year">
                  <div class="pass_flow">
                    <span class="label_title">2022年车流(万辆)</span>
                    <span class="pass_num">2,853.89</span>
                  </div>
                  <div class="percent">
                    <span class="label_title">环比(较去年):&ensp;</span>
                    <span>↓ -4.52%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="detail detail-bottom">
          <div class="flag bottom">
            <div class="name">销售</div>
          </div>
          <div class="data__panel">
            <div class="top__panel">
              <div class="yesterday">
                <div class="day__pass">
                  <span class="label_title">7月销售额(万元)</span>
                  <span class="pass_num">2,520.92</span>
                </div>
                <div class="chain__yoy">
                  <div class="chain">
                    <span class="label_title">环比(较上一月):&ensp;</span>
                    <span>↓ -4.52%</span>
                  </div>
                  <div class="yoy">
                    <span class="label_title">同比(去年同月):&ensp;</span>
                    <span>↑ +12.00%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="bott__panel">
              <div class="bott_wrapper">
                <div class="month">
                  <div class="pass_flow">
                    <span class="label_title">7月提袋率</span>
                    <span class="pass_num">80.23%</span>
                  </div>
                </div>
                <div class="year">
                  <div class="pass_flow">
                    <span class="label_title">7月客单价(元)</span>
                    <span class="pass_num">2,853.89</span>
                  </div>
                  <div class="percent">
                    <span class="label_title">环比(较去年):&ensp;</span>
                    <span>↓ -4.52%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item__panel">
        <div class="item__title">客流实时分析</div>
        <div class="realtime_card_box">
          <div class="title">今日客流累计（人次）</div>
          <div class="logo_pass"></div>
          <div class="flow_data">
            <span class="card">2</span>
            <span class="card separator">,</span>
            <span class="card">2</span>
            <span class="card">3</span>
            <span class="card">5</span>
          </div>
          <div class="data_time">数据时间:&ensp;9:45</div>
        </div>
        <div class="realtime_flow_acc">
          <v-chart class="passflow_chart" :option="option" />
        </div>
      </div>
      <div class="item__panel">
        <div class="item__title">车流实时分析</div>
        <div class="realtime_card_box">
          <div class="title">今日车流累计（辆）</div>
          <div class="logo_car"></div>
          <div class="flow_data">
            <span class="card">2</span>
            <span class="card separator">,</span>
            <span class="card">2</span>
            <span class="card">3</span>
            <span class="card">5</span>
          </div>
          <div class="data_time">数据时间:&ensp;9:45</div>
        </div>
        <div class="realtime_flow_acc">
          <v-chart class="passflow_chart" :option="option" />
        </div>
      </div>
    </div>
    <div class="bottom__panel"></div>
  </div>
</template>

<script>
// import { $http } from "@/shared/axios";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";
import VChart from "vue-echarts";
import tooltipBg from "@/assets/image/tootip_bg.png";
use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
]);
export default {
  name: "App",
  components: {
    VChart,
  },
  provide: {},
  data: function () {
    return {
      task: [],
      option: {
        tooltip: {
          trigger: "axis",
          extraCssText: `background:url(${tooltipBg}) no-repeat;
          background-size:100%;min-width:160px; min-height:90px;
          background-position:center;
          border:none;
          border-radius:none;`,
          textStyle: {
            color: "#ffffff",
          },
          padding: 10,
        },
        grid: {
          // top: "10%",
          bottom: 0,
          left: "2%",
          right: 0,
          containLabel: true,
        },
        color: ["#3AA1FF", "#FFBB54", "#00FFD5"],
        legend: {
          textStyle: {
            color: "#b3b3b3",
          },
          data: ["今日", "昨日", "上周同日"],
        },
        xAxis: {
          type: "category",
          axisLabel: {
            rotate: 45,
            interval: 0,
            color: "#00AAFF",
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          data: [
            "00:00",
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00",
            "00:00",
          ],
        },
        yAxis: {
          name: "人次",
          nameLocation: "end",
          nameTextStyle: {
            color: "#00AAFF",
            align: "right",
            padding: [0, 10, 0, 0],
          },
          type: "value",
          axisLabel: {
            color: "#00AAFF",
          },
          splitLine: {
            lineStyle: {
              color: "#093056",
            },
          },
        },
        series: [
          {
            name: "今日",
            data: [
              680, 30, 510, 890, 850, 990, 400, 790, 280, 210, 20, 970, 380,
              770, 410, 90, 50, 330, 110, 350, 250, 750, 20, 270, 369,
            ],
            type: "line",
            symbol: "circle",
          },
          {
            name: "昨日",
            data: [
              670, 470, 100, 490, 0, 480, 740, 380, 520, 670, 900, 840, 10, 790,
              410, 380, 300, 910, 110, 950, 360, 630, 430, 400, 202,
            ],
            type: "line",
            symbol: "circle",
          },
          {
            name: "上周同日",
            data: [
              180, 750, 340, 840, 530, 160, 480, 290, 250, 270, 0, 500, 260,
              800, 910, 10, 440, 560, 290, 770, 440, 980, 70, 40, 260,
            ],
            type: "line",
            symbol: "circle",
          },
        ],
      },
    };
  },

  mounted: function () {},
  methods: {},
};
</script>

<style lang="less">
@import "@/assets/base.less";
html,
body {
  width: 100%;
  height: 100%;
  min-width: 1920px;
  // min-height: 1080px;
  background: url("@/assets/image/basic_bg_lg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
#app {
  font-family: "ys";
  @font-face {
    font-family: "ys";
    src: url("@/assets/font/youshejianlihei.woff"),
      url("@/assets/font/youshejianlihei.ttf") format("truetype");
  }
  // width: 100%;
  // height: 100%;
  .top__bar {
    height: 70px;
    background: url("@/assets/image/basic_top_lg.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #66ccff;
    .left,
    .right {
      font-family: Microsoft YaHei;
      color: #66ccff;
      font-size: 14px;
      display: flex;
      align-items: center;
      margin-top: 16px;
    }
    .left {
      float: left;
      .area {
        font-size: 16px;
        margin-left: 20px;
      }
      .time {
        font-size: 20px;
        margin-left: 20px;
      }
      .date {
        margin-left: 20px;
      }
      .weekday {
        margin-left: 10px;
      }
    }
    .center {
      font-size: 32px;
      color: #ffffff;
      text-shadow: 0px 0px 14px rgba(0, 170, 255, 0.8);
      text-align: center;
      width: 370px;
      margin: 0 auto;
      line-height: 70px;
    }
    .right {
      float: right;
      .temp {
        margin-right: 20px;
        margin-left: 10px;
      }
    }
  }
  .middle__panel {
    padding: 20px;
    display: flex;
    .item__panel {
      width: calc(100% / 3);
      margin-left: 25px;
      &:first-child {
        margin-left: 0;
      }
      .detail {
        font-family: "Microsoft YaHei";
        margin-top: 20px;
        display: flex;
        text-align: center;
        align-items: center;
        .flag {
          width: 160px;
          height: 160px;
          .name {
            padding-top: 10px;
            font-size: 14px;
            font-weight: bold;
            color: #ffffff;
            text-shadow: 0px 0px 10px rgba(0, 170, 255, 0.7);
          }
        }
        .top {
          background: url("@/assets/image/pass_lg.png") no-repeat;
          background-position: center;
          background-size: 100% 100%;
        }
        .center {
          background: url("@/assets/image/car_lg.png") no-repeat;
          background-position: center;
          background-size: 100% 100%;
        }
        .bottom {
          background: url("@/assets/image/sale_lg.png") no-repeat;
          background-position: center;
          background-size: 100% 100%;
        }
        .data__panel {
          margin-left: 5px;
          width: calc(100% - 155px);
          height: 160px;
          .top__panel {
            height: 70px;
            background: url("@/assets/image/card_bg_lg.png") no-repeat;
            background-size: 100% 100%;
            background-position: center;
          }
          .bott__panel {
            margin-top: 5px;
            height: 85px;
            font-size: 12px;
            color: #ffffff;
            text-align: left;
            .bott_wrapper {
              display: flex;
              align-items: center;
              height: 100%;
              .month {
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                width: 46%;
                height: 100%;
                background: url("@/assets/image/card_bg_lg.png") no-repeat;
                background-size: cover;
                background-position: center;
                .pass_flow {
                  display: flex;
                  align-items: center;
                  .label_title {
                    margin-left: 16px;
                  }
                  .pass_num {
                    font-size: 18px;
                    font-weight: bold;
                    margin-left: 20px;
                  }
                }
                .percent {
                  .label_title {
                    margin-left: 16px;
                    color: #b3b3b3;
                  }
                }
              }
              .year {
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                width: 54%;
                height: 100%;
                margin-left: 5px;
                background: url("@/assets/image/card_bg_lg.png") no-repeat;
                background-size: cover;
                background-position: center;
                .pass_flow {
                  display: flex;
                  align-items: center;
                  .pass_num {
                    font-size: 18px;
                    font-weight: bold;
                    margin-left: 20px;
                  }
                  .label_title {
                    margin-left: 16px;
                  }
                }
                .percent {
                  .label_title {
                    margin-left: 16px;
                    color: #b3b3b3;
                  }
                }
              }
            }
          }
          .yesterday {
            text-align: left;
            padding-left: 16px;
            height: 70px;
            font-size: 12px;
            color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            .day__pass {
              display: flex;
              align-items: center;
              .pass_num {
                margin-left: 20px;
                font-weight: bold;
                font-size: 18px;
              }
            }
            .chain__yoy {
              display: flex;
              align-items: center;
              .chain {
                width: calc(50% - 21px);
                .label_title {
                  color: #b3b3b3;
                }
              }
              .yoy {
                width: 50%;
                margin-left: 16px;
                .label_title {
                  color: #b3b3b3;
                }
              }
            }
            .flow {
              .num {
                margin-left: 20px;
                font-size: 18px;
                font-weight: bold;
              }
            }
            .percent {
              .title {
                color: #b3b3b3;
              }
            }
          }
        }
      }
      .detail-center,
      .detail-bottom {
        margin-top: 15px;
      }
      .realtime_card_box {
        font-family: "Microsoft YaHei";
        margin: 10px auto auto auto;
        width: 97%;
        height: 262px;
        background: url("@/assets/image/retime_bg_lg.png") no-repeat;
        background-position: center;
        background-size: cover;
        .title {
          padding-top: 30px;
          padding-bottom: 27px;
          text-align: center;
          font-size: 14px;
          font-weight: bold;
          color: #ffffff;
          text-shadow: 0px 0px 10px rgba(0, 170, 255, 0.7);
        }
        .logo_pass,
        .logo_car {
          margin: 0 auto;
          width: 70px;
          height: 56px;
        }
        .logo_pass {
          background: url("@/assets/image/realtime_lg.png") no-repeat;
          background-size: cover;
          background-position: center;
        }
        .logo_car {
          background: url("@/assets/image/car_flow_lg.png") no-repeat;
          background-size: cover;
          background-position: center;
        }
        .flow_data {
          // background-color: #b3b3b3;
          text-align: center;
          margin-top: 15px;
          .card {
            display: inline-block;
            margin-left: 5px;
            width: 40px;
            height: 44px;
            line-height: 44px;
            font-size: 24px;
            font-weight: bold;
            color: #ffffff;
            background: url("@/assets/image/passflow_bg.png") no-repeat;
            background-position: center;
            background-size: 100% 100%;
            &:first-child {
              margin-left: 0;
            }
          }
          .separator {
            background: none;
            width: 6px;
            height: 44px;
            vertical-align: top;
            line-height: 32px;
          }
        }
        .data_time {
          margin-top: 34px;
          font-size: 12px;
          font-style: italic;
          color: #66ccff;
          text-align: center;
        }
      }
    }
    .item__title {
      height: 32px;
      line-height: 32px;
      color: #ffffff;
      font-size: 16px;
      text-shadow: 0px 0px 10px rgba(0, 170, 255, 0.7);
      padding-left: 15px;
      background: url("@/assets/image/item_title_lg.png");
      background-position: center;
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }
  .bottom__panel {
    margin-top: 26px;
    height: calc(100% - 698px);
    background-color: #ffffff;
  }
  .realtime_flow_acc {
    // background-color: #50575a;
    padding-top: 20px;
    height: 240px;
    .passflow_chart {
      height: 100%;
    }
  }
}
</style>
