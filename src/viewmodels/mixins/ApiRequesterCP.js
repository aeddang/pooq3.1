export default {
  methods: {
    load: function (apiData) {
      this.loading()
      apiData.method.toLowerCase() === 'post' ? this.postData(apiData) : this.getData(apiData)
    },
    getData: function (apiData) {
      this.loading()
      const api = this.$globalStore.state.api
      const reducer = (a, b) => { return a + '&' + b.key + '=' + b.value }
      const addQurry = apiData.bodylist.reduce(reducer, '')
      const path = api.sumDefaultQurry(apiData.url) + addQurry
      this.$http.get(path)
        .then((result) => { this.onComplete(result) })
        .catch((error) => { this.error(error) })
    },
    postData: function (apiData) {
      this.loading()
      const api = this.$globalStore.state.api
      let params = api.defaultParam
      apiData.bodylist.forEach(d => { params[d.key] = d.value })
      this.$http.post(apiData.url, params)
        .then((result) => { this.onComplete(result) })
        .catch((error) => { this.error(error) })
    },
    onComplete: function (result) {}
  }
}
