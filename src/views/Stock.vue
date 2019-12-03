<template>
  <div>
    <el-container style="height: 600px; border: 1px solid #eee">
      <el-header>
        <v-head></v-head>
      </el-header>
      <el-container>
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :collapse="collapse" @select="handleMenuSelect" router>
            <el-menu-item index="stock">库存</el-menu-item>
            <el-menu-item index="add">新增</el-menu-item>
            <el-menu-item index="allot">调拨</el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="content-box" :class="{'content-collapse':collapse}">
          <breadcrumbNav :currentPath="breads"></breadcrumbNav>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
import vHead from "./Header.vue"; //头部
import bus from '../components/common/bus'
import breadcrumbNav from "../components/breadcrumb"; //面包屑
export default {
  data() {
    return {
      collapse: false,
      breads: []
    };
  },
  methods: {
    handleMenuSelect(index, indexPath) {
      this.breads = indexPath;
    }
  },
  components: {
    vHead,
    breadcrumbNav
  },
  computed: {
    defaultActive: function() {
      return this.$route.path.replace("/", "");
    }
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", msg => {
      this.collapse = msg;
      bus.$emit("collapse-content", msg);
    });
  }
};
</script>