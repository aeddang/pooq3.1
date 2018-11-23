<template>
  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <cp-image-cell v-for="data in datas" v-bind:key="data.id" v-bind:data="data" ></cp-image-cell>
  </div>
</template>

<script>
import pagingStore from '../stores/Paging'
export default {
  name: 'Scroll',
  store: pagingStore,
  data () {
    return {
      busy: false,
      datas: []
    }
  },
  create: {
  },
  watch: {
    '$store.state.currentIdx': function (newValue) {
      this.datas.push({image: 'test', title: pagingStore.getters.idx + 'title'})
    }
  },
  methods: {
    loadMore: function () {
      pagingStore.commit('increment')
    }
  }
}
</script>
<style scoped>
</style>
