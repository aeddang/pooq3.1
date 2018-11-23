<template>
  <nav id="gnb" role="navigation" class="nav">
    <ul class="nav-u">
      <li class="nav-l" v-for="data in datas" v-bind:key="data.id" v-bind:ref="data.code">
        <el-text-button v-on:click="movePage(data.code)" v-bind:title = "data.title"
                        v-bind:class="{active: activeCode === data.code}"></el-text-button>
      </li>
      <div class="bar" ref="bar"></div>
    </ul>
  </nav>
</template>

<script>
import nav from './mixins/Nav'
export default {
  name: 'Tab',
  props: ['datas', 'code'],
  mixins: [nav],
  mounted () {
    if (this.code) this.active(this.code)
  },
  watch: {
    '$store.state.activeCode': function (newValue) {
      this.active(newValue)
    }
  },
  methods: {
    movePage: function (code) {
      this.$emit('click', code)
      if (this.$store == null) return
      this.$store.commit('active', code)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/sets';
  @include nav-set($margin-ultra, $color-black);
</style>
