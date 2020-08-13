<template>
  <div id="detail">
    <detail-nav-bar class="nav-bar"></detail-nav-bar>
    <!-- <img :src="item" alt="" v-for="(item,index) in top_images" :key="index" style="width:100%"> -->
    <detail-swiper :top-imgs="top_images"></detail-swiper>

  </div>
</template>

<script>
import { getItemdata } from "network/detail.js";
import DetailNavBar from "views/detail/childComponents/DetailNavBar";
import DetailSwiper from "views/detail/childComponents/DetailSwiper";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper
  },
  data() {
    return {
      itemId: null,
      item_data: null,
      item_images: null,
      top_images: null,
    };
  },
  created() {
    this.itemId = this.$route.params.id;
    this.item_data = getItemdata(this.itemId).then((res) => {
      this.item_data = res.data;
      this.item_images = res.data.result.detailInfo.detailImage[0].list;
      this.top_images = res.data.result.topImages;
    });
  },
};
</script>

<style scoped>
#detail {
  position: relative;

  height: 100vh;
  padding-top: 44px;
}
.nav-bar {
  position: fixed;
  width: 100%;

  top: 0;
}
</style>