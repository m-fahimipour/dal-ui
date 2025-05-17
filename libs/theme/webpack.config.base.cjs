const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  experiments: {
    outputModule: true,
  },
  entry: {
    colorModeProvider: {
      import: "./src/theme/color-mode-provider/index.ts",
      filename: "./theme/color-mode-provider/index.js",
    },
    themeProvider: {
      import: "./src/theme/theme-provider/index.ts",
      filename: "./theme/theme-provider/index.js",
    },
  },
  output: {
    filename: "[name].bundler.js",
    path: path.resolve(__dirname, "dist"),
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
        exclude: /node_modules/i,
        include: path.resolve(__dirname, "src"),
      },
      // for tailwindcss when use local not externals
      // {
      //   test: /\.css$/i,
      //   use: ["style-loader", "css-loader", "postcss-loader"],
      //   include: path.resolve(__dirname, "src"),
      // },
    ],
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/types"),
          to: path.resolve(__dirname, "dist/types"), // default value is output.path
        },
      ],
    }),
  ],

  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
