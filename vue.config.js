const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: "[name]",
  pages: {
    index: {
      entry: "src/page/index/main.js",
      template: "src/page/index/index.html",
      filename: "index.html",
      title: "Index page",
    },
    moon: {
      entry: "src/page/moon/main.js",
      template: "src/page/moon/index.html",
      filename: "moon/index.html",
      title: "Moon page",
    },
    detail: {
      entry: "src/page/detail/main.js",
      template: "src/page/detail/index.html",
      filename: "detail/index.html",
      title: "Detail page",
    },
  },
  productionSourceMap: false,
});
