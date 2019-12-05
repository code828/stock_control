<template>
  <div>
    <hr />
    <el-table
      :data="tableData"
      style="width: 100%"
      border
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="code" label="资产代码" width="180"></el-table-column>
      <el-table-column prop="name" label="资产名称" width="180"></el-table-column>
      <el-table-column prop="bar_tmp" label="临时条码"></el-table-column>
      <el-table-column prop="barcode" label="总行条码"></el-table-column>
      <el-table-column prop="place" label="放置地点" sortable></el-table-column>
      <el-table-column prop="detail" label="备注" sortable></el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 40]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="counts"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { queryStocks } from "../api/api";
//import axios from 'axios'
export default {
  data() {
    return {
      currentPage: 1,
      pagesize: 10,
      tableData: [],
      counts: 0
    };
  },
  created() {
    this.gettableData();
  },
  methods: {
    handleSizeChange: function(size) {
      this.pagesize = size;
      console.log(this.pagesize); //每页下拉显示数据
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage); //点击第几页
      this.gettableData();
    },
    gettableData() {
      queryStocks({page: this.currentPage}).then((response) => {
      this.tableData = response.data.results;
      this.counts = response.data.count;
    })
    }
  }
};
</script>
