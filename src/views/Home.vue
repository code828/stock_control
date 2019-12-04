<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="code" label="资产代码" width="180"></el-table-column>
      <el-table-column prop="name" label="资产名称" width="180"></el-table-column>
      <el-table-column prop="bar_tmp" label="临时条码"></el-table-column>
      <el-table-column prop="barcode" label="总行条码"></el-table-column>
      <el-table-column prop="place" label="放置地点"></el-table-column>
      <el-table-column prop="detail" label="备注"></el-table-column>
    </el-table>
  </div>
</template>

<script>
//import { queryStocks } from '../api/api'
import axios from 'axios'
export default {
  data() {
    return {
      tableData: [],
    }
  },
  created() {
    var that = this
    var listitem=[]
    axios.get('http://127.0.0.1:8000/backend/stocks/').then(function (res) {
      for(var i=0;i<res.data.result.data.length;i++){
        console.log(res.data.result.data[i]);
        listitem.push(res.data.result.data[i])
      }
      console.log(listitem)  
      that.tableData = listitem;
    })
  }
};
</script>
