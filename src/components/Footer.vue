<template>
  <div class="footer">
    <div class="decration">
      <p>
        <a href="https://cnodejs.org/rss">RSS</a>
        <a href="https://github.com/Brad-Dui/cnode">源码地址</a>
      </p>
      <p style="color: gray">
        CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js
        的技术研究。
      </p>
      <hr />
      <p class="police">
        <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank"
          >浙ICP备2021021318号-1</a
        >
        <span>Coryright@2021-2022 huchaoqiang.cn Designed by DuiDui</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #1b1f22;
  color: #cdd9e5;
  border-radius: 10px;
}
.footer .decration {
  width: 63%;
  display: flex;
  flex-direction: column;
  padding: 30px 10px;
}
.decration p {
  margin-bottom: 5px;
}
.decration p a {
  margin-right: 10px;
  color: #cdd9e5;
}
.decration hr {
  margin-top: 20px;
  border-top-color: gray;
  border-right: 0;
  border-left: 0;
  border-bottom: 0;
}
.decration .police {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
}
.decration .police a {
  color: #539bf5;
}
@media screen and (max-width: 1000px) {
  .footer .decration {
    width: 100%;
  }
}
</style>