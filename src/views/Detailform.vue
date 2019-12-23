<template>
  <div>
    <el-dialog title="调拨记录" :visible.sync="detailFormVisible">
      <el-table :data="gridData">
        <el-table-column property="oldaddr.address" label="上一地址" width="150"></el-table-column>
        <el-table-column property="olddetail" label="之前备注" width="200"></el-table-column>
        <el-table-column property="add_time" label="时间"></el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="toParent">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { queryRecord } from "../api/api";
export default {
  data() {
    return {
      //dialogFormVisible: false,
      gridData: [],
      formLabelWidth: "120px"
    };
  },
  props: {
    detailFormVisible: {
      type: Boolean,
      default: false
    },
    detailid: {
      type: Number,
      default: 1
    }
  },
  mounted() {
      this.querydetail()
  },
  methods: {
    querydetail () {
      queryRecord({
        stocks__id:this.detailid,
        }).then ((reponse) => {
        this.gridData = reponse.data.results
      })
        .catch(function(error) {
          console.log(error);
        });
    },
    toParent() {
      this.detailFormVisible = false;
      this.$emit("toParent",this.detailFormVisible);
    }
  }
}
</script>