<template>
  <div class="basecharts">
    <chart :options="op"></chart>
  </div>
</template>

<script>
  export default {
    name: "basecharts",
    data: function () {
      return {
        data: {},
        op: {}
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
                data:response.data.heart
              },
              {
                name:'breath',
                type:'line',
                data:response.data.breath
              }
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

</style>
