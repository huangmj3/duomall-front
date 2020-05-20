import {request} from '../request'

//用户地址信息修改网络模块
export function updateUserAddressRequest(userId, ruleForm) {
  return request({
    method: 'post',
    url: '/user/updateAddress',
    params: {
      id: ruleForm.addressId,
      userId: userId,
      postcode: ruleForm.postcode,
      province: ruleForm.province,
      city: ruleForm.city,
      district: ruleForm.district,
      detail: ruleForm.detail,
      isDefault: ruleForm.isDefault
    }
  })
}
