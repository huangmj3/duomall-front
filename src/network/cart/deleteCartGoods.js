import {request} from '../request'

//购物车商品删除网络模块
export function deleteCartGoodsRequest(userId, goodsId) {
  return request({
    method: 'delete',
    url: '/cart/deleteCartGoods',
    params: {
      userId: userId,
      goodsId: goodsId
    }
  })
}
