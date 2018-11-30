<template>
  <nav id="gnb" role="navigation" class="nav">
    <ul class="nav-u" v-on:DOMSubtreeModified="listSubtreeModified">
      <li class="nav-l" v-for="list in gnbDatas" v-bind:key="list.id" v-bind:ref="list.uicode">
        <el-text-button class="btn" v-on:click="movePage(list)" v-bind:title = "list.title"
                        v-bind:class="{active: activeCode === list.uicode}"></el-text-button>
      </li>
      <div class="bar" ref="bar"></div>
    </ul>
  </nav>
</template>

<script>
import { PagePath } from '../routers'
import nav from './mixins/Nav'
import responder from './mixins/AsyncResponder'

export default {
  name: 'Gnb',
  mixins: [nav, responder],
  data () {
    return {
      gnbDatas: []
    }
  },
  mounted () {
    this.asyncData = this.$globalStore.state.gnb
    this.$globalStore.state.gnb.load()
  },
  watch: {
    $route (to, from) {
      this.active(to.params.code)
    },
    '$globalStore.state.gnb.lists' (newValue) {
      this.gnbDatas = newValue
    }
  },
  methods: {
    listSubtreeModified: function () {
      this.active(this.$route.params.code)
    },
    movePage: function (list) {
      this.$router.push({name: PagePath.PageMultiSection, params: {code: list.uicode}})
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/sets';
@include nav-set($margin-ultra, $color-purple);
.nav {
  height: 40px;
  border-bottom: $line-stroke $color-grey-bright;
}
.btn {
  font-size: $font-size-big;
  margin-top: 10px;
}
.active {
  color:$color-purple;
}
</style>
