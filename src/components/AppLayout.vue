<script setup>
import AppTop from '@/components/AppTop.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppSticky from '@/components/AppSticky.vue'
import {useCategoryState} from "@/store/catepory";
const cateporyState = useCategoryState()
cateporyState.getCategoryList()
</script>

<template>
  <!-- 主页 组件容器 -->
  <AppSticky></AppSticky>
  <AppTop></AppTop>
  <AppHeader></AppHeader>
  <slot></slot>
  <AppFooter></AppFooter>
</template>

<style lang="less" scoped>
.main{
  min-height: 800px;
}
</style>

