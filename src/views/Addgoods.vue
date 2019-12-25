<template>
  <div>
    <hr />
    <div style="margin: 20px;"></div>
    <el-form
      :model="goodForm"
      :rules="rules"
      ref="goodForm"
      label-width="100px"
      class="demo-goodForm"
    >
      <el-col :span="11">
        <el-form-item label="商品编号" prop="code">
          <el-input v-model="goodForm.code"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="11">
        <el-form-item label="类型" prop="type">
          <el-input v-model="goodForm.type"></el-input>
        </el-form-item>
      </el-col>
      <el-form-item label="用途" prop="goal">
        <el-input v-model="goodForm.goal"></el-input>
      </el-form-item>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="临时条码" prop="bar_tmp">
          <el-input v-model="goodForm.bar_tmp"></el-input>
        </el-form-item>
        <el-form-item label="类别" prop="kind">
          <el-input v-model="goodForm.kind"></el-input>
        </el-form-item>
        <el-form-item label="购置日期" prop="purchase_date">
          <el-input v-model="goodForm.purchase_date"></el-input>
        </el-form-item>
      </el-form>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="购置方式" prop="purchase_method">
          <el-input v-model="goodForm.purchase_method"></el-input>
        </el-form-item>
        <el-form-item label="属性" prop="attribute">
          <el-input v-model="goodForm.attribute"></el-input>
        </el-form-item>
        <el-form-item label="序列号" prop="serial">
          <el-input v-model="goodForm.serial"></el-input>
        </el-form-item>
      </el-form>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="价格" prop="price">
          <el-input v-model="goodForm.price"></el-input>
        </el-form-item>
        <el-form-item label="使用单位" prop="user">
          <el-input v-model="goodForm.user"></el-input>
        </el-form-item>
        <el-form-item label="使用人工号" prop="number">
          <el-input v-model="goodForm.number"></el-input>
        </el-form-item>
      </el-form>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="使用人" prop="keeper">
          <el-input v-model="goodForm.keeper"></el-input>
        </el-form-item>
        <el-form-item label="地点代码" prop="code_place">
          <el-input v-model="goodForm.code_place"></el-input>
        </el-form-item>
        <el-form-item label="地点" prop="place">
          <el-input v-model="goodForm.place"></el-input>
        </el-form-item>
      </el-form>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="状态" prop="status">
          <el-input v-model="goodForm.status"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="detail">
          <el-input v-model="goodForm.detail"></el-input>
        </el-form-item>
        <el-form-item label="领用日期" prop="out_date">
          <el-input v-model="goodForm.out_date"></el-input>
        </el-form-item>
      </el-form>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="放置地点" prop="address">
          <el-select v-model="goodForm.address" placeholder="请选择保管部门">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="固定资产编号" prop="tag">
          <el-input v-model="goodForm.tag"></el-input>
        </el-form-item>
      </el-form>
      <el-form-item>
        <el-button type="primary" @click="submitForm('goodForm')">立即创建</el-button>
        <el-button @click="resetForm('goodForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodForm: {
        code: "",
        name: "",
        type: "",
        goal: "",
        bar_tmp: "",
        kind: "",
        purchase_date: "",
        purchase_method: "",
        attribute: "",
        serial: "",
        price: 0,
        user: "",
        number: "",
        keeper: "",
        code_place: "",
        place: "",
        status: "",
        detail: "",
        out_date: "",
        address: "",
        tag: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
