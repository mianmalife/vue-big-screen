import Vue from "vue";
import { Button, Select, Option, Message, Slider } from "element-ui";
import "@/assets/theme/element-variables.scss";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(Slider);

Vue.prototype.$message = Message;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
