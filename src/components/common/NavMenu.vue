<template>
  <el-menu
    :default-active="currentPath"
    router
    mode="horizontal"
    background-color="white"
    text-color="#222"
    active-text-color="red"
    style="min-width: 1300px">
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
      {{item.navItem}}
    </el-menu-item>
    <span style="position: absolute;padding-top: 20px;right: 50%;font-size: 20px;font-weight: bold">休伯利安号</span>
    <el-input
      placeholder="快速搜索..."
      prefix-icon="el-icon-search"
      size="medium"
      style="width: 300px;position:absolute;margin-top: 12px;right: 18%"
      v-model="keywords">
    </el-input>
    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" style="position: absolute;margin-top: 6px;right: 10%;"></el-avatar>
    <el-link :underline="false" style="position: absolute;margin-top: 28px;right: 6%;">{{username}}</el-link>
    <i class="el-icon-switch-button" v-on:click="logout" style="float:right;font-size: 30px;color: #222;padding: 10px;margin-top: 8px"></i>
  </el-menu>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      navList: [
        {name: '/index', navItem: '首页'},
        {name: '/library', navItem: '图书管理'},
        {name: '/admin', navItem: '个人中心'}
      ],
      keywords: '',
      username: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username
    }
  },
  computed: {
    hoverBackground () {
      return '#ffd04b'
    },
    currentPath () {
      var x = this.$route.path.indexOf('/', 1)
      if (x !== -1) {
        return this.$route.path.substring(0, x)
      } else {
        return this.$route.path
      }
    }
  },
  methods: {
    logout () {
      var _this = this
      this.$axios.get('/logout').then(resp => {
        if (resp.data.code === 200) {
          // 前后端状态保持一致
          _this.$store.commit('logout')
          _this.$router.replace('/login')
        }
      })
    }
  }
}
</script>

<style scoped>
  a{
    text-decoration: none;
  }
  span{
    pointer-events: none;
  }
  .el-icon-switch-button {
    cursor: pointer;
    outline:0;
  }
</style>
