import {request} from '../request'

//验证码发送网络模块
export function sendCaptchaRequest(userId,cellphone) {
  console.log("这里是验证码发送网络模块")
  return request({
    method: 'get',
    url: '/user/captcha/send',
    params: {
      userId: userId,
      cellphone: cellphone
    }
  })
}
