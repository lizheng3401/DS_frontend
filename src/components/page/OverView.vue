<template>
  <div class="over-view">
    <div style="text-align:center;"><span style="font-size: 20px">2018年3月9日</span></div>
    <el-row>
      <el-col :span="4" v-for="(item, index) in percentage" :key="index" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }" >
          <div style="padding: 10px">
            <h3>{{item.title}}</h3>
            <el-progress type="circle" :percentage="item.percent" :stroke-width="20" :status="item.status"></el-progress>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <chart :options="op" :theme="theme"></chart>
    <line-chart height="600px" width=""></line-chart>
  </div>
</template>

<script>
  import LineChart from './LineChart'
  export default {
    name: "over-view",
    data: function () {
      return {
        percentage: [
          {
            title: "睡眠正常占比",
            percent: 90,
            status: "success"
          },
          {
            title: "失眠人数占比",
            percent: 15,
            status: "exception"
          },
          {
            title: "呼吸正常占比",
            percent: 80,
            status: "success"
          },
          {
            title: "呼吸异常占比",
            percent: 3,
            status: "exception"
          }
        ],
        op: {},
        theme: 'macarons',
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
                dataZoom: {
                  yAxisIndex: 'none'
                },
                restore: {},
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
            dataZoom: [{
              startValue: '150'
            },{
              type: 'inside'
            }],
            visualMap: {
              top: 10,
              right: 10,
              pieces: [{
                gt: 0,
                lte: 20,
                color: '#096'
              }, {
                gt: 20,
                lte: 40,
                color: '#ffde33'
              }, {
                gt: 40,
                lte: 60,
                color: '#ff9933'
              }, {
                gt: 60,
                lte: 80,
                color: '#cc0033'
              }, {
                gt: 80,
                lte: 100,
                color: '#660099'
              }, {
                gt: 100,
                color: '#7e0023'
              }],
              outOfRange: {
                color: '#999'
              }
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
