<template>
    <div class = "top">
      <button class="btn-lnb" v-on:click="openLnb()"></button>
      <button class="btn-home" v-on:click="goHome()"></button>
      <button class="btn-search" v-on:click="openSearch()"></button>
    </div>
</template>

<script>
export default {
  name: 'Top',
  methods: {
    openLnb: function () {
      console.log('openLNB')
    },
    goHome: function () {
      console.log('goHome')
    },
    openSearch: function () {
      console.log('openSearch')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/utils';
.top {
  position:relative; height: 40px; margin-left: $margin; margin-right: $margin; text-align: center;
}
.btn-lnb {
  @include icon($icon-lnb);
  @include position-left();
  margin-top: $margin-small;
}
.btn-home {
  @include logo();
  margin-top: $margin;
}
.btn-search {
  @include icon($icon-search);
  @include position-right();
  margin-top: $margin-small;
}
</style>
