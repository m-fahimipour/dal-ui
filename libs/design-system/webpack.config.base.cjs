const path = require("path");

module.exports = {
  experiments: {
    outputModule: true,
  },
  entry: {
    components: {
      import: "./src/components/index.ts",
      filename: "./components/[name].bundler.js",
    },
    theme: {
      import: "./src/theme-provider/ThemeProvider.tsx",
      filename: "./theme/theme-provider.js",
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
  externals: {
    react: "react",
    "react-dom": "react-dom",
    tailwindcss: "tailwindcss",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
