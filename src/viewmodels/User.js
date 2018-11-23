import Vue from 'vue'
import { ApiCommand } from './ApiConfig'
import { TypeValidation } from '../libs/utils'
const typeValidation = new TypeValidation()

export default new Vue({
  data: {
    credential: typeValidation.getStringValue(localStorage.getItem('credeltial'), 'none'),
    userData: JSON.parse(typeValidation.getStringValue(localStorage.getItem('userData'), '{}')),
    pooqzone: 'none',
    isAutoLogin: true,
    error: null
  },

  computed: {
    userNo: function () { return typeValidation.getStringValue(this.userData.uno) },
    profileId: function () { return typeValidation.getStringValue(this.userData.profileid) }
  },

  watch: {
    isAutoLogin: function (newValue) {
      localStorage.setItem('isAutoLogin', newValue)
      this.synchronizeStorage(newValue)
    },
    credential: function (newValue) { if (this.isAutoLogin) localStorage.setItem('credeltial', newValue) },
    userData: function (newValue) { if (this.isAutoLogin) localStorage.setItem('userData', JSON.stringify(newValue)) }
  },

  methods: {
    synchronizeStorage: function (isSync) {
      if (isSync) {
        localStorage.setItem('credeltial', this.credential)
        localStorage.setItem('userData', JSON.stringify(this.userData))
      } else {
        localStorage.setItem('credeltial', '')
        localStorage.setItem('userData', '')
      }
    },

    clear: function () {
      this.credential = 'none'
      this.userData = {}
    },

    login: function (id, pw, type = 'general', profile = '1') {
      this.clear()
      const api = this.$globalStore.state.api
      let params = {}
      params.type = type
      params.id = id
      params.password = pw
      params.pushid = ''
      params.profile = profile
      const path = api.path(ApiCommand.LOGIN) + api.defaultQurry
      this.$http.post(path, params)
        .then((result) => {
          this.credential = encodeURIComponent(result.data.credential)
          this.getUserInfo()
        })
        .catch((error) => { this.error = error })
    },

    logout: function () {
      const api = this.$globalStore.state.api
      let params = {}
      params.pushid = ''
      const path = api.path(ApiCommand.LOGOUT) + api.defaultQurry
      this.$http.post(path, params)
        .then((result) => { this.clear() })
        .catch((error) => { this.error = error })
    },

    getUserInfo: function () {
      const api = this.$globalStore.state.api
      const path = api.path(ApiCommand.GET_USER) + api.defaultQurry
      this.$http.get(path)
        .then((result) => { this.userData = result.data })
        .catch((error) => { this.error = error })
    }
  }
})
