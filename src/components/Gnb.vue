<template>
  <nav id="gnb" role="navigation" class="nav">
    <ul class="nav-u">
      <li class="nav-l" v-for="list in gnbData.lists" v-bind:key="list.id" v-bind:ref="list.uicode">
        <el-text-button class="btn" v-on:click="movePage(list)" v-bind:title = "list.title"
                        v-bind:class="{active: activeCode === list.uicode}"></el-text-button>
      </li>
      <div class="bar" ref="bar"></div>
    </ul>
  </nav>
</template>

<script>
import model from '../viewmodels/Gnb'
import { PagePath } from '../routers'
import nav from './mixins/Nav'

export default {
  name: 'Gnb',
  mixins: [nav],
  data () {
    return {
      gnbData: model
    }
  },
  mounted () {
    this.gnbData.load()
  },
  watch: {
    $route (to, from) {
      this.active(to.params.code)
    }
  },
  methods: {
    movePage: function (list) {
      // this.$router.push({ name: PagePath.PageScroll, params: { title: list.title, code: list.uicode } })
      this.$router.push({ name: PagePath.PageSwiper })
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
