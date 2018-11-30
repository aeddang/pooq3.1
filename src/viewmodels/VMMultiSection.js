import Vue from 'vue'
import http from './mixins/Http'
import apiRequester from './mixins/ApiRequesterCP'
import { SectionListData } from '../models/MDMultiSection'
export default new Vue({
  data: {
    sectionListData: null
  },
  mixins: [http, apiRequester],
  methods: {
    onComplete: function (result) {
      this.sectionListData = new SectionListData(result.data)
      this.completed()
    }

  }
})
