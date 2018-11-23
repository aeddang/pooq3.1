<template>
  <div id="app">
    <cp-top></cp-top>
    <cp-gnb></cp-gnb>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted () {
    window.addEventListener('resize', () => {
      this.$globalStore.commit('resize')
    })
  }
}
</script>

<style lang="css">
  @import "../static/font/font-face.css";
</style>
<style lang="scss">
  @import './assets/css/global.scss';
</style>
