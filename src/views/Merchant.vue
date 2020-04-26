<!--<template>-->
<!--  <div>-->
<!--    <ShopHeader></ShopHeader>-->
<!--    <div class="goods-container">-->
<!--      <div class="goods-list">-->
<!--        <div class="goods-show-info" v-for="(item, index) in orderGoodsList" :key="index">-->
<!--          <div class="goods-show-img">-->
<!--            <router-link to="/goodsDetail"><img :src="item.img"/></router-link>-->
<!--          </div>-->
<!--          <div class="goods-show-price">-->
<!--            <span>-->
<!--              <Icon type="social-yen text-danger"></Icon>-->
<!--              <span class="spike-price text-danger">{{item.price}}</span>-->
<!--            </span>-->
<!--          </div>-->
<!--          <div class="goods-show-detail">-->
<!--            <span>{{item.intro}}</span>-->
<!--          </div>-->
<!--          <div class="goods-show-num">-->
<!--            已有<span>{{item.remarks}}</span>人评价-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="goods-page">-->
<!--        <Page :total="100" show-sizer></Page>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import ShopHeader from '@/views/header/ShopHeader';-->
<!--export default {-->
<!--  name: 'Merchant',-->
<!--  created () {-->
<!--    // this.loadGoodsList();-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      orderGoodsList: [-->
<!--        {-->
<!--          img: 'img/goodsList/item-show-hot1.jpg',-->
<!--          price: 36.60,-->
<!--          intro: 'SKSK 苹果7/7plus手机壳 iPhone 7 Plus保护套全包硬壳男女磨砂防摔 火影红(苹',-->
<!--          remarks: 6160,-->
<!--          shopName: '元亨利配件专营店',-->
<!--          sale: 9900-->
<!--        },-->
<!--        {-->
<!--          img: 'img/goodsList/item-show-hot2.jpg',-->
<!--          price: 28.00,-->
<!--          intro: '蒙奇奇 苹果6s手机壳磨砂防摔保护套 适用于iphone6/6s/6sPlus/6plus 6/6s 4.7英',-->
<!--          remarks: 3000,-->
<!--          shopName: 'monqiqi旗舰店',-->
<!--          sale: 9600-->
<!--        },-->
<!--        {-->
<!--          img: 'img/goodsList/item-show-hot3.jpg',-->
<!--          price: 15.00,-->
<!--          intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',-->
<!--          remarks: 2800,-->
<!--          shopName: 'BIAZE官方旗舰店',-->
<!--          sale: 8900-->
<!--        },-->
<!--        {-->
<!--          img: 'img/goodsList/item-show-hot4.jpg',-->
<!--          price: 29.90,-->
<!--          intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',-->
<!--          remarks: 9000,-->
<!--          shopName: '歌乐力手配专营店',-->
<!--          sale: 8600-->
<!--        },-->
<!--        {-->
<!--          img: 'img/goodsList/item-show-hot5.jpg',-->
<!--          price: 15.00,-->
<!--          intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',-->
<!--          remarks: 6160,-->
<!--          shopName: 'BIAZE官方旗舰店',-->
<!--          sale: 8560-->
<!--        },-->
<!--        {-->
<!--          img: 'img/goodsList/item-show-hot6.jpg',-->
<!--          price: 28.00,-->
<!--          intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',-->
<!--          remarks: 9006,-->
<!--          shopName: '歌乐力手配专营店',-->
<!--          sale: 8530-->
<!--        },-->
<!--        {-->
<!--          img: 'img/goodsList/item-show-intro7.jpg',-->
<!--          price: 15.00,-->
<!--          intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',-->
<!--          remarks: 8666,-->
<!--          shopName: 'BIAZE官方旗舰店',-->
<!--          sale: 8360-->
<!--        },-->
<!--        {-->
<!--          img: 'img/goodsList/item-show-intro8.jpg',-->
<!--          price: 29.90,-->
<!--          intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',-->
<!--          remarks: 6080,-->
<!--          shopName: '歌乐力手配专营店',-->
<!--          sale: 7560-->
<!--        },-->
<!--        {-->
<!--          img: 'img/goodsList/item-show-hot1.jpg',-->
<!--          price: 36.60,-->
<!--          intro: 'SKSK 苹果7/7plus手机壳 iPhone 7 Plus保护套全包硬壳男女磨砂防摔 火影红(苹',-->
<!--          remarks: 6160,-->
<!--          shopName: '元亨利配件专营店',-->
<!--          sale: 7360-->
<!--        },-->
<!--        {-->
<!--          img: 'img/goodsList/item-show-hot2.jpg',-->
<!--          price: 28.00,-->
<!--          intro: '蒙奇奇 苹果6s手机壳磨砂防摔保护套 适用于iphone6/6s/6sPlus/6plus 6/6s 4.7英',-->
<!--          remarks: 3000,-->
<!--          shopName: 'monqiqi旗舰店',-->
<!--          sale: 6960-->
<!--        },-->
<!--        {-->
<!--          img: 'img/goodsList/item-show-hot3.jpg',-->
<!--          price: 15.00,-->
<!--          intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',-->
<!--          remarks: 2800,-->
<!--          shopName: 'BIAZE官方旗舰店',-->
<!--          sale: 6560-->
<!--        },-->
<!--        {-->
<!--          img: 'img/goodsList/item-show-hot4.jpg',-->
<!--          price: 29.90,-->
<!--          intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',-->
<!--          remarks: 9000,-->
<!--          shopName: '歌乐力手配专营店',-->
<!--          sale: 6360-->
<!--        },-->
<!--        {-->
<!--          img: 'img/goodsList/item-show-hot5.jpg',-->
<!--          price: 15.00,-->
<!--          intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',-->
<!--          remarks: 6160,-->
<!--          shopName: 'BIAZE官方旗舰店',-->
<!--          sale: 5530-->
<!--        },-->
<!--        {-->
<!--          img: 'img/goodsList/item-show-hot6.jpg',-->
<!--          price: 28.00,-->
<!--          intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',-->
<!--          remarks: 9006,-->
<!--          shopName: '歌乐力手配专营店',-->
<!--          sale: 5560-->
<!--        },-->
<!--        {-->
<!--          img: 'img/goodsList/item-show-intro7.jpg',-->
<!--          price: 15.00,-->
<!--          intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',-->
<!--          remarks: 8666,-->
<!--          shopName: 'BIAZE官方旗舰店',-->
<!--          sale: 5260-->
<!--        },-->
<!--        {-->
<!--          img: 'img/goodsList/item-show-intro8.jpg',-->
<!--          price: 29.90,-->
<!--          intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',-->
<!--          remarks: 6080,-->
<!--          shopName: '歌乐力手配专营店',-->
<!--          sale: 3560-->
<!--        }-->
<!--      ]-->
<!--    }-->
<!--  },-->
<!--  components: {-->
<!--    ShopHeader-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--.text-danger {-->
<!--  color: #A94442;-->
<!--}-->
<!--.spike-price{-->
<!--  margin-right: 5px;-->
<!--  font-size: 25px;-->
<!--  font-weight: bold;-->
<!--}-->
<!--.goods-container {-->
<!--  margin: 15px auto;-->
<!--  width: 80%;-->
<!--}-->
<!--.goods-list {-->
<!--  display: flex;-->
<!--  flex-wrap: wrap;-->
<!--  justify-content: space-between;-->
<!--}-->
<!--.goods-show-info{-->
<!--  width: 240px;-->
<!--  padding: 10px;-->
<!--  margin: 15px 0px;-->
<!--  border: 1px solid #fff;-->
<!--  cursor: pointer;-->
<!--}-->
<!--.goods-show-info:hover{-->
<!--  border: 1px solid #ccc;-->
<!--  box-shadow: 0px 0px 15px #ccc;-->
<!--}-->
<!--.goods-show-price{-->
<!--  margin-top: 6px;-->
<!--}-->
<!--.goods-show-detail{-->
<!--  font-size: 12px;-->
<!--  margin: 6px 0px;-->
<!--}-->
<!--.goods-show-num{-->
<!--  font-size: 12px;-->
<!--  margin-bottom: 6px;-->
<!--  color: #009688;-->
<!--}-->
<!--.goods-show-num span{-->
<!--  color: #005AA0;-->
<!--  font-weight: bold;-->
<!--}-->
<!--.goods-show-seller{-->
<!--  font-size: 12px;-->
<!--  color:#E4393C;-->
<!--}-->
<!--.goods-page {-->
<!--  margin-top: 20px;-->
<!--  display: flex;-->
<!--  justify-content: flex-end;-->
<!--}-->
<!--</style>-->
