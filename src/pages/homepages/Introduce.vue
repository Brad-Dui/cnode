<template>
  <div class="introduce">
    <h2>项目简介</h2>
    <p>
      背景：此项目借鉴了<a href="https://cnodejs.org/">CNode论坛</a
      >，相关的用户数据、帖子的信息均是从CNode论坛所提供的API获得
    </p>
    <p>目的：深入学习vuex、vue-router、axios，在项目中发现问题并解决问题</p>
    <p>
      收获：多路由更新同一页面 -
      监听路由跳转发送请求、计算属性获取store中请求的数据
    </p>
    <p class="child">
      路由的懒加载、守卫、重定向以及activated与deactivated生命周期的使用
    </p>
    <h2>项目结构</h2>
    <p>一级导航：主页，教程，关于</p>
    <p>二级导航：介绍以及介绍的内容为一对一的关系，重定向为默认页面</p>
    <p style="text-indent: 85px">
      其余二级路由跳转的帖子界面为多对一，跳转时传入不同的tab参数，页码默认为1
    </p>
    <p>用户头像：跳转至用户详情页</p>
    <p>帖子链接：跳转至帖子详情页</p>
    <h2>项目环境</h2>
    <p>vue：2.6.11 vuex：3.6.2 vue-router：3.5.2 axios：0.21.1</p>
    <p>node：16.5.0 npm：7.20.1 vueCLI：4.5.0</p>
    <h3><a href="https://github.com/Brad-Dui/cnode">项目仓库</a></h3>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.introduce {
  width: 100%;
  color: #adbac7;
  padding: 20px;
  border: 1px solid #444c56;
  border-radius: 10px;
}
.introduce p {
  margin: 5px 0;
  font-size: 17px;
}
.introduce .child {
  text-indent: 51px;
}
a {
  color: #adbac7;
}
</style>