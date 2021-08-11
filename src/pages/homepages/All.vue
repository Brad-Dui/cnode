<template>
  <div class="all">
    <ul>
      <li v-for="l in topic" :key="l.id">
        <div class="leftItem">
          <img :src="l.author.avatar_url" />
          <Tag :thisTopic="l"></Tag>
          <span class="topicTitle"
            ><a href="">{{ l.title }}</a></span
          >
        </div>
        <div class="rightItem">
          <div class="reply">
            <span style="background-color: inherit">回复/浏览：</span>
            <span>{{ l.reply_count }}/{{ l.visit_count }}</span>
          </div>
          <!-- 优化 - 新建组件处理时间戳 -->
          <!-- <span v-click:click="getDate(l.last_reply_at, l.id)">{{
            replyDate[l.id]
          }}</span> -->
          <Date :thisTopic="l"></Date>
        </div>
      </li>
    </ul>
    <Pagebtn :tab="tab"></Pagebtn>
  </div>
</template>

<script>
import Tag from "./Tag.vue";
import Date from "./Date.vue";
import Pagebtn from "./Pagebtn.vue";
export default {
  components: { Tag, Date, Pagebtn },
  props: ["tab"],
  name: "All",
  // 刷新数据丢失
  // data(){
  //   return {
  //     topic:this.$store.state.topicData.topic
  //   }
  // },
  //修改
  data() {
    return {
      topicData: this.$store.state.topicData,
      replyDate: {},
    };
  },
  computed: {
    topic: {
      get() {
        return this.topicData.topic;
      },
    },
  },

  watch: {
    //多路由共用一个页面
    $route: function (to, from) {
      if (to !== from) {
        this.$store.dispatch("getTopic", [this.tab, 1]);
      }
    },
  },
  // methods: {
  //   //处理每个topic的时间戳
  //   getDate(date, id) {
  //     this.replyDate[id] = date;
  //   },
  // },
  // directives: {
  //   //默认点击 - 获取标签参数 方便处理
  //   click: {
  //     inserted: function (el) {
  //       el.click();
  //     },
  //   },
  // },
  activated() {
    console.log(this);
    console.log(this.replyDate);
    this.$store.dispatch("getTopic", [this.tab, 1]);
  },
};
</script>

<style scoped>
.all {
  border: 1px solid #444c56;
  border-radius: 5px;
  overflow: hidden;
}
.all li {
  display: flex;
  justify-content: space-between;
  color: #adbac7;
  border-bottom: 1px solid #444c56;
  list-style: none;
}
/* .all li:last-child {
  border-bottom: none;
} */
.all li:hover {
  background-color: #2d333b;
}
li .leftItem {
  width: 70%;
  display: flex;
}
.leftItem img {
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  overflow: hidden;
  margin: 5px;
}
.leftItem .topicTitle {
  width: 80%;
  height: 100%;
  display: flex;
}
.topicTitle a {
  width: 100%;
  line-height: 40px;
  font-size: 14px;
  color: #adbac7;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.topicTitle a:hover {
  color: #539bf5;
  text-decoration: underline #539bf5;
}
li .rightItem {
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.rightItem span {
  font-size: 10px;
  background-color: #373c47;
  padding: 2px;
  border-radius: 5px;
}
@media screen and (max-width: 1000px) {
  .reply {
    display: none;
  }
  .rightItem {
    flex-direction: row-reverse;
  }
}
</style>