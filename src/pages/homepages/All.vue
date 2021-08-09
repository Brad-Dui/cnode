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
      </li>
    </ul>
  </div>
</template>

<script>
import Tag from "./Tag.vue";
export default {
  components: { Tag },
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
    $route: function (to, from) {
      if (to !== from) {
        this.$store.dispatch("getTopic", this.$route.params.tab);
      }
    },
  },
  activated() {
    console.log(this);
    this.$store.dispatch("getTopic", this.$route.params.tab);
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
.all li:last-child {
  border-bottom: none;
}
.all li:hover {
  background-color: #2d333b;
}
li .leftItem {
  width: 80%;
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
</style>