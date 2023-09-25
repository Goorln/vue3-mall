<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
import HomePanel from "./components/HomePanel.vue";
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
  <HomePanel title="新鲜好物" subTitle="副标题">
    <div>
      新鲜好物插槽内容
    </div>

  </HomePanel>
</template>

<style scope lang="scss">
.container {
  position: relative;
  width: 1240px;
  margin: 0 auto;
}
</style>