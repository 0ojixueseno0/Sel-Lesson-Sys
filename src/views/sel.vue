<template>
  <el-row class="userpage is-justify-center is-align-middle el-row--flex">
    <el-col style="height: calc(100% - 121px);max-width:800px">
      <div
        style="
    text-align: left;"
      >
        <div style="line-height:0px; float:left">
              <el-page-header
                style="font-size: 40px;display:inline-block"
                @back="goBack"
              />
              <p style="font-size: 30px;display:inline-block">🎈选择课程</p>
            </div>
        <el-card class="user-card" style="width:100%; height: 100%">
          <div align=center>
            <el-radio-group v-model="radio1">
                <el-radio-button label="足球"></el-radio-button>
                <el-radio-button label="篮球"></el-radio-button>
                <el-radio-button label="排球"></el-radio-button>
                <el-radio-button label="羽毛球"></el-radio-button>
                <el-radio-button label="太极拳"></el-radio-button>
                <el-radio-button label="田径"></el-radio-button>
                <el-radio-button label="跳绳"></el-radio-button>
                <el-radio-button label="铅球"></el-radio-button>
            </el-radio-group>
            <div style="min-height:100px">
            </div>
                <el-button type="success" icon="el-icon-check" round @click="open">提交</el-button>
          </div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
        radio1: ''
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    commit() {
        console.log("success" + this.radio1)
         this.$router.go(-1)
    },
    open() {
        this.$alert('你选择了 ' + this.radio1 + '，是否确认选择此科目', '确认选择', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
  }
};
</script>
<style>
.text {
  font-size: 18px;
}

.item {
  padding: 18px 0;
}

.user-card {
  width: 480px;
  text-align: left;
  line-height: 6px;
}
.userpage {
  padding-right: 10vw;
  padding-left: 10vw;
  padding-bottom: 5vh;
  height: 100%;
}
</style>