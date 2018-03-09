<template>
  <div class="sidebar">
    <el-menu default-active="1" theme="dark" class="el-menu-vertical-demo"
             unique-opened router
             background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
             @open="handleOpen" @close="handleClose" @select="handleOpen">
      <template v-for="menuItem in menu">
        <el-submenu v-if="menuItem.subs" :index="menuItem.index">
          <span slot="title"><i :class="menuItem.icon"></i>{{menuItem.title}}</span>
          <el-menu-item v-for="(subsItem, i) in menuItem.subs" :key="i" :index="subsItem.index">
            {{subsItem.title}}
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="menuItem.index">
          <span><i :class="menuItem.icon"></i>{{menuItem.title}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
  export default {
    name: "side-bar",
    data: function () {
      return {
        menu: [
          {
            icon: 'el-icon-setting',
            index: 'overview',
            title: '概况'
          },
          {
            icon: 'el-icon-menu',
            index: 'table',
            title: '后台信息一览表',
            subs: [
              {
                index: 'BaseTable',
                title: '用户信息'
              },
              {
                index: 'vueTable',
                title: '设备信息'
              }
            ]
          },
          {
            icon: 'el-icon-date',
            index: 'form',
            title: '表单',
            subs: [
              {
                index: 'baseform',
                title: '基本表单'
              },
              {
                index: 'vueEditor',
                title: '编辑器'
              },
              {
                index: 'markdown',
                title: 'markdown'
              },
              {
                index: 'upload',
                title: '文件上传'
              }
            ]
          },
          {
            icon: 'el-icon-star-on',
            index: 'BaseCharts',
            title: '图表'
          },
          {
            icon: 'el-icon-upload2',
            index: 'test',
            title: '测试'
          }
        ]
      }
    },
    methods: {
      ...mapMutations([
        'addBread',
        'delBread',
      ]),
      handleOpen(key, keyPath) {
        this.addBread(key);
        console.log(key,keyPath)
      },
      handleClose(key, keyPath) {
        this.delBread();
        console.log(key,keyPath)
      }
    }
  }
</script>

<style scoped>
  .sidebar{
    display: block;
    position: absolute;
    width: 250px;
    left: 0;
    top: 70px;
    bottom:0;
    background: #2E363F;
  }
  .sidebar > ul {
    height:100%;
  }
</style>
