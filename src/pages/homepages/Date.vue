<template>
  <div>
    <span>{{ replayDate }}前</span>
  </div>
</template>

<script>
export default {
  name: "Date",
  props: ["thisTopic"],
  methods: {
    computeTime() {
      //待优化
      let dataTime = new Date(this.thisTopic.last_reply_at).getTime();
      let nowTime = new Date().getTime();
      let date = nowTime - dataTime;
      if (date / 1_000 < 60) {
        return Math.floor(date / 1_000) + "秒";
      } else if (date / 60_000 < 60) {
        return Math.floor(date / 60_000) + "分钟";
      } else if (date / 3600_000 < 24) {
        return Math.floor(date / 3_600_000) + "小时";
      } else if (date / 86_400_000 < 30) {
        return Math.floor(date / 86_400_000) + "天";
      } else if (date / 2_592_000_000 < 12) {
        return Math.floor(date / 2_592_000_000) + "个月";
      } else {
        return Math.floor(date / 31_536_000_000) + "年";
      }
    },
  },
  computed: {
    replayDate() {
      return this.computeTime();
    },
  },
};
</script>

<style>
</style>