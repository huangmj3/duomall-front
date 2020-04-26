import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/user/Login.vue'
import Register from '../views/user/Register.vue'

import GoodsList from '../views/GoodsList'
import GoodsDetail from '../views/GoodsDetail'
import ShoppingCart from '../views/header/ShoppingCart'
import Order from '../views/Order'
import Pay from '../views/Pay'
import PayDone from '../views/PayDone'
import Feedback from '../views/Feedback'
import Home from '../views/Home'
import MyAddress from '../views/home/MyAddress'
import AddAddress from '../views/home/AddAddress'
import MyOrder from '../views/home/MyOrder'
import MyShoppingCart from '../views/home/MyShoppingCart'
import Merchant from '../views/Merchant'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',  //首页
    name: 'Index',
    component: Index
  },
  {
    path: '/login',  //登陆
    name: 'Login',
    component: Login
  },
  {
    path: '/regist',  //注册
    name: 'Regist',
    component: Register
  },
  {
    path: '/goodsList', // 商品列表
    name: 'GoodsList',
    component: GoodsList
  },
  {
    path: '/goodsDetail', // 商品详情
    name: 'GoodsDetail',
    component: GoodsDetail
  },
  {
    path: '/shoppingCart', // 购物车商品详情
    name: 'ShoppingCart',
    component: ShoppingCart
  },
  {
    path: '/order', // 订单页面
    name: 'Order',
    component: Order
  },
  {
    path: '/pay', // 支付页面
    name: 'Pay',
    component: Pay
  },
  {
    path: '/payDone', // 支付成功页面
    name: 'PayDone',
    component: PayDone
  },
  {
    path: '/feedback', // 反馈页面
    name: 'Feedback',
    component: Feedback
  },
  {
    path: '/home', // 我的主页
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'HomeIndex',
        component: MyOrder
      },
      {
        path: 'myAddress',
        name: 'MyAddress',
        component: MyAddress
      },
      {
        path: 'addAddress',
        name: 'AddAddress',
        component: AddAddress
      },
      {
        path: 'myOrder',
        name: 'MyOrder',
        component: MyOrder
      },
      {
        path: 'myShoppingCart',
        name: 'MyShoppingCart',
        component: MyShoppingCart
      }
    ]
  },
//   {
//     path: '/merchant',
//     name: 'Merchant',
//     component: Merchant
//   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
