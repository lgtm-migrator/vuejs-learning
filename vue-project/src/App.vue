<template>
  <div id="app">
    <el-menu theme="dark"
             mode="horizontal">
  
      <router-link to="/">
        <el-menu-item index="/">Home</el-menu-item>
      </router-link>
  
      <router-link to="/table-desc">
        <el-menu-item index="/table-desc">Table Describe</el-menu-item>
      </router-link>
  
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
