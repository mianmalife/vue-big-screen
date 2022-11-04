import Vue from "vue";
import Vuex from "vuex";
import { Button, Select, Option, Message, Slider, Tag } from "element-ui";
import "@/assets/theme/element-variables.scss";
import App from "./App.vue";
import { INCREMENT, DECREMENT, INCREMENT_TEN } from "./mutation-types";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(Slider);
Vue.use(Tag);
Vue.prototype.$message = Message;
Vue.use(Vuex);
function getInit() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}
const taskList = [
  {
    text: "吃饭",
    id: 1,
    done: true,
  },
  {
    text: "睡觉",
    id: 2,
    done: false,
  },
  {
    text: "打豆豆",
    id: 3,
    done: false,
  },
];
const moduleA = {
  state: {
    mA: 1,
  },
  mutations: {},
  actions: {},
  getters: {},
};
const moduleB = {
  state: {
    count: 0,
    task: taskList,
  },
  mutations: {
    [INCREMENT]: (state, paylaod) => {
      console.log(paylaod);
      // if (paylaod && typeof paylaod !== "number") {
      //   return (state.count += paylaod.amount);
      // } else {
      //   return state.count++;
      // }
      return state.count++;
    },
    [DECREMENT]: (state) => state.count--,
    [INCREMENT_TEN]: (state, payload) => {
      console.log(state, payload);
      return (state.count += payload.amount);
    },
  },
  getters: {
    taskIng: (state) => state.task.filter((todo) => !todo.done),
    taskSuccess: (state) => state.task.filter((todo) => todo.done),
    getTodoById: (state) => (id) => {
      return state.task.filter((todo) => todo.id === id);
    },
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit("increment");
      }, 2000);
    },
    incrementTen({ commit }, paylaod) {
      setTimeout(() => {
        commit(INCREMENT_TEN, paylaod);
      }, 2000);
    },
    async actionA({ commit }) {
      commit(INCREMENT, await getInit());
    },
    async actionB({ dispatch, commit }) {
      await dispatch("actionA");
      commit(DECREMENT, await getInit());
    },
  },
};
const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB,
  },
});
new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
