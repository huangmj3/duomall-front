import {request} from '../request'

//基于商品id的商品参数信息获取网络模块
export function getGoodsParamByGoodsIdRequest(goodsId) {
  return request({
    method: 'get',
    url: '/goods/commonGoods/getGoodsParam',
    params: {
      goodsId: goodsId
    }
  })
}
