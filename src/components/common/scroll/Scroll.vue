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
BScroll.use(Pullup);
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    //这里用的是驼峰，在子组件实例处需要用 probe-type 才行。
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    console.log("scroll mounted time");

    // setTimeout(() => {
    
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    if (this.probeType != 0) {
      //绑定滚动事件
      this.scroll.on("scroll", (pos) => {
        //将pos发送给父组件，让其根据pos修改 backTop组件的显示隐藏
        this.$emit("scrollEvent", pos);
      });
    }
    if (this.pullUpLoad) {
      //绑定上拉事件
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
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
  },
};
</script>

<style scoped>
</style>