<template>
  <el-row class="userpage is-justify-center is-align-middle el-row--flex">
    <el-col style="height: calc(100% - 121px);max-width:800px">
      <div>
        <div style="">
          <div style="line-height:0px; float:left">
            <p style="font-size: 40px;display:inline-block">{{ noontip }}，</p>
            <p style="font-size: 38px;display:inline-block">
              {{ userinfo[0].name }}。
            </p>
          </div>
          <div style="top: 30px;right:10px ; position:relative">
            <el-dropdown
              trigger="click"
              style="float:right;display:inline-block;"
              @command="handleCommand"
            >
              <span class="el-dropdown-link">
                管理员选项<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="/admin/console" icon="el-icon-plus"
                  >管理面板</el-dropdown-item
                >
                <el-dropdown-item command="a" icon="el-icon-circle-plus-outline"
                  >管理螺蛳粉</el-dropdown-item
                >
                <el-dropdown-item command="a" icon="el-icon-check"
                  >管理双皮奶</el-dropdown-item
                >
                <el-dropdown-item command="a" icon="el-icon-circle-check"
                  >管理蚵仔煎</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <el-card
          class="admin-card"
          style="width:100%; height: 100%; min-height: 100px; text-align: left;"
        >
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
        { id: "工号", name: "12345678" }
      ]
    };
  },
  created() {
    this.mynoontip();
  },
  methods: {
    handleCommand(command) {
      this.$router.push(command);
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

.admin-card {
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
