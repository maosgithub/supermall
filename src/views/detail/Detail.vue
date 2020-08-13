<template>
  <div id="detail">
    <detail-nav-bar class="nav-bar" @itemClickEvent="changeScrollOffset"></detail-nav-bar>

    <scroll
      class="detail_wrapper"
      ref="scroll"
      :probe-type="3"
      @scrollEvent="scrollOn"
      :pullUpLoad="false"
    >
      <detail-swiper :top-imgs="topImages" class="detail-swiper"></detail-swiper>
      <detail-goods :goods="goods" class=".m-b-t-20" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @loadImgEvent="loadImgOk" />
      <detail-params :paramInfo="paramInfo" ref="paramsRef" />
      <detail-comment :comment="comment" ref="commentRef" />
      <!-- <img :src="item" alt v-for="(item,index) in topImages" :key="index" style="width:100%" /> -->
    </scroll>
  </div>
</template>

<script>
import { getDetail, Goods, Shop, GoodsParam } from "network/detail.js";
import DetailNavBar from "views/detail/childComponents/DetailNavBar";
import DetailSwiper from "views/detail/childComponents/DetailSwiper";
import DetailGoods from "views/detail/childComponents/DetailGoods";
import DetailShopInfo from "views/detail/childComponents/DetailShopInfo";
import DetailGoodsInfo from "views/detail/childComponents/DetailGoodsInfo";
import DetailParams from "views/detail/childComponents/DetailParams";
import DetailComment from "views/detail/childComponents/DetailComment";
import Scroll from "components/common/scroll/Scroll.vue";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    Scroll,
    DetailGoods,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParams,
    DetailComment,
  },
  data() {
    return {
      itemId: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      comment: {},
      recommend: [],
      theme: ["swiperRef", "paramsRef", "commentRef", "recommendRef"],
      themePosY: [0],
      bcFuncTheme: null,
      detailIndex: 0,
    };
  },
  created() {
    this.itemId = this.$route.params.id;
    // getDetail(this.itemId).then((res) => {
    //   this.topImages = res.data.result.topImages;
    // });
    this.getDetail(this.itemId);
  },
  mounted() {},
  methods: {
    async getDetail(iid) {
      let res = await getDetail(iid);
      res = res.data;
      console.log(res);
      if (res) {
        const result = res.result;
        this.topImages = result.topImages;

        //获取商品信息
        this.goods = new Goods(
          result.itemInfo,
          result.columns,
          result.shopInfo.services
        );

        //获取店铺信息
        this.shop = new Shop(result.shopInfo);

        //获取宝贝的详细信息
        this.detailInfo = result.detailInfo;

        //获取商品的参数
        this.paramInfo = new GoodsParam(
          result.itemParams.info,
          result.itemParams.rule
        );

        //获取评论
        if (result.rateInfo.cRate != 0) {
          this.comment = result.rateInfo.list[0];
        }
      }
      setTimeout(() => {
        this.$refs.scroll.refresh();
      }, 500);
    },
    scrollOn(pos) {
      this.isShowTop = -pos.y > 1000;
      // for (let i = 0; i < this.themePosY.length - 1; ++i) {
      //   if (
      //     this.detailIndex != i &&
      //     -pos.y >= this.themePosY[i] &&
      //     -pos.y < this.themePosY[i + 1]
      //   ) {
      //     //console.log(i);
      //     this.detailIndex = i;
      //     this.$refs.navBarRef.currIndex = i;
      //     break;
      //   }
      // }
    },
    loadImgOk() {
      this.$refs.scroll.refresh();
    },
    changeScrollOffset(index) {
      this.$refs.scroll.scrollToElement(this.$refs[this.theme[index]].$el, 200);
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;

  height: 100vh;
  padding-top: 44px;
}
.m-b-t-20 {
  margin: 20px 0;
}
.detail_wrapper {
  position: absolute;
  top: 44px;
  bottom: 2.09rem;
  left: 0;
  right: 0;
  overflow: hidden;
}
.nav-bar {
  position: fixed;
  width: 100%;

  top: 0;
}
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>