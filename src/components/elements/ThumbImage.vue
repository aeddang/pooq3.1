<template>
  <div class="thumb">
    <img src=src class="image">
    <div class="border"></div>
  </div>
</template>

<script>
export default {
  name: 'ThumbImage',
  props: ['src']
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/utils';
.thumb{
  @include screen-default-image($image-default);
  position:relative;
}
.border{
  @include border-mask($line-stroke,$color-grey);
}
</style>
