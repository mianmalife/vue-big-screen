<template>
  <div id="app">
    <div class="top__bar clearfix">
      <div class="left">
        <div class="area">深圳龙岗万科</div>
      </div>
      <div class="right">
        <div class="time">17:03:28</div>
        <div class="datetime">
          <div class="weekday">星期一</div>
          <div class="date">2022-09-19</div>
        </div>
        <div class="weather_info">
          <svg-icon
            icon-class="小雨"
            :stroke="'#4bc8c8'"
            className="weather_icon"
          ></svg-icon>
          <div>
            <div class="weather">多云</div>
            <div class="temp">24～27℃</div>
          </div>
        </div>
      </div>
      <div class="center">经营数据一览</div>
    </div>
    <div class="middle__panel">
      <div class="item__panel data__overview">
        <div class="item__title">数据概览</div>
        <div class="detail">
          <div class="flag top">
            <div class="name">客流</div>
          </div>
          <div class="data__panel">
            <div class="bott__panel topClass">
              <div class="bott_wrapper">
                <div class="month">
                  <div class="pass_flow">
                    <span class="label_title">昨日客流(人次)</span>
                    <span class="pass_num">17,548</span>
                  </div>
                  <div class="percent">
                    <div>
                      <span class="label_title">环比(较上一日):&ensp;</span>
                      <span>↓ -4.52%</span>
                    </div>
                  </div>
                </div>
                <div class="year">
                  <div class="pass_flow placeholders">
                    <span class="label_title">--</span>
                    <span class="pass_num">--</span>
                  </div>
                  <div class="percent">
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
            <div class="bott__panel topClass">
              <div class="bott_wrapper">
                <div class="month">
                  <div class="pass_flow">
                    <span class="label_title">昨日车流(辆)</span>
                    <span class="pass_num">2,778</span>
                  </div>
                  <div class="percent">
                    <div>
                      <span class="label_title">环比(较上一月):&ensp;</span>
                      <span>↓ -4.52%</span>
                    </div>
                  </div>
                </div>
                <div class="year">
                  <div class="pass_flow placeholders">
                    <span class="label_title">--</span>
                    <span class="pass_num">--</span>
                  </div>
                  <div class="percent">
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
                    <span class="label_title">7月销售额(万元)</span>
                    <span class="pass_num">2,520.92</span>
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
            <div class="bott__panel topClass">
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
                  </div>
                </div>
                <div class="year">
                  <div class="pass_flow placeholders">
                    <span class="label_title">--</span>
                    <span class="pass_num">--</span>
                  </div>
                  <div class="percent">
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
            <CountFlop :val="val" />
          </div>
          <div class="data_time">数据时间:&ensp;9:45</div>
        </div>
        <div class="realtime_flow_acc">
          <v-chart
            class="passflow_chart"
            :option="option"
            ref="passRef"
            autoresize
          />
        </div>
      </div>
      <div class="item__panel">
        <div class="item__title">车流实时分析</div>
        <div class="realtime_card_box">
          <div class="title">今日车流累计（辆）</div>
          <div class="logo_car"></div>
          <div class="flow_data">
            <CountFlop :val="val" />
          </div>
          <div class="data_time">数据时间:&ensp;9:45</div>
        </div>
        <div class="realtime_flow_acc">
          <v-chart class="passflow_chart" :option="option" autoresize />
        </div>
      </div>
    </div>
    <div class="bottom__panel">
      <div class="item_panel">
        <div class="title_bar">
          <div class="title">销售数据<span>（近12月）</span></div>
        </div>
        <div class="bottom_chart">
          <v-chart
            class="chart_component"
            :option="saleYearOption"
            autoresize
          />
        </div>
      </div>
      <div class="item_panel">
        <div class="title_bar">
          <div class="title">昨日客流人次前20名<span>（品牌）</span></div>
          <div class="unit">单位:&ensp;人次</div>
        </div>
        <div class="bottom_chart">
          <swiper :options="swiperOptions">
            <swiper-slide>
              <ul>
                <li v-for="(item, index) in listData.slice(0, 11)" :key="index">
                  <span class="ranking" v-text="index + 1"></span>
                  <div class="progress_bandname">
                    <span class="brand_name" v-text="item.name"></span>
                    <div class="progress_value">
                      <progress-bar
                        :val="item.value"
                        :max="65487"
                        class="progressbar"
                        :size="6"
                        bg-color="rgba(0, 136, 255, 0.2)"
                        bar-color="linear-gradient(-90deg, #ff6868 0%, rgba(255,104,104,0.1) 100%)"
                        :bar-border-radius="3"
                      ></progress-bar>
                      <span class="data" v-text="item.value"></span>
                    </div>
                  </div>
                </li>
              </ul>
            </swiper-slide>
            <swiper-slide>
              <ul class="item">
                <li v-for="(item, index) in listData.slice(10)" :key="index">
                  <span class="ranking" v-text="index + 11"></span>
                  <div class="progress_bandname">
                    <span class="brand_name" v-text="item.name"></span>
                    <div class="progress_value">
                      <progress-bar
                        :val="item.value"
                        :max="65487"
                        class="progressbar"
                        :size="6"
                        bg-color="rgba(0, 136, 255, 0.2)"
                        bar-color="linear-gradient(-90deg, #ff6868 0%, rgba(255,104,104,0.1) 100%)"
                        :bar-border-radius="3"
                      ></progress-bar>
                      <span class="data" v-text="item.value"></span>
                    </div>
                  </div>
                </li>
              </ul>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="item_panel">
        <div class="title_bar">
          <div class="title">7月销售额前20名<span>（品牌）</span></div>
          <div class="unit">单位:&ensp;万元</div>
        </div>
        <div class="bottom_chart">
          <swiper :options="swiperOptions">
            <swiper-slide>
              <ul>
                <li v-for="(item, index) in listData.slice(0, 11)" :key="index">
                  <span class="ranking" v-text="index + 1"></span>
                  <div class="progress_bandname">
                    <span class="brand_name" v-text="item.name"></span>
                    <div class="progress_value">
                      <progress-bar
                        :val="item.value"
                        :max="65487"
                        class="progressbar"
                        :size="6"
                        bg-color="rgba(0, 136, 255, 0.2)"
                        bar-color="linear-gradient(-90deg, #ff6868 0%, rgba(255,104,104,0.1) 100%)"
                        :bar-border-radius="3"
                      ></progress-bar>
                      <span class="data" v-text="item.value"></span>
                    </div>
                  </div>
                </li>
              </ul>
            </swiper-slide>
            <swiper-slide>
              <ul class="item">
                <li v-for="(item, index) in listData.slice(10)" :key="index">
                  <span class="ranking" v-text="index + 11"></span>
                  <div class="progress_bandname">
                    <span class="brand_name" v-text="item.name"></span>
                    <div class="progress_value">
                      <progress-bar
                        :val="item.value"
                        :max="65487"
                        class="progressbar"
                        :size="6"
                        bg-color="rgba(0, 136, 255, 0.2)"
                        bar-color="linear-gradient(-90deg, #ff6868 0%, rgba(255,104,104,0.1) 100%)"
                        :bar-border-radius="3"
                      ></progress-bar>
                      <span class="data" v-text="item.value"></span>
                    </div>
                  </div>
                </li>
              </ul>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { $http } from "@/shared/axios";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import ProgressBar from "vue-simple-progress";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart, BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";
