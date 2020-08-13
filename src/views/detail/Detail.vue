<template>
  <div id="detail">
    <detail-nav-bar class="nav-bar"></detail-nav-bar>
    <img :src="item" alt="" v-for="(item,index) in top_images" :key="index" style="width:100%">


  </div>
</template>

<script>
import { getItemdata } from "network/detail.js";
import DetailNavBar from "views/detail/childComponents/DetailNavBar";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
  },
  data() {
    return {
      itemId: null,
      item_data: null,
      item_image: null,
      top_images: null,
    };
  },
  created() {
    this.itemId = this.$route.params.id;
    this.item_data = getItemdata(this.itemId).then((res) => {
      this.item_data = res.data;
      this.item_image = res.data.result.detailInfo.detailImage[0].list;
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