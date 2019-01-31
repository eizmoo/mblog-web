<template>
  <div>
    <h1>this is edit</h1>
    <mavon-editor v-model="value"/>
  </div>
</template>

<script>
import CommonHeader from "./common/CommonHeader";
export default {
  components: {
    CommonHeader
  }
};
</script>

<style scoped>
</style>
