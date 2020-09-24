import Vue from "vue";
import Vuex from "vuex";
import Meta from "vue-meta";

Vue.use(Vuex);
Vue.use(Meta);

const state = {
  grade: "",
  userinfo: [
    { id: "姓名", name: "" },
    { id: "学号", name: "" },
    { id: "专业", name: "" },
    { id: "系部", name: "" },
    { id: "班级", name: "" },
    { id: "选课", name: "" },
  ],
  classes: {
    Xx: {
      Y1617: [
        { class: "篮球一班", key: "Xx16170101" },
        { class: "篮球二班", key: "Xx16170102" },
        { class: "排球一班", key: "Xx16170201" },
        { class: "足球一班", key: "Xx16170301" },
        { class: "武术一班", key: "Xx16170401" },
        { class: "跳绳一班", key: "Xx16170501" },
      ],
      Y1819: [
        { class: "篮球一班", key: "Xx18190101" },
        { class: "篮球二班", key: "Xx18190102" },
        { class: "篮球三班", key: "Xx18190103" },
        { class: "篮球四班", key: "Xx18190104" },
        { class: "排球一班", key: "Xx18190201" },
        { class: "排球二班", key: "Xx18190202" },
        { class: "足球一班", key: "Xx18190301" },
        { class: "足球二班", key: "Xx18190302" },
        { class: "武术一班", key: "Xx18190401" },
        { class: "武术二班", key: "Xx18190402" },
        { class: "跳绳一班", key: "Xx18190501" },
        { class: "跳绳二班", key: "Xx18190502" },
      ],
    },
    Dz: {
      Y1617: [
        { class: "篮球一班", key: "Dz16170101" },
        { class: "篮球二班", key: "Dz16170102" },
        { class: "篮球三班", key: "Dz16170103" },
        { class: "排球一班", key: "Dz16170201" },
        { class: "排球二班", key: "Dz16170202" },
        { class: "足球一班", key: "Dz16170301" },
        { class: "武术一班", key: "Dz16170401" },
        { class: "跳绳一班", key: "Dz16170501" },
      ],
      Y1819: [
        { class: "篮球一班", key: "Dz18190101" },
        { class: "篮球二班", key: "Dz18190102" },
        { class: "篮球三班", key: "Dz18190103" },
        { class: "排球一班", key: "Dz18190201" },
        { class: "排球二班", key: "Dz18190202" },
        { class: "足球一班", key: "Dz18190301" },
        { class: "足球二班", key: "Dz18190302" },
        { class: "武术一班", key: "Dz18190401" },
        { class: "武术二班", key: "Dz18190402" },
        { class: "跳绳一班", key: "Dz18190501" },
        { class: "跳绳二班", key: "Dz18190502" },
      ],
    },
  },
};

export default new Vuex.Store({
  state,
  mutations: {},
  actions: {},
  modules: {},
});
