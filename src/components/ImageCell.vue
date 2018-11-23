<template>
  <li>
    <el-thumb-image class="thumb" v-bind:src= "data.image"></el-thumb-image>
    <el-text-field class="text" v-bind:text= "data.title"></el-text-field>
    <el-text-button v-on:click = "btnClick()" v-bind:title = "data.title"></el-text-button>
  </li>
</template>

<script>
export default {
  name: 'ImageCell',
  props: ['data'],
  methods: {
    btnClick: function () {
      this.$store.commit('increment')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/utils';
  .thumb {
    width: 240px;
    height: 64px;
  }
  .text{
    @include font-default($color-black);
  }
</style>
