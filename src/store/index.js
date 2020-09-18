import Vue from "vue";
import Vuex from "vuex";
import Meta from "vue-meta";

Vue.use(Vuex);
Vue.use(Meta);

const state = {
  userinfo: [
    { id: "姓名", name: "" },
    { id: "学号", name: "" },
    { id: "性别", name: "" },
    { id: "系部", name: "" },
    { id: "班级", name: "" },
    { id: "选课", name: "" },
  ],
};

export default new Vuex.Store({
  state,
  mutations: {},
  actions: {},
  modules: {},
});
