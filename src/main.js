import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import VueRouter from 'vue-router'
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false
Vue.use(VueRouter)

NProgress.configure({
  easing: 'ease',// 动画方式
  speed: 500,// 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200,// 自动递增间隔
  minimum: 0.3// 初始化时的最小百分比
})

new Vue({
  store,
  router,
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: h => h(App),
}).$mount('#app')