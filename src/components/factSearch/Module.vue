<template>
  <div id="app" style="text-align:center;">
    <el-tabs>
      <el-tab-pane label="法律知识查询" name="first">
        <el-container>
          <el-header >法律知识查询 </el-header>
          <el-main>
            <el-row :gutter="20">
              <el-col :span="8" :offset="7"><div class="grid-content bg-purple"> <el-input
                placeholder="请输入关键词(多个关键词用空格分开)"
                v-model="legalRegulationsInput"
                clearable>
              </el-input>
              </div></el-col>
              <el-col :span="1"><div class="grid-content bg-purple"> <el-button
                icon="el-icon-search"
                type="primary"
              >搜索</el-button></div></el-col>
            </el-row>
            <div style="margin: 20px 0;"></div>
            <div style="margin: 40px 0;"></div>
            <el-table
              :data="legalRegulations"
              style="width: 60%;margin:0 auto"
              @row-click="details">
              <el-table-column
                align="center"
                prop="contain"
                label="法律条例">
              </el-table-column>
            </el-table>
          </el-main>
        </el-container>
      </el-tab-pane>
      <el-tab-pane label="案例查询" name="second">
        <el-container>
          <el-header >案例查询系统 </el-header>
          <el-main>
            <el-input
              style="width: 60%;margin:0 auto"
              type="textarea"
              :autosize="{ minRows: 6, maxRows: 8}"
              placeholder="请输入案例描述"
              v-model="relevantCaseInput">
            </el-input>
            <div style="margin: 20px 0;"></div>
            <el-button
              @click="getRelevantCaseResult"
              icon="el-icon-search"
              type="primary"
            >
              搜索</el-button>
            <div style="margin: 40px 0;"></div>
            <el-table
              class="result"
              :data="relevantCaseResult"
              style="width: 60%;margin:0 auto"
              @row-click="details">
              <el-table-column
                :show-overflow-tooltip="true"
                align="center"
                prop="id"
                min-width="8.19%"
                label="编号">
              </el-table-column>
              <el-table-column
                :show-overflow-tooltip="true"
                align="center"
                prop="fact"
                label="描述">
                <template slot-scope="scope">
                  <router-link :to="{name: 'detail',query:{id:scope.row.id}}">
                <a
                  href="#"
                  target="_blank"
                  class="buttonText">
                  {{scope.row.fact}}
                </a>
              </router-link>
                </template>
              </el-table-column>
            </el-table>
          </el-main>
        </el-container>
      </el-tab-pane>
      <el-tab-pane label="关键词查询" name="third">
        <el-container>
          <el-header >关键词查询 </el-header>
          <el-main>
            <el-row :gutter="20">
              <el-col :span="8" :offset="7"><div class="grid-content bg-purple"> <el-input
                placeholder="请输入关键词(多个关键词用空格分开)"
                v-model="keywordInput"
                clearable>
              </el-input>
              </div></el-col>
              <el-col :span="1"><div class="grid-content bg-purple"> <el-button
                @click="getKeywordResult"
                icon="el-icon-search"
                type="primary"
              >搜索</el-button></div></el-col>
            </el-row>
            <div style="margin: 40px 0;"></div>
            <el-table
              class="result"
              :data="keywordResult"
              style="width: 60%;margin:0 auto"
            >
              <el-table-column
                :show-overflow-tooltip="true"
                align="center"
                prop="id"
                min-width="8.19%"
                label="编号">
              </el-table-column>
              <el-table-column
                :show-overflow-tooltip="true"
                align="center"
                prop="fact"
                label="描述">
                <template slot-scope="scope">
                <router-link :to="{name: 'detail',query:{id:scope.row.id}}">
                <a
                  href="#"
                  target="_blank"
                  class="buttonText">
                  {{scope.row.fact}}
                </a>
              </router-link>
                </template>
              </el-table-column>
            </el-table>
          </el-main>
        </el-container>
      </el-tab-pane>
    </el-tabs>
  </div>

</template>
<script>
export default {
  data () {
    return {
      legalRegulationsInput: '',
      relevantCaseInput: '',
      keywordInput: '',
      keywordResult: [{
      }],
      relevantCaseResult: [{
      }],
      legalRegulations: []
    }
  },
  methods: {
    details: (row, event, column) => {
      console.log(this.$router)
      // self.$router.push({path: '/detail'})
      // this.$alert(row.fact, '详情', {
      //   confirmButtonText: '确定',
      //   callback: action => {
      //     this.$message({
      //       type: 'info',
      //       message: `action: ${ action }`
      //     });
      //   }
      // });
    },
    getKeywordResult () {
      if (this.keywordInput.length === 0) {
        this.$alert('请输入案例描述', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${action}`
            })
          }
        })
      };
      var _this = this
      let data = {
        content: this.keywordInput
      }
      this.$http.get('http://129.211.94.46/facts',
        {params: data}
      ).then(function (response) {
        console.log(response.data)
        _this.keywordResult = response.data
      }).catch(function (error) {
        console.log('error!')
        console.log(error)
      })
    },
    getRelevantCaseResult () {
      if (this.relevantCaseInput.length === 0) {
        this.$alert('请输入案例描述', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${action}`
            })
          }
        })
      };
      var _this = this
      let data = {
        content: this.relevantCaseInput
      }
      this.$http.get('http://129.211.94.46/facts',
        {params: data}
      ).then(function (response) {
        console.log(response.data)
        _this.relevantCaseResult = response.data
      }).catch(function (error) {
        console.log('error!')
        console.log(error)
      })
    }
  }
}
</script>

<style>
  .result tr,
  .result th {
    padding: 0;
    height: 40px;
  }
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;

  }
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 100px;
  }

  .el-menu {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 10px !important;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
