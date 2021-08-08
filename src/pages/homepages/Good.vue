<template>
  <div class="good">good</div>
</template>

<script>
export default {
  name: "Good",
  activated() {
    this.$store.dispatch("getTopic", this.$route.params.tab);
  },
};
</script>

<style>
</style>