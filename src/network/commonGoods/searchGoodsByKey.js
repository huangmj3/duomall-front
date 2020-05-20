import {request} from '../request'

//基于关键词的商品搜索网络模块
export function searchGoodsByKeyRequest(key) {
  return request({
    method: 'get',
    url: '/search/key',
    params: {
      key: key
    }
  })
}
