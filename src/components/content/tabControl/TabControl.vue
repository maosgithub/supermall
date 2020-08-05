<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" 
    :class="{active:index===currentIndex}"
    class="tab-control-item"
    @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods:{
    itemClick(index){
      this.currentIndex=index
    }
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  font-size: 15px;
  background-color: var(--color-background);
  box-shadow:0 1px 1px rgba(100,100,100,0.08);

}
.tab-control-item {
  flex: 1;
  height: 44px;
  line-height: 44px;
}
.tab-control-item span{
  padding: 5px;
}
.active {
  color:var(--color-high-text);

}
.active span{
  border-bottom: 3px solid var(--color-high-text);
}
</style>