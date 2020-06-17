<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu
        class="status"
        default-active="0"
        @select="handleSelect"
        active-text-color="red">
        <el-menu-item index="0">
          <i class="el-icon-menu"></i>
          <span slot="title">全部</span>
        </el-menu-item>
        <el-menu-item index="1">
          <span slot="title">待处理</span>
        </el-menu-item>
        <el-menu-item index="2">
          <span slot="title">已完成</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: center; font-size: 18px">
        <span>详细记录</span>
      </el-header>

      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140" align="center">
          </el-table-column>
          <el-table-column prop="type" label="类型" width="120" align="center">
          </el-table-column>
          <el-table-column prop="name" label="名称" width="220" align="center">
          </el-table-column>
          <el-table-column prop="num" label="数量" width="120" align="center">
          </el-table-column>
          <el-table-column prop="dept" label="部门" width="120" align="center">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AdminMenu from './AdminMenu'

export default {
  name: 'AdminIndex',
  components: {AdminMenu},
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.status = key
      this.$emit('indexSelect')
    }
  },
  mounted () {
    // this.$router.replace('/admin/dashboard')
  }
}
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
