<template>
  <div class="Table">
      <div class="filter-container">
        <el-input placeholder="please enter" style="width: 200px" ></el-input>
        <el-select placeholder="please choose" style="width: 90px" v-model="listQuery.type">
          <el-option value="ok" label=A>A</el-option>
        </el-select>
        <el-select placeholder="please choose" style="width: 90px" v-model="listQuery.type">
          <el-option clearable value="ok" label=A>A</el-option>
        </el-select>
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
        <el-button class="filter-item" type="primary" style="margin-left: 10px;" icon="el-icon-edit" @click="handleAdd">添加</el-button>
        <el-button class="filter-item" type="primary" icon="el-icon-download" @click="handleExport">导出</el-button>
      </div>
      <el-table :data="Data" border fit highlight-current-row style="width:100%">
        <el-table-column width="60" align="center" label="id">
          <template slot-scope="scope">
            <span>{{scope.row.id}}</span>
          </template>
        </el-table-column>
        <el-table-column width="110" align="center" label="username">
          <template slot-scope="scope">
            <span>{{scope.row.username}}</span>
          </template>
        </el-table-column>
        <el-table-column width="200" align="center" label="email">
          <template slot-scope="scope">
            <span>{{scope.row.email}}</span>
          </template>
        </el-table-column>
        <el-table-column width="200" align="center" label="device">
          <template slot-scope="scope">
            <span>{{scope.row.device}}</span>
          </template>
        </el-table-column>
        <el-table-column width="200" align="center" label="sleep">
          <template slot-scope="scope">
            <span>{{scope.row.sleep}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="options">
          <template slot-scope="scope">
            <el-button type="primary" size="small">编辑</el-button>
            <el-button type="info" size="small">详情</el-button>
            <el-button type="danger " size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-container">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          :current-page="listQuery.page"
          :page-size="10"
          layout="total, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>

      <el-dialog title="添加用户" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="form.username" auto-complete="off" suffix-icon="el-icon-date"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>
           <el-form-item label="确认密码" :label-width="formLabelWidth">
            <el-input type="password" v-model="form.Repassword"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="createUser">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Table",
  data: function() {
    return {
      Data: [],
      dialogFormVisible: false,
      formLabelWidth: "100px",
      form:{},
      listQuery: {
        page: 1,
        type: undefined,
      },
      total: 100,
      importanceOptions: [],
      calendarTypeOptions: [],
      sortOptions: [],
      showReviewer: {}
    };
  },
  methods: {
    getData: function() {
      this.$http({
        url: "/users/",
        method: "Get"
      })
        .then(response => {
          this.Data = response.data.results;
          console.log(this.Data)
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    handleSearch: function () {
      
    },
    handleAdd: function () {
      this.dialogFormVisible = true;
    },
    handleExport: function () {

    },
    handleCurrentChange: function (val) {
      this.listQuery.page = val;
      this.getData();
    },
    createUser: function () {
      this.dialogFormVisible = false;
      this.$message({
          message: '添加成功',
          center: true
      });
    }
  },
  created: function() {
    this.getData();
  }
};
</script>

<style scoped>
  .filter-container{
    margin: 20px auto; 
  }
  .filter-item{
    display: inline-block;
    vertical-align: middle;
    margin-left:10px
  }
  .pagination-container{
    margin-top: 10px
  }
</style>