import VChart from "vue-echarts";
import tooltipBg from "@/assets/image/tootip_bg.png";
import SvgIcon from "@/component/svgIcon.vue";
import CountFlop from "@/component/conutFlop.vue";
import { autoHover } from "@/util/tooltip.js";
use([
  CanvasRenderer,
  LineChart,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
]);
export default {
  name: "App",
  components: {
    VChart,
    ProgressBar,
    Swiper,
    SwiperSlide,
    SvgIcon,
    CountFlop,
  },
  provide: {},
  directives: {
    swiper: directive,
  },
  data: function () {
    return {
      val: "233,232",
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
      saleYearOption: {
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
          bottom: "10%",
          left: "2%",
          right: 0,
          containLabel: true,
        },
        color: ["#3AA1FF", "#FFBB54", "#00FFD5"],
        legend: {
          textStyle: {
            color: "#b3b3b3",
          },
          itemWidth: 20,
          itemHeight: 10,
          borderRadius: 10,
          data: ["本期", "同期", "同比(%)"],
        },
        xAxis: {
          type: "category",
          axisLabel: {
            // rotate: 45,
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
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
        },
        yAxis: [
          {
            name: "万元",
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
          {
            name: "%",
            nameLocation: "end",
            nameTextStyle: {
              color: "#00AAFF",
              align: "left",
              padding: [0, 0, 0, 10],
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
        ],
        series: [
          {
            name: "本期",
            data: [
              680, 30, 510, 890, 850, 990, 400, 790, 280, 210, 20, 970, 380,
            ],
            type: "bar",
            symbol: "circle",
            barWidth: 8,
            itemStyle: {
              borderRadius: [4, 4, 0, 0],
            },
          },
          {
            name: "同期",
            data: [670, 470, 100, 410, 380, 300, 910, 110, 950, 360, 630, 430],
            type: "bar",
            symbol: "circle",
            barWidth: 8,
            itemStyle: {
              borderRadius: [4, 4, 0, 0],
            },
          },
          {
            name: "同比(%)",
            yAxisIndex: 1,
            data: [18, 75, 34, 84, 53, 16, 48, 29, 25, 27, 10, 50, 26],
            type: "line",
            symbol: "circle",
          },
        ],
      },
      listData: [
        {
          name: "乐派对量贩KTV",
          value: 65487,
        },
        {
          name: "维纳国际影城维纳国际影城维纳国际影城",
          value: 60123,
        },
        {
          name: "品牌3",
          value: 55789,
        },
        {
          name: "品牌4",
          value: 52713,
        },
        {
          name: "品牌5",
          value: 50682,
        },
        {
          name: "品牌6",
          value: 48637,
        },
        {
          name: "品牌7",
          value: 46159,
        },
        {
          name: "品牌8",
          value: 43753,
        },
        {
          name: "品牌9",
          value: 41068,
        },
        {
          name: "品牌10",
          value: 35763,
        },
        {
          name: "品牌11",
          value: 32763,
        },
        {
          name: "品牌12",
          value: 30763,
        },
        {
          name: "品牌13",
          value: 28763,
        },
        {
          name: "品牌14",
          value: 27763,
        },
        {
          name: "品牌15",
          value: 26763,
        },
        {
          name: "品牌16",
          value: 22763,
        },
        {
          name: "品牌17",
          value: 16763,
        },
        {
          name: "品牌18",
          value: 6763,
        },
        {
          name: "品牌19",
          value: 5763,
        },
        {
          name: "品牌20",
          value: 3763,
        },
      ],

      swiperOptions: {
        direction: "vertical", // 垂直切换选项
        autoplay: {
          //自动开始
          delay: 250000, //时间间隔
        },
        loop: true, // 循环模式选项
      },
      tootipTimer: null,
    };
  },

  mounted: function () {
    // window.onresize = function () {
    //   location.reload();
    // };
    setInterval(() => {
      // parseInt(Math.random() * 100000).toLocaleString()
      this.val = parseInt(Math.random() * 100000).toLocaleString();
    }, 4000);
    console.log(this.$refs.passRef.chart);
    this.tootipTimer && this.tooltipTimer.clearLoop();
    this.tootipTimer = 0;
    this.tootipTimer = autoHover(
      this.$refs.passRef,
      {},
      this.option.xAxis.data.length,
      1000
    );
  },
  methods: {},
  destroyed: function () {
    this.tooltipTimer.clearLoop();
  },
};
</script>

<style lang="less">
@import "@/assets/base.less";
@baseHeight: 1080;
.pxToVh(@attr, @px) {
  @{attr}: unit((@px / @baseHeight * 100), vh);
}
html,
body {
  width: 100%;
  height: 100vh;
  min-width: 1920px;
  min-height: 1080px;
  background: url("@/assets/image/basic_bg_lg.png");
  background-position: center;
  background-size: 100% 100%;
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
    .pxToVh(height, 70);
    background: url("@/assets/image/basic_top_lg.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #66ccff;
    .right {
      font-family: Microsoft YaHei;
      color: #66ccff;
      font-size: 14px;
      display: flex;
      align-items: center;
      .pxToVh(margin-top, 10);
      .time {
        font-size: 20px;
        .pxToVh(margin-right, 30);
      }
      .datetime {
        font-size: 14px;
        .pxToVh(margin-left, 20);
        .pxToVh(margin-right, 30);
      }
      .weather_info {
        display: flex;
        align-items: center;
        .pxToVh(margin-right, 20);
        .weather_icon {
          .pxToVh(margin-right, 10);
          font-size: 30px;
        }
      }
    }
    .left {
      float: left;
      .pxToVh(margin-top, 14);
      .area {
        font-size: 24px;
        color: #ffffff;
        text-shadow: 0px 0px 14px rgba(0, 170, 255, 0.8);
        .pxToVh(margin-left, 20);
      }
    }
    .center {
      font-size: 32px;
      color: #ffffff;
      text-shadow: 0px 0px 14px rgba(0, 170, 255, 0.8);
      text-align: center;
      .pxToVh(width, 370);
      margin: 0 auto;
      .pxToVh(line-height, 70);
    }
    .right {
      float: right;
    }
  }
  .middle__panel {
    .pxToVh(padding, 20);
    display: flex;
    .item__panel {
      width: calc(100% / 3);
      .pxToVh(margin-left, 25);
      &:first-child {
        margin-left: 0;
      }
      .detail {
        font-family: "Microsoft YaHei";
        .pxToVh(margin-top, 20);
        display: flex;
        text-align: center;
        align-items: center;
        .flag {
          .pxToVh(width, 160);
          .pxToVh(height, 160);
          .name {
            .pxToVh(padding-top, 10);
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
          .pxToVh(height, 160);
          .bott__panel {
            .pxToVh(margin-top, 5);
            .pxToVh(height, 85);
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
                justify-content: space-around;
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
                    flex-shrink: 0;
                  }
                  .pass_num {
                    font-size: 18px;
                    font-weight: bold;
                    flex: 1;
                    .pxToVh(margin-left, 20);
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
                justify-content: space-around;
                justify-content: space-evenly;
                width: 54%;
                height: 100%;
                .pxToVh(margin-left, 5);
                background: url("@/assets/image/card_bg_lg.png") no-repeat;
                background-size: cover;
                background-position: center;
                .pass_flow {
                  display: flex;
                  align-items: center;
                  .pass_num {
                    font-size: 18px;
                    font-weight: bold;
                    .pxToVh(margin-left, 20);
                  }
                  .label_title {
                    .pxToVh(margin-left, 16);
                  }
                }
                .percent {
                  .label_title {
                    .pxToVh(margin-left, 16);
                    color: #b3b3b3;
                  }
                }
              }
            }
          }
          .topClass {
            margin-top: 0;
            .pxToVh(height, 70);
            .bott_wrapper {
              background: url("@/assets/image/card_bg_lg.png") no-repeat;
              background-size: 100% 100%;
              background-position: center;
              .month,
              .year {
                background: none;
                .placeholders {
                  opacity: 0;
                  visibility: hidden;
                }
              }
            }
          }
          .yesterday {
            text-align: left;
            .pxToVh(padding-left, 16);
            .pxToVh(height, 70);
            font-size: 12px;
            color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            justify-content: space-evenly;
            .day__pass {
              display: flex;
              align-items: center;
              .pass_num {
                .pxToVh(margin-left, 20);
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
                .pxToVh(margin-left, 20);
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
        .pxToVh(margin-top, 15);
      }
      .realtime_card_box {
        font-family: "Microsoft YaHei";
        margin: 0 auto;
        .pxToVh(margin-top, 10);
        width: 97%;
        .pxToVh(height, 262);
        background: url("@/assets/image/retime_bg_lg.png") no-repeat;
        background-position: center;
        background-size: 100% 100%;
        .title {
          .pxToVh(padding-top, 30);
          .pxToVh(padding-bottom, 27);
          text-align: center;
          font-size: 14px;
          font-weight: bold;
          color: #ffffff;
          text-shadow: 0px 0px 10px rgba(0, 170, 255, 0.7);
        }
        .logo_pass,
        .logo_car {
          margin: 0 auto;
          .pxToVh(width, 70);
          .pxToVh(height, 56);
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
          .pxToVh(margin-top, 15);
          .card {
            display: inline-block;
            margin-left: 5px;
            .pxToVh(width, 40);
            .pxToVh(height, 44);
            .pxToVh(line-height, 44);
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
            .pxToVh(width, 6);
            .pxToVh(height, 44);
            vertical-align: top;
            .pxToVh(line-height, 32);
          }
          // .count-flop,
          // .count-flop-box {
          //   .pxToVh(height, 44);
          //   .pxToVh(line-height, 44);
          //   border: none;
          //   margin-right: 0;
          //   font-size: 24px;
          // }
          // .count-flop-num {
          //   margin-left: 5px;
          //   .pxToVh(width, 40);
          //   .pxToVh(height, 44);
          //   .pxToVh(line-height, 44);
          //   font-weight: bold;
          //   color: #ffffff;
          //   background: url("@/assets/image/passflow_bg.png") no-repeat;
          //   background-position: center;
          //   background-size: 100% 100%;
          // }
          .count-flop {
            display: block;
            .pxToVh(height, 44);
            .pxToVh(line-height, 44);
          }
          .count-flop-box {
            border-radius: 0;
            margin-right: 0;
            margin-left: 5px;
            border: none;
            .pxToVh(width, 40);
            .pxToVh(height, 44);
            .pxToVh(line-height, 44);
            font-weight: bold;
            color: #ffffff;
            background: url("@/assets/image/passflow_bg.png") no-repeat;
            background-position: center;
            background-size: 100% 100%;
            font-size: 24px;
            &:first-child {
              margin-left: 0;
            }
          }
          .count-flop-point {
            margin-right: 0;
            color: #ffffff;
            margin-left: 5px;
            .pxToVh(line-height, 26);
            font-size: 28px;
            .count-flop-content {
              height: 100%;
            }
          }
        }
        .data_time {
          .pxToVh(margin-top, 28);
          font-size: 12px;
          font-style: italic;
          color: #66ccff;
          text-align: center;
        }
      }
    }
    .item__title {
      .pxToVh(height, 32);
      .pxToVh(line-height, 32);
      color: #ffffff;
      font-size: 16px;
      text-shadow: 0px 0px 10px rgba(0, 170, 255, 0.7);
      .pxToVh(padding-left, 15);
      background: url("@/assets/image/item_title_lg.png");
      background-position: center;
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }
  .realtime_flow_acc {
    // background-color: #50575a;
    .pxToVh(padding-top, 20);
    .pxToVh(height, 240);
    .passflow_chart {
      height: 100%;
    }
  }
  .bottom__panel {
    display: flex;
    .pxToVh(padding-top, 26);
    .pxToVh(padding-right, 20);
    .pxToVh(padding-left, 20);
    height: calc(100% - 700px);
    .item_panel {
      width: calc(100% / 3);
      height: 100%;
      .pxToVh(margin-left, 25);
      &:first-child {
        margin-left: 0;
      }
      .title_bar {
        display: flex;
        justify-content: space-between;
        height: 32px;
        line-height: 32px;
        color: #ffffff;
        font-size: 16px;
        text-shadow: 0px 0px 10px rgba(0, 170, 255, 0.7);
        .pxToVh(padding-left, 15);
        background: url("@/assets/image/item_title_lg.png");
        background-position: center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        .title {
          span {
            font-size: 12px;
          }
        }
        .unit {
          font-family: "Microsoft YaHei";
          color: #33bbff;
          font-size: 12px;
          font-style: italic;
          .pxToVh(padding-right, 20);
        }
      }
      .bottom_chart {
        font-family: "Microsoft YaHei";
        font-size: 12px;
        .pxToVh(padding-top, 20);
        .pxToVh(height, 328);
        .swiper-container {
          .pxToVh(height, 300);
          ul {
            li {
              display: block;
              .pxToVh(height, 30);
              .pxToVh(line-height, 30);
              display: flex;
              align-items: center;
              .ranking {
                display: inline-block;
                flex-shrink: 0;
                .pxToVh(width, 20);
                .pxToVh(height, 20);
                .pxToVh(line-height, 20);
                background: rgba(255, 187, 84, 0.2);
                border: 1px solid #ffbb54;
                .pxToVh(border-radius, 5);
                text-align: center;
                .pxToVh(margin-right, 20);
              }
              .progress_bandname {
                flex: 1;
                flex-basis: .pxToVh(width, 420);
                line-height: normal;
                .progress_value {
                  display: flex;
                  align-items: center;
                }
              }
              .brand_name {
                // flex: 2;
                // flex-shrink: 0;
                color: #b3b3b3;
                text-align: right;
                .pxToVh(margin-right, 10);
                white-space: nowrap;
                // width: 200px;
                // overflow: hidden;
                // text-overflow: ellipsis;
              }
              .progressbar {
                flex: 8;
                // flex-shrink: 16;
              }
              .data {
                color: #fff;
                flex: 1;
                // flex-grow: 4;
                // .pxToVh(flex-basis, 100);
                flex-shrink: 0;
                text-align: left;
                .pxToVh(text-indent, 7);
              }
            }
          }
        }
      }
    }
  }
}
</style>
