<template>
  <div class="pageBtn">
    <ul>
      <li @click="choice(1)">&lt;&lt;</li>
      <li
        v-for="p in pages"
        :key="p.id"
        :class="{ active: p.choiced === true, hover: p.hover === true }"
        @click="choice(p.id)"
        @mouseover="check(p.id, p.choiced, true)"
        @mouseout="check(p.id, p.choiced, false)"
      >
        {{ p.id }}
      </li>
      <li @click="choice(5)">&gt;&gt;</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pagebtn",
  props: ["tab"],
  data() {
    return {
      pages: [
        { id: "1", choiced: true, hover: false },
        { id: "2", choiced: false, hover: false },
        { id: "3", choiced: false, hover: false },
        { id: "4", choiced: false, hover: false },
        { id: "5", choiced: false, hover: false },
      ],
    };
  },
  methods: {
    choice(id) {
      this.pages.forEach((x) => {
        x.choiced = false;
        if (x.id == id) {
          x.choiced = true;
          x.hover = false;
        }
      });
      this.$store.dispatch("getTopic", [this.tab, parseInt(id)]);
      console.log(this.tab);
    },
    check(id, choiced, bool) {
      if (!choiced) {
        this.pages.forEach((x) => {
          x.hover = false;
          if (x.id == id) {
            x.hover = bool;
          }
        });
      }
    },
  },
};
</script>

<style scoped>
.pageBtn {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pageBtn ul {
  display: flex;
  border: 1px solid #444c56;
  border-radius: 5px;
}
ul li {
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #adbac7;
  border-bottom: 0;
  border-right: 1px solid #444c56;
}
li:hover {
  cursor: pointer;
}
.pageBtn ul:last-child {
  border-right: 0;
}
.active {
  background-color: #263040;
  color: #6cb6ff;
}
.hover {
  background-color: #2d333b;
}
</style>