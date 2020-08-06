<template>
  <div class="wrapper">
    <div>
      <button @click="btnClick">btnClick</button>
      <div v-for="i in list" :key="i">{{i}}</div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
export default {
  name: "Category",
  data(){
    return {
      list:50
    }
  },
  mounted() {
    BScroll.use(Pullup);
    const bscroll = new BScroll(".wrapper", {
      scrollY: true,
      pullUpLoad: {threshold:-30},
      
    });
    bscroll.on("scroll", () => {
      console.log(0);
    });
    bscroll.on("pullingUp", () => {
      console.log('加载更多');
      this.list=this.list+20
      setTimeout(()=>{
        bscroll.finishPullUp()
        bscroll.refresh()
      },500)
    });
  },
  methods:{
    btnClick(){
      console.log('this is button');
    }
  }
};
</script>

<style scoped>
.wrapper {
  height: 300px;
  overflow: hidden;
  overflow-y: scroll;
  background-color: pink;
}
</style>