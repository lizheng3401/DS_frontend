<template>
  <four style="height: 100%" :chartData="data"></four>

</template>

<script>
  import Four from '../charts/Four'
  export default {
    name: "yesterday",
    components: {
      Four,
    },
    data: function () {
      return {
        data: {},
      }
    },
    methods: {
      getData(){
        this.$http({
          url: 'api/yesterday/',
          method: 'get',
          params: {
            interval: '30min',
            time: 'today'
          }
        }).then( resp => {
          this.data = resp.data.results
        }).catch( function (error) {
          console.log(error)
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
