<template>
  <div id="app">
    <common-header/>
    hello,index
  </div>
</template>

<script>
import CommonHeader from "./common/CommonHeader";
export default {
  name: "App",
  components: {
    CommonHeader
  }
};
</script>

<style>
#app {
  font-family: "Monaco", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
