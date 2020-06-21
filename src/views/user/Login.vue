<template>
  <div class="login-container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../../assets/logo.png">
      </div>
      <!-- 登陆表单区域 -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="login_form">
        <el-form-item prop="cellphone">
          <el-input placeholder="请输入手机号" prefix-icon="el-icon-user" v-model="ruleForm.cellphone"></el-input>
        </el-form-item>
        <el-form-item prop="loginPassword">
          <el-input placeholder="请输入密码" type="password" prefix-icon="el-icon-lock"
                    v-model="ruleForm.loginPassword"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
          <el-button type="plain" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <!-- 底部注册 -->
      <div class="regist">
        <el-link type="primary" href="/regist">免费注册</el-link>
      </div>

    </div>
  </div>
</template>

<script>
  import {login} from "../../network/user/login";

  export default {
    data() {
      return {
        ruleForm: {
          cellphone: '',
          loginPassword: ''
        },
        rules: {
          cellphone: [
            {required: true, message: '请输入用户手机号', trigger: 'blur'},
            {min: 0, max: 11, message: '长度为11个字符', trigger: 'blur'}
          ],
          loginPassword: [
            {required: true, message: '请输入用户密码', trigger: 'blur'},
            {min: 0, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.dispatch('login', this.ruleForm)
            if (this.$store.state !== '') {
              this.$router.push('/');
            }
          } else {
            console.log('error submit!!');
          }
        });
      },
      resetForm(formName) {
        console.log("这里是重置表单")
        console.log(formName)
        console.log(this.$refs)
        console.log(this.$refs.ruleForm)
        console.log(this.$refs[formName])
        // this.$refs[formName].resetFields();
        this.$refs.ruleForm.resetFields()
        console.log("重置结束")
      }

    }
  }
</script>

<style scoped>
  .login-container {
    background-color: #2b4b6b;
    height: 100%;
  }

  .login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }

  .login_form {
    position: absolute;
    bottom: 10px;
    width: 80%;
    padding: 0 20px;
    margin-left: 10%;
    box-sizing: border-box;
  }

  .btns {
    margin-left: 30%;
  }

  .regist {
    position: absolute;
    bottom: 8px;
    right: 15px;
  }
</style>
