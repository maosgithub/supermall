<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-control
      class="top-tab-control"
      :titles="tabControlTitle"
      @tabClick="tabClick"

      v-show="topCheck"
      
    />
    <scroll
      class="wrapper"
      ref="scroll"
      @scrollEvent="contentScroll"
      prope-type="3"
      :pull-up-load="true"
      @pullingUpEvent="loadMore"
    >
      <home-swiper :banner="banner"></home-swiper>
      <recommend-view :recommends="recommend"></recommend-view>
      <feature-view :feature="feature"></feature-view>
      <tab-control
        :titles="tabControlTitle"
        @tabClick="tabClick"
        ref="tabControl"
      ></tab-control>
      <goods-list :goods-list="goods[currentType].list" @goodsImgLoadEvent="goodsImgLoadEvent"></goods-list>
    </scroll>
    <!-- <div>
      <div v-for="i in 50" :key="i">{{i}}</div>
    </div>-->
    <transition name="back-top">
      <back-top @click.native="backClick" v-show="isShowTop" />
    </transition>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import {
  getHomeMultidata,
  getHomeFeaturedata,
  getHomeGoodsdata,
} from "network/home.js";
import HomeSwiper from "./childComponent/HomeSwiper";
import RecommendView from "./childComponent/RecommendView";
import FeatureView from "./childComponent/FeatureView";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/Goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";
import { debounce } from "common/utils.js";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banner: [],
      dKeyword: null,
      keywords: null,
      recommend: [],
      feature: [],
      tabControlTitle: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      topCheck: false,
      isShowTop: false,

      //tab-control组件
      tabControloffsetTop: null,
      saveY:0
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
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    this.tabControloffsetTop = this.$refs.tabControl;

    // console.log(this.tabOffsetTop.$el.offsetTop);
    // this.$refs.scroll.refresh()
  },
  activated() {
    //this.bcFunc 混入进来的
    console.log('activated');
    this.$refs.scroll.scrollTo(0,this.saveY)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    // 通过给 $off第二参数传递一个函数，可以让其只销毁home里的事件，而不会销毁detail里的事件
    console.log('deactivated');
    this.saveY=this.$refs.scroll.getScrollY()
    // this.$refs.scroll.refresh()
  },
  destroyed(){
    console.log('why are you destroyed');
  },
  methods: {
    goodsImgLoadEvent() {
      debounce(this.$refs.scroll.refresh, 200)();
    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoodsdata(type, page).then((res) => {
        // this.goods[type].list = this.goods[type].list.concat(res.data.wall.docs);
        this.goods[type].list.push(...res.data.wall.docs);
        this.goods[type].page += 1;
      });
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";

          break;
        case 1:
          this.currentType = "new";

          break;
        case 2:
          this.currentType = "sell";

          break;
      }
    },
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 1000);
    },
    contentScroll(pos) {
      //滚动条实时监听
      //用于判断是否滚动
      // console.log(-pos.y);
      this.isShowTop = -pos.y > 1000;
      
      this.topCheck = -pos.y> this.tabControloffsetTop.$el.offsetTop;
    },
    loadMore() {
      //下拉加载更多goods，但是会有bug，该bug由于DOM高度问题
      //图片的DOM高度是异步加载的，所以没那么快能加载出来，会导致scroll的高度跟不上
      //如何解决？
      //让img每次加载完之后，就refresh()一次滚动条
      // if (this.goods[this.currentType].page < 2) {
      // this.getHomeGoods(this.currentType);
      // }
      this.getHomeGoods(this.currentType);
      console.log("加载更多");
      setTimeout(() => {
        this.$refs.scroll.finishPullUp();
        // this.$refs.scroll.refresh();
      }, 1000);
    },
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
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
.top-tab-control {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
}
.wrapper {
  height: calc(100% - 49px);
  overflow: hidden;
  overflow-y: scroll;
}

.back-top-enter,
.back-top-leave-to {
  transform: translateX(1rem);
  opacity: 0;
}
.back-top-enter-active {
  transition: all 1s;
}
.back-top-leave-active {
  transition: all 1s;
}
</style>