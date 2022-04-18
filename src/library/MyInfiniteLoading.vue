<script>
export default {
  name: 'MyInfiniteLoading'
}
</script>

<script setup>
import {useIntersectionObserver} from '@vueuse/core'
import {ref, defineProps, defineEmits} from "vue";

const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  finished: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['infinite'])
const target = ref(null)
useIntersectionObserver(target, ([{isIntersecting}]) => {
  if (isIntersecting) {
    if (!props.loading && !props.finished) {
      emit('infinite')
    }
  }
})
</script>

<template>
  <div class="my-infinite-loading" ref="target">
    <div class="loading" v-if="loading">
      <span class="img"></span>
      <div class="text">正在加载...</div>
    </div>
    <div class="none" v-if="finished">
      <span class="img"></span>
      <div class="text">亲，没有更多了</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.my-infinite-loading {
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    .img {
      width: 50px;
      height: 50px;
      background: url("../assets/images/load.gif") no-repeat center / contain;
    }
    .text {
      color: #999;
      font-size: 16px;
    }
  }
  .none {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    .img {
      width: 200px;
      height: 134px;
      background: url("../assets/images/none.png") no-repeat center / contain;
    }
    .text {
      color: #999;
      font-size: 16px;
    }
  }
}
</style>