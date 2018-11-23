// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import infiniteScroll from 'vue-infinite-scroll'
import App from './App'
import router from './routers'
import store from './stores/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './components/ComponentsRegister'

Vue.use(infiniteScroll)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$globalStore = store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
