import {request} from '../request'

//用户评论新增网络模块
export function addRemarkRequest(remark) {
  return request({
    method: 'get',
    url: '/goods/remark/add',
    params: {
      userId: remark.userId,
      targetId: remark.targetId,
      type: remark.type,
      tag: remark.tag,
      content: remark.content
    }
  })
}
