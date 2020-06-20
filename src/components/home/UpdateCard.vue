<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="font-weight: bold;font-size: 20px">最新公告</span>
      <!--<el-button style="float: right; padding: 3px 0" type="text">修改</el-button>-->
    </div>
    <div class="block">
      <el-timeline>
        <el-timeline-item timestamp="2020/5/30" placement="top">
          <el-card>
            <h4>某地某XXXXXXXXXXX</h4>
            <p>admin 提交于 2020/5/30 21:32</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2020/5/27" placement="top">
          <el-card>
            <h4>某地某XXXXXXXXXXX</h4>
            <p>admin 提交于 2020/5/27 09:02</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2020/5/26" placement="top">
          <el-card>
            <h4>某地某XXXXXXXXXXX</h4>
            <p>admin 提交于 2020/5/26 22:10</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2020/5/25" placement="top">
          <el-card>
            <h4>某地某XXXXXXXXXXX</h4>
            <p>admin 提交于 2020/5/25 19:51</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2020/5/20" placement="top">
          <el-card>
            <h4>某地某XXXXXXXXXXX</h4>
            <p>admin 提交于 2020/5/20 22:52</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'UpdateCard'
}
</script>

<style scoped>
  .box-card {
    margin-top: 5px;
    width: 988px;
    height: 1050px;
    text-align: left;
  }
</style>
