<template>
  <div>
    <el-table :data="tableData"
              style="width: 100%"
              v-loading.body="loading"
              align="center">
      <template v-for="column in columns">
        <el-table-column prop="column.name"
                         label="column.name">
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "table",
  props: ["tableName"],
  data() {
    return {
      columns: [],
      tableData: [],
      loading: true
    }
  },
  mounted() {
    fetch(`https://cbdb-api.fornever.org/table-desc(${this.tableName})`)
      .then(r => r.json())
      .catch(err => console.error(err))
  }
}

</script>

<style >

</style>