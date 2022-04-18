<script setup>
import {useBanners} from "@/hooks/useBanners";
import MyBanner from "@/library/MyBanner";

//
const banners = useBanners()
</script>

<template>
  <div class="home-banner">
    <MyBanner v-if="banners" :carousels="banners" autoPlay />
  </div>
</template>

<style lang="less" scoped>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
  .xtx-carousel {
    :deep(.carousel-btn.prev) {
      left: 270px;
    }
    :deep(.carousel-indicator) {
      padding-left: 250px;
    }
  }
}
</style>