<template>
  <div class="detail">
    <div style="color: #fff" v-html="content"></div>
  </div>
</template>

<script>
export default {
  computed: {
    topic() {
      return JSON.parse(sessionStorage.getItem("topic"));
    },
    content() {
      return this.topic.content;
    },
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style>
</style>