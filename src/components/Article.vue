<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-row class="center-row buttom-blank">
          <el-button type="info" plain @click="backMain">回首页</el-button>
        </el-row>
        <el-row>
          <el-button type="success" icon="el-icon-plus" size="mini">新建类别</el-button>
        </el-row>
        <el-row>
          <ul>
            <li>type list</li>
          </ul>
        </el-row>
      </el-col>
      <el-col :span="4">
        <el-row>
          <el-button type="success" icon="el-icon-plus" size="mini">新建文章</el-button>
        </el-row>
        <el-row>
          <ul>
            <li>article list</li>
          </ul>
        </el-row>
      </el-col>
      <el-col :span="18">
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    backMain() {
      this.$router.push("/#/");
    }
  }
};
</script>

<style scoped>
.center-row {
  text-align: center;
}
.buttom-blank {
  margin-bottom: 5%;
}
</style>
