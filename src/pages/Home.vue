<template>
  <div class="home">
    <div class="leftNav"></div>
    <div class="rightContent">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.home {
  margin: 10px 0 10px 20%;
}
.leftNav {
  height: 500px;
}
</style>