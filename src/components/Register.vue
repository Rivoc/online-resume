<template>
  <div id="re-container"
       v-show="isShow">
    <div id="Register">
      <div class="close"><i class="el-icon-close"
           @click="close"></i></div>
      <div class="wrap">
        <img src="@/assets/normal.png"
             alt=""
             class="normal"
             v-show="ruleForm.pass.length===0&&ruleForm.checkPass.length===0">
        <img src="@/assets/blindfold.png"
             alt=""
             class="blind"
             v-show="ruleForm.pass.length>0||ruleForm.checkPass.length>0">
        <el-form :model="ruleForm"
                 status-icon
                 :rules="rules"
                 ref="ruleForm"
                 label-width="100px"
                 class="lruleForm"
                 label-position="top">
          <!--:rules="xxx" 规则名，写在data里。规定ref的值等于model绑定的值-->
          <el-form-item label="用户名"
                        prop="username">
            <!--prop="xxx"，xxx作为rules里各规则的属性名，即校验字段-->
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码"
                        prop="pass">
            <el-input type="password"
                      v-model="ruleForm.pass"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码"
                        prop="checkPass">
            <el-input type="password"
                      v-model="ruleForm.checkPass"
                      autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary"
                       @click="submitForm">确定</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import AV from 'leancloud-storage'
export default {
  name: 'Register',
  data () {
    var checkUsername = (rule, value, callback) => { // 自定义规则名，是一个函数，通过校验就返回callback()  错误就返回  callback(new Error('xxx'))
      if (value === '') {
        return callback(new Error('请输入用户名'))
      }
      setTimeout(() => {
        if (value.length > 6) {
          callback(new Error('用户名长度不能大于6位'))
        }
      }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (value.length < 6) {
        callback(new Error('密码长度不能小于6位'))
      } else {
        if (this.ruleForm.checkPass !== '') { // 如果用户先在确认密码一栏输入，再在输入密码里输入，确认密码一栏的报错就不会消失，所以要再手动调用一次校验
          this.$refs.ruleForm.validateField('checkPass')// 调用校验方法(),传参：校验字段
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      isShow: false,
      ruleForm: {
        pass: '',
        checkPass: '',
        username: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }// 输入框失去焦点时触发
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        username: [
          { validator: checkUsername, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      let username = this.ruleForm.username
      let pass = this.ruleForm.pass
      // 创建实例
      var user = new AV.User()

      // 等同于 user.set('username', 'Tom')
      user.setUsername(username)
      user.setPassword(pass)
      user.signUp().then(() => {
        this.$message.success('注册成功')
        this.isShow = false
        this.ruleForm.username = ''
        this.ruleForm.pass = ''
        this.ruleForm.checkPass = ''
        let body = document.getElementsByTagName('body')[0]
        body.style.cssText = 'overflow:auto'
      }, () => {
        this.$message.error('用户名已被注册')
        this.ruleForm.username = ''
        this.ruleForm.pass = ''
        this.ruleForm.checkPass = ''
      })
    },
    resetForm () {
      this.ruleForm.username = ''
      this.ruleForm.pass = ''
      this.ruleForm.checkPass = ''
    },
    close () {
      this.isShow = false
      let body = document.getElementsByTagName('body')[0]
      body.style.cssText = 'overflow:auto'
    }
  },
  mounted () {
    let _this = this// 必须保存this，否则指向空实例
    _this.bus.$off('Register')
    _this.bus.$on('Register', function () {
      _this.isShow = true
      let body = document.getElementsByTagName('body')[0]// 取消滚动条，使得对话框弹出页面禁止滚动
      body.style.cssText = 'overflow:hidden'
    })
  }

}
</script>
<style lang="stylus" scoped>
#re-container {
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
}

#Register {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 20px 1px rgba(64, 158, 255, 0.3);
  width: 500px;
  height: 350px;

  .close {
    position: absolute;
    top: 15px;
    right: 15px;
    text-align: right;

    .el-icon-close {
      width: 25px;
      border-radius: 50%;
      text-align: center;
      cursor: pointer;
    }

    .el-icon-close:hover {
      background-color: #eee;
    }

    .el-icon-close:before {
      content: '\E6DB';
      font-size: 20px;
      line-height: 25px;
    }
  }

  .wrap {
    padding: 30px 90px;
    padding-bottom: 0;

    .el-form-item {
      margin-bottom: 2px;
    }

    .el-button {
      margin-top: 15px;
    }

    .normal, .blind {
      position: absolute;
      top: -100px;
      left: 50%;
      transform: translateX(-50%);
      width: 150px;

      img {
        width: 100%;
      }
    }
  }
}
</style>
