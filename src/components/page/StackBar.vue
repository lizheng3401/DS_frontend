<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
  import echarts from 'echarts'
  require('echarts/theme/dark')
  import {debounce} from '../../utils'

  export default {
    name: "stack-bar",
    props: {
      className: {
        type: String,
        default: 'chart'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '400px'
      },
      autoResize: {
        type: Boolean,
        default: true
      },
      chartData: {
        type: Object
      }
    },
    data: function () {
      return {
        chart: null
      }
    },
    mounted: function () {
      this.initChart();
      if(this.autoResize){
        this.__resizeHanlder = debounce( () => {
          if (this.chart){
            this.chart.resize();
          }
        }, 100);
        window.addEventListener('resize', this.__resizeHanlder)
      }
    },
    beforeDestroy: function () {
      if(!this.chart){
        return
      }
      if(this.autoResize){
        window.removeEventListener('resize', this.__resizeHanlder)
      }

      this.chart.dispose();
      this.chart = null
    },
    watch: {
      chartData: {
        deep: true,
        handler: function (val) {
          this.setOptions(val);
        }
      }
    },
    methods: {
      setOptions: function ({ sleepN1, sleepN2,sleepN3, sleepN4 } = {} ) {
        this.chart.setOption({
          title: {
            left: 'left',
            text: '近七天睡眠各阶段变化情况'
          },
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          toolbox: {
            feature: {
              restore: {},
              saveAsImage: {},
            }
          },
          legend: {
            data: ['觉醒期', '浅睡I期','浅睡II期','深睡期']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis:  {
            type: 'value'
          },
          yAxis: {
            type: 'category',
            data: ['周一','周二','周三','周四','周五','周六','周日']
          },
          series: [
            {
              name: '觉醒期',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data:sleepN1
            },
            {
              name: '浅睡I期',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data:sleepN2
            },
            {
              name: '浅睡II期',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data:sleepN3
            },
            {
              name: '深睡期',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data:sleepN4
            },
          ]
        });
      },
      initChart: function () {
        this.chart = echarts.init(this.$el, 'dark');
        this.setOptions(this.chartData)
      }
    },
  }
</script>

<style scoped>

</style>
