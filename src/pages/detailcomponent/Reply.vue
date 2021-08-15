<template>
  <div class="reply">
    <span class="head">{{ replies.length }}回复</span>
    <ul>
      <li v-for="(l, index) in replies" :key="index">
        <div class="user">
          <img :src="l.author.avatar_url" @click="toUser(l.author.loginname)" />
          <span>{{ l.author.loginname + " " + (index + 1) }}楼</span>
          <span class="master" v-show="l.author.loginname == id">楼主</span>
        </div>
        <div class="replyContent" v-html="l.content"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Reply",
  props: ["replies", "id"],
  methods: {
    toUser(id) {
      this.$router.push({
        name: "user",
        query: { id },
      });
    },
  },
};
</script>

<style scoped>
.reply {
  width: 60%;
  background-color: #2d333b;
  color: #adbac7;
  border-radius: 10px;
  padding: 5px;
}
.reply .head {
  display: block;
  padding-bottom: 10px;
  border-bottom: 1px solid #4b4949;
}
.reply ul li {
  padding: 5px 0;
  border-bottom: 1px solid #444c56;
  list-style: none;
}
li .master {
  margin-left: 5px;
  width: 30px;
  height: 20px;
  background-color: #845ec2;
  border-radius: 5px;
  font-size: 10px;
  text-align: center;
  line-height: 20px;
}
.reply .user {
  display: flex;
  align-content: center;
}
.reply .user img {
  width: 30px;
  height: 30px;
  border-radius: 5px;
}
.user img:hover {
  cursor: pointer;
}
.reply .replyContent >>> img {
  max-width: 100%;
  border-radius: 10px;
}
.reply .replyContent >>> a {
  color: #539bf5;
}
.replyContent >>> li {
  list-style: none;
}
.replyContent >>> code {
  white-space: pre-wrap;
  word-wrap: break-word;
}
@media screen and (max-width: 1000px) {
  .reply {
    width: 100%;
  }
}
</style>