import Vue from 'vue'

const API_PATH = 'https://apis.pooq.co.kr/'
/*
const API_BOOK_MARK= 'https://bookmark3.pooq.co.kr/bookmark'
const API_BOOK_MARK_LOG= 'https://applog3.pooq.co.kr/bookmark-applog'
*/
const API_CREDENTIAL_KEY = 'E5F3E0D30947AA5440556471321BB6D9'
const DEVICE = 'android'
const PARTNER = 'pooq'
const REGION = 'kor'
const TARGET_AGE = 'auto'

export default new Vue({
  data: {
  },
  computed: {
    defaultParam: function () {
      let param = {}
      param.device = DEVICE
      param.partner = PARTNER
      param.pooqzone = this.$globalStore.state.user.pooqzone
      param.region = REGION
      param.drm = this.$globalStore.state.environment.drmType
      param.targetage = TARGET_AGE
      param.apikey = API_CREDENTIAL_KEY
      param.credential = this.$globalStore.state.user.credential
      return param
    },
    defaultQurry: function () {
      let gurry = `device=${DEVICE}&partner=${PARTNER}&pooqzone=${this.$globalStore.state.user.pooqzone}` +
        `&region=${REGION}&drm=${this.$globalStore.state.environment.drmType}&targetage=${TARGET_AGE}` +
        `&apikey=${API_CREDENTIAL_KEY}&credential=${this.$globalStore.state.user.credential}`
      return gurry
    }
  },
  methods: {
    path: function (command) {
      return `${API_PATH}${command}`
    },
    getDefaultQurry: function (delimiter = '?') {
      return delimiter + this.defaultQurry
    },
    sumDefaultQurry: function (path) {
      let delimiter = path.indexOf('?') === -1 ? '?' : '&'
      return path + delimiter + this.defaultQurry
    }
  }
})

export const ApiCommand = {
  LOGIN: 'login',
  LOGOUT: 'logout',
  GET_USER: 'user',
  POOQZONE_CHECK: 'pooqzone',
  POOQZONE_ADULT: 'pooqzone/adultcertification',
  POOQZONE_LOGIN: 'pooqzone/login',
  STREAMING: 'streaming',
  META_LIVE: 'live/channels/',
  META_VOD: 'vod/contents/',
  META_MOVIE: 'movie/contents/',
  META_CLIP: 'clip/contents/',
  POST_RECOMMENDATIONS: 'uiservice/recommend/contents/mostwith/',
  RECOMMENDATIONS: 'recommendation/contents',
  LIST_LIVE_POPULAR: 'live/popular-channels',
  LIST_VOD_POPULAR: 'vod/popularcontents',
  LIST_VOD_NEW: 'vod/newcontents',
  LIST_VOD_PROGRAM: 'vod/programs-contents/',
  LIST_MOVIE_RECOMMEND: 'movie/recommend/contents',
  LIST_MOVIE_NEW: 'movie/contents',
  LIST_THEME: 'themes-related-player/',
  HOME_SHOPPING: 'homeshopping',
  GET_CONTENT_ID: 'vod/programs-contentid/'
}
