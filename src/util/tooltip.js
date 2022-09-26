/**
 * echarts tooltip轮播
 * @param chart ECharts实例
 * @param chartOption echarts的配置信息
 * @param options object 选项
 * {
 *  interval    轮播时间间隔，单位毫秒，默认为3000
 *              true表示循环所有series的tooltip，false则显示指定seriesIndex的tooltip
 *  seriesIndex 默认为0，指定某个系列（option中的series索引）循环显示tooltip，
 *              当loopSeries为true时，从seriesIndex系列开始执行。
 * }
 * @returns {{clearLoop: clearLoop}|undefined}
 */

export function autoHover(myChart, option, num, time) {
  if (!myChart) return;
  var defaultData = {
    // 设置默认值
    time: 3000,
    num: 14,
  };
  if (!time) {
    time = defaultData.time;
  }
  if (!num) {
    num = defaultData.num;
  }
  myChart.forEach((instance, index) => {
    var count = 0;
    var timeTicket = 0;

    // 清除定时器
    function clearLoop() {
      if (timeTicket) {
        clearInterval(timeTicket);
        timeTicket = 0;
      }

      // instance.chart.off("mousemove", stopAutoShow);
      // instance.chart.getZr().off("mousemove", zRenderMouseMove);
      // item.getZr().off('globalout', zRenderGlobalOut);
    }

    // 关闭轮播
    // function stopAutoShow() {
    //   if (timeTicket) {
    //     clearInterval(timeTicket);
    //     timeTicket = 0;
    //   }
    // }

    timeTicket && clearInterval(timeTicket);
    timeTicket = setInterval(function () {
      instance.dispatchAction({
        type: "downplay",
        seriesIndex: 0, // serieIndex的索引值   可以触发多个
      });
      instance.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: count,
      });
      instance.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: count,
      });
      count++;
      if (count >= num[index]) {
        count = 0;
      }
    }, time);
    instance.chart &&
      instance.chart.on("mouseover", function (params) {
        clearInterval(timeTicket);
        instance.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
        });
        instance.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: params.dataIndex,
        });
        instance.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: params.dataIndex,
        });
      });
    instance.chart &&
      instance.chart.on("mouseout", function () {
        timeTicket && clearInterval(timeTicket);
        timeTicket = setInterval(function () {
          instance.dispatchAction({
            type: "downplay",
            seriesIndex: 0, // serieIndex的索引值   可以触发多个
          });
          instance.dispatchAction({
            type: "highlight",
            seriesIndex: 0,
            dataIndex: count,
          });
          instance.dispatchAction({
            type: "showTip",
            seriesIndex: 0,
            dataIndex: count,
          });
          count++;
          if (count >= num[index]) {
            count = 0;
          }
        }, time);
      });
    return {
      clearLoop: clearLoop,
    };
  });
}
