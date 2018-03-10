<template>
  <div>
    <chart :options="op" :theme="theme" :auto-resize="true"></chart>
  </div>
</template>

<script>
  export default {
    name: "basecharts",
    data: function () {
      return {
        op: {},
        theme: "macarons"
      }
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
      setOp: function (op) {
        this.op = op
      },
      setTheme: function (theme) {
        this.theme = theme
      }
    },
    created: function () {
      this.getData();
    }
  }
</script>

<style scoped>

</style>
