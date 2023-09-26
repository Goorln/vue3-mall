<script setup>
import { ref, onMounted, computed } from "vue";
import { getHotGoodsAPI } from "@/apis/goods";
import { useRoute } from 'vue-router'
// 设计props参数 适配不同的 title 和 数据
const props = defineProps({
  hotType: {
    type: Number
  }
})
// 适配title 1 - 24小时热榜 2 - 周热榜
const MAPTYPE = {
  1: '24小时热榜',
  2: '周热榜'
}

const title = computed(() => MAPTYPE[props.hotType])
// 1. 封装接口
// 2. 调用接口渲染模版

const goodHotList = ref([])
const route = useRoute()
const getGoodsHotList = async () => {
  const res = await getHotGoodsAPI({
    id: route.params.id,
    type: props.hotType
  })
  // console.log(res);
  goodHotList.value = res.result
}
onMounted(() => getGoodsHotList())
</script>


<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink :to="`/detail/${item.id}`" class="goods-item" v-for="item in goodHotList" :key="item.id">
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>


<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>