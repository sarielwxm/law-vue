<template>
    <div>
      <el-container>
        <el-aside width="200px">

        </el-aside>
        <el-main style="padding-top: 50px;padding-left: 50px">
            <module></module>
          <div style="float: left;width: 280px;height: 150px;margin: 30px"></div>
        </el-main>
      </el-container>
    </div>
</template>

<script>

import Module from './Module'

export default {
  name: 'factSearchIndex',
  components: {
    Module}
}
</script>

<style scoped>

</style>
