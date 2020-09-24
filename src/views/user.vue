<template>
  <el-row class="userpage is-justify-center is-align-middle el-row--flex">
    <el-col style="height: calc(100% - 121px); max-width: 800px">
      <div style="text-align: left">
        <!-- <div style="line-height: 0px; float: left">
          <p style="font-size: 40px; display: inline-block">{{ noontip }}，</p>
          <p style="font-size: 38px; display: inline-block">
            {{ this.$store.state.userinfo[0].name }}。
          </p>
        </div> -->
        <div style="top: 50px; right: 10px; position: relative">
          <el-button @click="exit" style="float: right; display: inline-block"
            >退出登录</el-button
          >
        </div>
        <el-card class="user-card" style="width: 100%; height: 100%">
          <div
            v-for="(user, i) in this.$store.state.userinfo"
            :key="i"
            class="text item"
          >
            {{ user.id + "：" + user.name }}
          </div>
          <div v-if="this.$store.state.userinfo[5].name == '暂未选课'">
            <el-form
              :inline="true"
              :model="formInline"
              style="top:15px;position: relative;"
            >
              <el-form-item label="课程">
                <el-select v-model="formInline.class" placeholder="请选择">
                  <div
                    v-if="
                      this.$store.state.userinfo[3].name == '信息工程系' &&
                        (this.$store.state.grade == '19' ||
                          this.$store.state.grade == '18')
                    "
                  >
                    <el-option
                      v-for="item in this.$store.state.classes.Xx.Y1819"
                      :key="item.key"
                      :label="item.class"
                      :value="item.key"
                    ></el-option>
                  </div>
                  <div
                    v-if="
                      this.$store.state.userinfo[3].name == '信息工程系' &&
                        (this.$store.state.grade == '17' ||
                          this.$store.state.grade == '16')
                    "
                  >
                    <el-option
                      v-for="item in this.$store.state.classes.Xx.Y1617"
                      :key="item.key"
                      :label="item.class"
                      :value="item.key"
                    ></el-option>
                  </div>
                  <div
                    v-if="
                      this.$store.state.userinfo[3].name == '电子工程系' &&
                        (this.$store.state.grade == '19' ||
                          this.$store.state.grade == '18')
                    "
                  >
                    <el-option
                      v-for="item in this.$store.state.classes.Dz.Y1819"
                      :key="item.key"
                      :label="item.class"
                      :value="item.key"
                    ></el-option>
                  </div>
                  <div
                    v-if="
                      this.$store.state.userinfo[3].name == '电子工程系' &&
                        (this.$store.state.grade == '17' ||
                          this.$store.state.grade == '16')
                    "
                  >
                    <el-option
                      v-for="item in this.$store.state.classes.Dz.Y1617"
                      :key="item.key"
                      :label="item.class"
                      :value="item.key"
                    ></el-option>
                  </div>
                </el-select>
              </el-form-item>
              <el-form-item>
                <div align="center">
                  <el-button
                    type="success"
                    icon="el-icon-check"
                    round
                    @click="submit"
                    >提交</el-button
                  >
                </div>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
        <!-- <div
          style="bottom:50px;right: 10px; position: relative"
          v-if="this.$store.state.userinfo[5].name == '暂未选课'"
        >
          <el-button
            round
            @click="toSel"
            style="float: right; display: inline-block"
            >点击选课</el-button
          >
        </div> -->
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        class: ""
      },
      noontip: "", // 上下午提示
      isLoading: false
    };
  },
  created() {
    this.mynoontip();
  },
  mounted() {
    if (this.$store.state.userinfo[0].name == "") {
      this.$router.push("/");
      this.$message({
        showClose: true,
        message: "请登陆后继续",
        type: "error"
      });
    }
  },
  methods: {
    exit() {
      this.$store.state.userinfo = [
        { id: "姓名", name: "" },
        { id: "学号", name: "" },
        { id: "专业", name: "" },
        { id: "系部", name: "" },
        { id: "班级", name: "" },
        { id: "选课", name: "" }
      ];
      this.$router.push("/");
    },
    // toSel() {
    //   this.$router.push("/user/sel");
    // },
    submit() {
      this.$alert("选择此科目后将无法更改，是否确认？", "确认选择", {
        confirmButtonText: "确定",
        callback: action => {
          console.log(action);
          const loading = this.$loading({
            lock: true,
            text: "正在提交.."
          });
          this.isLoading = true;
          setTimeout(() => {
            loading.close();
            if (this.isLoading == true) {
              this.$message({
                showClose: true,
                message: "登录超时，请检查您的网络链接",
                type: "error"
              });
              this.isLoading = false;
            }
          }, 10000);
          this.axios
            .get("http://127.0.0.1:3000/api/v1/apptop", {
              params: {
                id: this.$store.state.userinfo[1].name,
                top: this.formInline.class
              }
            }) //need to change url
            .then(resp => {
              if (resp.data.status === 200) {
                let classType = this.formInline.class.slice(6, 8);
                let classNum = parseInt(this.formInline.class.slice(8));
                switch (classType) {
                  case "01":
                    classType = "篮球";
                    break;
                  case "02":
                    classType = "排球";
                    break;
                  case "03":
                    classType = "足球";
                    break;
                  case "04":
                    classType = "武术";
                    break;
                  case "05":
                    classType = "跳绳";
                    break;
                }
                this.$store.state.userinfo[5].name =
                  classType + classNum + "班";
                this.$message({
                  showClose: true,
                  message: "成功"
                });
                loading.close();
                this.isLoading = false;
              } else {
                this.$message({
                  showClose: true,
                  message: "发生未知错误，请联系管理员",
                  type: "error"
                });
                loading.close();
                this.isLoading = false;
              }
            })
            .catch(error => {
              console.log(error);
              this.$message({
                showClose: true,
                message: "发生未知错误，请联系管理员",
                type: "error"
              });
              loading.close();
              this.isLoading = false;
            });
        }
      });
    },
    mynoontip() {
      const that = this;
      const date = new Date();
      if (date.getHours() >= 0 && date.getHours() < 12) {
        that.noontip = "🌞上午好";
      } else if (date.getHours() >= 12 && date.getHours() < 18) {
        that.noontip = "⛅下午好";
      } else {
        that.noontip = "🌙晚上好";
      }
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
