<template>
  <div>
    <el-dialog title="资产调拨" :visible.sync="dialogFormVisible">
      <el-form :model="editForm">
        <el-form-item label="资产名称" :label-width="formLabelWidth">
          <el-input v-model="editForm.name" :disabled="true" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="保管部门" :label-width="formLabelWidth">
          <el-select v-model="editForm.address" placeholder="请选择保管部门">
            <el-option
            v-for="item in stockaddress"
            :key="item.address"
            :label="item.address"
            :value="item.address"
          ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input v-model="editForm.detail" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="stocking">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {updateStocks} from '../api/api'
export default {
  data() {
    return {
      //dialogFormVisible: false,
      formLabelWidth: "120px"
    };
  },
  props: {
    dialogFormVisible: {
      type: Boolean,
      default: false
    },
    editForm: {
      type: Object,
      default: function() {
        return []
      }
    },
    stockaddress: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  methods: {
    stocking () {
      updateStocks(this.editForm.id,{
        detail:this.editForm.detail,
        address:this.editForm.address
      }).then((reponse)=> {
        console.log(reponse.data)
        alert("数据已调拨！")
      }).catch(function(error) {
        console.log(error)
      })
      this.dialogFormVisible = false
    }
  }
}
</script>