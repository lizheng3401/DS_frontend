<template>
  <div>
    <p>testing.....</p>
    <p>{{$route.params.id}}</p>
  </div>
</template>

<script>
  export default {
    name: "test",
    data: function () {
      return {
        newsListShow: [],
        people: []
      }
    },
    methods: {

    },
    computed: {

    },
    created: function () {

    }
  }
</script>

<style scoped>

</style>
