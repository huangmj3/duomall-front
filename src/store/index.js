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
  computerAndDigital: {
    title: '电脑数码',
    link: ['电脑馆', '游戏极品', '装机大师', '职场焕新', '女神频道', '虚拟现实', '二合一平板', '电子教育', '万物周刊'],
    computer: {
      item: [
        {
          title: '大图',
          intro: '无',
          img: 'static/img/index/computer/item-computer-1.jpg',
        },
        {
          title: '电脑馆',
          intro: '笔记本999元限量秒！',
          img: 'static/img/index/computer/item-computer-2.jpg'
        },
        {
          title: '外设装备',
          intro: '1000减618',
          img: 'static/img/index/computer/item-computer-1-3.jpg'
        },
        {
          title: '电脑配件',
          intro: '联合满减最高省618',
          img: 'static/img/index/computer/item-computer-1-4.jpg'
        },
        {
          title: '办公生活',
          intro: '5折神券 精品文具',
          img: 'static/img/index/computer/item-computer-1-5.jpg'
        }
      ],
      itemContent: [
        'static/img/index/computer/item-computer-1-6.jpg',
        'static/img/index/computer/item-computer-1-7.jpg',
        'static/img/index/computer/item-computer-1-8.jpg'
      ]
    },
    digital: {
      item: [
        {
          title: '大图',
          intro: '无',
          img: 'static/img/index/computer/item-computer-2-1.jpg'
        },
        {
          title: '平板电脑',
          intro: '爆款平板12期免息',
          img: 'static/img/index/computer/item-computer-2-2.jpg'
        },
        {
          title: '智能酷玩',
          intro: '抢999减666神券',
          img: 'static/img/index/computer/item-computer-2-3.jpg'
        },
        {
          title: '娱乐影音',
          intro: '大牌耳机低至5折',
          img: 'static/img/index/computer/item-computer-2-4.jpg'
        },
        {
          title: '摄影摄像',
          intro: '大牌相机5折抢',
          img: 'static/img/index/computer/item-computer-2-5.jpg'
        }
      ],
      itemContent: [
        'static/img/index/computer/item-computer-2-6.jpg',
        'static/img/index/computer/item-computer-2-7.jpg',
        'static/img/index/computer/item-computer-2-8.jpg'
      ]
    },
  },  //  电脑数码专栏
  eat: {
    title: '爱吃',
    link: ['休闲零食', '坚果', '牛奶', '饮料冲调', '食用油', '大米', '白酒', '红酒', '烧烤食材', '牛排', '樱桃'],
    detail: [
      {
        bigImg: 'static/img/index/eat/item-eat-1-1.jpg',
        itemFour: [
          {
            title: '粮油调味',
            intro: '买2免1',
            img: 'static/img/index/eat/item-eat-1-2.jpg'
          },
          {
            title: '饮料冲调',
            intro: '第二件半价',
            img: 'static/img/index/eat/item-eat-1-3.jpg'
          },
          {
            title: '休闲零食',
            intro: '满99减40',
            img: 'static/img/index/eat/item-eat-1-4.jpg'
          },
          {
            title: '中外名酒',
            intro: '满199减100',
            img: 'static/img/index/eat/item-eat-1-5.jpg'
          }
        ],
        itemContent: [
          'static/img/index/eat/item-eat-1-6.jpg',
          'static/img/index/eat/item-eat-1-7.jpg',
          'static/img/index/eat/item-eat-1-8.jpg'
        ]
      },
      {
        bigImg: 'static/img/index/eat/item-eat-2-1.jpg',
        itemFour: [
          {
            title: '东家菜',
            intro: '丰富好味',
            img: 'static/img/index/eat/item-eat-2-2.jpg'
          },
          {
            title: '东家菜',
            intro: '丰富好味',
            img: 'static/img/index/eat/item-eat-2-2.jpg'
          },
          {
            title: '东家菜',
            intro: '丰富好味',
            img: 'static/img/index/eat/item-eat-2-2.jpg'
          },
          {
            title: '东家菜',
            intro: '丰富好味',
            img: 'static/img/index/eat/item-eat-2-2.jpg'
          }
        ],
        itemContent: [
          'static/img/index/eat/item-eat-2-6.jpg',
          'static/img/index/eat/item-eat-2-7.jpg',
          'static/img/index/eat/item-eat-2-8.jpg'
        ]
      }
    ]
  }, // 爱吃专栏
  asItems: [], // 广告
  goodsList: [], // 商品列表
  shoppingCart: [], // 购物车
  newShoppingCart: [], // 刚加入的购物车，作为展示
  recommend: [], // 推荐购买
  order: [{
    order_id: 1529931938150,
    goods_id: 1529931938150,
    count: 1,
    img: 'img/goodsDetail/pack/hot1.jpg',
    package: '4.7英寸-深邃蓝',
    price: 28,
    title: '苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳',
    createAt: '2018-06-06 20:06:08'
  }]
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {}
})
