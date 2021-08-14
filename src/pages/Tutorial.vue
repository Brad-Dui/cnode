<template>
  <div class="tutorial">
    <div class="artical">
      <div class="item">
        <h2>Node.js 入门</h2>
        <h4>《汇智网 Node.js 课程》</h4>
        <a href="http://www.hubwiz.com/course/?type=nodes"
          >http://www.hubwiz.com/course/?type=nodes</a
        >
        <h4>《快速搭建 Node.js 开发环境以及加速 npm》</h4>
        <a href="http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html"
          >http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a
        >
        <h4>《Node.js 包教不包会》</h4>
        <a href="https://github.com/alsotang/node-lessons"
          >https://github.com/alsotang/node-lessons</a
        >
        <h4>《ECMAScript 6入门》</h4>
        <a href="http://es6.ruanyifeng.com/">http://es6.ruanyifeng.com/</a>
        <h4>《七天学会NodeJS》</h4>
        <a href="https://github.com/nqdeng/7-days-nodejs"
          >https://github.com/nqdeng/7-days-nodejs</a
        >
        <h4>《Node入门-一本全面的Node.js教程》</h4>
        <a href="http://www.nodebeginner.org/index-zh-cn.html"
          >http://www.nodebeginner.org/index-zh-cn.html</a
        >
      </div>
      <div class="item">
        <h2>Node.js 资源</h2>
        <h4>《node weekly》</h4>
        <a href="http://nodeweekly.com/issues">http://nodeweekly.com/issues</a>
        <h4>《node123-node.js中文资料导航》</h4>
        <a href="https://github.com/youyudehexie/node123"
          >https://github.com/youyudehexie/node123</a
        >
        <h4>《A curated list of delightful Node.js packages and resources》</h4>
        <a href="https://github.com/sindresorhus/awesome-nodejs"
          >https://github.com/sindresorhus/awesome-nodejs</a
        >
        <h4>《Node.js Books》</h4>
        <a href="https://github.com/pana/node-books"
          >https://github.com/pana/node-books</a
        >
      </div>
      <div class="item">
        <h2>Node.js 名人</h2>
        <h4>《名人堂》</h4>
        <a href="https://github.com/cnodejs/nodeclub/wiki/名人堂"
          >https://github.com/cnodejs/nodeclub/wiki/名人堂</a
        >
      </div>
      <div class="item">
        <h2>Node.js 服务器</h2>
        <p style="text-indent: 1rem">
          新手搭建 Node.js 服务器，推荐使用无需备案的<a
            href="https://www.digitalocean.com/"
            style="display: inline-block"
          >
            DigitalOcean</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tutorial",
};
</script>

<style scoped>
.tutorial {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.tutorial .artical {
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
  display: block;
  color: #539bf5;
  text-indent: 1rem;
}
.artical .item * {
  margin-bottom: 10px;
}
@media screen and (max-width: 1000px) {
  .tutorial .artical {
    width: 100%;
  }
}
</style>