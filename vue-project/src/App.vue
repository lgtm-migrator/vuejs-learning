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
  
    <el-row type="flex"
            class="row-bg">
      <el-col :offset="2"
              :span="20">
        <router-view></router-view>
  
      </el-col>
    </el-row>
  
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
.el-row {
  top: 30px
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50
}
</style>
