<template>
  <div>
    <hr />
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="资产名称">
        <el-input v-model="formInline.name" placeholder="资产名称"></el-input>
      </el-form-item>
      <el-form-item label="放置地点" style="text/css">
        <el-select v-model="formInline.region" placeholder="放置地点" @change="dialogFormVisible=false">
          <el-option value=""></el-option>
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
      <el-table-column prop="id" label="id" width="50"></el-table-column>
      <el-table-column prop="code" label="资产代码" width="180"></el-table-column>
      <el-table-column prop="name" label="资产名称" width="180"></el-table-column>
      <el-table-column prop="bar_tmp" label="临时条码"></el-table-column>
      <el-table-column prop="address" label="放置地点" sortable></el-table-column>
      <el-table-column prop="detail" label="备注" sortable></el-table-column>
      <el-table-column prop="tag" label="固定资产编号"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="stockClick(scope.$index,scope.row)" type="text" size="small">调拨</el-button>
          <el-button @click="detailClick(scope.$index,scope.row)" type="text" size="small">明细</el-button>
        </template>
      </el-table-column>
    </el-table>
    <modifyform
      :dialogFormVisible="dialogFormVisible"
      :editForm="editForm"
      :stockaddress="stockaddress"
    ></modifyform>
    <detailform @toParent="getMsg"
      :detailFormVisible="detailFormVisible"
      :gridData="gridData"
    ></detailform>

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
import { queryStocks, queryAddress,queryRecord } from "../api/api";
import modifyform from "./Modifyform";
import detailform from "./Detailform"
//import axios from 'axios'
export default {
  data() {
    return {
      dialogFormVisible: false,
      detailFormVisible: false,
      currentPage: 1,
      pagesize: 10,
      tableData: [],
      gridData: [],
      detailid: 1,
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
    modifyform: modifyform,
    detailform: detailform,
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
      //console.log(this.currentPage); //点击第几页
      this.gettableData();
    },
    stockClick(index, row) {
      console.log(index, row); //这里可打印出每行的内容
      //点击编辑
      this.dialogFormVisible = true; //显示弹框
      this.detailFormVisible = false;
      let _row = row;
      //将每一行的数据赋值给Dialog弹框（这里是重点）
      this.editForm = Object.assign({}, _row); // editForm是Dialog弹框的data
    },
    detailClick(index, row) {
      console.log(index, row); //这里可打印出每行的内容
      //点击编辑
      this.detailFormVisible = true; //显示弹框
      this.dialogFormVisible = false;
      //将每一行的数据赋值给Dialog弹框（这里是重点）
      this.querydetail(row.id)
    },
    onSubmit() {
      this.dialogFormVisible = false;
      this.detailFormVisible = false;
      this.currentPage = 1;
      this.gettableData();
    },
    gettableData() {
      queryStocks({
        page: this.currentPage,
        address: this.formInline.region,
        search: this.formInline.name
      })
        .then(response => {
          this.tableData = response.data.results;
          this.counts = response.data.count;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getaddressData() {
      queryAddress()
        .then(response => {
          this.stockaddress = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    querydetail (index) {
      queryRecord({
        stocks__id: index,
        }).then ((reponse) => {
        this.gridData = reponse.data
      })
        .catch(function(error) {
          console.log(error);
        });
    },
    getMsg(msg) {
      this.detailFormVisible = msg;
    }
  },
};
</script>
