<template>
  <div>
    <div id=showStyle
         ref="style_content">
      <pre class="style-code"
           v-html="styleMsg">
        </pre>
    </div>
    <div class="mask"
         @click="customize">
      生成简历<i class="el-icon-right"></i>
    </div>
  </div>

</template>
<script>
export default {
  name: 'ShowStyle',
  data () {
    return {
      styleMsg: ''
    }
  },
  methods: {
    writeStyleCode: function (code) {
      this.styleMsg = code
      // 每写一行  ，滚动条滚动到底部
      this.$refs.style_content.scrollTop = this.$refs.style_content.scrollHeight
    },
    customize () {
      this.bus.$emit('custResume')
    }
  }

}

</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/variable.styl';

.mask:hover {
  opacity: 1;
}

.mask {
  position: absolute;
  width: 33.8%;
  border-radius: 5px;
  left: 10px;
  margin-right: 20px;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
  background: rgba(66, 66, 66, 0.6);
  opacity: 0;
  transition: opacity 0.3s;
}

#showStyle:hover .customize {
  opacity: 1;
}

#showStyle {
  position: absolute;
  width: 33.8%;
  border-radius: 5px;
  top: 75px;
  left: 10px;
  background-color: #fff;
  box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
  height: 90%;
  overflow: auto;
}

#showStyle::-webkit-scrollbar {
  display: none;
}
</style>
