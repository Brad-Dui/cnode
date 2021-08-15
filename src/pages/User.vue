<template>
  <div class="user">
    <div class="userInfo item">
      <div class="picture"><img :src="user.avatar_url" /></div>
      <div class="introduce">
        <span>昵称：{{ user.loginname }}</span>
        <span>注册时间：{{ user.create_at }}</span>
        <span :v-show="user.githubUsername"
          >github:<a :href="github">{{ user.githubUsername }}</a></span
        >
      </div>
    </div>
    <div class="item">
      <p>最近创建</p>
      <Recent :recent="user.recent_topics"></Recent>
    </div>
    <div class="item">
      <p>最近回复</p>
      <Recent :recent="user.recent_replies"></Recent>
    </div>
  </div>
</template>

<script>
import Recent from "./usercomponent/Recent.vue";
export default {
  name: "User",
  components: { Recent },
  computed: {
    user() {
      return this.$store.state.userData.user;
    },
    github() {
      return "https://github.com/" + this.user.githubUsername;
    },
  },
  // watch: {
  //   $route: function (to, from) {
  //     if (to !== from) {
  //       this.$store.dispatch("getUser", this.$route.query.id);
  //     }
  //   },
  // },
  mounted() {
    this.$store.dispatch("getUser", this.$route.query.id);
  },
};
</script>

<style scoped>
a {
  color: #539bf5;
}
.user {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.user .userInfo {
  display: flex;
  flex-direction: column;
}
.userInfo .picture {
  margin: 10px 0;
  display: flex;
  justify-content: center;
}
.picture img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
}
.userInfo .introduce {
  display: flex;
  justify-content: space-around;
}
.item {
  width: 60%;
  margin: 10px;
  padding: 5px;
  background-color: #2d333b;
  overflow: hidden;
  color: #adbac7;
  border-radius: 10px;
}
@media screen and (max-width: 1000px) {
  .item {
    width: 100%;
    overflow: hidden;
  }
}
@media screen and (max-width: 600px) {
  .introduce {
    flex-direction: column;
    align-items: center;
  }
}
</style>