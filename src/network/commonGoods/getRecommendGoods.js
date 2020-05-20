import {request} from '../request'

//推荐商品获取网络模块
export function getRecommendGoodsRequest(goodsId) {
  return request({
    method: 'post',
    url: '/goods/commonGoods/getGoods',
    params: {
      goodsId: goodsId
    }
  })
}
