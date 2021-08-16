<template>
  <div class="recent">
    <ul>
      <li v-for="l in recent" :key="l.id">
        <div class="left">
          <img :src="l.author.avatar_url" @click="toUser(l.author.loginname)" />
          <a href="javascript:false" @click="toDetail(l.id)">{{ l.title }}</a>
        </div>
        <div class="right">
          <span>{{ date(l.last_reply_at) }}前</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { computedTime } from "../../../public/js/methods";
export default {
  name: "Recent",
  props: ["recent"],
  watch: {
    $route: function (to, from) {
      if (to !== from) {
        location.reload();
      }
    },
  },
  methods: {
    date(value) {
      return computedTime(value);
    },
    toDetail(id) {
      Promise.resolve()
        .then(() => {
          this.$store.dispatch("getOneTopic", id);
        })
        .then(() => {
          setTimeout(() => {
            let topic = this.$store.getters.onetopic;
            sessionStorage.setItem("topic", JSON.stringify(topic));
            this.$router.push({
              name: "detail",
            });
          }, 200);
        });
    },
    toUser(id) {
      this.$router.push({
        name: "user",
        query: { id },
      });
      console.log(this);
    },
  },
};
</script>

<style scoped>
.recent li {
  width: 100%;
  display: flex;
  align-items: center;
  border-top: 1px solid #444c56;
}
.recent li:hover {
  background-color: rgba(27, 31, 34, 0.4);
}
li .left {
  display: flex;
  align-items: center;
  width: 80%;
}
.left a {
  width: 80%;
  color: #adbac7;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.left a:hover {
  color: #539bf5;
  text-decoration: underline;
}
.recent ul li img {
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  overflow: hidden;
  margin: 5px;
}
li img:hover {
  cursor: pointer;
}
.recent .right {
  width: 20%;
  display: flex;
  flex-direction: row-reverse;
  padding-right: 5px;
}
</style>