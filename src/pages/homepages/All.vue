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
  activated() {
    console.log(this);
    this.$store.dispatch("getTopic", this.$route.params.tab);
  },
};
</script>

<style>
</style>