const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  experiments: {
    outputModule: true,
  },
  entry: {
    button: {
      import: "./src/components/button/index.ts",
      filename: "./components/button/[name].bundler.js",
    },
    theme: {
      import: "./src/theme/theme.ts",
      filename: "./theme/theme.js",
    },
    utils: {
      import: "./src/utils/index.ts",
      filename: "./utils/utils.js",
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
          from: path.resolve(__dirname, "src/types/theme"),
          to: path.resolve(__dirname, "dist/theme"), // default value is output.path
        },
        {
          from: path.resolve(__dirname, "src/theme/theme.css"),
          to: path.resolve(__dirname, "dist/theme"),
        },
        {
          from: path.resolve(__dirname, "src/types/utils"),
          to: path.resolve(__dirname, "dist/utils"),
        },
        {
          from: path.resolve(__dirname, "src/types/components"),
          to: path.resolve(__dirname, "dist/types"),
        },
      ],
    }),
  ],

  externals: {
    react: "react",
    "react-dom": "react-dom",
    tailwindcss: "tailwindcss",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
