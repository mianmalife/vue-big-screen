import Vue from "vue";
import SvgIcon from "@/component/svgIcon.vue"; // svg组件

// register globally
Vue.component("svg-icon", SvgIcon);

const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);

const req = require.context("./", false, /\.svg$/);
requireAll(req);
