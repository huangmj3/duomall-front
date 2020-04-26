const compare = property => {
  return function (a, b) {
    let value1 = a[property];
    let value2 = b[property];
    return value1 - value2;
  };
}

export default {
  // 获取排序后的列表
  orderGoodsList(state) {
    return state.goodsList.sort(compare(state.orderBy))
  },

  // 获取秒杀的小时
  spikeHours(state) {
    console.log("这里是获取秒杀的小时")
    console.log(state)
    return state.spike.deadline.hours < 10 ? '0' + state.spike.deadline.hours : state.spike.deadline.hours;
  },

  // 获取秒杀的分钟
  spikeMinutes(state) {
    return state.spike.deadline.minute < 10 ? '0' + state.spike.deadline.minute : state.spike.deadline.minute;
  },

  // 获取秒杀的秒
  spikeSeconds(state) {
    return state.spike.deadline.seconds < 10 ? `0${state.spike.deadline.seconds}` : state.spike.deadline.seconds;
  }
}

