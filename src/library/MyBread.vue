<template>
  <div class="my-bread">
    <div class="my-bread-item">
      <router-link to="/">首页</router-link>
    </div>
    <i class="iconfont icon-angle-right"></i>
    <div class="my-bread-item">
      <router-link to="/category/sub/10000">电器</router-link>
    </div>
    <i class="iconfont icon-angle-right"></i>
    <div class="my-bread-item">
      <span>空调</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyBread',
  props: {
    parentName: {
      type: String,
    },
    parentPath: {
      type: String
    }
  }
}
</script>

<style lang="less">
.my-bread {
  display: flex;
  padding: 25px 10px;

  &-item {
    a {
      color: #666;
      transition: all .4s;

      &:hover {
        color: @xtxColor;
      }
    }
  }

  i {
    font-size: 12px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 22px;
  }
}
</style>