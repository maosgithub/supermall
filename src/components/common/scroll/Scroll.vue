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
      probeType: {
        type: Number,
        default: 0,
      },
      pullUpLoad: {
        type: Boolean,
        default: false,
      },
    };
  },
  mounted() {
    //
    // setTimeout(() => {
      BScroll.use(Pullup);
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: 3,
        pullUpLoad: this.pullUpLoad,
      });
      if (this.probeType != 0) {
        this.scroll.on("scroll", (pos) => {
          //将pos发送给父组件，让其根据pos修改 backTop组件的显示隐藏
          this.$emit("scrollEvent", pos);
        });
      }
      if (this.pullUpLoad) {
        this.scroll.on("pullingUp", () => {
          this.$emit("pullingUpEvent");
        });
      }
      // console.log(this.scroll);
    // }, 0);
  },
  methods: {
    scrollToElement(el, time = 500) {
      this.scroll.scrollToElement(el, time);
    },
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
      
    },
    refresh() {
      this.scroll.refresh();
    },
  },
};
</script>

<style scoped>
</style>