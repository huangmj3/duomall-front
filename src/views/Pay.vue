<!--支付界面-->
<template>
  <div>
    <div class="pay-container">
      <Alert show-icon>
        扫码支付
        <Icon type="qr-scanner" slot="icon"></Icon>
        <template slot="desc">请扫描右边二维码进行支付</template>
      </Alert>
      <div class="pay-box">
        <div class="pay-demo">
          <img src="../assets/img/pay/pay-demo.png">
        </div>
        <div class="pay-qr-scan">
          <img src="../assets/img/pay/pay-qrscan.png">
          <div class="pay-tips">
            <router-link to="/payDone"><p @click="payDone()">点击我, 完成支付</p></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Pay',
    methods: {
      pay() {
        window.AlipayJSBridge.call('scan', {
          type: 'bar',  // 扫描类型  qr 二维码  / bar 条形码
          actionType: 'scanAndRoute' // 如果只是扫码,拿到码中的内容，这项不用设置都可以
        }, function (result) {
          alert(JSON.stringify(result))
        })
      },
      payDone() {
        console.log("支付成功")
        this.$store.state.order.order_id = 1529931938150
        this.$store.state.order.count = this.$store.state.shoppingCart[0].count
        this.$store.state.order.img = this.$store.state.shoppingCart[0].img
        this.$store.state.order.package = this.$store.state.shoppingCart[0].package
        this.$store.state.order.price = this.$store.state.shoppingCart[0].price * this.$store.state.shoppingCart[0].count
        this.$store.state.order.title = this.$store.state.shoppingCart[0].title
        // 获取当前日期
        let date = new Date()
        // 获取当前月份
        let nowMonth = date.getMonth() + 1;
        // 获取当前是几号
        let strDate = date.getDate()
        // 添加分隔符“-”
        let seperator = "-"
        // 对月份进行处理，1-9月在前面添加一个“0”
        if (nowMonth >= 1 && nowMonth <= 9) {
          nowMonth = "0" + nowMonth
        }
        // 对月份进行处理，1-9号在前面添加一个“0”
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate
        }
        //获取当前小时
        let nowHour = date.getHours()
        if (nowHour < 10) {
          nowHour = "0" + nowHour
        }
        //获取当前分钟
        let nowMinute = date.getMinutes()
        if (nowMinute < 10) {
          nowMinute = "0" + nowMinute
        }
        //获取当前秒钟
        let nowSecond = date.getSeconds()
        if (nowSecond < 10) {
          nowSecond = "0" + nowSecond
        }
        // 最后拼接字符串，得到一个格式为(yyyy-MM-dd)的日期
        let nowDate = date.getFullYear() + seperator + nowMonth + seperator + strDate + " " + nowHour + ":" + nowMinute + ":" + nowSecond;
        this.$store.state.order.createAt = nowDate
        console.log("打印时间信息")
        console.log(nowDate)
        console.log("打印购物车")
        console.log(this.$store.state.shoppingCart)
        console.log("打印订单信息")
        // console.log(this.$store.state.order)
        this.$store.state.shoppingCart = []
      }
    }
  };
</script>

<style scoped>
  .pay-container {
    margin: 15px auto;
    width: 80%;
    min-width: 1000px;
  }

  .pay-box {
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .pay-demo {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pay-demo img {
    height: 80%;
  }

  .pay-qr-scan {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .pay-tips {
    width: 50%;
    text-align: center;
    font-size: 14px;
    line-height: 30px;
  }

  .pay-tips a {
    color: #999999;
  }
</style>
