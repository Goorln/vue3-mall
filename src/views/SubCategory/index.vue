<script setup>
import { ref, onMounted } from "vue";
import { getCategoryFilterAPI, getSubCategoryAPI } from "@/apis/category";
import { useRoute } from "vue-router";
import GoodsItem from "@/views/Home/components/GoodsItem.vue";
const route = useRoute()

//获取面包屑导航数据
const breadcrumbData = ref({})
const getCategory = async () => {
  const res = await getCategoryFilterAPI(route.params.id)
  // console.log(res);
  breadcrumbData.value = res.result
}
onMounted(() => getCategory())
//获取基础列表数据
const subCategoryData = ref([])
const reqParams = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})
const getSubCategory = async () => {
  const res = await getSubCategoryAPI(reqParams.value)
  // console.log(res);
  subCategoryData.value = res.result.items
}
onMounted(() => getSubCategory())
// tab切换
const tabChange = () => {
  // console.log(reqParams.value.sortField);
  reqParams.value.page = 1
  getSubCategory()
}

</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${breadcrumbData.parentId}` }">{{ breadcrumbData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ breadcrumbData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqParams.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body">
        <!-- 商品列表-->
        <GoodsItem v-for="good in subCategoryData" :key="good.id" :goods="good" />
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

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

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>