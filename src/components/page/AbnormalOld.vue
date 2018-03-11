<template>
  <div>
    <countTo ref='example3' :startVal='startVal' :endVal='endVal' :duration='5000' :suffix=' min' :autoplay="false"></countTo>
  </div>
</template>

<script>
  import countTo from 'vue-count-to'
  export default {
    name: "abnormal-old",
    components:{
      countTo
    },
    data: function () {
      return {
        startVal: 0,
        endVal: 100,
      }
    },
    created: function () {
      this.$refs.example3.start()
    }
  }
</script>

<style scoped>

</style>
