<template>
  <div class="feature">
    <div class="feature-title">本周流行</div>
    <div class="features">
      <div class="feature-item" v-for="item in feature" :key="item.index">
        <a :href="item.link">
          <img :src="item.image" alt />
          <div class="feature-item-title">{{item.title}}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    feature: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  name: "FeatureView",
};
</script>

<style scoped>
.feature {
  text-align: center;
  padding: 10px 0 10px;
}
.feature-title {
  font-size: 18px;
  height: 40px;
  line-height: 40px;
  font-weight: normal;
}
.features {
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  text-align: center;
  font-size: 12px;
}
.feature-item {
  flex: 1;
  min-width: 25%;
  max-width: 25%;
  margin-top: 10px;
}
.feature img {
  height: 80px;
  width: 80px;
  border-radius: 50%;
}
.feature-item-title {
  margin-top: 10px;
}
</style>