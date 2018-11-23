<template>
    <button v-on:click="$emit('click', $event.target.click)" class="title">{{ title }}</button>
</template>
<script>
export default {
  name: 'TextButton',
  props: ['title']
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/utils';
.title{
  font-family : $font-family;
  padding: $margin;
}
</style>
