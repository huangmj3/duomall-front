<!--我的地址界面-->
<template>
  <div>
    <div class="address-box" v-for="(item, index) in address" :key="index">
      <div class="address-header">
        <span>{{item.name}}</span>
        <div class="address-action">
          <span @click="edit(index)"><Icon type="edit"></Icon> 修改</span>
          <span @click="del(index)"><Icon type="trash-a"></Icon> 删除</span>
        </div>
      </div>
      <div class="address-content">
        <p><span class="address-content-title"> 收 货 人 :</span> {{item.name}}</p>
        <p><span class="address-content-title">收货地区:</span> {{item.province}} {{item.city}} {{item.area}}</p>
        <p><span class="address-content-title">收货地址:</span> {{item.address}}</p>
        <p><span class="address-content-title">邮政编码:</span> {{item.postcode}}</p>
      </div>
    </div>
    <Modal v-model="modal" width="530">
      <p slot="header">
        <Icon type="edit"></Icon>
        <span>修改地址</span>
      </p>
      <div>
        <Form :model="formData" label-position="left" :label-width="100" :rules="ruleInline">
          <FormItem label="收件人" prop="name">
            <i-input v-model="formData.name" size="large"></i-input>
          </FormItem>
          <FormItem label="收件地区" prop="address">
            <Distpicker :province="formData.province" :city="formData.city" :area="formData.area"
                        @province="getProvince" @city="getCity" @area="getArea"></Distpicker>
          </FormItem>
          <FormItem label="收件地址" prop="address">
            <i-input v-model="formData.address" size="large"></i-input>
          </FormItem>
          <FormItem label="手机号码" prop="phone">
            <i-input v-model="formData.phone" size="large"></i-input>
          </FormItem>
          <FormItem label="邮政编码" prop="postcode">
            <i-input v-model="formData.postcode" size="large"></i-input>
          </FormItem>
        </Form>
      </div>
      <div slot="footer">
        <Button type="primary" size="large" long @click="editAction(index)">修改</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
  import Distpicker from 'v-distpicker';
  import {listUserAddressRequest} from "../../network/address/listUserAddress";

  export default {
    name: 'MyAddress',
    data() {
      return {
        modal: false,
        index: '',
        formData: {
          name: '',
          address: '',
          phone: '',
          postcode: '',
          province: '广东省',
          city: '广州市',
          area: '天河区'

        },
        ruleInline: {
          name: [
            {required: true, message: '请输入姓名', trigger: 'blur'}
          ],
          address: [
            {required: true, message: '请输入地址', trigger: 'blur'}
          ],
          postcode: [
            {required: true, message: '请输入邮政编码', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '手机号不能为空', trigger: 'blur'},
            {type: 'string', pattern: /^1[3|4|5|7|8][0-9]{9}$/, message: '手机号格式出错', trigger: 'blur'}
          ]
        }
      };
    },
    created() {
      console.log("打印一下formDate")
      console.log(this.formData)
      let pageInfo = {
        pageNum: 1,
        pageSize: 100
      }
      // this.$store.dispatch("loadAddress");
      // listUserAddressRequest(this.$store.state.userInfo.userId, pageInfo)
      //   .then(resp => {
      //     // console.log("已经拿到地址数据")
      //     // console.log(this.formData.address)
      //     // console.log(this.formData.address.length)
      //     // console.log(typeof this.formData.address)
      //     // console.log(typeof address)
      //     // console.log("打印一下用户id")
      //     // // console.log(this.$store.state.userInfo.userId)
      //     // console.log("已经拿到地址数据，下面进行一下打印")
      //     // console.log(resp)
      //     // this.formData.address = resp.list
      //     // // console.log("打印一下address")
      //     // console.log(this.formData.address)
      //     // console.log("打印一下address的长度")
      //     // console.log(this.formData.address.length)
      //
      //     // // console.log(address[0])
      //     // // console.log(Object.prototype.toString().call(this.address))
      //     // var arr = new Array()
      //     // console.log(typeof arr)
      //     // arr = this.formData.address
      //     // console.log(arr)
      //     // console.log(typeof arr)
      //     // console.log(arr.length)
      //     // for (let i = 0; i < arr;i++){
      //     //   console.log(arr[i])
      //     // }
      //     // console.log(typeof address)
      //     // console.log(address.get(0))
      //     // console.log(address.length + "")
      //     for (let i = 0; i < this.formData.address.length; i++) {
      //       console.log("addressKet is:")
      //       console.log(this.formData.address[i])
      //     }
      //     console.log(this.formData.address)
      //   })
    },
    computed: {
      address() {
        console.log("这里是地址寻找")
        console.log(this.$store.state.address)
        return this.$store.state.address
      }
    },
    methods: {
      getProvince(data) {
        this.formData.province = data.value;
      },
      getCity(data) {
        this.formData.city = data.value;
      },
      getArea(data) {
        this.formData.area = data.value;
      },
      edit(index) {
        this.index = index
        this.modal = true;
        this.formData.province = this.address[index].province;
        this.formData.city = this.address[index].city;
        this.formData.area = this.address[index].area;
        this.formData.address = this.address[index].address;
        this.formData.name = this.address[index].name;
        this.formData.phone = this.address[index].phone;
        this.formData.postcode = this.address[index].postcode;
      },
      editAction(index) {
        this.modal = false;
        console.log("进入编辑成功区域")
        console.log(this.formData)
        console.log(this.address)
        console.log(this.address[0])
        console.log(index)
        this.$Message.success('修改成功');
        console.log(this.formData.postcode)
        console.log(this.address[index].postcode)
        this.address[index].province = this.formData.province;
        this.address[index].city = this.formData.city;
        this.address[index].area = this.formData.area;
        this.address[index].address = this.formData.address;
        this.address[index].name = this.formData.name;
        this.address[index].phone = this.formData.phone;
        this.address[index].postcode = this.formData.postcode;
      },
      del(index) {
        this.index = index
        this.$Modal.confirm({
          title: '信息提醒',
          content: '你确定删除这个收货地址',
          onOk: () => {
            this.$Message.success('删除成功');
            this.address.splice(index,1)
          },
          onCancel: () => {
            this.$Message.info('取消删除');
          }
        });
      }
    },
    components: {
      Distpicker
    }
  };
</script>

<style scoped>
  .address-box {
    padding: 15px;
    margin: 15px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px #ccc;
  }

  .address-header {
    height: 35px;
    display: flex;
    justify-content: space-between;
    color: #232323;
    font-size: 18px;
  }

  .address-content {
    font-size: 14px;
  }

  .address-content-title {
    color: #999;
  }

  .address-action span {
    margin-left: 15px;
    font-size: 14px;
    color: #2d8cf0;
    cursor: pointer;
  }
</style>
