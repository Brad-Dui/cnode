<template>
  <div id="app">
    <Nav></Nav>
    <div class="content">
      <router-view></router-view>
    </div>
    <Anchor></Anchor>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Anchor from "./components/Anchor.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Nav,
    Anchor,
    Footer,
  },
};
</script>

<style>
.content {
  width: 100%;
  min-height: calc(100vh - 320px);
  margin-bottom: 40px;
}
</style>
