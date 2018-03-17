<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
  import echarts from 'echarts'
  require('echarts/theme/dark')
  import {debounce} from '../../utils'

  export default {
    name: "base-charts",
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
      setOptions: function ({ cate, expectedData, actualData, time } = {}) {
        if (!cate){
          cate = ''
        }
        this.chart.setOption({
          title: {
            text: '最近30天'+ cate +'折线图'
          },
          xAxis: {
            type: 'category',
            data: time,
            boundaryGap: false,
            axisTick: {
              show: false
            }
          },
          grid: {
            left: 10,
            right: 10,
            bottom: 20,
            containLabel: true
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#000000',
              }
            },
            padding: [5, 10]
          },
          yAxis: {
            name: '人数',
            axisTick: {
              show: false
            }
          },
          legend: {
            data: [ '正常', '异常']
          },
          toolbox: {
            feature: {
              restore: {},
              saveAsImage: {},
            }
          },
          series: [
            {
              name: '正常',
              smooth: true,
              type: 'line',
              itemStyle: {
                normal: {
                  color: '#4bfa3f',
                  lineStyle: {
                    color: '#4bfa3f',
                    width: 2
                  }
                }
              },
              data: actualData,
              animationDuration: 2500,
              animationEasing: 'quadraticOut'
            },
            {
              name: '异常',
              itemStyle: {
                normal: {
                  color: '#FF005A',
                  lineStyle: {
                    color: '#FF005A',
                    width: 2
                  }
                }
              },
              smooth: true,
              type: 'line',
              data: expectedData,
              animationDuration: 2500,
              animationEasing: 'cubicInOut'
            }
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
