<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
  import echarts from 'echarts'
  require('echarts/theme/dark')
  import {debounce} from '../../utils'

  export default {
    name: "two-charts",
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
      setOptions: function ({ time, heart, breath } = {}) {
        this.chart.setOption({
          title: [{
            left: 'center',
            text: '昨晚呼吸率变化情况'
          }, {
            top: '50%',
            left: 'center',
            text: '昨晚心率变化情况'
          }],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#000000',
                // formatter: '{value}'
              }
            },
            padding: [5, 10]
          },
          xAxis: [{
            data: time,
            type : 'category',
            boundaryGap: false,
            axisTick: {
              show: false
            }
          },{
            data: time,
            type : 'category',
            gridIndex: 1,
            boundaryGap: false,
            axisTick: {
              show: false
            }
          }],
          yAxis: [{
            name: '次数/分钟',
            axisTick: {
              show: false
            }
          }, {
            name: '次数/分钟',
            axisTick: {
              show: false
            },
            gridIndex: 1
          }],
          grid: [{
            left:'3%',
            right: '3%',
            bottom: '60%',
            containLabel: true
          }, {
            left:'3%',
            right: '3%',
            top: '60%',
            containLabel: true
          }],
          toolbox: {
            feature: {
              restore: {},
              saveAsImage: {},
            }
          },
          series: [{
            type: 'line',
            smooth:true,
            itemStyle: {
              normal: {
                color: '#FF005A',
                lineStyle: {
                  color: '#FF005A',
                  width: 2
                }
              }
            },
            data: breath,
            // animationDuration: 2800,
            // animationEasing: 'cubicInOut'
          }, {
            type: 'line',
            itemStyle: {
              normal: {
                color: '#3888fa',
                lineStyle: {
                  color: '#3888fa',
                  width: 2
                },
              }
            },
            smooth:true,
            data: heart,
            // animationDuration: 5000,
            // animationEasing: 'quadraticOut',
            xAxisIndex: 1,
            yAxisIndex: 1
          }]
        })
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
