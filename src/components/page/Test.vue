<template>
  <div>
    <p>testing.....</p>
    <template v-for="item in newsListShow">
      <p>{{item.author_name}}{{item.date}}{{item.title}}</p>
      <img :src="item.thumbnail_pic_s" />
    </template>
    <ul>
      <li v-for="item in people">
        <span>{{item.name}}{{item.age}}</span>
      </li>
    </ul>
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
