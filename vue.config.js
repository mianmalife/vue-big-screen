const { defineConfig } = require("@vue/cli-service");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = defineConfig({
  devServer: {
    proxy: {
      "": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
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
    console.log(config.module);
    config.output
      .filename("[name]/[name].[contenthash:8].js")
      .chunkFilename("[name]/[name].[contenthash:8].js");
    config.module.rule("fonts").set("generator", {
      filename: "static/fonts/[name].[hash:8][ext]",
    });
    // config.module.rule("svg").set("generator", {
    //   filename: "static/img/[name].[hash:8][ext]",
    // });
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.delete("type");
    svgRule.delete("generator");
    svgRule
      .test(/\.svg$/)
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
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
