<template>
  <div id="header">
    <el-row id="header-row">
      <el-col :span="4" :offset="2">
        <img src="../../assets/img/icon.jpg" alt="Mblog" height="50px">
      </el-col>
      <el-col :span="1" :offset="14">
        <a href="#/">主页</a>
      </el-col>
      <el-col :span="1">
        <a href="#/">归档</a>
      </el-col>
      <el-col :span="1">
        <a href="#/edit">发布</a>
      </el-col>
      <el-col :span="1">
        <a href="#/Login">登录</a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import "../../assets/css/header.css";
</style>

