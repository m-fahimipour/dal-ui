module.exports = {
  extends: "./webpack.config.base.cjs",
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    port: 8080,
    hot: false,
  },
  mode: "development",
};
