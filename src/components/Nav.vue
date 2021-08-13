<template>
  <div class="header">
    <h2>CNode</h2>
    <div class="navItems">
      <router-link
        class="navLink"
        active-class="navActive"
        :to="{ name: 'home' }"
        >主页</router-link
      >
      <router-link
        class="navLink"
        active-class="navActive"
        :to="{ name: 'tutorial' }"
        >教程</router-link
      >
      <router-link
        class="navLink"
        active-class="navActive"
        :to="{ name: 'about' }"
        >关于</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
.header {
  display: flex;
  height: 60px;
  background-color: #1b1f22;
}
h2 {
  display: inline-block;
  color: #fff;
  height: 50px;
  width: 100px;
  margin: 5px 0 5px 15%;
  line-height: 50px;
  border-right: 1px solid #dede;
}
.navItems {
  display: flex;
  align-items: center;
  margin-left: 10px;
}
.navLink {
  width: 60px;
  height: 60px;
  font-size: 1.2em;
  line-height: 60px;
  text-decoration: none;
  text-align: center;
  color: #cdd9e5;
}
.navActive {
  border-bottom: 5px solid skyblue;
}
</style>