<template>
  <div id="app" @mousewheel.prevent>
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
    

  </div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar/mainTabBar.vue";
export default {
  name: "App",
  data() {
    return {
    };
  },
  components: {
    MainTabBar,
  },
  methods:{
  }
};
</script>

<style>
@import "assets/css/base.css";

</style>
