<template>
  <div id="header">
    <header>
      <div class="inner-header">
        <div class="user">
          <el-button @click.prevent="login">{{msg}}</el-button>
          <el-button @click.native="Register">注册</el-button>
          <el-button @click.prevent="preview">预览/导出</el-button>
        </div>
        <div class="title">RESUME</div>

      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      msg: '登录'
    }
  },
  methods: {
    preview () {
      this.$emit('preview')
    },
    login () {
      if (this.msg !== '登录') {

      } else {
        this.bus.$emit('Login')
      }
    },
    Register () {
      this.bus.$emit('Register')
    }

  },
  mounted () {
    this.bus.$on('loginsucc', (msg) => {
      this.msg = `你好，${msg}`
    })
  }
}
</script>
<style lang="stylus" scoped>
header {
  width: 100%;
  height: 60px;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.3);
  transform: translateY(0%);

  .inner-header {
    padding: 0 20px;

    .user {
      float: right;
      line-height: 60px;
    }

    .title {
      font-family: Century Gothic;
      font-size: 40px;
      font-weight: 700;
      color: #409eff;
    }
  }
}
</style>
