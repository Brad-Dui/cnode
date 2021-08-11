<template>
  <div class="topicTag">
    <span v-if="top" class="topTag">置顶</span>
    <span v-else-if="good" class="topTag">精华</span>
    <span v-else-if="share" class="simpleTag">分享</span>
    <span v-else-if="ask" class="simpleTag">问答</span>
    <span v-else-if="job" class="simpleTag">招聘</span>
    <span v-else-if="dev" class="simpleTag">测试</span>
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: ["thisTopic"],
  computed: {
    top() {
      return this.thisTopic.top;
    },
    good() {
      return this.thisTopic.good;
    },
    share() {
      return this.thisTopic.tab == "share";
    },
    ask() {
      return this.thisTopic.tab == "ask";
    },
    job() {
      return this.thisTopic.tab == "job";
    },
    dev() {
      return this.thisTopic.tab == "dev";
    },
  },
};
</script>

<style scoped>
.topicTag {
  height: 100%;
  width: 40px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.topTag {
  width: 30px;
  height: 20px;
  background-color: #845ec2;
  border-radius: 5px;
  font-size: 10px;
  text-align: center;
  line-height: 20px;
  color: #fff;
}
.simpleTag {
  width: 30px;
  height: 20px;
  background-color: #373c47;
  border-radius: 5px;
  font-size: 10px;
  text-align: center;
  line-height: 20px;
  color: gray;
}
</style>>
