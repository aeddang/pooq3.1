import Vue from 'vue'
import { ApiCommand } from './ApiConfig'
import { TypeValidation, Cookies } from '../libs/utils'
import http from './mixins/Http'

const typeValidation = new TypeValidation()
const cookies = new Cookies('.pooq.co.kr')

export default new Vue({
  data: {
    pzData: JSON.parse(typeValidation.getStringValue(cookies.getItem('pzInfo'), '{}'))
  },
  mixins: [http],
  computed: {
    isPooqZone: function () { return this.pzData.pooqzoneid != null },
    pooqzoneType: function () { return typeValidation.getStringValue(this.pzData.pooqzonetype, 'none') }
  },

  watch: {
    pzData: function (newValue) { cookies.setItem('pzInfo', JSON.stringify(newValue)) }
  },

  methods: {
    clear: function () {
      cookies.removeItem('pzInfo')
    },

    checkPooqZone: function () {
      this.clear()
      this.loading()
      const api = this.$globalStore.state.api
      const path = api.path(ApiCommand.POOQZONE_CHECK) + api.getDefaultQurry()
      this.$http.get(path)
        .then((result) => {
          this.pzData = result.data
          this.completed()
        })
        .catch((error) => { this.error(error) })
    }
  }
})
