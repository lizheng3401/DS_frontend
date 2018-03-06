<template>
  <div class="Table">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-menu"></i> 表格</el-breadcrumb-item>
        <el-breadcrumb-item>基础表格</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="handle-box">
      <el-button type="primary" icon="delete" class="handle-del mr10" @click="delAll">批量删除</el-button>
      <el-select v-model="select_cate" placeholder="筛选省份" class="handle-select mr10">
        <el-option key="1" label="广东省" value="广东省"></el-option>
        <el-option key="2" label="湖南省" value="湖南省"></el-option>
      </el-select>
      <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
      <el-button type="primary" icon="search" @click="search">搜索</el-button>
    </div>
    <el-table :data="Data" style="width: 100%">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="username" label="username"></el-table-column>
      <el-table-column prop="email" label="email"></el-table-column>
      <el-table-column prop="devices" label="devices"></el-table-column>
      <el-table-column prop="sleeps" label="sleeps"></el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @current-change ="handleCurrentChange"
        layout="prev, pager, next"
        :total="2"
        style="{margin: 0px auto}">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: "table",
    data: function () {
      return {
        Data: [],
      }
    },
    methods: {
      getData: function () {
        this.$http({
          url: '/users/',
          method: 'Get',
        }).then((response) => {
          this.Data = response.data.results
        }).catch(function (error) {
          console.log(error);
        })
      }
    },
    created: function () {
      this.getData()
    }
  }
</script>

<style scoped>
  .handle-box{
    margin-bottom: 20px;
  }
  .handle-select{
    width: 120px;
  }
  .handle-input{
    width: 300px;
    display: inline-block;
  }
  .crumbs{
    margin-bottom: 20px;
  }
</style>
