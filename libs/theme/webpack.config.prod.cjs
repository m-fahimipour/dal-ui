const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  extends: "./webpack.config.base.cjs",
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        format: {
          comments: false,
        },
      },
      extractComments: false,
    })],
  },
};
