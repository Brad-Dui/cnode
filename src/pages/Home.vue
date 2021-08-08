<template>
  <div class="home">
    <div class="leftNav">
      <ul>
        <li v-for="nav in leftNav" :key="nav.id">
          <router-link
            class="homeLink"
            active-class="homeActive"
            :to="{ name: nav.tab, params: { tab: nav.tab } }"
            >{{ nav.title }}</router-link
          >
        </li>
      </ul>
    </div>
    <div class="rightContent">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      leftNav: [
        { id: "001", tab: "all", title: "全部" },
        { id: "002", tab: "good", title: "精华" },
        { id: "003", tab: "share", title: "分享" },
        { id: "004", tab: "ask", title: "问答" },
        { id: "005", tab: "job", title: "招聘" },
        { id: "006", tab: "test", title: "客户端测试" },
      ],
    };
  },
};
</script>

<style scoped>
.home {
  margin: 10px 0 10px 10%;
  display: flex;
}
.leftNav {
  height: 500px;
  width: 200px;
  background-color: #000;
  border-radius: 10px;
  /* overflow: hidden; */
}
.leftNav ul li {
  list-style: none;
}
.leftNav .homeLink {
  display: block;
  text-decoration: none;
  height: 50px;
  color: #fff;
  font-size: 1.2em;
  line-height: 50px;
  text-align: center;
  border-radius: 5px;
}

.leftNav .homeActive {
  background-color: skyblue;
}
.rightContent {
  height: 100%;
  width: 50%;
  margin-left: 10px;
  background-color: slateblue;
}
</style>