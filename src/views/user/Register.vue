<template>
    <div class="regist-container">
        <div class="regist_box">
            <!-- 注册表单区域 -->
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="ruleForm"> 
                <!-- 头像区域 -->
                <el-form-item>
                    <el-upload
                        class="avatar-uploader"
                        ref="head"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                        :file-list="fileList">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>       
                </el-form-item>               
                <el-form-item label="用户名称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="用户密码" prop="loginPassword">
                    <el-input type="password" v-model="ruleForm.loginPassword" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="rePass">
                    <el-input type="password" v-model="ruleForm.rePass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="用户性别" prop="sex">
                    <el-radio v-model="ruleForm.sex" label="1">男</el-radio>
                    <el-radio v-model="ruleForm.sex" label="2">女</el-radio>
                </el-form-item>
                <el-form-item label="用户生日" prop="birthday">
                    <el-date-picker v-model="ruleForm.birthday" type="date" placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                
                <el-form-item label="用户手机" prop="cellphone">
                    <el-input v-model="ruleForm.cellphone"></el-input>
                </el-form-item>
                <el-form-item class="btns">
                    <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
                    <el-button type="info" @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
                </el-form>
            <!-- 底部登陆 -->
            <div class="login">
                <el-link type="primary" href="/login">直接登陆</el-link>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm.rePass !== '') {
                    this.$refs.ruleForm.validateField('rePass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.loginPassword) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
            }
        };
        // 验证手机号唯一
        var validateTele = (rule, value, callback) => {
             axios.post('http://huangmj.top/back/user/register/cellphoneVerification',{cellphone:value}).then(function(resp){
                if(!resp.data.flag){
                    console.log("111");
                    callback(new Error('手机号已被注册'));
                }
            })       
        };
      return {
        ruleForm: {
          name: '111111',
          loginPassword: '111111',
          rePass: '111111',
          sex: '',
          birth:'',
          cellphone:'111111111'        
        },
        fileList:[],
        imageUrl: '',
        rules: {
          name: [
            { required: true, message: '请输入用户名称', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 5 到 25 个字符', trigger: 'blur' }
          ],
          loginPassword: [
            { required: true, message: '请输入用户密码', trigger: 'blur' },
            { min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur' },
            { validator: validatePass, trigger: 'blur' }
          ],
          rePass: [
            { required: true, message: '请输入用户密码', trigger: 'blur' },
            { min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur' },
            { validator: validatePass2, trigger: 'blur' }
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          birthday: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          cellphone: [
            { required: true, message: '请输入用户手机号', trigger: 'blur' },
            // { validator: validateTele, trigger: 'blur' }
          ]
        },
       
      }
    },
    methods: {
       handleAvatarSuccess(res, file) {
        console.log(file);
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },  
      submitForm(formName) {
           const _this = this;
           this.$refs[formName].validate((valid) => {
                if (valid) {
                    axios.post('http://huangmj.top/back/user/register',this.ruleForm).then(function(resp){
                        if(resp.status == 200){
                            _this.$alert('用户'+_this.ruleForm.name+'注册成功！', '消息', {
                                confirmButtonText: '确定',
                                callback: action => {
                                    _this.$router.push('/login')
                                }
                            })
                        }
                    })
                } else {
                    return false;
                } 
          })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style scoped>
.regist-container {
    background-color: #2b4b6b;
    height:100%;
}
.regist_box {
    width:450px;
    height:540px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-44%);
}
.ruleForm {
    position: absolute;
    width: 80%;
    padding:0 20px;
    margin-left:10%;
    margin-top: 15%;
    box-sizing: border-box;
}
.avatar-uploader {
    cursor: pointer;
    height:130px;
    width:130px;
    border:1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-80%,-100%);
    background-color: #fff;
}
.avatar-uploader :hover {
    border-color: #409EFF;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 110px;
    height: 178px;
    line-height: 108px;
    text-align: center;
}
.avatar {
    width:100%;
    height: 100%; 
    border-radius: 50%;
    background-color: #eee;
}
.btns {
    margin-left: 5%;
}
.login {
   position: absolute;
   bottom: 8px;
   right: 15px;
}
</style>