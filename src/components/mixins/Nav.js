export default {
  data () {
    return {
      activeCode: ''
    }
  },
  computed: {
    activeBtn () {
      if (!this.$refs[this.activeCode]) return null
      return this.$refs[this.activeCode][0]
    }
  },
  watch: {
    '$globalStore.state.clientSize': function (newValue) {
      this.moveBar()
    },
    activeBtn (newValue) {
      this.moveBar()
    }
  },
  methods: {
    active: function (key) {
      this.activeCode = key
    },
    moveBar: function () {
      if (this.activeBtn == null) return
      let rect = this.activeBtn.getBoundingClientRect()
      this.$refs.bar.style.left = rect.x + 'px'
      this.$refs.bar.style.width = rect.width + 'px'
    }
  }
}
