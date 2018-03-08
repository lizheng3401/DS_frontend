<template>
  <div class="sidebar">
    <el-menu default-active="1" theme="dark" class="el-menu-vertical-demo"  unique-opened router
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @open="handleOpen" @close="handleClose">
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
  export default {
    name: "side-bar",
    data: function () {
      return {
        menu: [
          {
            icon: 'el-icon-setting',
            index: 'readme',
            title: '自述'
          },
          {
            icon: 'el-icon-menu',
            index: '2',
            title: '表格',
            subs: [
              {
                index: 'table',
                title: '基础表格'
              },
              {
                index: 'vuetable',
                title: 'Vue表格组件'
              }
            ]
          },
          {
            icon: 'el-icon-date',
            index: '3',
            title: '表单',
            subs: [
              {
                index: 'baseform',
                title: '基本表单'
              },
              {
                index: 'vueeditor',
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
            index: 'charts',
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
      handleOpen(key, keyPath) {

      },
      handleClose(key, keyPath) {

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
