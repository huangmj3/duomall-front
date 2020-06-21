import {request} from '../request'

//用户地址信息清单查找网络模块
export function listUserAddressRequest(userId,pageInfo) {
  return request({
    method: 'get',
    url: '/user/listAddress',
    params: {
      userId: userId,
      pageNum: pageInfo.pageNum,
      pageSize: pageInfo.pageSize
    }
  })
}
