<template>
  <div class="login">
    <el-card class="box-card Card">
      <div slot="header" class="clearfix" style="text-align: center" >
        <span>后台管理系统</span>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="密码" v-model="ruleForm.password"
                    @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "login",
    data: function () {
      return {
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码为空', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        const self = this;
        self.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http({
              url: '/login/',
              method: 'Post',
              data: {
                username: this.ruleForm.username,
                password: this.ruleForm.password
              }
            }).then( (response) => {
              console.log(response.data);
              self.$router.push('/index/overview');
            }).catch( function (error) {
              console.log(error)
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>
  .login{
    margin:auto;
  }
  .Card{
    width:30%;
    margin: 80px auto;
  }
  .login-btn{
    text-align: center;
  }
  .login-btn button{
    width:100%;
    height:36px;
  }
</style>
