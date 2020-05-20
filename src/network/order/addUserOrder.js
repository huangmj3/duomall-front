import {request} from '../request'

//用户订单新增网络模块
export function addUserOrderRequest(order) {
  return request({
    method: 'post',
    url: '/order/addOrder',
    params: {
      userId: order.userId,
      goodsId: order.goodsId,
      payPrice: order.payPrice
    }
  })
}
