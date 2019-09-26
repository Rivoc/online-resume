<template>
  <div id="header">
    <header>
      <div class="inner-header">
        <div class="user">
          <el-button @click="Register">注册</el-button>
          <el-button @click="login">登录</el-button>
          <el-button @click="preview">预览/导出</el-button>
        </div>
        <div class="title">RESUME</div>

      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  methods: {
    preview () {
      this.$emit('preview')
    },
    login () {
      this.bus.$emit('login')
    },
    Register () {
      this.bus.$emit('Register')
    }

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
