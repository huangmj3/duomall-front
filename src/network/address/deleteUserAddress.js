import {request} from '../request'

//用户地址信息删除网络模块
export function deleteUserAddressRequest(addressId) {
  return request({
    method: 'delete',
    url: '/user/deleteAddress',
    params: {
      id: addressId
    }
  })
}
