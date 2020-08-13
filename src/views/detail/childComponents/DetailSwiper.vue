<template>
  <swiper ref="swiper" class="detail_swiper" v-bind="$attrs">

  </swiper>
</template>
<script>
import { Swiper} from "./swiper/index.js";
export default {
  components: {
    Swiper,

  },
  // props: {
  //   topImgs: Array
  // },
  methods: {
    // slideLoadOn() {
    //   this.$refs.swiper.slideOn();
    // }
  }
};
</script>
<style scoped>
.detail_swiper {
  height: 12.8rem;
}
</style>
