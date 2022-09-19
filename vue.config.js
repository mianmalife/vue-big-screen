const { defineConfig } = require("@vue/cli-service");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: "src/page/index/main.js",
      template: "src/page/index/index.html",
      filename: "index.html",
      title: "深圳龙岗万科-经营数据一览",
    },
  },
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.output
      .filename("[name]/[name].[contenthash:8].js")
      .chunkFilename("[name]/[name].[contenthash:8].js");
    config.module.rule("fonts").set("generator", {
      filename: "static/fonts/[name].[hash:8][ext]",
    });
    config.module.rule("svg").set("generator", {
      filename: "static/img/[name].[hash:8][ext]",
    });
    config.module.rule("images").set("generator", {
      filename: "static/img/[name].[hash:8][ext]",
    });
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
