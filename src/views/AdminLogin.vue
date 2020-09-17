<template>
  <div id="login" class="el-row is-justify-center is-align-middle el-row--flex">
    <div class="el-col el-col-24 el-col-xs-22 el-col-sm-8 el-col-md-6">
      <div class="el-card box-card is-always-shadow">
        <div class="el-card__header" @click="ToLogin">
          <el-avatar :size="100">
            <img src="../assets/logoo.png" />
          </el-avatar>
          <!-- <img src="../assets/logoo.png" /> -->
          <!-- <el-avatar src="../assets/logoo.png" :fit="fill"></el-avatar> -->
          <br />
          <!-- <br> -->
          <span style="font-size: 24px">扬州高职校选课系统 | </span
          ><span style="font-size: 20px">管理员登录</span>
        </div>
        <div class="el-card__body">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
            <el-form-item prop="username">
              <el-input
                type="text"
                placeholder="账号"
                v-model="ruleForm.username"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                type="password"
                placeholder="密码"
                v-model="ruleForm.password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
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
import axios from "axios";

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
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
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
      loginState: "正在进入管理系统",
      ruleForm: {
        password: "",
        username: ""
      },
      rules: {
        password: [{ validator: validatePassword, trigger: "blur" }],
        username: [{ validator: validateUsername, trigger: "blur" }]
      }
    };
  },
  methods: {
    ToLogin() {
      this.router.push("/login");
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
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // },
    // showForm(formName) {
    //   this.$refs[formName].validate(valid => {
    //     if (valid) {
    //       this.$notify({
    //         title: "显示",
    //         type: "success",
    //         dangerouslyUseHTMLString: true,
    //         message:
    //           "姓名:" +
    //           this.ruleForm.username +
    //           "<br>学号:" +
    //           this.ruleForm.num,
    //         duration: 5000
    //       });
    //       console.log(this.ruleForm);
    //     } else {
    //       this.$notify({
    //         title: "显示",
    //         type: "error",
    //         message: "请正确输入用户名和密码",
    //         duration: 5000
    //       });
    //       return false;
    //     }
    //   });
    // },
    login() {
      let loginForm = new FormData();
      loginForm.append("username", this.ruleForm.username);
      loginForm.append("password", this.ruleForm.password);
      const loading = this.$loading({
        lock: true,
        text: "登录中"
      });
      setTimeout(() => {
        loading.close();
        this.$message({
          showClose: true,
          message: "登录超时，请检查您的网络链接",
          type: "error"
        });
      }, 10000);
      axios
        .post("url", loginForm) //need to change url
        .then(resp => {
          if (resp.status === 200) {
            console.log(resp);
            // window.location = "invite";
          } else {
            this.loginState = "登录失败";
          }
        })
        .catch(error => {
          console.err(error);
          this.loginState = "登录失败";
        });
      if (this.loginState != "登录成功") {
        loading.close();
        this.$message({
          showClose: true,
          message: this.loginState,
          type: "error"
        });
      }
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
