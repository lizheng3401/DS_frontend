<template>
  <div style="margin: 50px auto;width: 50% height: 100px backgroudcolor:red">
    <vue-seamless-scroll :data="listData" :class-option="optionLeft" style="margin: 50px auto;width: 50% height: 100px"> 
      <ul>
        <li v-for="(item,index) in listData" :key="index"  @click="getData(item.id)">
            <span class="title" v-text="item.username"></span>
            <el-tag type="warning">{{item.date}}</el-tag>
            <el-tag type="danger">{{item.info}}</el-tag>
        </li>
      </ul>
    </vue-seamless-scroll>
  </div>
</template>

<script>
import vueSeamlessScroll from "vue-seamless-scroll";
export default {
  name: "test",
  components: {
    vueSeamlessScroll
  },
  data: function () {
    return {
      listData: []
    }
  },
  computed: {
    optionLeft () {
        return {
          limitMoveNum: 5
        }
      }
  },
  methods: {
    getList(){
      this.$http({
        url: 'api/users/abnormal/list',
        method:'get',
      }).then( response =>{
        this.listData = response.data.results.users_list
        console.log(this.listData)
      }).catch( function (error) {
        console.log(error)
      })
    },
  },
  created: function (){
    this.getList()
  }
};
</script>

<style scoped>

</style>


