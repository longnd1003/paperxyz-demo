const path = require("path");
const webpack = require("webpack");

module.exports = {
  eslint: {
    pluginOptions: {
      emitWarning: true,
    },
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@common": path.resolve(__dirname, "src/common"),
      "@utils": path.resolve(__dirname, "src/common"),
      "@features": path.resolve(__dirname, "src/features"),
      "@routes": path.resolve(__dirname, "src/routes"),
    },
    configure: {
      resolve: {
        fallback: {
          stream: require.resolve("stream-browserify"),
          http: require.resolve("stream-http"),
          https: require.resolve("https-browserify"),
          os: require.resolve("os-browserify/browser"),
          process: require.resolve("process/browser"),
          zlib: require.resolve("browserify-zlib"),
          util: require.resolve("util"),
          buffer: require.resolve("buffer"),
        },
      },
      plugins: [
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
          process: "process/browser",
        }),
      ],
      module: {
        rules: [
          {
            test: /\.m?js$/,
            resolve: {
              fullySpecified: false,
            },
          },
        ],
      },
    },
  },
};
