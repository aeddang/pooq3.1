<template>
  <div infinite-scroll-distance="10">
    <cp-section-swiper v-for="data in datas" v-bind:key="data.id" v-bind:sectionData="data" ></cp-section-swiper>
  </div>
</template>

<script>
import model from '../viewmodels/VMMultiSection'
import responder from './mixins/AsyncResponder'

export default {
  name: 'MultiSection',
  props: ['apiData'],
  mixins: [responder],
  data () {
    return {
      datas: []
    }
  },
  mounted () {
    this.asyncVM = model
    if (this.apiData) model.load(this.apiData)
  },
  watch: {
    apiData (newValue) {
      model.load(newValue)
    }
  },
  methods: {
    onCompleted: function () {
      this.datas = model.sectionListData.multisectionlist
    }
  }
}
</script>

<style scoped>

</style>
