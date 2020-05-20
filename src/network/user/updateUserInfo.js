import {request} from '../request'

//用户个人信息更新网络模块
export function updateUserInfoRequest(user) {
  return request({
    method: 'post',
    url: '/user/information/update',
    params: {
      id: user.id,
      cellphone: user.cellphone,
      email: user.email,
      loginPassword: user.loginPassword,
      name: user.name,
      avatar: user.avatar,
      sex: user.sex,
      birthday: user.birthday
    }
  })
}
