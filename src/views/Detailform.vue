<template>
  <div>
    <el-dialog title="调拨记录" :visible.sync="detailFormVisible" @close="toParent">
      <el-table height="200" :data="gridData">
        <el-table-column property="oldaddr.address" label="调拨前地址" width="150"></el-table-column>
        <el-table-column property="olddetail" label="备注" width="150"></el-table-column>
        <el-table-column property="add_time" label="时间"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //dialogFormVisible: false,
      formLabelWidth: "120px"
    };
  },
  props: {
    detailFormVisible: {
      type: Boolean,
      default: false
    },
    gridData: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  methods: {
    toParent() {
      this.detailFormVisible = false;
      this.$emit("toParent",this.detailFormVisible);
    }
  }
}
</script>