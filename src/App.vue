<template>
  <div id="app">
    <Nav></Nav>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: {
    Nav,
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style>
.content {
  width: 100%;
  background-color: slategray;
}
</style>
