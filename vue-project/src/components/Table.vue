<template>
  <div>
    <el-card class="box-card">
  
      <el-table :data="tableData"
                v-loading.body="loading"
                empty-text="<empty>"
                align="center"
                border
                fit>
        <template v-for="column in columns">
          <el-table-column :prop="column.name"
                           :label="column.name"
                           :fixed="column.cid==0"
                           :width="column.name.length*20"
                           resizable>
            <template scope="scope">
              <el-popover trigger="hover"
                          placement="top"
                          width="300px"
                          :content="scope.row[scope.column.property]"
                          v-if="scope.row[scope.column.property]&&scope.row[scope.column.property].length>25">
                <div slot="reference"
                     class="name-wrapper">
                  <el-tag>detail</el-tag>
                </div>
              </el-popover>
              <div v-else>
                <p>
                  {{ scope.row[scope.column.property] }}
                </p>
              </div>
            </template>
          </el-table-column>
        </template>
      </el-table>
      <br>
      <el-pagination @current-change="page_change"
                     @size-change="size_change"
                     :current-page="currentPage"
                     :page-size="pageSize"
                     :page-sizes="[10, 30, 75, 100]"
                     layout="sizes, prev, pager, next, jumper"
                     :total="recordsCount">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "table",
  data() {
    return {
      tableName: "",
      columns: [],
      tableData: [],
      recordsCount: 0,
      currentPage: 1,
      pageSize: 10,
      loading: true,
      max_height: window.innerHeight * 0.8
    }
  },
  mounted() {
    this.tableName = this.$route.params.table_name
    fetch(`https://cbdb-api.fornever.org/table-desc(${this.tableName})`)
      .then(r => r.json())
      .then(r => {
        this.recordsCount = r.result._record_count;
        this.columns = r.result.columns
        this.fetch_table_data(this.tableName, this.currentPage, this.pageSize)
      })
      .then(r => r.json())
      .then(r => {
        this.tableData = r.result
        this.loading = false;
      })
      .catch(err => console.error(err))
  },
  methods: {
    fetch_table_data: function (tablename, page_index, page_size) {
      this.loading = true;
      fetch(`https://cbdb-api.fornever.org/query(select * from ${this.tableName} limit ${(page_index - 1) * page_size},${page_size})`)
        .then(r => r.json())
        .then(r => {
          this.tableData = r.result
          this.loading = false;
          window.scrollTo(0, 0)
        })
        .catch(err => console.error(err))
    },
    size_change: function (val) {
      this.pageSize = val
      this.fetch_table_data(this.tableName, this.currentPage, this.pageSize)
    },
    page_change: function (val) {
      this.currentPage = val
      this.fetch_table_data(this.tableName, this.currentPage, this.pageSize)
    }
  }
}

</script>

<style scoped>
div {
  margin-bottom: 30px;
  margin-top:30px;
}
</style>