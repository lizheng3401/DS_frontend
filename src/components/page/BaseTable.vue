<template>
  <div class="Table">
    <el-table :data="Data" style="width: 100%">
      <el-table-column prop="id" label="id"></el-table-column>
      <el-table-column prop="username" label="username"></el-table-column>
      <el-table-column prop="email" label="email"></el-table-column>
      <el-table-column prop="device" label="device"></el-table-column>
      <el-table-column prop="sleep" label="sleep"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "Table",
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
          this.Data = response.data.results;
          console.log(response.data.results)
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
