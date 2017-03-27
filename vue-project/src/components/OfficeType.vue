<template>
  <div>
    <el-tree :data="data"
             :props="defaultProps"
             v-loading.body="loading"></el-tree>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      data: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      loading: true
    }
  },
  mounted() {
    fetch("https://cbdb-api.fornever.org/tree/office-type")
      .then(r => r.json())
      .then(r => {
        this.data = r.result;
        this.loading=false;
      })
      .catch(err => console.error(err))
  }
}
</script>

<style scoped>
div {
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: left;
}
</style>