<template>
  <div>
    <hr />
    <div style="margin: 20px;"></div>
    <el-form
      :model="goodForm"
      :rules="rules"
      ref="goodForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-row>
        <el-col :span="11">
          <el-form-item label="商品编号" prop="code">
            <el-input v-model="goodForm.code"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="商品名称" prop="name">
            <el-input v-model="goodForm.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" @click="submitForm('goodForm')">创建</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item label="用途" prop="goal">
            <el-input v-model="goodForm.goal"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="临时条码" prop="bar_tmp">
            <el-input v-model="goodForm.bar_tmp"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="2">
          <el-button @click="resetForm('goodForm')">重置</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item label="类别" prop="kind">
            <el-input v-model="goodForm.kind"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="购置日期" prop="purchase_date">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="goodForm.purchase_date"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item label="购置方式" prop="purchase_method">
            <el-input v-model="goodForm.purchase_method"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="属性" prop="attribute">
            <el-input v-model="goodForm.attribute"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item label="序列号" prop="serial">
            <el-input v-model="goodForm.serial"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="价格" prop="price">
            <el-input v-model.number="goodForm.price"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item label="使用单位" prop="user">
            <el-input v-model="goodForm.user"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="使用人工号" prop="number">
            <el-input v-model="goodForm.number"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item label="使用人" prop="keeper">
            <el-input v-model="goodForm.keeper"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="地点代码" prop="code_place">
            <el-input v-model="goodForm.code_place"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item label="地点" prop="place">
            <el-input v-model="goodForm.place"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="状态" prop="status">
            <el-input v-model="goodForm.status"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item label="备注" prop="detail">
            <el-input v-model="goodForm.detail"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="领用日期" prop="out_date">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="goodForm.out_date"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item label="放置地点" prop="address">
            <el-select v-model="goodForm.address" placeholder="请选择保管部门">
              <el-option
                v-for="item in stockaddress"
                :key="item.address"
                :label="item.address"
                :value="item.address"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="固定资产编号" prop="tag">
            <el-input v-model="goodForm.tag"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item label="资产型号" prop="type">
            <el-input v-model="goodForm.type"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { queryAddress, addStocks } from "../api/api";
export default {
  data() {
    return {
      goodForm: {
        code: "ZC00483938",
        name: "联想TB-X705M平板电脑",
        type: "联想TB-X705M平板电脑",
        goal: "综合营销",
        bar_tmp: "3100014204453468",
        barcode: "",
        kind: "",
        purchase_date: "2019-06-13",
        purchase_method: "购置",
        attribute: "平板电脑",
        serial: "",
        price: 0,
        user: "上海自贸区支行",
        number: "4017",
        keeper: "钱巍",
        code_place: "90906001",
        place: "外高桥保税区马吉路2号",
        status: "领用",
        detail: "陈蓓蕾",
        out_date: "2019-10-25",
        address: ",杨高南路1楼",
        tag: "102390000000391562"
      },
      rules: {
        code: [
          { required: true, message: "请输入资产代码", trigger: "blur" },
          { min: 10, max: 10, message: "长度为10个字符", trigger: "blur" }
        ],
        name: [
          { required: true, message: "请输入资产名称", trigger: "blur" },
          { min: 4, max: 30, message: "长度在 4 到 30 个字符", trigger: "blur" }
        ],
        type: [
          { required: true, message: "请输入资产型号", trigger: "blur" },
          { min: 4, max: 30, message: "长度在 4 到 30 个字符", trigger: "blur" }
        ],
        goal: [
          { required: true, message: "请输入业务目的", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur" }
        ],
        bar_tmp: [
          { required: true, message: "请输入临时条码", trigger: "blur" },
          { min: 16, max: 16, message: "长度为16个字符", trigger: "blur" }
        ],
        kind: [
          { message: "请输入资产类别", trigger: "blur" },
          { min: 5, max: 5, message: "长度为5个字符", trigger: "blur" }
        ],
        purchase_date: [
          {
            //type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        purchase_method: [
          { required: true, message: "请输入购置方式", trigger: "blur" },
          { min: 2, max: 6, message: "长度为2-6个字符", trigger: "blur" }
        ],
        attribute: [
          { required: true, message: "请选择物理属性", trigger: "blur" },
          { min: 1, max: 8, message: "长度为1-8个字符", trigger: "blur" }
        ],
        serial: [
          { message: "请输入资产类别", trigger: "blur" },
          { min: 5, max: 10, message: "长度为5-10个字符", trigger: "blur" }
        ],
        price: [
          {
            type: "number",
            required: true,
            message: "请输入价格",
            trigger: "blur"
          }
        ],
        user: [
          { required: true, message: "请输入使用单位", trigger: "blur" },
          { min: 5, max: 30, message: "长度为5-30个字符", trigger: "blur" }
        ],
        number: [
          { required: true, message: "请输入使用人工号", trigger: "blur" },
          { min: 4, max: 10, message: "长度为4-10个字符", trigger: "blur" }
        ],
        keeper: [
          { required: true, message: "请输入使用人姓名", trigger: "blur" },
          { min: 1, max: 4, message: "长度为1-4个字符", trigger: "blur" }
        ],
        code_place: [
          { required: true, message: "请输入地点代码", trigger: "blur" },
          { min: 1, max: 8, message: "长度为1-8个字符", trigger: "blur" }
        ],
        place: [
          { required: true, message: "请输入放置地点", trigger: "blur" },
          { min: 1, max: 30, message: "长度为1-30个字符", trigger: "blur" }
        ],
        status: [
          { required: true, message: "请输入资产状态", trigger: "blur" },
          { min: 2, max: 4, message: "长度为2-4个字符", trigger: "blur" }
        ],
        detail: [
          { required: true, message: "请输入备注", trigger: "blur" },
          { min: 1, max: 30, message: "长度为1-30个字符", trigger: "blur" }
        ],
        out_date: [
          {
            //type: "date",
            required: true,
            message: "请选择领用日期",
            trigger: "change"
          }
        ],
        address: [
          { required: true, message: "请输入地址", trigger: "blur" },
          { min: 1, max: 30, message: "长度为1-30个字符", trigger: "blur" }
        ],
        tag: [
          { message: "请输入固定资产编号", trigger: "blur" },
          { min: 18, max: 18, message: "长度为18个字符", trigger: "blur" }
        ]
      },
      stockaddress: [],
    };
  },
  created() {
    this.getaddressData();
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          try {
            let result = await addStocks(this.goodForm);
            if (result.status == 201) {
              this.$message({
                type: "success",
                message: "添加成功"
              });
            } else {
              this.$message({
                type: "error",
                message: result.status
              });
              console.log("error submit!!");
              return false;
            }
          } catch (err) {
            console.log(err);
          }
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getaddressData() {
      queryAddress()
        .then(response => {
          this.stockaddress = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
