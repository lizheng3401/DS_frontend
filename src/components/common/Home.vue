<template>
  <div class="home">
    <template v-if="login">
      <Header></Header>
      <side-bar></side-bar>
    </template>
    <div class="content">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/common/Header'
  import SideBar from '@/components/common/SideBar'
  export default {
    name: "home",
    data: function () {
      return {
        login: true
      }
    },
    components:{
      Header,
      SideBar
    },
  }
</script>

<style scoped>
  .bread{
    font-size: 20px;
    margin-bottom: 20px;
  }
</style>
