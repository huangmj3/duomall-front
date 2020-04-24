<template>
  <div class="container">
    <Search></Search>
    <HomeNav></HomeNav>
     商品显示区域
    <div class="content">
      <!-- 秒杀 -->
      <div class="seckill">
        <!-- 头部 -->
        <div class="seckill-head">
          <div class="seckill-icon">
            <img src="../assets/img/index/clock.png">
          </div>
          <div class="seckill-text">
            <span class="seckill-title">限时秒杀</span>
            <span class="seckill-remarks">总有你想不到的低价</span>
          </div>
          <div class="count-down">
            <span class="count-down-text">当前场次</span>
            <span class="count-down-num count-down-hour">{{$store.getters.seckillsHours }}</span>
            <span class="count-down-point">:</span>
            <span class="count-down-num count-down-minute">{{$store.getters.seckillsMinutes }}</span>
            <span class="count-down-point">:</span>
            <span class="count-down-num count-down-seconds">{{$store.getters.seckillsSeconds }}</span>
            <span class="count-down-text">后结束抢购</span>
          </div>
        </div>
        <!-- 内容 -->
        <div class="seckill-content">
          <div class="seckill-item" v-for="(item, index) in seckills.goodsList" :key="index">
            <div class="seckill-item-img">
              <router-link to="/goodsList"><img :src="item.img"></router-link>
            </div>
            <div class="seckill-item-info">
              <p>{{item.intro}}</p>
              <p>
                <span class="seckill-price text-danger"><Icon type="social-yen"></Icon>{{item.price}}</span>
                <span class="seckill-old-price"><s>{{item.realPrice}}</s></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 电脑专场 -->
      <div class="item-class">
        <div class="item-class-head">
          <span class="item-class-title">{{computer.title}}</span>
          <ul>
            <li v-for="(item, index) in computer.link" :key="index">
              <router-link to="/goodsList">{{item}}</router-link>
            </li>
          </ul>
        </div>
        <div class="item-class-content" v-for="(item, index) in computer.detail" :key="index">
          <div class="item-content-top">
            <div class="item-big-img">
              <router-link to="/goodsList">
                <img :src="item.bigImg" alt="">
              </router-link>
            </div>
            <div class="item-four-img">
              <div class="item-four-detail" v-for="(subItem, index) in item.itemFour" :key="index">
                <div class="item-four-detail-text">
                  <p class="pt_bi_tit">{{subItem.title}}</p>
                  <p class="pt_bi_promo">{{subItem.intro}}</p>
                </div>
                <div class="item-four-detail-img">
                  <router-link to="/goodsList">
                    <img :src="subItem.img" alt="">
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="item-content-bottom">
            <div class="item-content-bottom-img" v-for="(subImg, index) in item.itemContent" :key="index">
              <router-link to="/goodsList">
                <img :src="subImg">
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- 爱吃专场 -->
      <div class="item-class">
        <div class="item-class-head item-class-eat-head">
          <span class="item-class-title">{{eat.title}}</span>
          <ul>
            <li v-for="(item, index) in eat.link" :key="index">
              <router-link to="/goodsList">{{item}}</router-link>
            </li>
          </ul>
        </div>
        <div class="item-class-content" v-for="(item, index) in eat.detail" :key="index">
          <div class="item-content-top">
            <div class="item-big-img">
              <img :src="item.bigImg" alt="">
            </div>
            <div class="item-four-img">
              <div class="item-four-detail" v-for="(subItem, index) in item.itemFour" :key="index">
                <div class="item-four-detail-text">
                  <p class="pt_bi_tit pt_bi_tit-eat">{{subItem.title}}</p>
                  <p class="pt_bi_promo">{{subItem.intro}}</p>
                </div>
                <div class="item-four-detail-img">
                  <router-link to="/goodsList">
                    <img :src="subItem.img" alt="">
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="item-content-bottom">
            <div class="item-content-bottom-img" v-for="(subImg, index) in item.itemContent" :key="index">
              <router-link to="/goodsList">
                <img :src="subImg">
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '../views/Search';
import HomeNav from '../views/nav/HomeNav';
export default {
  name: 'Index',
  created () {
    this.$store.dispatch('loadCarouselItems');
  },
  mounted () {
    const father = this;
    this.setIntervalObj = setInterval(function () {
      father.$store.commit('REDUCE_SECKILLS_TIME');
    }, 1000);
  },
  data () {
    return {
      setIntervalObj: null,
      seckills: {
        goodsList: [
          {
            intro: '【赠小风扇】维他 柠檬茶250ml*32盒 礼品装 整箱',
            img: '/img/index/seckill/seckill-item1.jpg',
            price: 71.9,
            realPrice: 89.6
          },
          {
            intro: 'Kindle Paperwhite 全新升级版6英寸护眼非反光电子墨水',
            img: '/img/index/seckill/seckill-item2.jpg',
            price: 989.0,
            realPrice: 1299.0
          },
          {
            intro: '粮悦 大吃兄糯米锅巴 安徽特产锅巴糯米原味400g*2盒',
            img: '/img/index/seckill/seckill-item3.jpg',
            price: 21.8,
            realPrice: 49.0
          },
          {
            intro: '【京东超市】清风（APP）抽纸 原木纯品金装系列 3层',
            img: '/img/index/seckill/seckill-item4.jpg',
            price: 49.9,
            realPrice: 59.0
          },
          {
            intro: 'NIKE耐克 男子休闲鞋 AIR MAX 90 ESSENTIAL 气垫',
            img: '/img/index/seckill/seckill-item5.jpg',
            price: 559.9,
            realPrice: 759.9
          }
        ]
      },
      computer: {
        title: '电脑数码',
        link: [ '电脑馆', '游戏极品', '装机大师', '职场焕新', '女神频道', '虚拟现实', '二合一平板', '电子教育', '万物周刊' ],
        detail: [
          {
            bigImg: 'img/index/computer/item-computer-1.jpg',
            itemFour: [
              {
                title: '电脑馆',
                intro: '笔记本999元限量秒！',
                img: 'img/index/computer/item-computer-2.jpg'
              },
              {
                title: '外设装备',
                intro: '1000减618',
                img: 'img/index/computer/item-computer-1-3.jpg'
              },
              {
                title: '电脑配件',
                intro: '联合满减最高省618',
                img: 'img/index/computer/item-computer-1-4.jpg'
              },
              {
                title: '办公生活',
                intro: '5折神券 精品文具',
                img: 'img/index/computer/item-computer-1-5.jpg'
              }
            ],
            itemContent: [
              'img/index/computer/item-computer-1-6.jpg',
              'img/index/computer/item-computer-1-7.jpg',
              'img/index/computer/item-computer-1-8.jpg'
            ]
          },
          {
            bigImg: 'img/index/computer/item-computer-2-1.jpg',
            itemFour: [
              {
                title: '平板电脑',
                intro: '爆款平板12期免息',
                img: 'img/index/computer/item-computer-2-2.jpg'
              },
              {
                title: '智能酷玩',
                intro: '抢999减666神券',
                img: 'img/index/computer/item-computer-2-3.jpg'
              },
              {
                title: '娱乐影音',
                intro: '大牌耳机低至5折',
                img: 'img/index/computer/item-computer-2-4.jpg'
              },
              {
                title: '摄影摄像',
                intro: '大牌相机5折抢',
                img: 'img/index/computer/item-computer-2-5.jpg'
              }
            ],
            itemContent: [
              'img/index/computer/item-computer-2-6.jpg',
              'img/index/computer/item-computer-2-7.jpg',
              'img/index/computer/item-computer-2-8.jpg'
            ]
          }
        ]
      },
      eat: {
        title: '爱吃',
        link: [ '休闲零食', '坚果', '牛奶', '饮料冲调', '食用油', '大米', '白酒', '红酒', '烧烤食材', '牛排', '樱桃' ],
        detail: [
          {
            bigImg: 'img/index/eat/item-eat-1-1.jpg',
            itemFour: [
              {
                title: '粮油调味',
                intro: '买2免1',
                img: 'img/index/eat/item-eat-1-2.jpg'
              },
              {
                title: '饮料冲调',
                intro: '第二件半价',
                img: 'img/index/eat/item-eat-1-3.jpg'
              },
              {
                title: '休闲零食',
                intro: '满99减40',
                img: 'img/index/eat/item-eat-1-4.jpg'
              },
              {
                title: '中外名酒',
                intro: '满199减100',
                img: 'img/index/eat/item-eat-1-5.jpg'
              }
            ],
            itemContent: [
              'img/index/eat/item-eat-1-6.jpg',
              'img/index/eat/item-eat-1-7.jpg',
              'img/index/eat/item-eat-1-8.jpg'
            ]
          },
          {
            bigImg: 'img/index/eat/item-eat-2-1.jpg',
            itemFour: [
              {
                title: '东家菜',
                intro: '丰富好味',
                img: 'img/index/eat/item-eat-2-2.jpg'
              },
              {
                title: '东家菜',
                intro: '丰富好味',
                img: 'img/index/eat/item-eat-2-2.jpg'
              },
              {
                title: '东家菜',
                intro: '丰富好味',
                img: 'img/index/eat/item-eat-2-2.jpg'
              },
              {
                title: '东家菜',
                intro: '丰富好味',
                img: 'img/index/eat/item-eat-2-2.jpg'
              }
            ],
            itemContent: [
              'img/index/eat/item-eat-2-6.jpg',
              'img/index/eat/item-eat-2-7.jpg',
              'img/index/eat/item-eat-2-8.jpg'
            ]
          }
        ]
      }
    }
  },
  methods: {
    // ...mapActions(['loadSeckillsInfo', 'loadCarouselItems', 'loadComputer', 'loadEat', 'loadShoppingCart']),
    // ...mapActions(['loadCarouselItems']),
    // ...mapMutations(['REDUCE_SECKILLS_TIME'])
  },
  computed: {
    // ...mapState([ 'seckills', 'computer', 'eat' ]),
    // seckills(){
    //   return this.$store.state.seckills;
    // },
    // computer(){
    //   return this.$store.state.computer;
    // },
    // eat(){
    //   return this.$store.state.eat;
    // },
    seckillsHours(){
      return this.$store.getters.seckillsHours()
    },
    seckillsMinutes(){
      return this.$store.getters.seckillsMinutes()
    },
    seckillsSeconds(){
      return this.$store.getters.seckillSeconds()
    }
    // ...mapGetters([ 'seckillsHours', 'seckillsMinutes', 'seckillsSeconds' ])
  },
  components: {
    Search,
    HomeNav
  },
  destroyed () {
    clearInterval(this.setIntervalObj);
  }
};
</script>

