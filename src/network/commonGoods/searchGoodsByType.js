import {request} from '../request'

//基于商品类型的商品搜索网络模块
export function searchGoodsByTypeRequest(goodsType) {
  return request({
    method: 'get',
    url: '/goods/search/type',
    params: {
      type: goodsType
    }
  })
}
