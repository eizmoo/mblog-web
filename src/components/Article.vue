<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-row class="center-row buttom-blank">
          <el-button type="info" plain @click="backMain">回首页</el-button>
        </el-row>
        <el-row>
          <el-button
            type="success"
            icon="el-icon-plus"
            size="mini"
            @click="typeDialogDisable = true"
          >新建类别</el-button>
        </el-row>
        <el-row>
          <ul>
            <li
              v-for="(type,index) in tpyeList"
              :key="index"
              @click="getTypeArticleList(type.id)"
            >{{type.name}}</li>
          </ul>
        </el-row>
      </el-col>
      <el-col :span="4">
        <el-row>
          <el-button type="success" icon="el-icon-plus" size="mini">新建文章</el-button>
        </el-row>
        <el-row>
          <ul>
            <li
              v-for="(artilce,index) in articleList"
              :key="index"
              @click="getArticle(artilce.id)"
            >{{artilce.title}}</li>
          </ul>
        </el-row>
      </el-col>
      <el-col :span="16">
        <!-- <router-view/> -->
        <mavon-editor
          style="min-height: $(windows).height"
          @change="saveOrigin"
          :toolbars="toolbars"
          :subfield="false"
          v-model="content"
        />
      </el-col>
    </el-row>

    <el-dialog title="新增类别" :visible.sync="typeDialogDisable">
      <el-row style="text-align: center">
        <el-col :span="20">
          <el-input v-model="typeName"></el-input>
        </el-col>
        <el-col :span="4">
          <el-button @click="addType" type="primary" icon="el-icon-edit" circle></el-button>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import HTTP from "@/assets/js/common/axios1/http";
import api from "@/assets/js/common/axios1/api";

import api1 from "@/assets/js/common/axios2/api";
// import { num } from "@/assets/js/common/axios/api";
1123
import CommonHeader from "./common/CommonHeader";

export default {
  data() {
    return {
      typeList: "",
      articleList: "",
      content: "",
      typeName: "",
      typeDialogDisable: false,
      toolbars: {
        bold: false, // 粗体
        italic: true, // 斜体
        header: false, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: false, // 上角标
        subscript: false, // 下角标
        quote: false, // 引用
        ol: false, // 有序列表
        ul: false, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: false, // code
        table: true, // 表格
        fullscreen: false, // 全屏编辑
        readmodel: false, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: false, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      }
    };
  },
  methods: {
    backMain() {
      this.$router.push("/");
    },
    getTypeList() {
      HTTP.get(api.typeList).then(result => {
        typeList = result.data;
      });
    },
    getTypeArticleList(id) {
      HTTP.get(api.typeArticle + id).then(result => {
        articleList = result.data;
      });
    },
    getArticle(id) {
      HTTP.get(api.origin + id).then(result => {
        content = result.data.origin;
      });
    },
    saveOrigin() {
      HTTP.put(api.saveOrigin);
    },
    addType() {
      console.log(api1.sayOk());
    }
  },
  mounted() {
    // 类别list
    // this.getTypeList();
  },
  components: {
    CommonHeader
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
.top-blank {
  margin-top: 5%;
}
</style>