<style scoped>
.container {
  background-color: #F6F6F6;
}
.content {
  width: 1008px;
  margin: 0px auto;
}
/*****************************秒杀专栏开始*****************************/
/*秒杀专栏*/
.seckill {
  width: 100%;
  height: 330px;
  margin: 15px auto;
  background-color: #fff;
}
.seckill-head {
  width: 100%;
  height: 50px;
  background-color: #e01222;
}
.seckill-icon {
  width: 68px;
  height: 100%;
  float: left;
}
.seckill-icon img {
  width: 35px;
  height: 35px;
  margin-top: 6px;
  margin-left: 15px;
  animation-name: shake-clock;
  animation-duration: 0.3s;
  animation-iteration-count: infinite; /*设置无线循环*/
}
/*定义闹钟震动动画关键帧*/
@keyframes shake-clock {
  0% {
    transform: rotate(-8deg);
  }
  50% {
    transform: rotate(8deg);
  }
  100% {
    transform: rotate(-8deg);
  }
}
.seckill-text {
  width: 300px;
  height: 100%;
  float: left;
}
.seckill-text .seckill-title {
  font-size: 22px;
  line-height: 50px;
  color: #fff;
}
.seckill-text .seckill-remarks {
  margin-left: 5px;
  font-size: 10px;
  color: #fff;
}
/*倒计时*/
.count-down {
  height: 100%;
  margin-right: 30px;
  line-height: 50px;
  float: right;
}
.count-down-text {
  color: #fff;
}
.count-down-num {
  padding: 3px;
  border-radius: 5px;
  background-color: #440106;
  font-size: 26px;
  font-weight: bold;
  color: #f90013;
}
.count-down-point {
  font-size: 26px;
  font-weight: bold;
  color: #440106;
}

