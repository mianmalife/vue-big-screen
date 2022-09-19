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
    <div class="content__panel">
      <div class="item__panel data__overview">
        <div class="item__title">数据概览</div>
      </div>
      <div class="item__panel pass__flow__analysis">
        <div class="item__title">客流实时分析</div>
      </div>
      <div class="item__panel car__flow__analysis">
        <div class="item__title">车流实时分析</div>
      </div>
    </div>
  </div>
</template>

<script>
// import { $http } from "@/shared/axios";
export default {
  name: "App",
  data: function () {
    return {
      task: [],
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
  width: 100%;
  height: 100%;
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
      margin-top: 21px;
      height: 24px;
      line-height: 24px;
    }
    .right {
      float: right;
      .temp {
        margin-right: 20px;
        margin-left: 10px;
      }
    }
  }
  .content__panel {
    padding: 20px;
    display: flex;
    .item__panel {
      width: calc(100% / 3);
      margin-left: 25px;
      height: 300px;
      &:first-child {
        margin-left: 0;
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
      background-size: 100%;
      background-repeat: no-repeat;
    }
  }
}
</style>
