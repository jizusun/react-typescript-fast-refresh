const {appendWebpackPlugin} = require('@rescripts/utilities')
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = [
  [
    'use-babel-config', {
      presets: ['react-app'],
      plugins: [
        "react-app",
        "react-refresh/babel"
        
      ]
    }
  ],
  isDevelopment
    ? [appendWebpackPlugin(new ReactRefreshPlugin())]
    : config => config
]