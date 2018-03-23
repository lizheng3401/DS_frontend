<template>
  <four style="height: 66%" :chartData="data"></four>
  
</template>

<script>
  import Four from './Four'
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
          console.log(JSON.stringify(resp.data.results, null, 2))
          this.data = resp.data.results
          console.log(JSON.stringify(this.data, null, 2))
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
