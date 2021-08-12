<template>
  <div class="home">
    <div class="leftNav">
      <ul>
        <li>
          <router-link
            class="homeLink"
            active-class="homeActive"
            :to="{ name: 'introduce' }"
            >介绍</router-link
          >
        </li>
        <li v-for="nav in leftNav" :key="nav.id">
          <router-link
            class="homeLink"
            active-class="homeActive"
            :to="{ name: 'all', query: { tab: nav.tab } }"
            exact
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
        { id: "006", tab: "dev", title: "测试" },
      ],
    };
  },
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.leftNav {
  height: 500px;
  width: 200px;
  background-color: #21252b;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}
.leftNav ul li {
  list-style: none;
}
.leftNav .homeLink {
  display: block;
  text-decoration: none;
  height: 50px;
  color: #cdd9e5;
  font-size: 1.2em;
  line-height: 50px;
  text-align: center;
  border-radius: 5px;
}

.leftNav .homeActive {
  background-color: #263040;
  color: #6cb6ff;
}
.rightContent {
  width: 60%;
}
@media screen and (max-width: 1000px) {
  .home {
    margin-left: 0;
    flex-direction: column;
  }
  .leftNav {
    width: 100%;
    height: 50px;
  }
  .leftNav ul {
    display: flex;
  }
  .leftNav ul li {
    width: 20%;
  }
  .rightContent {
    width: 100%;
  }
}
</style>