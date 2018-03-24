<template>
  <div class="home">
    <template v-if="login">
      <Header></Header>
      <side-bar></side-bar>
    </template>
    <div class="content">
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/common/Header'
  import SideBar from '@/components/common/SideBar'
  import {mapState} from 'vuex'
  export default {
    name: "home",
    data: function () {
      return {
        login: true
      }
    },
    computed: {
      ...mapState(['breads'])
    },
    components:{
      Header,
      SideBar
    },
  }
</script>

<style scoped>

</style>
