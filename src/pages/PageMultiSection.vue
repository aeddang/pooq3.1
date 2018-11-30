<template>
  <cp-section-list v-bind:apiData="apiData"></cp-section-list>
</template>

<script>
import { MultiSectionData } from '../models/MDMultiSection'

export default {
  name: 'PageMultiSection',
  data () {
    return {
      apiData: null
    }
  },
  props: ['code'],
  watch: {
    code (newValue) {
      this.apiPathChanged()
    },
    '$globalStore.state.gnb.lists' (newValue) {
      this.apiPathChanged()
    }
  },
  mounted () {
    this.apiPathChanged()
  },
  methods: {
    apiPathChanged: function () {
      let originData = this.$globalStore.state.gnb.getList(this.code)
      if (originData === undefined) return
      let multiSectionDataData = new MultiSectionData(originData)
      this.apiData = multiSectionDataData.getBodyData()
    }
  }

}
</script>

<style scoped>

</style>
