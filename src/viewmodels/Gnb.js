import Vue from 'vue'

export default new Vue({
  data: {
    lists: []
  },
  methods: {
    load: function () {
      const api = '../static/setup/gnb.json'
      this.$http.get(api)
        .then((result) => {
          console.log('gnb VS : ' + result.data.version)
          this.lists = result.data.gnblist
        })
    }
  }
})
