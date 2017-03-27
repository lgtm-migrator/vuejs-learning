<template>
  <div>
    <img src="../assets/logo.png">
    <h2>CBDB API Front End</h2>
    <p>中國歷代人物傳記資料庫 API 展示页面</p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {}
  }
}
</script>

<style scoped>
div {
  margin-top: 150px;  
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

img {
  width: 20%
}
</style>
