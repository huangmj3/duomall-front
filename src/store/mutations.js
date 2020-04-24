export default {

  // // 判断是否登陆
  // isLogin(state) {
  //   const userId = localStorage.getItem("userId")
  //   // console.log(userId);
  //   // console.log(localStorage.getItem("userId"));
  //   if (userId) {
  //     commit('SET_USER_LOGIN_INFO', JSON.parse(userId));
  //   }
  // },

  //更新用户信息
  updateUserLoginInfo(state,userInfo) {
    console.log("正在更新用户信息")
    if(userInfo === ''){
      state.userInfo.username = ''
      state.userInfo.token = ''
    }else {
      state.userInfo.username = userInfo.username
      state.userInfo.token = userInfo.token
    }
    console.log("用户信息更新完成")
  },

  test() {
    console.log("test success");
  },

  // 设置注册步骤
  SET_SIGN_UP_SETP(state, step) {
    state.signUpStep = step
  },

// export const SET_USER_LOGIN_INFO = (state, data) => {
//   state.userId = data;
// };

  // 设置加载状态
  SET_LOAD_STATUS(state, status) {
    state.isLoading = status
  },

  // 设置轮播(营销)图
  SET_CAROUSELITEMS_INFO(state, {carouselItems, activity}) {
    state.marketing.CarouselItems = carouselItems
    state.marketing.activity = activity
  },


  // 减少秒杀时间
  REDUCE_SECKILLS_TIME(state) {
    state.seckills.deadline.seconds--;
    if (state.seckills.deadline.seconds === -1) {
      state.seckills.deadline.seconds = 59;
      state.seckills.deadline.minute--;
      if (state.seckills.deadline.minute === -1) {
        state.seckills.deadline.minute = 59;
        state.seckills.deadline.hour--;
      }
    }
  },


  // 添加购物车
  ADD_SHOPPING_CART(state, data) {
    const item = {
      goods_id: data.goods_id,
      count: data.count,
      img: data.package.img,
      package: data.package.intro,
      price: data.package.price,
      title: data.title
    };
    state.shoppingCart.push(item);
    state.newShoppingCart = data;
  },

  // 设置购物车信息
  SET_SHOPPING_CART(state, data) {
    state.shoppingCart = data;
  },

}

