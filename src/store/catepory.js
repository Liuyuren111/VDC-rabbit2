import {defineStore} from "pinia";
import {topCategory} from "@/api/constants";
import {findAllCategory} from "@/api/category";

export const useCategoryState = defineStore('category', {
  state: () => ({
    // 分类信息集合
    categoryList: topCategory.map(item => ({name: item}))
  }),

  actions: {
    // payload 所有的分类集合
    setCategoryList(payload) {
      this.categoryList = payload
    },
    async getCategoryList() {
      const res = await findAllCategory()
      this.categoryList = res.result
    }
  },
})