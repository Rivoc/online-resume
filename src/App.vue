<template>
  <div id="app"
       :class="{preview:preview}">
    <home-Header @preview="setPreview"></home-Header>
    <section :class="['preControl',{preview:preview}]">
      <el-button @click="exit">退出</el-button>
      <el-button @click="toGetPdf">导出为PDF</el-button>
    </section>
    <Login></Login>
    <Register></Register>
    <main>
      <show-style ref="ShowStyle"></show-style>
      <edit-box :resume="
                 resume">
      </edit-box>
      <show-resume :resume="resume"
                   ref="ShowResume"></show-resume>
    </main>
  </div>
</template>

<script>
import data from './mock/data.json'
import HomeHeader from '@/components/Header'
import EditBox from '@/components/EditBox'
import ShowResume from '@/components/ShowResume'
import ShowStyle from '@/components/ShowStyle'
import { str } from './mock/style.js'
import Register from '@/components/Register'
import Login from '@/components/Login'
export default {
  name: 'App',
  components: {
    HomeHeader,
    EditBox,
    ShowResume,
    ShowStyle,
    Register,
    Login
  },
  data () {
    return {
      preview: false,
      resume: data.resume,
      htmlTitle: '我的简历',
      code: str.code
    }
  },
  methods: {
    setPreview () {
      this.preview = true
    },
    exit () {
      this.preview = false
    },

    toGetPdf () {
      /* 这行代码很重要，它让页面的滚动条跳到了最上方如果点击打印按钮的时候,滚动条没有在最上方,打印内容会是不完整的 */
      window.scrollTo(0, 0)
      this.getPdf('我的简历')
    }
  },
  created () {
    let n = 0
    let len = this.code.length
    let _this = this

    // Dom更新后再调用
    this.$nextTick(function () {
      var setIn = setInterval(function () {
        // 样式代码展示
        _this.$refs.ShowStyle.writeStyleCode(_this.code.substring(0, n))
        // 渲染样式
        _this.$refs.ShowResume.responseStyleCode(_this.code.substring(0, n))
        if (n > 105) {
          n = n + 5
        }
        n++

        if (n >= len) {
          // 停止
          clearInterval(setIn)
        }
      }, 10)
    })
  }

}
</script>

<style lang="stylus">
.preControl {
  position: absolute;
  right: 0;
  top: 20px;
  display: none;
}

.preview .preControl {
  display: block;
}

.preview #showStyle {
  display: none;
}

main {
  display: flex;
  padding: 15px 10px;
}

.preview #header {
  display: none;
}

.preview #showResume {
  margin: 0 auto;
}

.preview main #edit-box {
  display: none;
}
</style>
