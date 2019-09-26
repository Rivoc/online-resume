// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/styles/reset.styl'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import htmlToPdf from '@/components/utils/htmlToPdf'
// 引入leancloud
import AV from 'leancloud-storage'
var APP_ID = '0vcxJUjsTgIaOKEIJrl1ctJx-gzGzoHsz'
var APP_KEY = 'xelsNLIQNHLg1vk5r0GPaEte'
var TestObject = AV.Object.extend('TestObject')
var testObject = new TestObject()
testObject.set('words', 'Hello world!')
testObject.save().then(function (testObject) {
  console.log('保存成功。')
})
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})
Vue.use(htmlToPdf)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.bus = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
