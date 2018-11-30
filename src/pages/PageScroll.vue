<template>
  <div>
    <h1>{{ title }}</h1>
    <cp-tab v-bind:datas ="tabDatas" v-on:click="selectedTab($event)"></cp-tab>>
    <cp-infinite-scroll></cp-infinite-scroll>
  </div>
</template>

<script>
import store from '../stores/VXNav'
export default {
  name: 'PageScroll',
  props: ['title'],
  store: store,
  data () {
    return {
      tabDatas: [ {title: 'tab1', code: '1'}, {title: 'tab2', code: '2'}, {title: 'tab3', code: '3'} ]
    }
  },
  mounted () {
    this.$store.commit('active', '1')
  },
  watch: {
    '$store.state.activeCode': function (newValue) {
      console.log('active code changed :' + newValue)
    }
  },
  methods: {
    selectedTab: function (code) {
      console.log('selectedTab :' + code)
    }
  }
}
</script>

<style scoped>

</style>
