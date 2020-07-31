<template>
  <div>
    <baidu-map
      class="baidu-map-view"
      ak="4cFmAiyPLKKQTxIssdPX7uFdQGsOAXjH"
      :center="center"
      :zoom="zoom"
      :scroll-wheel-zoom="true"
      @ready="handler"
    >
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    </baidu-map>
  </div>
</template>

<script>
import { BaiduMap, BmNavigation } from "vue-baidu-map";
export default {
  name: "Bmap",
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3,
    };
  },
  components: {
    BaiduMap,
    BmNavigation,
  },
  methods: {
    handler() {
      this.center.lng = 116.404;
      this.center.lat = 39.915;
      this.zoom = 15;
    },
  },
};
</script>

<style>
</style>