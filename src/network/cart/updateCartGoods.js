import {request} from '../request'

//购物车内商品修改网络模块
export function updateCartGoodsRequest(cart) {
  return request({
    method: 'post',
    url: '/cart/updateCartGoods',
    params: {
      userId: cart.userId,
      goodsId: cart.goodsId,
      goodsNum: cart.goodsNum
    }
  })
}
