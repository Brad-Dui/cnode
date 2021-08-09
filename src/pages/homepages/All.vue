<template>
  <div class="all">
    <ul>
      <li v-for="l in topic" :key="l.id">
        <img src="`l.author.avatar_url`" />
        <span>{{ l.author.loginname }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "All",
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
</style>