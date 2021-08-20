<template>
  <div id="app">
    <Nav></Nav>
    <div class="content" ref="content">
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
  mounted() {
    this.$bus.$on("move", this.move);
  },
  methods: {
    //向上非匀速滚动
    move(iTarget) {
      let timer = null;
      clearInterval(timer);
      timer = setInterval(() => {
        let scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let speed = (iTarget - scrollTop) / 6;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (scrollTop == iTarget) {
          clearInterval(timer);
        } else {
          scrollTop += speed;
          window.scrollTo(0, scrollTop);
        }
      }, 30);
    },
  },
};
</script>

<style>
.content {
  width: 100%;
  min-height: calc(100vh - 320px);
  margin-bottom: 40px;
}
@media screen and (max-width: 612px) {
  .content {
    min-height: calc(100vh - 341px);
  }
}
</style>
