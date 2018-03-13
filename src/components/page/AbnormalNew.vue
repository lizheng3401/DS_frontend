<template>
  <div>
    <div>
      <el-row>
        <el-col :span="18">
          <two-charts ref="ch" :chartData="lineData" style="height: 500px"></two-charts>
        </el-col>
        <el-col :span="6" >
          <base-pie style="margin:0px;" width="100%" height="200px"></base-pie>
          <countTo class="example" ref="num"  :start-val="_startVal" :end-val="_endVal" :prefix="_prefix" :suffix="_suffix" :autoplay="true"></countTo>
          <vue-seamless-scroll :data="listData" :class-option="optionLeft" class="seamless-warp">
            <ul class="item">
              <li v-for="item in listData">
                <span class="title" v-text="item.title"></span><el-tag type="danger" style="float:right">{{item.date}}</el-tag>
              </li>
            </ul>
          </vue-seamless-scroll>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import TwoCharts from './TwoCharts'
  import countTo from 'vue-count-to'
  import BasePie from './BasePie'
  import vueSeamlessScroll from 'vue-seamless-scroll'
  export default {
    name: "abnormal-new",
    components:{
      TwoCharts,
      countTo,
      BasePie,
      vueSeamlessScroll
    },
    data: function () {
      return {
        setStartVal: 0,
        setEndVal: 100,
        setDuration: 4000,
        setSuffix: '',
        setPrefix: '评分 ',
        lineData: {
          time: [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            32,
            33,
            34,
            35,
            36,
            37,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            46,
            47,
            48,
            49,
            50
          ],
          heart:[
            56,
            38,
            32,
            59,
            71,
            40,
            68,
            39,
            31,
            66,
            44,
            66,
            32,
            55,
            60,
            40,
            50,
            55,
            64,
            59,
            30,
            59,
            31,
            79,
            61,
            42,
            58,
            48,
            55,
            72,
            48,
            63,
            42,
            36,
            54,
            37,
            52,
            50,
            73,
            62,
            78,
            76,
            32,
            40,
            70,
            64,
            46,
            70,
            74,
            53
          ],
          breath: [
            25,
            14,
            19,
            11,
            28,
            11,
            16,
            19,
            20,
            32,
            15,
            16,
            33,
            30,
            13,
            32,
            14,
            20,
            33,
            24,
            22,
            24,
            26,
            34,
            12,
            34,
            18,
            35,
            26,
            25,
            18,
            20,
            31,
            13,
            16,
            32,
            12,
            29,
            20,
            34,
            28,
            13,
            29,
            11,
            31,
            15,
            9,
            22,
            15,
            30
          ]
        },
        listData: [{
          'title': '无缝滚动第一行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第二行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第三行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第四行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第五行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第五行',
          'date': '2017-12-16'
        },{
          'title': '无缝滚动第五行',
          'date': '2017-12-16'
        },{
          'title': '无缝滚动第五行',
          'date': '2017-12-16'
        },{
          'title': '无缝滚动第五行',
          'date': '2017-12-16'
        },{
          'title': '无缝滚动第五行',
          'date': '2017-12-16'
        },{
          'title': '无缝滚动第五行',
          'date': '2017-12-16'
        }],
      }
    },
    computed: {
      _startVal() {
        if (this.setStartVal) {
          return this.setStartVal
        } else {
          return 0
        }
      },
      _endVal() {
        if (this.setEndVal) {
          return this.setEndVal
        } else {
          return 0
        }
      },
      _duration() {
        if (this.setDuration) {
          return this.setDuration
        } else {
          return 100
        }
      },
      _decimals() {
        if (this.setDecimals) {
          if (this.setDecimals < 0 || this.setDecimals > 20) {
            alert('digits argument must be between 0 and 20')
            return 0
          }
          return this.setDecimals
        } else {
          return 0
        }
      },
      _separator() {
        return this.setSeparator
      },
      _suffix() {
        return this.setSuffix
      },
      _prefix() {
        return this.setPrefix
      },
      optionLeft () {
        return {
          limitMoveNum: 5
        }
      }
    },
    methods:{
      getData(){
        this.$http({
          url: 'api/data/user/',
          method: 'get',
          params:{
            id: 1,
            type: ['heart', 'breath', 'score', 'sleepPeriod'],
            interval: 'minutes'
          }
        }).then( resp => {
          this.lineData = resp.data.results
          console.log(JSON.stringify(this.lineData, null, 2))
        }).catch( function (error) {
          console.log(error)
        })
      },
      start:function () {
        this.$refs.num.start()
      }
    },
    created: function () {
      this.getData()
    }
  }
</script>

<style scoped>
  .example {
    font-size: 50px;
    color: #F6416C;
    display: block;
    text-align: center;
    font-weight: 500;
    background-color: #282828
  }
  .seamless-warp {
    height: 225px;
    overflow: hidden;
    background-color: #282828;
    color: #1efb0a;
  }
</style>
