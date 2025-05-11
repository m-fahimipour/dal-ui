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
    typography: {
      import: "./src/components/typography/index.ts",
      filename: "./components/typography/[name].bundler.js",
    },
    block: {
      import: "./src/components/block/index.ts",
      filename: "./components/block/[name].bundler.js",
    },
    checkbox: {
      import: "./src/components/checkbox/index.ts",
      filename: "./components/checkbox/[name].bundler.js",
    },
    formLabel: {
      import: "./src/components/form-label/index.ts",
      filename: "./components/form-label/[name].bundler.js",
    },
    accordion: {
      import: "./src/components/accordion/index.ts",
      filename: "./components/accordion/[name].bundler.js",
    },
    collapse: {
      import: "./src/components/collapse/index.ts",
      filename: "./components/collapse/[name].bundler.js",
    },
    treeSelect: {
      import: "./src/components/tree-select/index.ts",
      filename: "./components/tree-select/[name].bundler.js",
    },
    functions: {
      import: "./src/functions/index.ts",
      filename: "./functions/index.js",
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
          from: path.resolve(__dirname, "src/styles"),
          to: path.resolve(__dirname, "dist/styles"),
        },
        {
          from: path.resolve(__dirname, "src/types/components"),
          to: path.resolve(__dirname, "dist/types/"),
        },
      ],
    }),
  ],

  externals: {
    react: "react",
    "react-dom": "react-dom",
    tailwindcss: "tailwindcss",
    "tailwind-merge": "tailwind-merge",
    "@dui/theme": "@dui/theme",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "dal-ui/theme": path.resolve(__dirname, "src/theme/index.ts"),
    },
  },
};
