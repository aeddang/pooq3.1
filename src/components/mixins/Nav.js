export default {
  data () {
    return {
      activeCode: ''
    }
  },
  watch: {
    '$globalStore.state.clientSize': function (newValue) {
      this.moveBar()
    }
  },
  computed: {
    activeBtn () {
      if (!this.$refs[this.activeCode]) return null
      return this.$refs[this.activeCode][0]
    }
  },
  methods: {
    active: function (key) {
      this.activeCode = key
      this.moveBar()
    },
    moveBar: function () {
      if (this.activeBtn == null) return
      let rect = this.activeBtn.getBoundingClientRect()
      this.$refs.bar.style.left = rect.x + 'px'
      this.$refs.bar.style.width = rect.width + 'px'
    }
  }
}
