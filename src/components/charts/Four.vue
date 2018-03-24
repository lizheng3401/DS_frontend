<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
  import echarts from 'echarts'
  require('echarts/theme/dark')
  import {debounce} from '../../utils/index'
  export default {
    name: "four",
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
        default: '700px'
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
      setOptions: function ({ time,
                              Sleep_people,
                              peroid,
                              peroidPeople,
                              scorePercent,
                              DeepSleepPercent} = {}) {
        this.chart.setOption({
          tooltip: {},
          title: [{
            text: '入睡人数变化',
            x: '25%',
            textAlign: 'center',
            textStyle: {
              fontSize:14
            }
          }, {
            text: '评分情况',
            x: '75%',
            textAlign: 'center',
            textStyle: {
              fontSize:14
            }
          }, {
            text: '睡眠时长变化',
            x: '25%',
            y: '50%',
            textAlign: 'center',
            textStyle: {
              fontSize:14
            }
          },{
            text: '平均深睡眠占比情况',
            x: '75%',
            y: '50%',
            textAlign: 'center',
            textStyle: {
              fontSize:14
            }
          }],
          grid: [{
            top:20,
            width: '50%',
            bottom: '55%',
            left: 10,
            containLabel: true
          }, {
            top: '55%',
            width: '50%',
            bottom: 0,
            left: 10,
            containLabel: true
          }],
          xAxis: [{
            type: 'category',
            splitLine: {
              show: false
            },
            data: time,
          }, {
            type: 'category',
            gridIndex: 1,
            splitLine: {
              show: false
            },
            data: peroid
          }],
          yAxis: [{
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            splitLine: {
              show: false
            },
          }, {
            gridIndex: 1,
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            splitLine: {
              show: false
            }
          }],
          series: [{
            type: 'bar',
            stack: 'chart',
            smooth: true,
            z: 3,
            data: Sleep_people
          }, {
            type: 'bar',
            stack: 'component',
            xAxisIndex: 1,
            yAxisIndex: 1,
            z: 3,
            data: peroidPeople
          },{
            type: "pie",
            name: '评分情况',
            radius: [0, '30%'],
            center: ['75%', '25%'],
            label: {
              normal: {
                formatter: function (item) {
                  return item.percent+"%\n"+item.name+"分 "+item.value+"人"
                }
              }
            },
            data: scorePercent
          }, {
            name: '平均深睡眠占比',
            type: 'pie',
            radius: [0, '30%'],
            center: ['75%', '75%'],
            label: {
              normal: {
                formatter: function (item) {
                  return item.percent+"%\n"+item.name+"小时 "+item.value+"人"
                }
              }
            },
            data:DeepSleepPercent
          }]
        });
      },
      initChart: function () {
        this.chart = echarts.init(this.$el);
        this.setOptions(this.chartData)
      }
    },
  }
</script>

<style scoped>

</style>
