import Vue from 'vue'
import gnb from './Gnb'
import textButton from './elements/TextButton'
import textField from './elements/TextField'
import thumbImage from './elements/ThumbImage'
import infiniteScroll from './InfiniteScroll'
import imageCell from './ImageCell'
import tab from './Tab'
import top from './Top'
import swiperTest from './SwiperTest'
import sectionList from './SectionList'
import sectionSwiper from './SectionSwiper'
/* elements */
Vue.component('el-text-button', textButton)
Vue.component('el-text-field', textField)
Vue.component('el-thumb-image', thumbImage)

/* components */
Vue.component('cp-gnb', gnb)
Vue.component('cp-infinite-scroll', infiniteScroll)
Vue.component('cp-image-cell', imageCell)
Vue.component('cp-tab', tab)
Vue.component('cp-top', top)
Vue.component('cp-swiper', swiperTest)
Vue.component('cp-section-list', sectionList)
Vue.component('cp-section-swiper', sectionSwiper)
