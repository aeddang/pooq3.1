import Vue from 'vue'

import Router from 'vue-router'
import HelloWorld from '../pages/HelloWorld'
import Test from '../pages/Test'
import Scroll from '../pages/PageScroll'
import Swiper from '../pages/PageSwiper'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Test, name: 'test' },
    { path: '/page-scroll', component: Scroll, name: 'scroll' },
    { path: '/page-scroll/:title', component: Scroll, props: true, name: 'page-scroll' },
    { path: '/page-swiper', component: Swiper, name: 'page-swiper' },
    { path: '/hellow-world', component: HelloWorld, name: 'hellow-world' }
  ]
})

export const PagePath = {
  Test: 'test',
  HellowWorld: 'hellow-world',
  PageScroll: 'page-scroll',
  PageSwiper: 'page-swiper'
}
