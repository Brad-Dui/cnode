<template>
  <div class="ask">ask</div>
</template>

<script>
export default {
  name: "Ask",
  activated() {
    this.$store.dispatch("getTopic", this.$route.params.tab);
  },
};
</script>

<style>
</style>