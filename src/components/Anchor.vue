<template>
  <div class="anchor">
    <a href="javascript:false" @click="toTop()"></a>
  </div>
</template>

<script>
export default {
  name: "Anchor",
  methods: {
    toTop() {
      this.$bus.$emit("move", 0);
    },
  },
};
</script>

<style scoped>
.anchor {
  z-index: 10;
  width: 50px;
  height: 50px;
  background-color: skyblue;
  background: url(../assets/anchor.png);
  background-size: 100% 100%;
  position: fixed;
  right: 5px;
  bottom: 5px;
}
.anchor a {
  display: block;
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 500px) {
  .anchor {
    width: 20px;
    height: 20px;
  }
}
</style>