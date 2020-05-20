import {request} from '../request'

//购物车商品新增网络模块
export function addCartGoodsRequest(cart) {
  return request({
    method: 'post',
    url: '/cart/addCartGoods',
    params: {
      userId: cart.userId,
      goodsId: cart.goodsId,
      goodsNum: cart.goodsNum
    }
  })
}
