import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  store,
  router,
  render: h => h(App),
  mounted() {
    this.$store.dispatch("getTopic")
  }
}).$mount('#app')
