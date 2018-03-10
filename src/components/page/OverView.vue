<template>
  <div class="over-view">
    <div style="text-align:center;"><span style="font-size: 20px">2018年3月9日</span></div>
    <el-row>
      <el-col :span="4" v-for="(item, index) in percentage" :key="index" :offset="index > 0 ? 2 : 0" @click="handleCard(index)">
          <h3>{{item.title}}</h3>
          <el-progress type="circle" :percentage="item.percent" :stroke-width="20" :status="item.st"></el-progress>
      </el-col>
    </el-row>
    <div style="margin-top: 10px">
      <chart :options="op" :theme="theme"></chart>
    </div>
    <line-chart height="600px" width=""></line-chart>
  </div>
</template>

<script>
  import LineChart from './LineChart'
  export default {
    name: "over-view",
    data: function () {
      return {
        url: [
          'sleepPercent/',
          'sleepBadPercent/',
          'breathPercent/',
          'breathBadPercent/'
        ],
        percentage: [
          {
            title: "睡眠正常占比",
            percent: 90,
            status: "success"
          },
          {
            title: "失眠人数占比",
            percent: 15,
            st: "exception"
          },
          {
            title: "呼吸正常占比",
            percent: 80,
            st: "success"
          },
          {
            title: "呼吸异常占比",
            percent: 3,
            st: "exception"
          }
        ],
        theme: 'dark',
        op: {}
      }
    },
    components:{
      LineChart,
    },
    methods: {
      getData: function () {
        this.$http({
          url: 'api/sleepData/1',
          method: 'Get'
        }).then((response) => {
          this.op = {
            title: {
              text: '2018-3-6'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data:['heart','breath']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            toolbox: {
              left: 'right',
              feature: {
                saveAsImage: {}
              }
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: response.data.time
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                name:'heart',
                type:'line',
                smooth: true,
                data:response.data.heart
              },
              {
                name:'breath',
                type:'line',
                smooth: true,
                data:response.data.breath
              },
            ]
          }
        }).catch( function (error) {
          console.log(error);
        })
      },
      handleCard: function (index) {
        url = this.url(index);
        var time = new Date();
        params = time.getFullYear() +""+ time.getMonth() +""+ time.getDate()
        this.$http({
          url: url+"?date="+params,
          method: 'get'
        }).then( (resp) => {
          this.op = {
            title: {
              text: null
            },
            tooltip: {
              trigger: 'axis'
            },
            xAxis: {
              data: null
            },
            yAxis: {
              splitLine: {
                show: false
              }
            },
            toolbox: {
              left: 'right',
              feature: {
                saveAsImage: {}
              }
            },
            series: {
              name: 'Beijing AQI',
              type: 'line',
              data: null
            }
          }
        })
      }
    },
    created: function () {
      this.getData()
    }
  }
</script>

<style scoped>
  .over-view{

  }
</style>
