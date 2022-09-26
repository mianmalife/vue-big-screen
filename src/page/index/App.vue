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
                    <span class="pass_num">{{
                      typeof passFlowData.FlowsYesterday === "number"
                        ? passFlowData.FlowsYesterday.toLocaleString()
                        : "--"
                    }}</span>
                  </div>
                  <div class="percent">
                    <div>
                      <span class="label_title">环比(较上一日):&ensp;</span>
                      <span
                        v-if="
                          typeof passFlowData.FlowsDayQoQ === 'number' &&
                          passFlowData.FlowsDayQoQ !== 0
                        "
                        :style="{
                          color:
                            passFlowData.FlowsDayQoQ > 0
                              ? '#00FF76'
                              : '#FF3333',
                        }"
                        >{{ passFlowData.FlowsDayQoQ > 0 ? "↑" : "↓" }}
                        {{
                          passFlowData.FlowsDayQoQ > 0
                            ? `+${passFlowData.FlowsDayQoQ}%`
                            : `${passFlowData.FlowsDayQoQ}%`
                        }}</span
                      >
                      <span v-else-if="passFlowData.FlowsDayQoQ === 0">0</span>
                      <span v-else>--</span>
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
                    <span
                      v-if="
                        typeof passFlowData.FlowsDayYoY === 'number' &&
                        passFlowData.FlowsDayYoY !== 0
                      "
                      :style="{
                        color:
                          passFlowData.FlowsDayYoY > 0 ? '#00FF76' : '#FF3333',
                      }"
                      >{{ passFlowData.FlowsDayYoY > 0 ? "↑" : "↓" }}
                      {{ passFlowData.FlowsDayYoY + "%" }}
                    </span>
                    <span v-else-if="passFlowData.FlowsDayYoY === 0">0</span>
                    <span v-else>--</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="bott__panel">
              <div class="bott_wrapper">
                <div class="month">
                  <div class="pass_flow">
                    <span class="label_title">8月客流(万人次)</span>
                    <span class="pass_num">{{
                      typeof passFlowData.FlowsMonth === "number"
                        ? passFlowData.FlowsMonth.toLocaleString()
                        : "--"
                    }}</span>
                  </div>
                  <div class="percent">
                    <div>
                      <span class="label_title">环比(较上一月):&ensp;</span>
                      <span
                        v-if="
                          typeof passFlowData.FlowsMonthQoQ === 'number' &&
                          passFlowData.FlowsMonthQoQ !== 0
                        "
                        :style="{
                          color:
                            passFlowData.FlowsMonthQoQ > 0
                              ? '#00FF76'
                              : '#FF3333',
                        }"
                        >{{ passFlowData.FlowsMonthQoQ > 0 ? "↑" : "↓" }}
                        {{
                          passFlowData.FlowsMonthQoQ > 0
                            ? `+${passFlowData.FlowsMonthQoQ}%`
                            : `${passFlowData.FlowsMonthQoQ}%`
                        }}</span
                      >
                      <span v-else-if="passFlowData.FlowsMonthQoQ === 0"
                        >0</span
                      >
                      <span v-else>--</span>
                    </div>
                    <div>
                      <span class="label_title">同比(去年同月):&ensp;</span>
                      <span
                        v-if="
                          typeof passFlowData.FlowsMonthYoY === 'number' &&
                          passFlowData.FlowsMonthYoY !== 0
                        "
                        :style="{
                          color:
                            passFlowData.FlowsMonthYoY > 0
                              ? '#00FF76'
                              : '#FF3333',
                        }"
                        >{{ passFlowData.FlowsMonthYoY > 0 ? "↑" : "↓" }}
                        {{
                          passFlowData.FlowsMonthYoY > 0
                            ? `+${passFlowData.FlowsMonthYoY}%`
                            : `${passFlowData.FlowsMonthYoY}%`
                        }}</span
                      >
                      <span v-else-if="passFlowData.FlowsMonthYoY === 0"
                        >0</span
                      >
                      <span v-else>--</span>
                    </div>
                  </div>
                </div>
                <div class="year">
                  <div class="pass_flow">
                    <span class="label_title">2022年客流(万人次)</span>
                    <span class="pass_num">{{
                      typeof passFlowData.FlowsYear === "number"
                        ? passFlowData.FlowsYear
                        : "--"
                    }}</span>
                  </div>
                  <div class="percent">
                    <span class="label_title">环比(较去年):&ensp;</span>
                    <span
                      v-if="
                        typeof passFlowData.FlowsYearQoQ === 'number' &&
                        passFlowData.FlowsYearQoQ !== 0
                      "
                      :style="{
                        color:
                          passFlowData.FlowsYearQoQ > 0 ? '#00FF76' : '#FF3333',
                      }"
                      >{{ passFlowData.FlowsYearQoQ > 0 ? "↑" : "↓" }}
                      {{
                        passFlowData.FlowsYearQoQ > 0
                          ? `+${passFlowData.FlowsYearQoQ}%`
                          : `${passFlowData.FlowsYearQoQ}%`
                      }}</span
                    >
                    <span v-else-if="passFlowData.FlowsYearQoQ === 0">0</span>
                    <span v-else>--</span>
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
                    <span class="pass_num">{{
                      typeof vehicleData.FlowsYesterday === "number"
                        ? vehicleData.FlowsYesterday.toLocaleString()
                        : "--"
                    }}</span>
                  </div>
                  <div class="percent">
                    <div>
                      <span class="label_title">环比(较上一月):&ensp;</span>
                      <span
                        v-if="
                          typeof vehicleData.FlowsMonthQoQ === 'number' &&
                          vehicleData.FlowsMonthQoQ !== 0
                        "
                        :style="{
                          color:
                            vehicleData.FlowsMonthQoQ > 0
                              ? '#00FF76'
                              : '#FF3333',
                        }"
                        >{{ vehicleData.FlowsMonthQoQ > 0 ? "↑" : "↓" }}
                        {{
                          vehicleData.FlowsMonthQoQ > 0
                            ? `+${vehicleData.FlowsMonthQoQ}%`
                            : `${vehicleData.FlowsMonthQoQ}%`
                        }}</span
                      >
                      <span v-else-if="vehicleData.FlowsMonthQoQ === 0">0</span>
                      <span v-else>--</span>
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
                    <span
                      v-if="
                        typeof vehicleData.FlowsDayYoY === 'number' &&
                        vehicleData.FlowsDayYoY !== 0
                      "
                      :style="{
                        color:
                          vehicleData.FlowsDayYoY > 0 ? '#00FF76' : '#FF3333',
                      }"
                      >{{ vehicleData.FlowsDayYoY > 0 ? "↑" : "↓" }}
                      {{ vehicleData.FlowsDayYoY + "%" }}
                    </span>
                    <span v-else-if="vehicleData.FlowsDayYoY === 0">0</span>
                    <span v-else>--</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="bott__panel">
              <div class="bott_wrapper">
                <div class="month">
                  <div class="pass_flow">
                    <span class="label_title">8月车流(万辆)</span>
                    <span class="pass_num">{{
                      typeof vehicleData.FlowsMonth === "number"
                        ? vehicleData.FlowsMonth.toLocaleString()
                        : "--"
                    }}</span>
                  </div>
                  <div class="percent">
                    <div>
                      <span class="label_title">环比(较上一月):&ensp;</span>
                      <span
                        v-if="
                          typeof vehicleData.FlowsMonthQoQ === 'number' &&
                          vehicleData.FlowsMonthQoQ !== 0
                        "
                        :style="{
                          color:
                            vehicleData.FlowsMonthQoQ > 0
                              ? '#00FF76'
                              : '#FF3333',
                        }"
                        >{{ vehicleData.FlowsMonthQoQ > 0 ? "↑" : "↓" }}
                        {{
                          vehicleData.FlowsMonthQoQ > 0
                            ? `+${vehicleData.FlowsMonthQoQ}%`
                            : `${vehicleData.FlowsMonthQoQ}%`
                        }}</span
                      >
                      <span v-else-if="vehicleData.FlowsMonthQoQ === 0">0</span>
                      <span v-else>--</span>
                    </div>
                    <div>
                      <span class="label_title">同比(去年同月):&ensp;</span>
                      <span
                        v-if="
                          typeof vehicleData.FlowsMonthYoY === 'number' &&
                          vehicleData.FlowsMonthYoY !== 0
                        "
                        :style="{
                          color:
                            vehicleData.FlowsMonthYoY > 0
                              ? '#00FF76'
                              : '#FF3333',
                        }"
                        >{{ vehicleData.FlowsMonthYoY > 0 ? "↑" : "↓" }}
                        {{
                          vehicleData.FlowsMonthYoY > 0
                            ? `+${vehicleData.FlowsMonthYoY}%`
                            : `${vehicleData.FlowsMonthYoY}%`
                        }}</span
                      >
                      <span v-else-if="vehicleData.FlowsMonthYoY === 0">0</span>
                      <span v-else>--</span>
                    </div>
                  </div>
                </div>
                <div class="year">
                  <div class="pass_flow">
                    <span class="label_title">2022年车流(万辆)</span>
                    <span class="pass_num">{{
                      typeof vehicleData.FlowsYear === "number"
                        ? vehicleData.FlowsYear
                        : "--"
                    }}</span>
                  </div>
                  <div class="percent">
                    <span class="label_title">环比(较去年):&ensp;</span>
                    <span
                      v-if="
                        typeof vehicleData.FlowsYearQoQ === 'number' &&
                        vehicleData.FlowsYearQoQ !== 0
                      "
                      :style="{
                        color:
                          vehicleData.FlowsYearQoQ > 0 ? '#00FF76' : '#FF3333',
                      }"
                      >{{ vehicleData.FlowsYearQoQ > 0 ? "↑" : "↓" }}
                      {{
                        vehicleData.FlowsYearQoQ > 0
                          ? `+${vehicleData.FlowsYearQoQ}%`
                          : `${vehicleData.FlowsYearQoQ}%`
                      }}</span
                    >
                    <span v-else-if="vehicleData.FlowsYearQoQ === 0">0</span>
                    <span v-else>--</span>
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
                    <span class="label_title">7月销售额(万元)</span>
                    <span class="pass_num">{{
                      typeof saleCardData.SalesAmount === "number"
                        ? saleCardData.SalesAmount.toLocaleString()
                        : "--"
                    }}</span>
                  </div>
                  <div class="percent">
                    <div>
                      <span class="label_title">环比(较上一月):&ensp;</span>
                      <span
                        v-if="
                          typeof saleCardData.SalesMoM === 'number' &&
                          saleCardData.SalesMoM !== 0
                        "
                        :style="{
                          color:
                            saleCardData.SalesMoM > 0 ? '#00FF76' : '#FF3333',
                        }"
                        >{{ saleCardData.SalesMoM > 0 ? "↑" : "↓" }}
                        {{
                          saleCardData.SalesMoM > 0
                            ? `+${saleCardData.SalesMoM}%`
                            : `${saleCardData.SalesMoM}%`
                        }}</span
                      >
                      <span v-else-if="saleCardData.SalesMoM === 0">0</span>
                      <span v-else>--</span>
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
                    <span
                      v-if="
                        typeof saleCardData.SalesYoY === 'number' &&
                        saleCardData.SalesYoY !== 0
                      "
                      :style="{
                        color:
                          saleCardData.SalesYoY > 0 ? '#00FF76' : '#FF3333',
                      }"
                      >{{ saleCardData.SalesYoY > 0 ? "↑" : "↓" }}
                      {{
                        saleCardData.SalesYoY > 0
                          ? `+${saleCardData.SalesYoY}%`
                          : `${saleCardData.SalesYoY}%`
                      }}</span
                    >
                    <span v-else-if="saleCardData.SalesYoY === 0">0</span>
                    <span v-else>--</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="bott__panel">
              <div class="bott_wrapper">
                <div class="month">
                  <div class="pass_flow">
                    <span class="label_title">7月提袋率</span>
                    <span class="pass_num">{{
                      typeof saleCardData.BagRate === "number"
                        ? saleCardData.BagRate + "%"
                        : "--"
                    }}</span>
                  </div>
                </div>
                <div class="year">
                  <div class="pass_flow">
                    <span class="label_title">7月客单价(元)</span>
                    <span class="pass_num">{{
                      typeof saleCardData.ATV === "number"
                        ? saleCardData.ATV
                        : "--"
                    }}</span>
                  </div>
                  <div class="percent">
                    <span class="label_title">环比(较去年):&ensp;</span>
                    <span
                      v-if="
                        typeof saleCardData.ATVMoM === 'number' &&
                        saleCardData.ATVMoM !== 0
                      "
                      :style="{
                        color: saleCardData.ATVMoM > 0 ? '#00FF76' : '#FF3333',
                      }"
                      >{{ saleCardData.ATVMoM > 0 ? "↑" : "↓" }}
                      {{
                        saleCardData.ATVMoM > 0
                          ? `+${saleCardData.ATVMoM}%`
                          : `${saleCardData.ATVMoM}%`
                      }}</span
                    >
                    <span v-else-if="saleCardData.ATVMoM === 0">0</span>
                    <span v-else>--</span>
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
            ref="saleRef"
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
import { getTrafficKpiData, getVehicleKpiData, getSaleKpiData } from "./api.js";
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
          axisPointer: {
            type: "shadow",
          },
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
          axisPointer: {
            type: "shadow",
          },
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
          delay: 2500, //时间间隔
        },
        loop: true, // 循环模式选项
      },
      tootipTimer: null,
      tootipSaleChart: null,
      passFlowData: {
        Month: null,
        Year: null,
        FlowsYesterday: null,
        FlowsDayQoQ: null,
        FlowsDayYoY: null,
        FlowsMonth: null,
        FlowsMonthQoQ: null,
        FlowsMonthYoY: null,
        FlowsYear: null,
        FlowsYearQoQ: null,
      },
      vehicleData: {
        Month: null,
        Year: null,
        FlowsYesterday: null,
        FlowsDayQoQ: null,
        FlowsDayYoY: null,
        FlowsMonth: null,
        FlowsMonthQoQ: null,
        FlowsMonthYoY: null,
        FlowsYear: null,
        FlowsYearQoQ: null,
      },
      saleCardData: {
        Month: null,
        Year: null,
        SalesAmount: null,
        SalesMoM: null,
        SalesYoY: null,
        BagRate: null,
        ATV: null,
        ATVMoM: null,
      },
    };
  },

  mounted: function () {
    this.getTrafficCardData();
    this.getVehicleCardData();
    this.getSaleCardData();
    setInterval(() => {
      this.val = parseInt(Math.random() * 100000).toLocaleString();
    }, 4000);
    // console.log(this.$refs.passRef.chart, this.$refs.saleRef.chart);
    this.tootipTimer && this.tooltipTimer.clearLoop();
    this.tootipTimer = 0;
    this.tootipSaleChart = autoHover(
      [this.$refs.passRef, this.$refs.saleRef],
      {},
      [this.option.xAxis.data.length, this.saleYearOption.xAxis.data.length],
      2500
    );
  },
  methods: {
    getTrafficCardData: async function () {
      try {
        const res = await getTrafficKpiData();
        console.log(res);
        if (Object.prototype.toString.call(res)) {
          this.passFlowData = {
            ...this.passFlowData,
            Month: res.Month || "--",
            Year: res.Year || "--",
            FlowsYesterday: res.FlowsYesterday,
            FlowsDayQoQ: res.FlowsDayQoQ,
            FlowsDayYoY: res.FlowsDayYoY,
            FlowsMonth: res.FlowsMonth,
            FlowsMonthQoQ: res.FlowsMonthQoQ,
            FlowsMonthYoY: res.FlowsMonthYoY,
            FlowsYear: res.FlowsYear,
            FlowsYearQoQ: res.FlowsYearQoQ,
          };
        } else {
          this.passFlowData = Object.assign(this.passFlowData, {
            Month: null,
            Year: null,
            FlowsYesterday: null,
            FlowsDayQoQ: null,
            FlowsDayYoY: null,
            FlowsMonth: null,
            FlowsMonthQoQ: null,
            FlowsMonthYoY: null,
            FlowsYear: null,
            FlowsYearQoQ: null,
          });
        }
      } catch (error) {
        console.warn(error);
        this.passFlowData = Object.assign(this.passFlowData, {
          Month: null,
          Year: null,
          FlowsYesterday: null,
          FlowsDayQoQ: null,
          FlowsDayYoY: null,
          FlowsMonth: null,
          FlowsMonthQoQ: null,
          FlowsMonthYoY: null,
          FlowsYear: null,
          FlowsYearQoQ: null,
        });
      }
    },
    getVehicleCardData: async function () {
      try {
        const res = await getVehicleKpiData();
        console.log(res);
        if (Object.prototype.toString.call(res)) {
          this.vehicleData = {
            ...this.vehicleData,
            Month: res.Month || "--",
            Year: res.Year || "--",
            FlowsYesterday: res.FlowsYesterday,
            FlowsDayQoQ: res.FlowsDayQoQ,
            FlowsDayYoY: res.FlowsDayYoY,
            FlowsMonth: res.FlowsMonth,
            FlowsMonthQoQ: res.FlowsMonthQoQ,
            FlowsMonthYoY: res.FlowsMonthYoY,
            FlowsYear: res.FlowsYear,
            FlowsYearQoQ: res.FlowsYearQoQ,
          };
        } else {
          this.vehicleData = Object.assign(this.vehicleData, {
            Month: null,
            Year: null,
            FlowsYesterday: null,
            FlowsDayQoQ: null,
            FlowsDayYoY: null,
            FlowsMonth: null,
            FlowsMonthQoQ: null,
            FlowsMonthYoY: null,
            FlowsYear: null,
            FlowsYearQoQ: null,
          });
        }
      } catch (error) {
        console.warn(error);
        this.vehicleData = Object.assign(this.vehicleData, {
          Month: null,
          Year: null,
          FlowsYesterday: null,
          FlowsDayQoQ: null,
          FlowsDayYoY: null,
          FlowsMonth: null,
          FlowsMonthQoQ: null,
          FlowsMonthYoY: null,
          FlowsYear: null,
          FlowsYearQoQ: null,
        });
      }
    },
    getSaleCardData: async function () {
      try {
        const res = await getSaleKpiData();
        console.log(res);
        if (Object.prototype.toString.call(res)) {
          this.saleCardData = {
            ...this.saleCardData,
            Month: res.Month || "--",
            Year: res.Year || "--",
            SalesAmount: res.SalesAmount,
            SalesMoM: res.SalesMoM,
            SalesYoY: res.SalesYoY,
            BagRate: res.BagRate,
            ATV: res.ATV,
            ATVMoM: res.ATVMoM,
          };
        } else {
          this.saleCardData = {
            ...this.saleCardData,
            Month: null,
            Year: null,
            SalesAmount: null,
            SalesMoM: null,
            SalesYoY: null,
            BagRate: null,
            ATV: null,
            ATVMoM: null,
          };
        }
      } catch (error) {
        console.warn(error);
        this.saleCardData = {
          ...this.saleCardData,
          Month: null,
          Year: null,
          SalesAmount: null,
          SalesMoM: null,
          SalesYoY: null,
          BagRate: null,
          ATV: null,
          ATVMoM: null,
        };
      }
    },
  },
  beforeDestroy: function () {
    clearInterval(this.tootipTimer);
    clearInterval(this.tootipSaleChart);
  },
};
</script>

<style lang="less">
@import "@/assets/base.less";
@import "./index.less";
</style>
