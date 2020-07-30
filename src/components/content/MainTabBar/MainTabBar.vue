<template>
<tab-bar>
      <tab-bar-item path="/home">
        <template v-slot:item-icon>
          <img src="~assets/img/tab-home.png" alt />
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tab-home-current.png" alt />
        </template>
        <template v-slot:item-text>
          <div slot="item-text">首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template v-slot:item-icon>
          <img src="~assets/img/tab-cate.png" alt />
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tab-cate-current.png" alt />
        </template>
        <template v-slot:item-text>
          <div slot="item-text">分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <template v-slot:item-icon>
          <img src="~assets/img/tab-cart.png" alt />
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tab-cart-current.png" alt />
        </template>
        <template v-slot:item-text>
          <div slot="item-text">购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:item-icon>
          <img src="~assets/img/tab-my.png" alt />
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tab-my-current.png" alt />
        </template>
        <template v-slot:item-text>
          <div slot="item-text">我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style  scoped>

</style>