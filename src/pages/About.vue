<template>
  <div class="about">
    <div class="artical">
      <div class="item">
        <h2>关于</h2>
        <p>
          CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js
          的技术研究。
        </p>
        <p>
          CNode 社区由一批热爱 Node.js
          技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对
          Node.js 感兴趣的朋友。
        </p>
        <p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
        社区目前由 <a href="##">@alsotang</a> 在维护，有问题请联系：<a
          href="https://github.com/alsotang"
          >https://github.com/alsotang</a
        >
      </div>
      <div class="item">
        <h2>移动客户端</h2>
        <p>客户端由 <a href="##">@soliury</a> 开发维护。</p>
        <p>
          源码地址：<a href="https://github.com/soliury/noder-react-native"
            >https://github.com/soliury/noder-react-native</a
          >。
        </p>
        <p>
          安卓用户同时可选择：<a
            href="https://github.com/TakWolf/CNode-Material-Design"
            >https://github.com/TakWolf/CNode-Material-Design</a
          >
          ，这是 Java 原生开发的安卓客户端。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.about .artical {
  padding: 0 5px;
  width: 60%;
  color: #adbac7;
  border: 1px solid #444c56;
  border-radius: 5px;
}
.artical .item {
  margin: 5px 0;
}
.artical .item a {
  color: #539bf5;
  text-indent: 1rem;
}
.artical .item * {
  margin-bottom: 10px;
}
@media screen and (max-width: 1000px) {
  .about .artical {
    width: 100%;
  }
}
</style>