export default {
  // 用户登录
  updateUserLoginInfo(context, data) {
    console.log("this is actions")
    const userInfo = {username: data.name, token: data.token}
    context.commit('updateUserLoginInfo', userInfo);
  },

  // 获取轮播(营销)图片
  loadCarouselItems(context) {
    return new Promise((resolve, reject) => {
      const data = {
        carouselItems: [
          'img/nav/1.jpg',
          'img/nav/2.jpg',
          'img/nav/3.jpg',
          'img/nav/4.jpg',
          'img/nav/5.jpg'
        ],
        activity: [
          'img/nav/nav_showimg1.jpg',
          'img/nav/nav_showimg2.jpg'
        ]
      };
      context.commit('SET_CAROUSELITEMS_INFO', data);
    });
  },

  // 添加购物车
  addShoppingCart(context, data) {
    return new Promise((resolve, reject) => {
      context.commit('ADD_SHOPPING_CART', data);
    });
  },


  // 添加注册用户
  addSignUpUser({commit}, data) {
    return new Promise((resolve, reject) => {
      const userArr = localStorage.getItem('users');
      let users = [];
      if (userArr) {
        users = JSON.parse(userArr);
      }
      users.push(data);
      localStorage.setItem('users', JSON.stringify(users));
    });
  },

  // export const login = ({commit}, data) => {
  //   return new Promise((resolve, reject) => {
  //     if (data.username === 'Gavin' && data.password === '123456') {
  //       localStorage.setItem('loginInfo', JSON.stringify(data));
  //       commit('SET_USER_LOGIN_INFO', data);
  //       resolve(true);
  //       return true;
  //     }
  //     const userArr = localStorage.getItem('users');
  //     console.log(userArr);
  //     if (userArr) {
  //       const users = JSON.parse(userArr);
  //       for (const item of users) {
  //         if (item.username === data.username) {
  //           localStorage.setItem('loginInfo', JSON.stringify(item));
  //           commit('SET_USER_LOGIN_INFO', item);
  //           resolve(true);
  //           break;
  //         }
  //       }
  //     } else {
  //       resolve(false);
  //     }
  //   });
  // };


  // 退出登陆
  signOut(context) {
    localStorage.removeItem('username')
    localStorage.removeItem('token')
    context.commit('updateUserLoginInfo', '')
  },

  // 判断是否登陆
  isLogin(context) {
    console.log("我这里是判断是否登录")
    // const userId = localStorage.getItem("userId")
    const name = localStorage.getItem("name")
    const token = localStorage.getItem("token")
    const userInfo = {name,token}
    console.log(userInfo)
    console.log(context.state.userInfo)
    console.log("这里是测试")
    console.log('' === '')
    console.log('' == '')
    console.log(context.state.userInfo.name)
    console.log(context)
    if(context.state.userInfo.username === ''){
      console.log("我好像没毛病")
    }
    if (userInfo.username) {
      console.log("天我居然进入了登录成功的位置")
      // context.commit('updateUserLoginInfo', JSON.parse(userId));
      context.commit('updateUserLoginInfo',userInfo)
    }
  }
}