.seckill-content {
  width: 100%;
  height: 280px;
}
.seckill-item {
  width: 183px;
  height: 250px;
  margin-top: 15px;
  margin-left: 15px;
  box-shadow: 0px 0px 8px #ccc;
  cursor: pointer;
  float: left;
}
.seckill-item-img {
  width: 160px;
  height: 160px;
  margin: 0px auto;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
}
.seckill-item-img img {
  width: 130px;
  height: 130px;
  margin-left: 15px;
  margin-top: 15px;
  transition: margin-top 0.3s;
}
.seckill-item-img:hover img {
  margin-top: 6px;
  transition: margin-top 0.3s;
}
.seckill-item-info {
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 12px;
  color: #009688;
}
.seckill-item-info i:first-child {
  font-size: 14px;
}
.seckill-price {
  margin-right: 5px;
  font-size: 25px;
  font-weight: bold;
}
/*****************************秒杀专栏结束*****************************/

/*****************************商品专栏开始*****************************/
.item-class {
  width: 100%;
  height: 470px;
  margin-top: 15px;
  background-color: #fff;
}
.item-class-head {
  width: 100%;
  height: 50px;
  background-color: #4488a7;
}
.item-class-eat-head {
  background-color: #ecb226;
}
.item-class-head ul {
  list-style: none;
  float: right;
  margin-right: 30px;
  line-height: 50px;
}
.item-class-head a {
  padding: 6px;
  margin-left: 15px;
  font-size: 12px;
  background-color: #6da6be;
  border: 1px solid #6da6be;
  text-decoration: none;
  color: #fff;
}
.item-class-eat-head a {
  background-color: #eeb955;
  border: 1px solid #eeb955;
}
.item-class-head a:hover {
  border: 1px solid #fff;
}
.item-class-head li {
  float: left;
}
.item-class-title {
  font-size: 25px;
  line-height: 50px;
  color: #fff;
  margin-left: 15px;
}
.item-class-content {
  width: 49%;
  cursor: pointer;
  border-right: 1px solid #ccc;
  margin-left: 0.9%;
  /*background-color: #cff;*/
  float: left;
}
.item-class-content:nth-child(odd) {
  border: none;
}
.item-content-top {
  width: 100%;
  height: 260px;
}
.item-big-img {
  width: 180px;
  height: 260px;
  overflow: hidden;
  float: left;
}
.item-big-img img {
  margin-left: 0px;
  transition: margin-left 0.3s;
}
.item-big-img:hover img {
  margin-left: -15px;
  transition: margin-left 0.3s;
}
.item-four-img {
  width: 303px;
  margin-left: 8px;
  float: left;
}
.item-four-detail img {
  margin-left: 0px;
  transition: margin-left 0.3s;
}
.item-four-detail:hover img {
  margin-left: -6px;
  transition: margin-left 0.3s;
}
.item-four-detail {
  width: 152px;
  height: 130px;
  margin-left: -1px;
  float: left;
}
.item-four-detail:first-child {
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.item-four-detail:last-child {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.item-four-detail-text {
  width: 50px;
  margin-left: 5px;
  margin-top: 15px;
  float: left;
}
.item-four-detail-img {
  width: 96px;
  margin-top: 15px;
  overflow: hidden;
  float: left;
}
.item-four-detail-img img {
  margin-left: 5px;
  width: 90px;
}
.pt_bi_tit {
  font-weight: bold;
  font-size: 12px;
  color: #4488a7;
}
.pt_bi_tit-eat {
  color: #ecb127;
}
.pt_bi_promo {
  color: #00695c;
}
.item-content-bottom {
  width: 100%;
  margin-top: 8px;
}
.item-content-bottom-img {
  width: 156px;
  margin-right: 8px;
  overflow: hidden;
  float: left;
}
.item-content-bottom-img img {
  margin-left: 0px;
  transition: margin-left 0.3s;
}
.item-content-bottom-img:hover img {
  margin-left: -15px;
  transition: margin-left 0.3s;
}
/*****************************商品专栏结束*****************************/
</style>
