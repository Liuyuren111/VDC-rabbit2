<script setup>
import AppLayout from '@/components/AppLayout'
import {ref} from "vue";

const loading = ref(true)
const finished = ref(true)
const loadMore = (boo) =>{
  console.log(boo);
}
</script>

<template>
  <AppLayout>
    <div class="sub-category">
      <div class="container">
        <MyBread>
          <MyBreadItem to="/">首页</MyBreadItem>
          <MyBreadItem to="/category/1005000">电器</MyBreadItem>
          <MyBreadItem>空调</MyBreadItem>
        </MyBread>
        <div class="goods-list">
          <!-- 无限列表加载组件 -->
          <MyInfiniteLoading
              :loading="loading"
              :finished="finished"
              @infinite="loadMore"
          ></MyInfiniteLoading>
        </div>

      </div>
    </div>

  </AppLayout>
</template>

<style lang="less" scoped>
.goods-list {
  background: #fff;
  padding: 0 25px;
  margin-top: 25px;
}
</style>