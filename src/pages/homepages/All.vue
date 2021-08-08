<template>
  <div class="all">
    <ul>
      <li v-for="l in topic" :key="l.id">{{ l.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "All",
  data() {
    return {
      topic: this.$store.state.topicData.topic,
    };
  },
  activated() {
    console.log(this);
    this.$store.dispatch("getTopic", this.$route.params.tab);
  },
};
</script>

<style>
</style>