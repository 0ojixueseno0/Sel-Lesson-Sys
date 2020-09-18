<template>
  <el-row class="selpage is-justify-center is-align-middle el-row--flex">
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
        <el-card class="sel-card" style="width:100%; height: 100%">
          <div align=center>
            <el-radio-group v-model="radio1" class="seldiv">
              <div v-if="mode == 1">
                <el-radio-button label="篮球一班"></el-radio-button>
                <el-radio-button label="篮球二班"></el-radio-button>
                <el-radio-button label="篮球三班"></el-radio-button>
                <el-radio-button label="篮球四班"></el-radio-button>
                <el-radio-button label="排球一班"></el-radio-button>
                <el-radio-button label="排球二班"></el-radio-button>
                <el-radio-button label="足球一班"></el-radio-button>
                <el-radio-button label="足球二班"></el-radio-button>
                <el-radio-button label="羽毛球一班"></el-radio-button>
                <el-radio-button label="羽毛球二班"></el-radio-button>
                <el-radio-button label="武术一班"></el-radio-button>
                <el-radio-button label="武术二班"></el-radio-button>
                <el-radio-button label="花样跳绳一班"></el-radio-button>
                <el-radio-button label="花样跳绳二班"></el-radio-button>
              </div>
              <div v-if="mode == 2">
                <el-radio-button label="篮球一班"></el-radio-button>
                <el-radio-button label="篮球二班"></el-radio-button>
                <el-radio-button label="排球"></el-radio-button>
                <el-radio-button label="足球"></el-radio-button>
                <el-radio-button label="羽毛球"></el-radio-button>
                <el-radio-button label="武术"></el-radio-button>
                <el-radio-button label="花样跳绳"></el-radio-button>
              </div>
              <div v-if="mode == 3">
                <el-radio-button label="篮球一班"></el-radio-button>
                <el-radio-button label="篮球二班"></el-radio-button>
                <el-radio-button label="篮球三班"></el-radio-button>
                <el-radio-button label="排球一班"></el-radio-button>
                <el-radio-button label="排球二班"></el-radio-button>
                <el-radio-button label="足球一班"></el-radio-button>
                <el-radio-button label="足球二班"></el-radio-button>
                <el-radio-button label="羽毛球一班"></el-radio-button>
                <el-radio-button label="羽毛球二班"></el-radio-button>
                <el-radio-button label="武术一班"></el-radio-button>
                <el-radio-button label="武术二班"></el-radio-button>
                <el-radio-button label="花样跳绳一班"></el-radio-button>
                <el-radio-button label="花样跳绳二班"></el-radio-button>
              </div>
              <div v-if="mode == 4">
                <el-radio-button label="篮球一班"></el-radio-button>
                <el-radio-button label="篮球二班"></el-radio-button>
                <el-radio-button label="篮球三班"></el-radio-button>
                <el-radio-button label="排球一班"></el-radio-button>
                <el-radio-button label="排球二班"></el-radio-button>
                <el-radio-button label="足球"></el-radio-button>
                <el-radio-button label="羽毛球"></el-radio-button>
                <el-radio-button label="武术"></el-radio-button>
                <el-radio-button label="花样跳绳"></el-radio-button>
              </div>
            </el-radio-group>
            <div style="min-height:100px">
            </div>
          </div>
          <div align="center">
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
        radio1: '',
        mode: 3
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

.sel-card {
  width: 480px;
  text-align: left;
  line-height: 6px;
}
.selpage {
  padding-right: 10vw;
  padding-left: 10vw;
  padding-bottom: 5vh;
  height: 100%;
}
/* @media only screen and (max-width: 730px) {
    .selectcard {
        max-width: 100%;
    }
}
@media screen and (max-width: 1080){
  .selectcard {
        max-width: 60%;
    }
} */
@media (max-width: 730px){
  .seldiv{
    width: 100%;
  }
}
@media (min-width: 730px){
  .seldiv{
     width: 60%;
  }
}
</style>