<template>
  <div id="app">
    <Nav></Nav>
    <div class="content">
      <div class="content">
        <router-view></router-view>
      </div>
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
  widows: 100%;
  background-color: slategray;
}
</style>
