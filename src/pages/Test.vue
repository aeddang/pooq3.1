<template>
  <div id="test">
    <button v-on:click="testFn1">test1</button>
    <button v-on:click="testFn2">test2</button>
    <h2>{{ this.$globalStore.state.pooqZone.isPooqZone }}</h2>
    <transition name="fade">
      <h1 v-if="show">{{ testModel.posts }}</h1>
    </transition>

  </div>
</template>

<script>
import model from '../viewmodels/ModelTest'
import { PooqZoneData } from '../models/pooqZone'
export default
{
  name: 'Test',
  data () {
    return {
      testModel: model,
      show: false,
      pooqZone: null
    }
  },
  created () {
    console.log(this.$globalStore.state.environment)
    console.log(this.$globalStore.state.user)
    console.log(this.$globalStore.state.api)
    this.$globalStore.state.pooqZone.checkPooqZone()
  },
  watch: {
    pooqZone: function (newValue) {
      console.log(new PooqZoneData(newValue))
    }
  },
  methods: {
    testFn1: function () {
      this.show = true
      this.testModel.load()
      this.$globalStore.state.user.login('aeddang@hanmail.net', '12qw34ER')
    },
    testFn2: function () {
      this.testModel.clear()
      this.$globalStore.state.user.logout()
      this.pooqZone = this.$globalStore.state.pooqZone.pzData
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/css/translate';
</style>
