import {request} from '../request'

//用户地址信息新增网络模块
export function addUserAddressRequest(userId,ruleForm) {
  return request({
    method: 'post',
    url: '/user/addAddress',
    params: {
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
