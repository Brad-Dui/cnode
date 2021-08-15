<template>
  <div class="detail">
    <div class="container">
      <div class="title">
        <h1>{{ topic.title }}</h1>
        <ul class="user">
          <li>作者{{ topic.author.loginname }}</li>
          <li>发布于{{ date }}前</li>
          <li>{{ topic.visit_count }}次浏览</li>
          <li>{{ topic.reply_count }}条回复</li>
        </ul>
      </div>
      <div class="artical" v-html="content"></div>
    </div>
    <Reply :replies="replies" :id="topic.author.loginname"></Reply>
  </div>
</template>

<script>
import { computedTime } from "../../public/js/methods";
import Reply from "./detailcomponent/Reply.vue";
export default {
  components: { Reply },
  computed: {
    topic() {
      return JSON.parse(sessionStorage.getItem("topic"));
    },
    content() {
      return this.topic.content;
    },
    date() {
      return computedTime(this.topic.create_at);
    },
    replies() {
      return this.$store.state.replyData.reply;
    },
  },
  mounted() {
    this.$store.dispatch("getReply", this.topic.id);
  },
};
</script>

<style scoped>
.detail {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.detail .container {
  width: 60%;
  margin: 10px;
  padding: 5px;
  background-color: #2d333b;
  overflow: hidden;
  color: #adbac7;
  border-radius: 10px;
}
.container .title {
  padding-bottom: 10px;
  border-bottom: 1px solid #4b4949;
}
.container .user {
  width: 100%;
  font-size: 0.6rem;
  display: flex;
}
.container .user li {
  text-indent: -5px;
  margin-right: 5px;
  margin-left: 1rem;
  flex-shrink: 0;
}
.container .artical >>> * {
  text-indent: 2rem;
  margin: 5px 0;
}
.container .artical >>> a {
  color: #539bf5;
}
.container .artical >>> pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
.container .artical >>> img {
  max-width: 100%;
}
@media screen and (max-width: 1000px) {
  .detail .container {
    width: 100%;
    overflow: hidden;
  }
}
</style>