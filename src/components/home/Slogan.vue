<template>
  <div>
    <el-card class="box-card">
      <div style="font-size: 45px;color: azure;white-space: nowrap">（示例）放电话邮箱二维码关于我们等等</div>
      <a href="https://www.baidu.com" target="_blank">
        <img src="../../assets/icon/icon6.png" alt="" class="git-link">
      </a>
      <a href="https://www.baidu.com" target="_blank">
        <img src="../../assets/icon/csdn.png" alt="" class="csdn-link">
      </a>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Slogan'
}
</script>

<style scoped>
  .box-card {
    width: 100%;
    height: 150px;
    background-color: #ff0000;
    text-align: center;
    margin-top: 5px;
  }

  .slogan {
    width: 100%;
  }

  .git-link {
    width: 80px;
    /*position: absolute;*/
  }

  .csdn-link {
    width: 65px;
    /*position: absolute;*/
    margin-bottom: 7px;
    margin-left: 20px;
  }
</style>
