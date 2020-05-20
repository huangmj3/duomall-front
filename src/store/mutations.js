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

  //用户登录成功，更新用户信息
  UPDATE_USER_LOGIN_INFO(state, userInfo) {
    console.log("正在更新用户信息")
    if (userInfo === '') {
      state.userInfo.name = ''
      state.userInfo.token = ''
    } else {
      state.userInfo.name = userInfo.name
      state.userInfo.token = userInfo.token
    }
    console.log("用户信息更新完成")
  },

  // 设置加载状态
  SET_LOAD_STATUS(state, status) {
    state.isLoading = status
  },

  // 设置秒杀商品
  SET_SPIKE_INFO(state, spikeInfo) {
    const length = spikeInfo.goodsList.length
    let data = Array(0)
    for (let i = 0; i < length; i++) {
      let intro = spikeInfo.goodsList[i].intro
      let price = spikeInfo.goodsList[i].discountPrice
      let realPrice = spikeInfo.goodsList[i].originalPrice
      let img = spikeInfo.goodsImageList[i].image

      const item = {
        intro: intro,
        price: price,
        realPrice: realPrice,
        img: img
      }
      data.push(item)
    }
    const deadline = {
      hours: spikeInfo.spikeHours,
      minute: spikeInfo.spikeMinutes,
      seconds: spikeInfo.spikeSeconds
    }
    console.log('这里是设置秒杀')
    state.spike.goodsList = data
    state.spike.deadline = deadline;
  },

  // 设置轮播(营销)图
  SET_CAROUSEL_ITEMS_INFO(state, {carouselItems, activity}) {
    state.marketing.CarouselItems = carouselItems
    state.marketing.activity = activity
  },

  // 减少秒杀时间
  REDUCE_SPIKE_TIME(state) {
    state.spike.deadline.seconds--;
    if (state.spike.deadline.seconds === -1) {
      state.spike.deadline.seconds = 59;
      state.spike.deadline.minute--;
      if (state.spike.deadline.minute === -1) {
        state.spike.deadline.minute = 59;
        state.spike.deadline.hour--;
      }
    }
  },


  // 设置电脑专栏数据
  SET_COMPUTER_INFO(state, computer) {
    state.computer = computer;
  },

  // 设置爱吃专栏数据
  SET_EAT_INFO(state, eat) {
    state.eat = eat;
  },

  // 设置商品列表(搜索)
  SET_GOODS_LIST(state, data) {
    state.goodsList = data.goodsList;
    state.asItems = data.asItems;
  },

  // 设置商品列表排序
  SET_GOODS_ORDER_BY(state, data) {
    state.orderBy = data;
  },

  // 设置商品详细信息
  SET_GOODS_INFO(state, data) {
    state.goodsInfo = data;
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

  // 设置推荐信息
  SET_RECOMMEND_INFO(state, data) {
    state.recommend = data;
  },

  // 设置收获地址
  SET_USER_ADDRESS(state, data) {
    state.address = data;
    console.log("用户地址加载完成")
    console.log(state.address)
  }

}

