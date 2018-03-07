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
      setNewsApi: function() {
        this.$http.post("/news", "type=top&key=123456").then(res => {
          console.log(res.data);
          this.newsListShow = res.data.data;
        });
      },
      getTest: function () {
        this.$http.get("/users/").then(res => {
          console.log(res.data);
          this.people = res.data
        })
      }
    },
    computed: {
      changePeople(){
        return this.$store.getters.changePeople
      }
    },
    created: function () {
      this.getTest();
      this.$store.commit('getParam',{
        keyCode: 213,
        keyWord: 'key',
        hunterCode: 2433,
        sid: 3343214431244,
      });
      console.log(this.changePeople())
    }
  }
</script>

<style scoped>

</style>
