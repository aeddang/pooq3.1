<template>
  <div>
    <swiper class="swiper-inner" v-bind:options="swiperOption">
      <swiper-slide v-for="data in datas" v-bind:key="data.id" v-bind:data="data">SlideTest</swiper-slide>
    </swiper>
  </div>
</template>

<script>
import model from '../viewmodels/VMContents'
import responder from './mixins/AsyncResponder'
export default {
  name: 'SectionSwiper',
  mixins: [responder],
  props: ['sectionData'],
  data () {
    return {
      datas: [],
      swiperOption: {
        slidesPerView: 'auto',
        slidesPerColumn: 1,
        spaceBetween: 5
      }
    }
  },
  mounted () {
    this.asyncVM = model
    if (this.sectionData) model.load(this.sectionData.getBodyData())
  },
  watch: {
    sectionData (newValue) {
      model.load(newValue.getBodyData())
    }
  },
  methods: {
    onCompleted: function () {
      this.datas = model.contents
    }
  }
}
</script>

<style scoped>
  .swiper-inner {
    width: 100%;
    margin-top: 50px;
  }
  .swiper-slide {
    background-color: #777777;
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }
</style>
