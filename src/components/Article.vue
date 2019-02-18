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
              v-for="(type,index) in typeList"
              :key="index"
              @click="getTypeArticleList(type.id)"
            >{{type.name}}</li>
          </ul>
        </el-row>
      </el-col>
      <el-col :span="4">
        <el-row>
          <el-button type="success" icon="el-icon-plus" size="mini" @click="addArticle">新建文章</el-button>
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
        <!-- @change="saveOrigin" -->
        <mavon-editor
          style="min-height: $(windows).height"
          :toolbars="toolbars"
          :subfield="clientWidth"
          v-model="content"
        />
      </el-col>
    </el-row>

    <el-dialog title="新增类别" :visible.sync="typeDialogDisable">
      <el-row style="text-align: center">
        <el-col :span="10">
          <el-input v-model="typeName"></el-input>
        </el-col>
        <el-col :span="10">
          <el-input v-model="typeDesc"></el-input>
        </el-col>
        <el-col :span="4">
          <el-button @click="addType()" type="primary" icon="el-icon-edit" circle></el-button>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import CommonHeader from "./common/CommonHeader";

import {
  getTypeListHttp,
  addTypeHttp,
  getTypeArticleListHttp,
  getArticleOriginHttp,
  addArticleHttp,
  saveOriginHttp
} from "@/assets/js/common/axios2/api";

export default {
  data() {
    return {
      typeList: "",
      articleList: "",
      content: "",
      typeName: "",
      typeDesc: "",
      typeDialogDisable: false,
      currentType: "",
      currentArticle: "",
      clientWidth: document.body.clientWidth > 1080,
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
    //返回主页
    backMain() {
      this.$router.push("/");
    },
    // 获取类型列表
    getTypeList() {
      getTypeListHttp().then(result => {
        this.typeList = result.data;
      });
    },
    //指定类型的文章列表
    getTypeArticleList(id) {
      this.currentType = id;
      getTypeArticleListHttp(id).then(result => {
        this.articleList = result.data;
        if (this.articleList != null) {
          this.getArticle(this.articleList[0].id);
        }
      });
    },
    // 获取指定文章的origin
    getArticle(id) {
      this.currentArticle = id;
      getArticleOriginHttp(id).then(result => {
        this.content = result.data.origin;
      });
    },
    // 保存origin
    saveOrigin() {
      if (this.currentArticle != "") {
        console.log("changed");
        // saveOriginHttp().then(result => {
        // console.log(result);
        // });
      }
    },
    // 新增类型
    addType() {
      addTypeHttp(this.typeName, this.typeDesc).then(result => {
        this.$message(result.message);
      });
    },
    // 新增文章
    addArticle() {
      addArticleHttp(this.currentType).then(result => {
        this.getTypeArticleList(this.currentType);
      });
    }
  },
  mounted() {
    // 类别list
    this.getTypeList();
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
