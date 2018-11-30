import Vue from 'vue'
import http from './mixins/Http'
import apiRequester from './mixins/ApiRequesterCP'

export default new Vue({
  data: {
    contents: [11, 22, 33, 44]
  },
  mixins: [http, apiRequester],
  methods: {
    onComplete: function (result) {
      console.log(result)
      this.completed()
    }

  }
})
