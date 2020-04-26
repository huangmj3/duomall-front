import {request} from './request'

//登录网络模块
export function login_request(cellphone, loginPassword) {
  return request({
    method: 'get',
    url: '/user/login',
    // url: 'localhost:8004/login',
    params: {
      cellphone: cellphone,
      loginPassword: loginPassword
    }
  })
}
