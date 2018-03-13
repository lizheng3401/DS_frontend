<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
  import echarts from 'echarts'
  require('echarts/theme/dark')
  import {debounce} from '../../utils'

  export default {
    name: "base-pie",
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
          console.log(val)
          this.setOptions(val);
        }
      }
    },
    methods: {
      setOptions: function ({ cate, expectedData, actualData } = {}) {
        this.chart.setOption({
          title : {
            text: '各睡眠时期时间对比',
            subtext: '2018-3-13',
            x:'center'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}小时 ({d}%)"
          },
          series : [
            {
              name: '时长',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[
                {value:2.5, name:'觉醒期'},
                {value:2.5, name:'浅睡I期'},
                {value:2.5, name:'浅睡II期'},
                {value:2.5, name:'深睡期'},
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
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
