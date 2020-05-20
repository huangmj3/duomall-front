import axios from 'axios'

//网络请求包装模块
export function request(config) {
  console.log("这里是request")
  //创建axios实例
  const instance = axios.create({
    baseURL: 'http://huangmj.top/back',
    // baseURL: 'http://localhost:8706',
    timeout: 5000
  })
  //axios拦截器
  instance.interceptors.request.use(config => {
    return config
  }, error => {

  })
  //拦截响应
  instance.interceptors.response.use(resp => {
    return resp.data
  }, error => {

  })
  //发送真正网络请求,返回Promise
  return instance(config)
}
