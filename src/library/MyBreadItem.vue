<template>
<div class="my-bread-item">
  <router-link v-if="to">
    <slol />
  </router-link>
  <span v-else>
    <slot></slot>
  </span>
  <i class="iconfont icon-angle-right"></i>
</div>
</template>

<script>
export default {
  name: 'MyBreadItem',
  props: {
    to: {
      type: [String,Object]
    }
  }
}
</script>

<style lang="less" scoped>

</style>