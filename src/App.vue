<template>
  <div id="app">
    <Nav></Nav>
    <div class="content">
      <router-view></router-view>
    </div>
    <Anchor></Anchor>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Anchor from "./components/Anchor.vue";
export default {
  name: "App",
  components: {
    Nav,
    Anchor,
  },
};
</script>

<style>
.content {
  width: 100%;
}
</style>
