<!--我的订单界面-->
<template>
  <div>
    <Table border :columns="columns" :data="order" size="large" no-data-text="你还没有订单，快点去购物吧"></Table>
    <div class="page-size">
      <Page :total="100" show-sizer></Page>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyOrder',
    created() {
      console.log("准备创建个人订单")
      console.log(this.$store.state.order)
      const orderInfo =  [{
        order_id: '',
        goods_id: '',
        count: '',
        img: '',
        package: '',
        price: '',
        title: '',
        createAt: ''
      }]
      if (this.$store.state.order !== []) {
        orderInfo[0].order_id = this.$store.state.order.order_id
        orderInfo[0].goods_id = this.$store.state.order.goods_id
        orderInfo[0].count = this.$store.state.order.count
        orderInfo[0].img = this.$store.state.order.img
        orderInfo[0].package = this.$store.state.order.package
        orderInfo[0].price = this.$store.state.order.price
        orderInfo[0].title = this.$store.state.order.title
        orderInfo[0].createAt = this.$store.state.order.createAt
      }
      console.log(orderInfo)
      this.order = orderInfo
      console.log("打印this.order")
      console.log(this.order)
    },
    data() {
      return {
        order: [
          // {
          // goods_id: 1529931938150,
          // count: 2,
          // img: 'https://duomall-goods-img.oss-cn-beijing.aliyuncs.com/all/1.jpg',
          // package: '4.7英寸-深邃蓝',
          // price: 56,
          // title: '苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳',
          // createAt: '2018-06-06 20:06:08'
        // }
        ],
        columns: [
          {
            title: '订单号',
            key: 'order_id',
            width: 180,
            align: 'center'
          },
          {
            title: '图片',
            key: 'img',
            width: 86,
            render: (h, params) => {
              return h('div', [
                h('img', {
                  attrs: {
                    src: params.row.img
                  }
                })
              ]);
            },
            align: 'center'
          },
          {
            title: '标题',
            key: 'title',
            align: 'center'
          },
          {
            title: '套餐',
            width: 198,
            key: 'package',
            align: 'center'
          },
          {
            title: '数量',
            key: 'count',
            width: 68,
            align: 'center'
          },
          {
            title: '价格',
            width: 68,
            key: 'price',
            align: 'center'
          },
          {
            title: '购买时间',
            width: 120,
            key: 'createAt',
            align: 'center'
          }
        ]
      };
    },
    computed: {
      // order(){
      //   console.log("查找一次订单")
      //   console.log(this.$store.state.order)
      //   return this.$store.state.order
      // }
    }
  }
  ;
</script>

<style scoped>
  .page-size {
    margin: 15px 0px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
</style>
