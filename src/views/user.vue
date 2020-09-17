<template>
  <el-row class="userpage is-justify-center is-align-middle el-row--flex">
    <el-col style="height: calc(100% - 121px);max-width:800px">
      <div
        style="
    text-align: left;"
      >
        <div style="line-height:0px">
          <p style="font-size: 40px;display:inline-block">{{ noontip }}，</p>
          <p style="font-size: 38px;display:inline-block">
            {{ userinfo[0].name }}。
          </p>
        </div>
        <el-card class="user-card" style="width:100%; height: 100%">
          <div v-for="(user, i) in userinfo" :key="i" class="text item">
            {{ user.id + "：" + user.name }}
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
      userinfo: [
        { id: "姓名", name: "王鹏" },
        { id: "学号", name: "12345678" },
        { id: "性别", name: "男" },
        { id: "系部", name: "信息工程系" },
        { id: "班级", name: "G19301" },
        { id: "选课", name: "羽毛球" }
      ]
    };
  },
  created() {
    this.mynoontip();
  },
  methods: {
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
