<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="font-weight: bold;font-size: 20px">新闻3</span>
      <!--<el-button style="float: right; padding: 3px 0" type="text">修改</el-button>-->
    </div>
    <div class="block">
      <el-timeline>
        <el-timeline-item timestamp="2020/4/1" placement="top">
          <el-card>
            <a href="https://www.xmu.edu.cn/" target="_blank">
            <h4>厦门大学</h4>
            <p>信息学院</p>
            </a>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="20xx/x/x" placement="top">
          <el-card>
            <h4>xxx</h4>
            <p></p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="20xx/x/x" placement="top">
          <el-card>
            <h4>xxx</h4>
            <p></p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="20xx/x/x" placement="top">
          <el-card>
            <h4>xxx</h4>
            <p></p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="20xx/x/x" placement="top">
          <el-card>
            <h4>xxx</h4>
            <p></p>
          </el-card>
        </el-timeline-item>
        <div align="right">
          <a href="https://www.xmu.edu.cn/" target="_blank">查看更多</a>
        </div>
      </el-timeline>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'UpdateCard3'
}
</script>

<style scoped>
  .box-card {
    margin-top: 5px;
    width: 1500px;
    height: 850px;
    text-align: left;
  }
</style>
