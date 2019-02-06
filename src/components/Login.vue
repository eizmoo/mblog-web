<template>
  <div id="app">
    <el-row>
      <el-col class="login-header">
        <a href="#/">主页</a>
      </el-col>
    </el-row>
    <el-row>login</el-row>
    <el-row class="input-line">
      <el-col :span="1" :offset="7">account：</el-col>
      <el-col :span="6" :offset="1">
        <el-input v-model="account"></el-input>
      </el-col>
    </el-row>
    <el-row class="input-line">
      <el-col :span="1" :offset="7">password：</el-col>
      <el-col :span="6" :offset="1">
        <el-input v-model="password" type="password"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-button type="primary" @click="login">登录</el-button>
    </el-row>
    <el-row>
      <!-- <el-button type="primary" @click="regester">注册</el-button> -->
    </el-row>
  </div>
</template>

<script>
import CommonHeader from "./common/CommonHeader";
import HTTP from "@/assets/js/common/axios1/http";
import api from "@/assets/js/common/axios1/api";

export default {
  data() {
    return {
      account: "",
      password: ""
    };
  },
  components: {
    CommonHeader
  },
  methods: {
    // 登录
    login: function() {
      let param = {
        account: this.account,
        password: this.password
      };
      HTTP.post(api.login, param).then(result => {
        if (result.success === false) {
          // this.$message.error(result.message);
        } else {
          // 存储全局token
          window.localStorage["token"] = result.data;
          // TODO 跳转到主页或被拦截页面
          this.$router.push({
            path: "/"
          });
        }
      });
    }
  }
};
</script>

<style scoped>
#app {
  font-family: "Monaco", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.login-header {
  margin-top: 10%;
  margin-bottom: 3%;
}
.input-line {
  line-height: 40px;
  margin-bottom: 20px;
}
</style>
