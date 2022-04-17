// 用户相关接口

import {useRequest} from "@/hooks/useRequest";

const {request} = useRequest()
// 账号 密码
export const userLogin = ({account,password}) =>{
  return request('/login','post',{account,password})
}