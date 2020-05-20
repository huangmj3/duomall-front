import {request} from '../request'

//用户订单列表获取网络模块
export function listUserOrderRequest(userId) {
  return request({
    method: 'get',
    url: '/order/listOrder',
    params: {
      userId: userId
    }
  })
}
