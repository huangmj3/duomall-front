import {request} from '../request'

//基于商品id的商品图片信息获取网络模块
export function getGoodsImageByGoodsIdRequest(goodsId) {
  return request({
    method: 'get',
    url: '/goods/commonGoods/getGoodsImage',
    params: {
      goodsId: goodsId
    }
  })
}
