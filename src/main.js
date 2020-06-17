// The Vue build version to load with the `import` command  入口文件
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' // 添加前端拦截模块
import Axios from 'axios'
import ElementUI from 'element-ui' // 引入UI框架
import 'element-ui/lib/theme-chalk/index.css'
// 设置反向代理，前端请求默认发送到 http://localhost:8443/api
// var axios = require('axios')
Axios.defaults.baseURL = 'http://localhost:8443/api'
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = Axios
Vue.config.productionTip = false
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断是否需要登录拦截
    if (store.state.user.username) {
      next() // 若存在用户对象，放行
    } else {
      next({ // 不存在，跳转到登录页面
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store, // 添加前端拦截器
  components: { App },
  template: '<App/>'
})
