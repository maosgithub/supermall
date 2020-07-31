<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
    

  </div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar/MainTabBar.vue";
export default {
  name: "App",
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3,
    };
  },
  components: {
    MainTabBar,
  },
  methods:{
    handler(){
      this.center.lng=116.404
      this.center.lat=39.915
      this.zoom=15
    }
  }
};
</script>

<style>
@import "assets/css/base.css";
.baidu-map-view {
  width: 100%;
  height: 600px;
}
</style>
