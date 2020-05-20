import {request} from '../request'

//登录网络模块
export function getSpikeGoodsInformationRequest() {
  return request({
    method: 'get',
    url: '/goods/getSpikeGoodsInformation',
    // url: 'http://localhost:8802/getSpikeGoodsInformation',
    params: {
    }
  })
}
