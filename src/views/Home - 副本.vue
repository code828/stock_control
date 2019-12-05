<template>
  <div>
    <hr />
    <el-table
      :data="tableData"
      style="width: 100%"
      border>
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="code" label="资产代码" width="180"></el-table-column>
      <el-table-column prop="name" label="资产名称" width="180"></el-table-column>
      <el-table-column prop="bar_tmp" label="临时条码"></el-table-column>
      <el-table-column prop="barcode" label="总行条码"></el-table-column>
      <el-table-column prop="place" label="放置地点" sortable></el-table-column>
      <el-table-column prop="detail" label="备注" sortable></el-table-column>
    </el-table>
    <div class="block">
      <el-pagination layout="prev, pager, next" :total="counts" @current-change="current_change"></el-pagination>
    </div>
  </div>
</template>

<script>
import { queryStocks } from "../api/api";
//import axios from 'axios'
export default {
  data() {
    return {
      tableData: [],
      counts: 0,
      pagesize: 10,
      currentPage: 1
    };
  },
  methods: {
    current_change: function(currentPage) {
      this.currentPage = currentPage;
    },
    created() {
      queryStocks().then(response => {
        this.tableData = response.data.results;
        this.counts = response.data.totalnum;
      });
    }
  }
};
</script>
