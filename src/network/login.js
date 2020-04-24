import {request} from './request'

//登录网络模块
export function login(cellphone, loginPassword) {
  return request({
    method: 'get',
    url: '/user/login',
    params: {
      cellphone: cellphone,
      loginPassword: loginPassword
    }
  })
}
