<template>
  <div>
    <el-row>
      <el-col :span="18">
        <two-lines :chartData="HBData"></two-lines>
        <stack-bar :chartData="sleepData" ></stack-bar>
      </el-col>
      <el-col :span="6">
        <span class="example">胡芳 86</span>
        <el-card class="cardItem">
          <ul style=" list-style:none;">
            <li>入睡时间<span style="float: right">23:24:00</span></li>
            <li>起床时间<span style="float: right">8:37:00</span></li>
            <li>心率 <span style="float: right">75</span></li>
            <li>呼吸率 <span style="float: right">19</span></li>
            <li>体动 <span style="float: right">40</span></li>
            <li>评分 <span style="float: right">86</span></li>
          </ul>
        </el-card>
        <el-card class="cardItem">
          <ul style=" list-style:none;">
            <li>睡眠时长<span style="float: right">9小时13分</span></li>
            <li>深睡期占比<span style="float: right">21%</span></li>
            <li>心率 <span style="float: right">正常</span></li>
            <li>呼吸率 <span style="float: right">正常</span></li>
            <li>体动 <span style="float: right">较多</span></li>
            <li>评分 <span style="float: right">优</span></li>
          </ul>
        </el-card>
        <el-card class="cardItem" style="height: 300px">
          <vue-seamless-scroll  :data="listData" :class-option="optionLeft">
            <ul>
              <li v-for="item in listData" @click="handlInfo(item.id)">
                <span class="title" v-text="item.username"></span>
                <el-tag type="warning">{{item.date}}</el-tag>
                <el-tag type="danger">{{item.info}}</el-tag>
              </li>
            </ul>
          </vue-seamless-scroll>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import TwoLines from './Twolines'
  import StackBar from './StackBar'
  import vueSeamlessScroll from 'vue-seamless-scroll'
  export default {
    name: "abnormal-old",
    components:{
      StackBar,
      TwoLines,
      vueSeamlessScroll
    },
    data: function () {
      return {
        sleepData: {},
        HBData: {},
        listData: [],
      }
    },
    computed:{
      optionLeft () {
        return {
          limitMoveNum: 5
        }
      }
    },
    methods: {
      getHB: function (userId) {
        this.$http({
          url: 'api/avg/data/users/HB',
          method: 'get',
          params: {
            id:userId,
            type: ['heart', 'breath']
          }
        }).then( response => {
          this.HBData = response.data.results
        }).catch( function (error) {
          console.log(error)
        })
      },
      getSleepData: function (userId) {
        this.$http({
          url: 'api/avg/users/sleepData',
          method: 'get',
          params: {
            id:userId,
            type: ['heart', 'breath', 'SleepData']
          }
        }).then( response => {
          this.sleepData = response.data.results
        }).catch( function (error) {
          console.log(error)
        })
      },
      getListData(){
        this.$http({
          url: 'api/users/abnormal/list',
          method:'get',
        }).then( response =>{
          this.listData = response.data.results.users_list
        }).catch( function (error) {
          console.log(error)
        })
      },
      handlInfo: function(userId){
        this.getHB(userId)
        this.getSleepData(userId)
      }
    },
    created: function () {
      this.getHB(1)
      this.getSleepData(1)
      this.getListData()
    }
  }
</script>

<style scoped>
  .example {
    font-size: 50px;
    /*color: #F6416C;*/
    display: block;
    text-align: center;
    font-weight: 500;
    /*background-color: #282828*/
  }
  .cardItem{
    font-size: 20px;
    /*color: #F6416C;*/
    display: block;
    font-weight: 200;
    /*background-color: #282828;*/
  }
  li:hover{
    background-color: #63635b;
  }
</style>
