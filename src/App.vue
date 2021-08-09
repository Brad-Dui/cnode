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
};
</script>

<style>
.content {
  width: 100%;
}
</style>
