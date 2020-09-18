<template>
  <el-row class="userpage is-justify-center is-align-middle el-row--flex">
    <el-col style="height: calc(100% - 121px); max-width: 800px">
      <div style="text-align: left">
        <div style="line-height: 0px; float: left">
          <p style="font-size: 40px; display: inline-block">{{ noontip }}，</p>
          <p style="font-size: 38px; display: inline-block">
            {{ this.$store.state.userinfo[0].name }}。
          </p>
        </div>
        <div style="top: 30px; right: 10px; position: relative">
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
            <el-button round @click="toSel">点击选课</el-button>
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
      noontip: "", // 上下午提示
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
        type: "error",
      });
    }
  },
  methods: {
    exit() {
      this.$store.state.userinfo = [
        { id: "姓名", name: "" },
        { id: "学号", name: "" },
        { id: "性别", name: "" },
        { id: "系部", name: "" },
        { id: "班级", name: "" },
        { id: "选课", name: "" },
      ];
      this.$router.push("/");
    },
    toSel() {
      this.$router.push("/user/sel");
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
    },
  },
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
