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
            <router-link to="/payDone"><p>点击我, 完成支付</p></router-link>
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
