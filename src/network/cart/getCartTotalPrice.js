import {request} from '../request'

//购物车商品总价获取模块
export function getCartTotalPriceRequest(userId) {
  return request({
    method: 'get',
    url: '/cart/getCartTotalPrice',
    params: {
      userId: userId
    }
  })
}
