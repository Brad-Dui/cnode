<template>
  <div class="date">
    <span>{{ replayDate }}前</span>
  </div>
</template>

<script>
import { computedTime } from "../../../public/js/methods";
export default {
  name: "Date",
  props: ["thisTopic"],
  computed: {
    replayDate() {
      return computedTime(this.thisTopic.last_reply_at);
    },
  },
};
</script>

<style scoped>
.date {
  margin-right: 5px;
}
</style>