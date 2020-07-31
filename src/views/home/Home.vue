<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>

    <home-swiper :banner="banner"></home-swiper>
    <recommend-view :recommends="recommend"></recommend-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home.js";
import HomeSwiper from "./childComponent/HomeSwiper";
import RecommendView from './childComponent/RecommendView'

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      banner: [],
      dKeyword: null,
      keywords: null,
      recommend: [],
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      (this.banner = res.data.banner.list),
        (this.recommend = res.data.recommend.list),
        (this.dKeyword = res.data.dKeyword),
        (this.keywords = res.data.keywords);
    });
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>