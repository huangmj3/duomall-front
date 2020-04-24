import {request} from './request'

//注册网络模块
export function register(ruleForm) {
  console.log("这里是注册网络模块")
  console.log(ruleForm)
  return request({
    method: 'post',
    url: '/user/register',
    data: {
      name: ruleForm.name,
      loginPassword: ruleForm.loginPassword,
      sex: ruleForm.sex,
      birthday: ruleForm.birthday,
      cellphone: ruleForm.cellphone
    }
  })
}
