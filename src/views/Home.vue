<template>
  <div>
    <hr />
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="资产名称">
        <el-input v-model="formInline.name" placeholder="资产名称"></el-input>
      </el-form-item>
      <el-form-item label="放置地点" style="text/css">
        <el-select v-model="formInline.region" placeholder="放置地点" @change="dialogFormVisible=false">
          <el-option></el-option>
          <el-option
            v-for="item in stockaddress"
            :key="item.address"
            :label="item.address"
            :value="item.address"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit()">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%" border>
      <!--<el-table-column type="selection" width="55"></el-table-column>-->
      <el-table-column prop="code" label="资产代码" width="180"></el-table-column>
      <el-table-column prop="name" label="资产名称" width="180"></el-table-column>
      <el-table-column prop="bar_tmp" label="临时条码"></el-table-column>
      <el-table-column prop="barcode" label="总行条码"></el-table-column>
      <el-table-column prop="detail" label="放置地点" sortable></el-table-column>
      <el-table-column prop="address" label="备注" sortable></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.$index,scope.row)" type="text" size="small">查看</el-button>  
          <el-button @click="stockClick(scope.$index,scope.row)" type="text" size="small">调拨</el-button>
        </template>
      </el-table-column>
    </el-table>
    <modifyform :dialogFormVisible="dialogFormVisible" :editForm="editForm" :stockaddress="stockaddress"></modifyform>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        layout="total, sizes, prev, pager, next, jumper"
        :total="counts"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { queryStocks, queryAddress } from "../api/api";
import modifyform from "./Modifyform";
//import axios from 'axios'
export default {
  data() {
    return {
      dialogFormVisible: false,
      currentPage: 1,
      pagesize: 10,
      tableData: [],
      formInline: {
        name: "",
        region: []
      },
      stockaddress: [],
      editForm: {
        name: "",
        detail: "",
        address: ""
      },
      counts: 0
    };
  },
  components: {
    modifyform: modifyform
  },
  created() {
    this.getaddressData();
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
    handleClick(index, row) {
      console.log(index, row); //这里可打印出每行的内容
      //点击编辑
      this.dialogFormVisible = true; //显示弹框
      let _row = row;
      //将每一行的数据赋值给Dialog弹框（这里是重点）
      this.editForm = Object.assign({}, _row); // editForm是Dialog弹框的data
    },
    onSubmit() {
      this.gettableData();
    },
    gettableData() {
      queryStocks({
        page: this.currentPage,
        detail: this.formInline.region,
        search: this.formInline.name
      }).then(response => {
        this.tableData = response.data.results;
        this.counts = response.data.count;
      });
    },
    getaddressData() {
      queryAddress().then(response => {
        this.stockaddress = response.data;
      });
    }
  }
};
</script>
