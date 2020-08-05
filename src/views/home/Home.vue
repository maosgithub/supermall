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
    <tab-control class="tab-control" :titles="tabControlTitle"></tab-control>
  
    <div style="height:2000px">
      <div v-for="i in 50" :key="i">{{i}}</div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata, getHomeFeaturedata } from "network/home.js";
import HomeSwiper from "./childComponent/HomeSwiper";
import RecommendView from "./childComponent/RecommendView";
import FeatureView from "./childComponent/FeatureView";
import TabControl from "components/content/tabControl/TabControl";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
  },
  data() {
    return {
      banner: [],
      dKeyword: null,
      keywords: null,
      recommend: [],
      feature: [],
      tabControlTitle: ["流行", "新款", "精选"],
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      (this.banner = res.data.banner.list),
        (this.recommend = res.data.recommend.list),
        (this.dKeyword = res.data.dKeyword),
        (this.keywords = res.data.keywords);
    });
    getHomeFeaturedata().then((res) => {
      this.feature = res.data.feature.list;
      // this.feature.length=4
    });
  },
};
</script>

<style scoped>
#home {
    padding-top: 44px;
    position: relative;
  }
.home-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control{
  position: sticky;
  top: 44px;
}
</style>