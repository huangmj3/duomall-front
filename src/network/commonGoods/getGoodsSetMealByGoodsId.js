import {request} from '../request'

//基于商品id的商品套餐信息获取网络模块
export function getGoodsSetMealByGoodsIdRequest(goodsId) {
  return request({
    method: 'get',
    url: '/goods/commonGoods/getGoodsSetMeal',
    params: {
      goodsId: goodsId
    }
  })
}
