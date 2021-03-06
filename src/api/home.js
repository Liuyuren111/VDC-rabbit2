import {useRequest} from '@/hooks/useRequest'
const {request} = useRequest()

/**
 * 获取轮播数据
 * @param distributionSite 广告区域投放位置（1为首页，2为分类商品页） 默认是1
 * @returns {*}
 */
export function getBanners(distributionSite = 1) {
  return request('/home/banner','get',{ distributionSite })
}


/**
 * 获取新鲜好物
 * @param limit 商品数量
 * @returns {*}
 */
export function getNewGoods(limit = 4) {
  return request("/home/new", 'get', {limit});
}

/**
 * 获取热门品牌
 * @param limit
 * @returns {*}
 */
export function getBrands(limit = 10) {
  return request("/home/brand",'get', { limit });
}

/**
 * 获取人气推荐
 * @returns {*}
 */
export function getHomeHot() {
  return request("/home/hot",'get');
}
/**
 * 获取产品区块
 * @returns {*}
 */
export function getProducts() {
  return request("/home/goods",'get');
}

/**
 * 获取最新专题
 * @param limit 限制数据数量
 * @returns {*}
 */
export function getSpecial(limit) {
  return request("/home/special",'get', {limit});
}