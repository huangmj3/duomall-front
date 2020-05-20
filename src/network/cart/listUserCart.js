import {request} from '../request'

//购物车商品清单查询网络模块
export function listUserCartRequest(userId) {
  return request({
    method: 'get',
    url: '/cart/listCart',
    params: {
      userId: userId
    }
  })
}
