<script setup>
import AppLayout from '@/components/AppLayout'
import HomeNew from './component/HomeNew'
import HomeHot from './component/HomeHot'
import HomeSpecial from './component/HomeSpecial'
import HomeBrand from './component/HomeBrand'
import HomeProduct from './component/HomeProduct'
import HomeCategory from './component/HomeCategory'
import HomeBanner from './component/HomeBanner'
</script>

<template>
  <AppLayout>
    <div class="container">
      <!-- 左侧分类栏 -->
      <HomeCategory></HomeCategory>
      <!-- 轮播图 -->
      <HomeBanner></HomeBanner>
    </div>
    <!-- 新鲜好物 -->
    <HomeNew></HomeNew>
    <!-- 人气推荐 -->
    <HomeHot></HomeHot>
    <!-- 热门品牌 -->
    <HomeBrand></HomeBrand>
    <!-- 产品区块 -->
    <HomeProduct></HomeProduct>
    <!-- 最新专题 -->
    <HomeSpecial></HomeSpecial>
  </AppLayout>
</template>

<style lang="less" scoped>

</style>

