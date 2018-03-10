<template>
  <div class="over-view">
    <el-card>
      <div slot="header" style="text-align: center">
        <span><strong>{{title}}</strong></span>
      </div>
      <el-row style="padding-left: 100px">
        <el-col :span="4" v-for="(item, index) in percentage" :key="index" :offset="index > 0 ? 2 : 0" >
          <div @click="handleCard(index)">
            <h3>{{item.title}}</h3>
            <el-progress type="circle" :percentage="item.percent" :stroke-width="20"></el-progress>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <div style="margin-top: 10px">
      <base-chart :chartData="topChartData"></base-chart>
    </div>
  </div>
</template>

<script>
  import BaseChart from '@/components/page/BaseCharts'

  export default {
    name: "over-view",
    components: {
      BaseChart,
    },
    data: function () {
      let time = new Date()
      return {
        title: time.getFullYear()+"年"+ (time.getMonth() + 1) + "月" + time.getDate() + "日睡眠监测概况",
        URL: {
          title: [
            '睡眠正常人数',
            '失眠人数',
            '呼吸正常人数',
            '呼吸异常人数',
          ],
          chartUrl: [
            'api/sleep/users',
            'api/heart/users',
            'api/breath/users',
            'api/move/users'
          ],
          percentUrl: [
            'sleepPercent/',
            'sleepBadPercent/',
            'breathPercent/',
            'breathBadPercent/',
          ]
        },
        percentage: [
          {
            title: "睡眠正常占比",
            percent: 0,
          },
          {
            title: "心率正常占比",
            percent: 0,
          },
          {
            title: "呼吸正常占比",
            percent: 0,
          },
          {
            title: "体动异常占比",
            percent: 0,
          }
        ],
        topChartData: {},
        mediumChartData: {}
      }
    },
    methods: {
      getPercent: function () {
        for(let i = 0; i < 4; i++){
          this.$http({
            url:this.URL.percentUrl[i]
          }).then( (resp) => {
            this.percentage[i].percent = resp.data.Percent;
          }).catch(function (error) {
            console.log(error);
          });
        }
      },
      getData: function (url) {
        this.$http({
          url: url,
          method: 'Get'
        }).then((response) => {
          console.log(JSON.stringify(response.data.cate, null, 2));
          this.topChartData = response.data
        }).catch( function (error) {
          console.log(error);
        })
      },
      handleCard: function (index) {
        var time = new Date();
        var url = this.URL.chartUrl[index] +"?date="+ time.getFullYear() +""+ (time.getMonth()+1) +""+ time.getDate();
        this.getData(url);
      }
    },
    created: function () {
      this.getPercent()
      this.getData("api/sleep/users")
    },
  }
</script>

<style scoped>
  .over-view{

  }
</style>
