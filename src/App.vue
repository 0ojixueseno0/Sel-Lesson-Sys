<template>
  <el-container id="app">
    <el-header>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/login">login</router-link> |
        <router-link to="/admin/login">AdminLogin</router-link> |
        <router-link to="/user">userpage</router-link> |
        <router-link to="/admin">adminpage</router-link> |
        <router-link to="/admin/console">adminConsole</router-link>
      </div>
    </el-header>
    <el-main>
      <el-scrollbar wrap-class="list" view-class="view-box" :native="false">
        <transition name="fade" mode="out-in">
          <router-view v-if="isRouterAlive" class="page" />
        </transition>
      </el-scrollbar>
    </el-main>
    <el-footer
      >🚀Powered by G19305 <b>季学森、陈芃州、吴优</b><br />
      📌指导教师：<b>徐健、王春荣</b> 📱其他：<b>梁天</b><br />
      友链：<a href="https://yzgz.ac.cn">扬州高职校论坛</a></el-footer
    >
  </el-container>
</template>

<script>
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Noto Sans SC", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 425px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.page{
  max-height: calc(100vh - 200px);
}

.el-main {
  height: calc(100vh - 140px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.1s;
}
.fade-enter,
.fade-leave-active {
  // transform: translateX(10px);
  opacity: 25%;
}
@media (max-width: 550px) {
  .hiddenM {
    display: none !important;
  }
  .hiddenS {
    display: block;
  }
}
@media (min-width: 550px) {
  .hiddenM {
    display: block;
  }
  .hiddenS {
    display: none !important;
  }
}
</style>
