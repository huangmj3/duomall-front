import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/user/Login.vue'
import Register from '../views/user/Register.vue'
import test from '../views/test.vue'

import GoodsList from '../views/GoodsList'
import GoodsDetail from '../views/GoodsDetail'
import ShoppingCart from '../views/ShoppingCart'
import Order from '@/views/Order'
import Pay from '@/views/Pay'
import PayDone from '@/views/PayDone'
import Freeback from '@/views/Freeback'
import Home from '@/views/Home'
import MyAddress from '@/views/home/MyAddress'
import AddAddress from '@/views/home/AddAddress'
import MyOrder from '@/views/home/MyOrder'
import MyShoppingCart from '@/views/home/MyShoppingCart'
import Merchant from '@/views/Merchant'

// const GoodsList = resolve => require(['../views/GoodsList'], resolve);
// const GoodsDetail = resolve => require(['../views/GoodsDetail'], resolve);
// const ShoppingCart = resolve => require(['../views/ShoppingCart'], resolve);
// const Order = resolve => require(['@/views/Order'], resolve);
// const Pay = resolve => require(['@/views/Pay'], resolve);
// const PayDone = resolve => require(['@/views/PayDone'], resolve);
// const Freeback = resolve => require(['@/views/Freeback'], resolve);
// const Home = resolve => require(['@/views/Home'], resolve);
// const MyAddress = resolve => require(['@/views/home/MyAddress'], resolve);
// const AddAddress = resolve => require(['@/views/home/AddAddress'], resolve);
// const MyOrder = resolve => require(['@/views/home/MyOrder'], resolve);
// const MyShoppingCart = resolve => require(['@/views/home/MyShoppingCart'], resolve);
// const Merchant = resolve => require(['@/views/Merchant'], resolve);

Vue.use(VueRouter)

const routes = [
  {
    path: '/test',  //首页
    name: 'test',
    component: test
  },
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
    path: '/freeback', // 反馈页面
    name: 'Freeback',
    component: Freeback
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
  {
    path: '/merchant',
    name: 'Merchant',
    component: Merchant
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
