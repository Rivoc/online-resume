<template>
  <div id="containerr"
       ref="Loginn">
    <div id="Login">
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
                 label-width="50px"
                 class="demo-ruleForm"
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
  name: 'Login',
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
      }
    }
    return {
      ruleForm: {
        pass: '',
        username: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }// 输入框失去焦点时触发
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
      AV.User.logIn(username, pass).then(function (user) {
        // 登录成功
        this.$refs.Login.style.cssText = 'display:none;'
        let body = document.getElementsByTagName('body')[0]
        body.style.cssText = 'overflow:auto'
        this.$message.success('登录成功')
      }, function (error) {
        // 登录失败（可能是密码错误）
        this.$message.error('密码错误或用户不存在')
      }
      )
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    close () {
      this.$refs.Login.style.cssText = 'display:none;'
      let body = document.getElementsByTagName('body')[0]
      body.style.cssText = 'overflow:auto'
    }
  },
  mounted () {
    let _this = this
    this.bus.$on('login', function () {
      console.log(document.getElementById('containerr'))
      // _this.$refs.Login.style.cssText = 'display:block'
      document.getElementById('containerr').style.cssText = 'display:block'
      let body = document.getElementsByTagName('body')[0]// 取消滚动条，使得对话框弹出页面禁止滚动
      body.style.cssText = 'overflow:hidden'
    })
  }
}
</script>
<style lang="stylus" scoped>
#container {
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: none;
}

#Login {
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
  height: 300px;

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
