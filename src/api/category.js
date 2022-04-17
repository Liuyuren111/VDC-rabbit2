// 分类

import {useRequest} from "@/hooks/useRequest";
const {request} = useRequest()

/**
  * @name:
  * @description: 获取所有分类（顶级、二级、对应的商品推荐数据）
  * @author: lyr
  * @time: 2022-04-16 09:30:28
  */

export const findAllCategory = () =>{
  return request('/home/category/head','get')
}