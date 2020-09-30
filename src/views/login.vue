<template>
  <div id="login" class="el-row is-justify-center is-align-middle el-row--flex">
    <div class="el-col el-col-24 el-col-xs-22 el-col-sm-8 el-col-md-6">
      <div class="el-card box-card is-always-shadow">
        <div class="el-card__header">
          <el-avatar :size="100">
            <img src="../assets/logoo.png" />
          </el-avatar>
          <!-- <img src="../assets/logoo.png" /> -->
          <!-- <el-avatar src="../assets/logoo.png" :fit="fill"></el-avatar> -->
          <br />
          <!-- <br> -->
          <span style="font-size: 24px">扬州高职校选课系统</span>
        </div>
        <div class="el-card__body">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            @submit.native.prevent
          >
            <el-form-item prop="username">
              <el-input
                type="text"
                placeholder="姓名"
                v-model="ruleForm.username"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item prop="num">
              <el-input
                type="text"
                placeholder="学号"
                v-model="ruleForm.num"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                native-type="submit"
                @click="submitForm('ruleForm')"
                >登录</el-button
              >
              <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
              <!-- <el-button @click="showForm('ruleForm')">显示</el-button> -->
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  metaInfo: {
    title: "在线选课系统",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      }
    ]
  },
  data() {
    var validateNum = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入学号"));
      } else {
        callback();
      }
    };
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入姓名"));
        // } else if (value.length < 4 || value.length > 12) {
        //   if (value.length < 4) {
        //     callback(new Error("用户名需要大于4个字符"));
        //   } else {
        //     callback(new Error("用户名需要小于12个字符"));
        //   }
      } else {
        callback();
      }
    };
    return {
      loginState: "正在进入选课系统",
      ruleForm: {
        num: "",
        username: ""
      },
      isLoading: false,
      rules: {
        num: [{ validator: validateNum, trigger: "blur" }],
        username: [{ validator: validateUsername, trigger: "blur" }]
      }
    };
  },
  methods: {
    ToAdmin() {
      this.$router.push("/admin/login");
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login();
        } else {
          this.$message({
            showClose: true,
            message: "表单错误",
            type: "error"
          });
          return false;
        }
      });
    },
    login() {
      const loading = this.$loading({
        lock: true,
        text: "登录中"
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
        .get(this.$store.state.apiUrl + "/api/v1/user/id", {
          params: { id: this.ruleForm["num"] }
        }) //need to change url
        .then(resp => {
          // console.log(resp.data);
          if (resp.data.status === 200) {
            if (resp.data.data.name == this.ruleForm["username"]) {
              this.$store.state.userinfo = [
                { id: "姓名", name: resp.data.data.name },
                { id: "学号", name: resp.data.data.id },
                { id: "专业", name: resp.data.data.speciality },
                { id: "系部", name: resp.data.data.student },
                { id: "班级", name: resp.data.data.class },
                { id: "选课", name: "" }
              ];
              let grade = resp.data.data.id.toString().slice(0, 2);
              this.$store.state.grade = grade;

              if (resp.data.data.top == "") {
                this.$store.state.userinfo[5].name = "暂未选课";
              } else {
                let classType = resp.data.data.top.slice(6, 8);
                let classNum = parseInt(resp.data.data.top.slice(8));
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
                  case "06":
                    classType = "羽毛球";
                    break;
                }
                this.$store.state.userinfo[5].name =
                  classType + classNum + "班";
              }
              this.getTop();
              loading.close();
              this.isLoading = false;
              this.$router.push("/user");
            } else {
              this.$message({
                showClose: true,
                message: "登录失败，请检查名字和学号是否匹配",
                type: "error"
              });
              loading.close();
              this.isLoading = false;
            }
          } else {
            this.$message({
              showClose: true,
              message: "登录失败，请检查名字和学号是否正确",
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
            message: "未知错误，请联系管理员",
            type: "error"
          });
          loading.close();
          this.isLoading = false;
        });
    },
    getTop() {
      this.axios
        .get(this.$store.state.apiUrl + "/api/v1/top/all")
        .then(resp => {
          // console.log(resp.data);
          if (resp.data.status === 200) {
            var grade = "";
            var student = "";
            if (this.$store.state.userinfo[3].name == "信息工程系") {
              if (
                this.$store.state.grade == "19" ||
                this.$store.state.grade == "18"
              ) {
                grade = "1819";
              } else if (
                this.$store.state.grade == "17" ||
                this.$store.state.grade == "16"
              ) {
                grade = "1617";
              }
              student = "Xx";
            } else if (this.$store.state.userinfo[3].name == "电子工程系") {
              if (
                this.$store.state.grade == "19" ||
                this.$store.state.grade == "18"
              ) {
                grade = "1819";
              } else if (
                this.$store.state.grade == "17" ||
                this.$store.state.grade == "16"
              ) {
                grade = "1617";
              }
              student = "Dz";
            }
            var i = 0;
            var classes = new Array();
            Object.keys(resp.data.data).forEach(function(k) {
              if (k.slice(2, 6) == grade && k.slice(0, 2) == student) {
                let classType = k.slice(6, 8);
                let classNum = parseInt(k.slice(8));
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
                  case "06":
                    classType = "羽毛球";
                    break;
                }
                classes[i] = {
                  class: classType + classNum + "班",
                  key: k
                };
                i++;
              }
            });
            this.$store.state.classes = classes;
          } else {
            this.$message({
              showClose: true,
              message: "未知错误，请联系管理员",
              type: "error"
            });
          }
        });
    }
  }
};
</script>

<style lang="scss">
#login {
  text-align: center;
  // line-height: 160px;
  margin-top: 35px;
}
</style>
