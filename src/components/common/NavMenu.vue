<template>
  <body>
  <el-menu
    :default-active="'/index'"
    router
    mode="horizontal"
    background-color="white"
    text-color="#222"
    active-text-color="red"
    style="min-width: 1300px">
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
      {{ item.navItem }}
    </el-menu-item>
    <button v-on:click="showmsg()">显示</button>
    <i class="el-icon-switch-button" v-on:click="logout" style="float:right;font-size: 40px;color: #222;padding: 10px"></i>
    <span style="position: absolute;padding-top: 20px;right: 43%;font-size: 20px;font-weight: bold">刑事案例知识服务平台</span>
  </el-menu>
  </body>
</template>

<script>
import axios from 'axios'
let formData = new window.FormData() // vue 中使用 window.FormData(),否则会报 'FormData isn't definded'
export default {
  name: 'NavMenu',
  data () {
    return {
      username: '',
      navList: [
        {name: '/index', navItem: '首页'},
        {name: '/factSearch', navItem: '案例搜索'},
        {name: '/textSearch', navItem: '文本搜索'},
        {name: '/person', navItem: '个人中心'}
      ]
    }
  },
  methods: {
    showmsg () {
      var username = JSON.parse(window.localStorage.getItem('user' || '[]')).username
      formData.append('username', username)
      axios({
        url: 'http://localhost:8443/api/getRole', // ip地址
        data: formData,
        method: 'post',
        headers: {
          // 'Content-Type': 'multipart/form-data'
          // 'Access-Control-Allow-Origin': 'http://127.0.0.1:8080'
        }
      }).then((res) => {
        console.log(res.data)
        if (res.data.code === 0) {
          this.$alert('普通用户', '提示', {
            confirmButtonText: '确定',
            callback: action => {
              var path = this.$route.query.redirect
              this.$router.replace({path: path === '/' || path === undefined ? '/admin' : path})
            }
          })
        }
        if (res.data.code === 3) {
          this.$alert('roleid3', '提示', {
            confirmButtonText: '确定'
          })
        }
      }) // 发送请求
      // return console.log(JSON.parse(window.localStorage.getItem('user' || '[]')).username)
      // if (JSON.parse(window.localStorage.getItem('user' || '[]')).username === 'admin') {
      //  this.$alert('权限不足')
      // }
    },
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

  span {
    pointer-events: none;
  }

  .el-icon-switch-button {
    cursor: pointer;
    outline:0;
  }
</style>
