const { defineConfig } = require("@vue/cli-service");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
  },
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.output
      .filename("[name]/[name].[contenthash:8].js")
      .chunkFilename("[name]/[name].[contenthash:8].js");
    config
      .plugin("extract-css")
      .use(MiniCssExtractPlugin)
      .tap((args) => {
        args[0] = [
          {
            filename: "[name]/[name].[contenthash:8].css",
            chunkFilename: "[name]/[name].[contenthash:8].css",
          },
        ];
        return args[0];
      });
  },
});
