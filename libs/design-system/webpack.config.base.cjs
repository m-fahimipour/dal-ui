const path = require("path");
module.exports = {
  experiments: {
    outputModule: true,
  },
  entry: {
    index: "./src/index.ts",
  },
  output: {
    filename: "[name].bundler.js",
    path: path.resolve(__dirname, "./dist"),
    library: {
      type: "module",
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              configFile: "ts-loader.tsconfig.json", // because ts-loader is not supported allowImportingTsExtensions
            },
          },
        ],
      },
    ],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
