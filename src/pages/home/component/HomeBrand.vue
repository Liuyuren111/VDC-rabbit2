<script setup>
import HomePanel from './HomePanel'
import {useLazyDate} from "@/hooks/useLazyDate";
import {getBrands} from "@/api/home";
import useBrandToggle from "@/hooks/home/useBrandToggle";

const {target,result: brands} = useLazyDate(getBrands)
const {currentIndex,groupNum,toggle} = useBrandToggle(brands)
</script>

<template>
  <HomePanel title="热门品牌" sub-title="国际经典 品质保证" ref="target">
    <template #right>
      <a
          @click="toggle(-1)"
          href="javascript:"
          class="iconfont icon-angle-left prev"
          :class="{ disabled: currentIndex === 0 }"
      ></a>
      <a
          @click="toggle(1)"
          href="javascript:"
          class="iconfont icon-angle-right next"
          :class="{ disabled: currentIndex === groupNum }"
      ></a>
    </template>
    <template v-slot:default>
      <div class="box">
        <Transition name="fade">
          <ul
              class="list"
              :style="{ transform: `translateX(${-currentIndex * 1240}px)` }"
              v-if="brands"
          >
            <li v-for="item in brands" :key="item.id">
              <RouterLink to="/">
                <img :src="item.picture" :alt="item.name" />
              </RouterLink>
            </li>
          </ul>
          <div class="skeleton" v-else>
            <MySkeleton
                class="item"
                v-for="i in 5"
                :key="i"
                bg="#e4e4e4"
                width="240px"
                height="305px"
            />
          </div>
        </Transition>
      </div>
    </template>
  </HomePanel>
</template>

<style lang="less" scoped>
.home-panel {
  background: #f5f5f5;
}
.iconfont {
  width: 20px;
  height: 20px;
  background: #ccc;
  color: #fff;
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  background: @xtxColor;
  &::before {
    font-size: 12px;
    position: relative;
    top: -2px;
  }
  &.disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}
.box {
  display: flex;
  width: 100%;
  height: 345px;
  overflow: hidden;
  padding-bottom: 40px;
  .list {
    width: 200%;
    display: flex;
    transition: all 1s;
    li {
      margin-right: 10px;
      width: 240px;
      &:nth-child(5n) {
        margin-right: 0;
      }
      img {
        width: 240px;
        height: 305px;
      }
    }
  }
  /* 骨架屏 */
  .skeleton {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>