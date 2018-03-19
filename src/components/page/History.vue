<template>
  <div>
   <history-chart :chartData="data" style="height: 500px"></history-chart>
  </div>
</template>

<script>
  import HistoryChart from './HistoryChart'
  export default {
    name: "history",
    components: {
      HistoryChart,
    },
    data: function () {
      return {
        data: {}
      }
    },
    methods: {
      getData(){
        this.$http({
          url: 'api/history/',
          method: 'get'
        }).then( resp => {
          this.data = resp.data.results
        })
      }
    },
    created:function () {
      this.getData()
    }
  }
</script>

<style scoped>

</style>
