<template>
  <div id="app" class="app">
    <el-row class="top">
      <el-col class="logo" :span="4">
        <logo></logo>
      </el-col>
      <el-col class="header" :span="20">
        <header-nar></header-nar>
      </el-col>
    </el-row>
    <el-row class="center">
      <el-col class="menu" :span="4">
          <nav-menu class="nav-menu"></nav-menu>
      </el-col>
      <el-col class="content" :span="20">
          展示页
          <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HeaderNar from './header/index'
import NavMenu from './menu/index'
import Logo from './logo/index'
export default {
  name: 'index',
  components: {
    HeaderNar,
    NavMenu,
    Logo
  }
}
</script>

<style scoped>
.top{
  height: 67px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.logo{
  height: 67px;
  border-right: solid 1px #fff;
  background-color: #304156;
}
.header{
  height: 67px;
  background-color: #fff;
}
.menu{
  height: 100%;
}
.nav-menu{
  background-color: #304156;
  height: 100%;
}
.center{

}
</style>
