<template>
    <div class="login-container">
        <div class="login_box">
            <!-- 头像区域 -->
            <div class="avatar_box">
                <img src="../../assets/logo.png">       
            </div>
            <!-- 登陆表单区域 -->
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="login_form"> 
                <el-form-item prop="name">
                    <el-input  placeholder="请输入手机号" prefix-icon="el-icon-user" v-model="ruleForm.cellphone"></el-input>    
                </el-form-item>
                <el-form-item prop="pass">
                    <el-input  placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="ruleForm.loginPassword"></el-input>
                </el-form-item>
                <el-form-item  class="btns">
                    <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
                    <el-button type="info"  @click="resetForm('ruleForm')">重置</el-button>
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
export default {
    data() {
       return {
           ruleForm: {
                cellphone: '111111111',
                loginPassword: '111111'
            },
           rules: {
                cellphone: [
                    { required: true, message: '请输入用户手机号', trigger: 'blur' },
                    { min: 11, max: 11, message: '长度为11个字符', trigger: 'blur' }
                ],
                loginPassword: [
                    { required: true, message: '请输入用户密码', trigger: 'blur' },
                    { min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur' }
                ]
           }
       }
    },
    methods: {
        submitForm(formName) {
            const _this = this;
            this.$refs[formName].validate((valid) => {
            if (valid) {
                axios.post('http://47.94.204.116:8804/login',this.ruleForm).then(function(resp){
                if(resp.data.data.matched){
                    // this.$message.success("登陆成功");
                    window.sessionStorage.setItem("token",resp.data.data.token);
                    // window.sessionStorage.setItem("uid",resp.data.data.userId);
                    localStorage.setItem("userId",resp.data.data.userId);
                    // console.log(resp.data.data.userId);
                    // console.log("1" + localStorage.getItem("userId"));
                    // alert(resp.data.data.userId);
                     _this.$router.push('/');
                } else {
                    console.log("1");
                }
            })
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }

    }   
}
</script>

<style scoped>
.login-container {
    background-color: #2b4b6b;
    height:100%;
}
.login_box {
    width:450px;
    height:300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
}
.avatar_box {
    height:130px;
    width:130px;
    border:1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
}
img {
    width:100%;
    height: 100%; 
    border-radius: 50%;
    background-color: #eee;
}
.login_form {
    position: absolute;
    bottom: 10px;
    width: 80%;
    padding:0 20px;
    margin-left:10%;
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