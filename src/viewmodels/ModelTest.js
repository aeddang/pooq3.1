import Vue from 'vue'

export default new Vue({
  data: {
    posts: 'post'
  },
  methods: {
    clear: function () {
      this.posts = 'clear'
    },
    load: function () {
      const baseURI = 'https://jsonplaceholder.typicode.com'
      this.$http.get(`${baseURI}/posts`)
        .then((result) => {
          const reducer = (a, b) => {
            return a + b.title
          }
          this.posts = result.data.reduce(reducer, '')
        })
    }
  }
})
