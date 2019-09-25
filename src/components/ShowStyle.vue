<template>
  <div id=showStyle>
    <div class="style-content"
         id="style_content">
      <pre class="style-code"
           v-html="styleMsg"></pre>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShowStyle',
  data () {
    return {
      msg: 'hello vue',
      styleMsg: ''
    }
  },
  methods: {
    writeStyleCode: function (code) {
      this.styleMsg = code
      // 每写一行 code ，滚动条滚动到最下面
      document.getElementById('style_content').scrollTop = document.getElementById('style_content').scrollHeight
    }
  }
}
</script>
<style lang="stylus" scoped>
#showStyle {
  position: absolute;
  width: 33.8%;
  border-radius: 5px;
  top: 75px;
  left: 10px;
  background-color: #fff;
  box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
}
</style>
