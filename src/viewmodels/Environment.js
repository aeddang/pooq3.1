import Vue from 'vue'
import { uuid } from 'vue-uuid'
import { detect } from 'detect-browser'

const browser = detect()
export default new Vue({
  created () {
    this.guid = localStorage.getItem('guid') || uuid.v4()
    console.log(this.guid)
  },

  data: {
    osVer: browser.os,
    browserName: browser.name,
    browserVer: browser.version,
    guid: ''
  },

  computed: {
    drmType: function () {
      var version = Number(this.browserVer)
      version = (isNaN(version) === true) ? -1 : version
      var type = DrmType.NONE
      switch (this.browserName) {
        case 'firefox':
          type = (version >= 52) ? DrmType.WIDEVINE : type
          break
        case 'safari':
          type = (version >= 11) ? DrmType.FAIR_PLAY : type
          break
        case 'chrome':
          type = (version >= 52) ? DrmType.WIDEVINE : type
          break
        case 'opera':
          type = (version >= 15) ? DrmType.PLAY_READY : type
          break
        default :
          type = (this.browser.indexOf('ie') !== -1) ? DrmType.WIDEVINE_CLASIC : type
          break
      }
      return type
    }
  },

  watch: {
    guid (newValue) { localStorage.setItem('guid', newValue) }
  }
})

export const DrmType = {
  NONE: 'none',
  WIDEVINE_CLASIC: 'wc',
  WIDEVINE: 'wm',
  PLAY_READY: 'pr',
  FAIR_PLAY: 'fp'
}
