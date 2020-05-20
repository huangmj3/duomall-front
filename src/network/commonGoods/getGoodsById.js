import {request} from '../request'

//基于商品id的商品概要信息获取网络模块
export function getGoodsByIdRequest(goodsId) {
  return request({
    method: 'get',
    url: '/goods/commonGoods/getGoods',
    params: {
      goodsId: goodsId
    }
  })
}
