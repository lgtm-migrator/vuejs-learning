<template>
  <div>
    <el-card class="box-card">
  
      <el-table :data="tableData"
                v-loading.body="loading"
                align="center"
                border
                :max-height="height"
                fit
                :default-sort="{prop: '_table_name', order: 'ascending'}">
        <el-table-column prop="_table_name"
                         label="表名_table_name"
                         sortable>
        </el-table-column>
        <el-table-column prop="_columns_count"
                         sortable
                         label="表列数_columns_count">
        </el-table-column>
        <el-table-column prop="_record_count"
                         sortable
                         label="表行数_record_count">
        </el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
  
            <el-button size="small"
                       @click="open_detail(scope.row)">
              字段详情
            </el-button>
            <router-link :to="'/table/' + scope.row._table_name">
              <el-button size="small">查看表</el-button>
            </router-link>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog :title="current_row._table_name"
               v-model="dialogTableVisible">
      <el-table align="center"
                :data="current_row.columns">
        <el-table-column property="cid"
                         label="column index"></el-table-column>
        <el-table-column property="name"
                         label="column name"></el-table-column>
        <el-table-column property="notnull"
                         label="not null"></el-table-column>
        <el-table-column property="type"
                         label="data type"></el-table-column>
        <el-table-column property="dflt_value"
                         label="default value"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "TableDesc",
  data() {
    return {
      tableData: [],
      current_row: [],
      dialogTableVisible: false,
      loading: true,
      height: window.innerHeight - 230
    }
  },
  watch: {
  },
  mounted: function () {
    fetch("https://cbdb-api.fornever.org/table-desc()")
      .then(res => res.json())
      .then(res => {
        this.$data.loading = false;
        this.$data.tableData = res.result
      })
      .catch(err => console.error(err))
    window.onresize = event => {
      this.height = window.innerHeight - 230
    }
  },
  methods: {
    open_detail: function (row) {
      this.$data.current_row = row;
      this.$data.dialogTableVisible = true;
    }
  }
}
</script>

<style scoped>
div {
  margin-bottom: 30px;
  margin-top: 30px;
}
</style>