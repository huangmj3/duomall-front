import Vue from 'vue'
import Vuex from 'vuex'

import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex)

const state = {
  isLoading: false, // 是否展示loading动画
  orderBy: 'sale', // 根据什么字段排序
  goodsInfo: { // 商品详情
    goodsImg: [],
    title: '',
    tags: [],
    discount: [],
    promotion: [],
    remarksNum: 0,
    setMeal: [],
    hot: [],
    goodsDetail: [],
    param: [],
    remarks: []
  },
  userInfo: { // 用户信息
    name: '',
    token: ''
  },
  isRegisterSuccess: false,
  userId: '',
  signUpStep: 0, // 登陆步骤
  marketing: { // 营销
    CarouselItems: [], // 轮播图
    activity: [] // 活动
  },
  spike: { // 秒杀
    deadline: {
      hours: 1,
      minute: 12,
      seconds: 3
    },
    goodsList: []
  },
  computer: {}, // 电脑专栏
  eat: {}, // 爱吃专栏
  asItems: [], // 广告
  goodsList: [], // 商品列表
  shoppingCart: [], // 购物车
  newShoppingCart: [], // 刚加入的购物车，作为展示
  recommend: [] // 推荐购买
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
  }
})
