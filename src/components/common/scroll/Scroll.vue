<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    setTimeout(() => {
      BScroll.use(Pullup);
      this.scroll = new BScroll(this.$refs.wrapper, {});
      this.scroll.on("scroll", () => {
        console.log(0);
      });
    },1000);
  },
};
</script>

<style scoped>
</style>