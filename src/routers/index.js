import Vue from 'vue'

import Router from 'vue-router'
import HelloWorld from '../pages/HelloWorld'
import Test from '../pages/Test'
import Scroll from '../pages/PageScroll'
import Swiper from '../pages/PageSwiper'
import MultiSection from '../pages/PageMultiSection'

Vue.use(Router)
export const PagePath = {
  Test: 'test',
  HellowWorld: 'hellow-world',
  PageScroll: 'page-scroll',
  PageSwiper: 'page-swiper',
  PageMultiSection: 'page-multi-section'
}

export default new Router({
  routes: [
    { path: '/', component: Test, name: PagePath.Test },
    { path: '/page-scroll', component: Scroll, name: PagePath.PageScroll },
    { path: '/page-scroll/:title', component: Scroll, props: true, name: PagePath.PageScroll },
    { path: '/page-swiper', component: Swiper, name: PagePath.PageSwiper },
    { path: '/hellow-world', component: HelloWorld, name: PagePath.HellowWorld },
    { path: '/page-multi-section/:code', component: MultiSection, props: true, name: PagePath.PageMultiSection }
  ]
})
