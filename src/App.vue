<template>
  <div id="app" @mousewheel.prevent>
    <router-view></router-view>
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
