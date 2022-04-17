import {getBanners} from "@/api/home";
import {ref} from "vue";

export function useBanners (distributionSite = 1) {
  const banner = ref(null)
  getBanners(distributionSite).then(res =>{
    banner.value = res.result
  })
  return banner
}