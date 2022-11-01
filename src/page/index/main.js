import Vue from "vue";
import Vuex from "vuex";
import { Button, Select, Option, Message, Slider, Tag } from "element-ui";
import "@/assets/theme/element-variables.scss";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(Slider);
Vue.use(Tag);
Vue.prototype.$message = Message;
Vue.use(Vuex);
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
const store = new Vuex.Store({
  state: {
    count: 0,
    task: taskList,
  },
  mutations: {
    increment: (state, paylaod) => {
      console.log(paylaod);
      if (paylaod && typeof paylaod !== "number") {
        return (state.count += paylaod.amount);
      } else {
        return state.count++;
      }
    },
    decrement: (state) => state.count--,
  },
  getters: {
    taskIng: (state) => state.task.filter((todo) => !todo.done),
    taskSuccess: (state) => state.task.filter((todo) => todo.done),
    getTodoById: (state) => (id) => {
      return state.task.filter((todo) => todo.id === id);
    },
  },
});
new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
