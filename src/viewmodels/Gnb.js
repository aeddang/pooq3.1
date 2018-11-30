import Vue from 'vue'
import http from './mixins/Http'

export default new Vue({
  data: {
    lists: []
  },
  mixins: [http],
  methods: {
    load: function () {
      this.loading()
      const api = '../static/setup/gnb.json'
      this.$http.get(api)
        .then((result) => {
          console.log('gnb VS : ' + result.data.version)
          this.lists = result.data.gnblist
          this.completed()
        })
        .catch((error) => { this.error(error) })
    },
    getList (code) {
      return this.lists.find(e => { return e.uicode === code })
    }
  }
})
