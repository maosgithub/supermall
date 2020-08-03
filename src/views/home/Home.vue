<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>

    <home-swiper :banner="banner"></home-swiper>
    <recommend-view :recommends="recommend"></recommend-view>
    <feature-view :feature="feature"></feature-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata,getHomeFeaturedata } from "network/home.js";
import HomeSwiper from "./childComponent/HomeSwiper";
import RecommendView from './childComponent/RecommendView'
import FeatureView from './childComponent/FeatureView'

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data() {
    return {
      banner: [],
      dKeyword: null,
      keywords: null,
      recommend: [],
      feature:[]
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      (this.banner = res.data.banner.list),
        (this.recommend = res.data.recommend.list),
        (this.dKeyword = res.data.dKeyword),
        (this.keywords = res.data.keywords);
    });
    getHomeFeaturedata().then((res)=>{
      this.feature = res.data.feature.list
      // this.feature.length=4
    })
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>