<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from "echarts";
require("echarts/theme/dark");
import { debounce } from "../../utils";

export default {
  name: "history-chart",
  props: {
    className: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "400px"
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object
    }
  },
  data: function() {
    return {
      chart: null
    };
  },
  mounted: function() {
    this.initChart();
    if (this.autoResize) {
      this.__resizeHanlder = debounce(() => {
        if (this.chart) {
          this.chart.resize();
        }
      }, 100);
      window.addEventListener("resize", this.__resizeHanlder);
    }
  },
  beforeDestroy: function() {
    if (!this.chart) {
      return;
    }
    if (this.autoResize) {
      window.removeEventListener("resize", this.__resizeHanlder);
    }

    this.chart.dispose();
    this.chart = null;
  },
  watch: {
    chartData: {
      deep: true,
      handler: function(val) {
        this.setOptions(val);
      }
    }
  },
  methods: {
    setOptions: function({date, content} = {}) {
      let options = []
      for(let i = 0; i < 12; i++)
      {
        options.push({
          title: { text: content[i].time},
          series: { data: content[i].value}
        })
      }

      this.chart.setOption({
        baseOption: {
          timeline: {
            axisType: "category",
            autoPlay: true,
            playInterval: 1000,
            data: date,
            label: {
              formatter: function(s) {
                return s+"月"
              }
            }
          },
          title: {
            
          },
          tooltip: {},
          calculable: true,
          grid: {
            top: 80,
            bottom: 100,
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow",
                label: {
                  show: true,
                  backgroundColor: '#000000',
                }
              }
            }
          },
          xAxis: [
            {
              type: "category",
              name: "生理指标",
              axisLabel: { interval: 0 },
              data: ["睡眠时长", "心率", "呼吸率", "体动", "得分", "深睡时长"],
              splitLine: { show: false }
            }
          ],
          yAxis: [
            {
              type: "value",
              name: "平均值"
            }
          ],
          series: [
            { name: "平均值", type: "bar", label: {
              normal: {
                position: 'top',
                show: true
              }
            },},
          ]
        },
        options
      });
    },
    initChart: function() {
      this.chart = echarts.init(this.$el, "dark");
      this.setOptions(this.chartData);
    }
  }
};
</script>

<style scoped>

</style>
