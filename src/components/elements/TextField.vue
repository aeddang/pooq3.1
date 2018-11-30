<template>
  <span class="text">{{ modifyText }}</span>
</template>

<script>
export default {
  name: 'textField',
  props: ['text'],
  computed: {
    modifyText: function () { return '@#$ : ' + this.text }
  }
}
</script>

<style lang="scss" scoped>
</style>
